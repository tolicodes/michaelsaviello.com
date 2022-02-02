import styled, { css } from "styled-components";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar } from "react-big-calendar";
import {
  CSSCalendarEventLabel01,
  CSSHaettenParagraphg01,
} from "../../styles/fonts";

import { Default as SButton } from "../Button/styles";

export const CSSCalendarToolbar = css`
  padding: 20px 0;
`;

export const CSSCalendarButtonGroup = css``;

export const CSSCalendarButton = css`
  ${SButton};
`;

export const CSSCalendarToolbarLabel = css`
  ${CSSHaettenParagraphg01};
`;

export const CSSMonthViewWrapper = css``;
export const CSSMonthHeaderWrapper = css``;
export const CSSMonthHeader = css``;

export const CSSMonthRowWrapper = css``;
export const CSSMonthRowBackground = css``;
export const CSSMonthDayWrapper = css``;
export const CSSMonthDayOffRangeWrapper = css`
  background-color: var(--ui-inactive-calendar-01);
`;

export const CSSRowContentWrapper = css``;
export const CSSRowWrapper = css``;
export const CSSDateCellWrapper = css``;
export const CSSDateCellOffRangeWrapper = css``;

export const CSSRowSegmentWrapper = css``;

export const CSSCalendarEvent = css`
  background: var(--ui-03);

  ${CSSCalendarEventLabel01};
`;

export const SCalendar = styled(Calendar)`
  position: relative;
  width: 100%;
  height: 100vh;

  /* TODO: Overload calendar toolbar wrapper */
  .rbc-toolbar {
    ${CSSCalendarToolbar};
  }

  /* TODO: Overload calendar toolbar labe (April 2015) */
  .rbc-toolbar-label {
    ${CSSCalendarToolbarLabel};
  }

  /* TODO: Overload calendar toolbar wrapper */
  .rbc-btn-group {
    ${CSSCalendarButtonGroup};

    /* TODO: Overload toolbar button (today/back/next ...) */
    button {
      ${CSSCalendarButton};
    }
  }

  /* TODO: Overload calendar toolbar month view wrapper */
  .rbc-month-view {
    ${CSSMonthViewWrapper};

    .rbc-month-header {
      ${CSSMonthHeaderWrapper};

      .rbc-header {
        ${CSSMonthHeader}
      }
    }
  }

  /* TODO: Overload calendar month row */
  .rbc-month-row {
    ${CSSMonthRowWrapper};

    .rbc-row-bg {
      ${CSSMonthRowBackground};

      .rbc-day-bg {
        ${CSSMonthDayWrapper};

        &.rbc-off-range-bg {
          ${CSSMonthDayOffRangeWrapper}
        }
      }
    }
  }

  .rbc-row-content {
    ${CSSRowContentWrapper};
  }

  .rbc-row {
    ${CSSRowWrapper};

    .rbc-date-cell {
      ${CSSDateCellWrapper}

      &.rbc-off-range {
        ${CSSDateCellOffRangeWrapper}
      }
    }

    .rbc-row-segment {
      ${CSSRowSegmentWrapper}
    }
  }

  /*  EVENT STYLING */
  .rbc-event {
    ${CSSCalendarEvent}
  }
`;
