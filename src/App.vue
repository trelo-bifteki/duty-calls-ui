<script>

export default {
  name: 'App',
  data() {
    return {
      counter: 1,
      owner: {
        fullname: '',
        emailAddress: '',
      },
      participants: [],
    };
  },
  methods: {
    addParticipant() {
      this.participants.push({
        id: this.counter,
        fullname: 'test',
        emailAddress: 'test@test.com',
      });
      this.counter++;
    },
    removeParticipant(index) {
      this.participants.splice(index, 1);
    },
    createPlan(event) {
      event.preventDefault(); // prevent POST request from form
      this.counter = 0;
      return true;
    },
  }
};

</script>
<template>
  <div class="container duty-calls">
    <h1>Dienstplanner</h1>
    <form
      id="create-plan"
      @submit="createPlan"
    >
      <h2>Create your plan</h2>
      <fieldset>
        <legend>Administrator</legend>
      <div class="form-group">
        <label for="ownerFullname">Fullname</label>
        <input
          class="form-control"
          v-model="owner.fullname"
          id="ownerEmailAddress"
          type="text"
          aria-describedby="ownerFullname"
          placeholder="Fullname"
        />
      </div>
      <div class="form-group">
        <label for="ownerEmailAddress">Email address</label>
        <input
          class="form-control"
          v-model="owner.emailAddress"
          id="ownerEmailAddress"
          type="email"
          aria-describedby="ownerEmailAddress"
          placeholder="Email address"
        />
      </div>
      </fieldset>
      <fieldset
        v-for="(participant, index) in participants"
        :key="participant.id"
      >
        <legend>Participant #{{ participant.id }}</legend>
        <button
          class="btn btn-link"
          type="button"
          @click="removeParticipant(index)"
        >
          Remove
        </button>
        <div class="form-group">
          <label>Fullname</label>
          <input
            class="form-control"
            v-model="participant.fullname"
            type="text"
            aria-describedby="participantFullname"
            placeholder="Fullname"
          />
        </div>
        <div class="form-group">
          <label>Email address</label>
          <input
            class="form-control"
            v-model="participant.emailAddress"
            type="email"
            aria-describedby="participantEmailAddress"
           />
        </div>
      </fieldset>
      <button
        type="submit"
        class="btn btn-primary"
      >
        Create
      </button>
      <button
        class="btn btn-link"
        type="button"
        @click="addParticipant()"
      >
        Add participant
      </button>
    </form>
  </div>
</template>
<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
</style>
