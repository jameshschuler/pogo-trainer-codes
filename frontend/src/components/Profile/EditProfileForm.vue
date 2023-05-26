<template>
  <Form
    @submit="onSubmit"
    :validation-schema="schema"
    :initial-values="profile"
    v-slot="{ errors, isSubmitting }"
    autocomplete="off"
  >
    <div class="flex justify-between items-center">
      <h1 class="text-3xl">Edit Trainer Profile</h1>
      <button
        id="save-profile--btn"
        class="py-2 px-4 border-2 border-black rounded-lg clickable hover:bg-green-400 text-lg font-normal"
        :disabled="isSubmitting || Object.keys(errors).length !== 0"
      >
        <span v-if="isSubmitting">
          <i v-if="isSubmitting" class="fa-solid fa-circle-notch fa-lg fa-fw fa-spin mr-2"></i>
        </span>
        Save Changes
      </button>
    </div>
    <section class="my-6">
      <h2 class="text-xl font-semibold">Trainer Info</h2>
      <div class="form-group flex">
        <div class="flex flex-col m-4">
          <label for="trainer-name" class="mb-2 font-semibold">Trainer Name</label>
          <Field
            id="trainer-name"
            name="trainerName"
            type="text"
            class="p-4 rounded-lg border-2 border-black form-control dark:text-dark-200"
            :class="{ 'is-invalid': errors.trainerName }"
            :disabled="true"
          />
          <div class="invalid-feedback">{{ errors.trainerName }}</div>
        </div>
        <div class="flex flex-col m-4">
          <label for="trainer-code" class="mb-2 font-semibold">Trainer Code</label>
          <Field
            id="trainer-code"
            name="trainerCode"
            type="text"
            class="p-4 rounded-lg border-2 border-black form-control dark:text-dark-200"
            :class="{ 'is-invalid': errors.trainerCode }"
            :disabled="true"
          />
        </div>
      </div>
      <h2 class="text-xl font-semibold mt-6">Trainer Alts</h2>
      <div
        class="form-group flex"
        v-if="profile?.trainerAlts"
        v-for="(_, index) in profile.trainerAlts"
      >
        <div class="flex flex-col m-4">
          <Field
            :name="`trainerAlts[${index}].name`"
            type="text"
            class="p-4 rounded-lg border-2 border-black form-control dark:text-dark-200"
            placeholder="Trainer Name"
          />
          <ErrorMessage class="invalid-feedback mt-2" :name="`trainerAlts[${index}].name`" />
        </div>
        <div class="flex flex-col m-4">
          <Field
            :name="`trainerAlts[${index}].code`"
            type="text"
            class="p-4 rounded-lg border-2 border-black form-control dark:text-dark-200"
            placeholder="Trainer Code"
          />
          <ErrorMessage class="invalid-feedback mt-2" :name="`trainerAlts[${index}].code`" />
        </div>
        <button
          type="button"
          class="remove-alt--btn m-4 rounded-lg border-2 border-black p-4 bg-red-400 hover:bg-red-500"
          @click="removeAlt(index)"
        >
          <i class="fa-solid fa-minus fa-lg fa-fw"></i>
        </button>
      </div>
      <div class="flex justify-end">
        <button
          type="button"
          class="m-4 rounded-lg border-2 border-black p-4 flex items-center hover:bg-gray-100"
          @click="addAlt"
          :disabled="isSubmitting"
        >
          <i class="fa-solid fa-plus fa-lg fa-fw mr-2"></i>
          <span class="text-lg font-normal">Add Trainer Alt</span>
        </button>
      </div>
    </section>

    <hr />
    <section class="my-6">
      <h2 class="text-xl font-semibold">Discord Profile</h2>
      <div class="form-group flex w-1/2">
        <div class="flex flex-col m-4">
          <label for="username" class="mb-2 font-semibold">Username</label>
          <Field
            name="username"
            class="p-4 rounded-lg border-2 border-black dark:text-dark-200"
            type="text"
            id="username"
            :disabled="true"
          />
        </div>
      </div>
    </section>
  </Form>
</template>
<script setup lang="ts">
import { useProfileStore } from "@/stores/profileStore";
import { storeToRefs } from "pinia";
import { configure, ErrorMessage, Field, Form } from "vee-validate";
import * as Yup from "yup";

const profileStore = useProfileStore();
let profile: any = null;
({ profile } = storeToRefs(profileStore));

configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: true,
  validateOnModelUpdate: true,
});

const schema = Yup.object().shape({
  trainerAlts: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Trainer Name is required"),
      code: Yup.string()
        .matches(/^\d+$/, "Trainer Code must only contain numbers")
        .length(12, "Trainer Code must be 12 digits")
        .required("Trainer Code is required"),
    })
  ),
});

function addAlt() {
  profile.value.trainerAlts.push({
    name: "",
    code: "",
  });
}

function removeAlt(index: number) {
  profile.value.trainerAlts.splice(index, 1);
}

async function onSubmit(values: any) {
  await profileStore.updateProfile(values.trainerAlts);
}
</script>
<style lang="scss" scoped>
section {
  .form-group {
    div {
      flex: 1 1 0;
    }
  }
}

.remove-alt--btn {
  height: 60px;
}

.invalid-feedback {
  color: #ef4444;
}

.is-invalid {
  border-color: #ef4444;
}
</style>
