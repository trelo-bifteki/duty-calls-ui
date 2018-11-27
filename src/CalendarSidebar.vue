<script>

export default {
  component: 'CalendarSidebar',
  props: {
    selectedDate: {
      type: Object,
      required: true,
    },
    today: {
      required: true,
    }
  },
  computed: {
    selectedWeekDay: function() {
      return this.selectedDate.format("dddd");
    },
    selectedDayAndMonth: function() {
      let dayAndMonth = this.selectedDate.format("D MMMM");
      dayAndMonth = dayAndMonth.split(" ");
      dayAndMonth = {
        day: dayAndMonth[0],
        month: dayAndMonth[1]
      };

      return dayAndMonth;
    },
    todayInCurrentMonthAndYear: function() {
      return (
        this.month === this.initialMonth &&
        this.year === this.initialYear
      );
    },
    todayIsEqualSelectDate: function() {
      return (
        this.selectedDate.format("YYYYMMDD") ===
        this.today.format("YYYYMMDD")
      );
    },
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
};

</script>
<template>
  <div class="calendar-sidebar">
    <div class="calendar-sidebar__today d-flex justify-content-center align-items-center">
      <div class="calendar-sidebar__weekDay">
        {{selectedWeekDay | capitalize}}
      </div>
      <div class="calendar-sidebar__day">
        {{selectedDayAndMonth.day}}
      </div>
      <div class="calendar-sidebar__month">
        {{selectedDayAndMonth.month | capitalize}}
      </div>
      <a
        href="#"
        id="goTodayLink"
        @click="$emit('onTodayClicked')"
        v-show="!todayInCurrentMonthAndYear || !todayIsEqualSelectDate"
      >
        Today
      </a>
      <div
        class="tooltip"
        target="goTodayLink"
        v-show="!todayInCurrentMonthAndYear || !todayIsEqualSelectDate"
      >
        Back to today
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

.calendar-sidebar {
  background-color: rgba(0, 123, 255, 0.2);
  border-radius: 1.2rem 0 0 1.2rem;
  height: 100%;

  &__today {
    flex-direction: column;
    padding-top: 3em;
  }

  &__weekDay {
    font-size: 1.2em;
    font-weight: 100;
    padding-bottom: 0.5em;
  }

  &__day {
    font-size: 5.5em;
    font-weight: 600;
    line-height: 1;

    @include media-breakpoint-down(md) {
      padding-top: 0;
    }
  }

  &__month {
    font-size: 2em;
    font-weight: 200;
    line-height: 1;
  }

  @include media-breakpoint-down(md) {
    min-height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-radius: 2.5rem 2.5rem 0 0;
  }
}

</style>
