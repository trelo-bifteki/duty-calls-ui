<script>
import capitalize from './capitalize.filter';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';

export default {
  component: 'CalendarHeader',
  props: {
    year: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    previousMonthAsString: {
      type: String,
      required: true,
    },
    nextMonthAsString: {
      type: String,
      required: true,
    },
  },
  components: {
    ArrowLeft,
    ArrowRight,
  },
  filters: {
    capitalize,
  }
};

</script>
<template>
  <div class="calendar-header">
    <div class="row">
      <div class="col calendar-header__year text-right">
        <span>{{year}}</span>
      </div>
    </div>
    <div class="row text-center">
      <div class="col text-left">
        <div
          id="subtractMonthBtn"
          class="button calendar-header__arrow  calendar-header__arrow--left"
          @click="$emit('previousMonthClicked')"
        >
          <ArrowLeft />
        </div>
        <div
          class="tooltip"
          target="subtractMonthBtn"
        >
          {{previousMonthAsString | capitalize}}
        </div>
      </div>
      <div class="col text-center">
        <span class="calendar-header__month">
          {{ month }}
        </span>
      </div>
      <div class="col text-right d-flex flex-row-reverse">
        <div
          id="addMonthBtn"
          class="button calendar-header__arrow  calendar-header__arrow--right"
          @click="$emit('nextMonthClicked')"
        >
          <ArrowRight />
        </div>
        <div
          class="tooltip"
          target="addMonthBtn"
        >
          {{nextMonthAsString | capitalize}}
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">

.calendar-header {
  margin-bottom: 2rem;

  &__month {
    font-size: 1.25em;
    font-weight: 200;
    text-transform: capitalize;
  }

  &__year {
    font-size: 1.5em;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  &__arrow {
    align-items: center;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    color: #000;
    display: flex;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    &:hover {
      cursor: pointer;
    }

    &--left {
      i {
        transform: translateX(-10%);
      }
    }

    &--right {
      i {
        transform: translateX(10%);
      }
    }
  }
}
</style>
