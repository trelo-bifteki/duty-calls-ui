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
  <div class="b-calendar__information">
    <div class="today d-flex justify-content-center align-items-center">
      <div class="weekDay">
        {{selectedWeekDay | capitalize}}
      </div>
      <div class="day">
        {{selectedDayAndMonth.day}}
      </div>
      <div class="month">
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
