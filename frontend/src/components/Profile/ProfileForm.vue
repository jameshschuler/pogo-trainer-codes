<template>
  <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl">Edit Trainer Profile</h1>
      <button
        id="save-profile--btn"
        class="py-2 px-4 border-2 border-black rounded-lg clickable hidden"
        :disabled="isSubmitting"
      >
        <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
        Save
      </button>
    </div>
    <section class="my-6">
      <h2 class="text-xl font-semibold">Trainer Info</h2>
      <div class="form-group flex">
        <div class="flex flex-col m-4">
          <label for="trainer-name" class="mb-2 font-semibold">Trainer Name</label>
          <Field
            name="trainerName"
            type="text"
            class="p-4 rounded-lg border-2 border-black form-control"
            :class="{ 'is-invalid': errors.trainerName }"
            :value="profileStore.profile?.trainerName"
            :readonly="true"
          />
          <div class="invalid-feedback">{{ errors.trainerName }}</div>
        </div>
        <div class="flex flex-col m-4">
          <label for="trainer-code" class="mb-2 font-semibold">Trainer Code</label>
          <input
            class="p-4 rounded-lg border-2 border-black"
            type="text"
            id="trainer-code"
            :readonly="true"
            :value="profileStore.profile?.trainerCode"
          />
        </div>
      </div>
      <div class="form-group flex">
        <div class="flex flex-col m-4">
          <label for="trainer-name" class="mb-2 font-semibold">Trainer Alts</label>
          <Field
            name="trainerName"
            type="text"
            class="p-4 rounded-lg border-2 border-black form-control"
            :readonly="true"
            placeholder="Trainer Name"
          />
        </div>
        <div class="flex flex-col m-4">
          <Field
            name="trainerName"
            type="text"
            class="p-4 rounded-lg border-2 border-black form-control mt-8"
            :readonly="true"
            placeholder="Trainer Code"
          />
        </div>
      </div>
    </section>

    <hr />
    <section class="my-6">
      <h2 class="text-xl font-semibold">Discord Profile</h2>
      <div class="form-group flex">
        <div class="flex flex-col m-4">
          <label for="username" class="mb-2 font-semibold">Username</label>
          <input
            class="p-4 rounded-lg border-2 border-black"
            type="text"
            id="username"
            :readonly="true"
            :value="profileStore.profile?.username"
          />
        </div>
        <div class="flex flex-col m-4">
          <!-- <label for="username" class="mb-2 font-semibold">Display Name</label>
          <input
            class="p-4 rounded-lg border-2 border-black"
            type="text"
            id="username"
            :readonly="true"
            :value="profileStore.profile?.username"
          /> -->
        </div>
      </div>
    </section>
  </Form>
</template>
<script setup lang="ts">
import { useProfileStore } from "@/stores/profileStore";
import { Field, Form } from "vee-validate";
import * as Yup from "yup";

const profileStore = useProfileStore();

defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
});

const schema = Yup.object().shape({
  name: Yup.string().required("Trainer Name is required"),
});

async function onSubmit(values: any) {
  console.log(values);
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

.invalid-feedback {
  color: #ef4444;
}

.is-invalid {
  border-color: #ef4444;
}
</style>
