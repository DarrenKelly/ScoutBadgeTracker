<template>
  <div class="events">
    <EventsHeader
      @filter-old-events="filterOldEvents"
      :showForm="false"
      :allowAdd="false"
      :hideOldEvents="hideOldEvents"
    />
    <EventList
      @select-event="selectEvent"
      @deselect-event="deselectEvent"
      :events="eventsdata"
      :allowEdit="false"
      :selectedId="selectedEventId"
      :hideOldEvents="hideOldEvents"
    />
    <MemberList
      v-if="selectedEventId != ''"
      :members="membersdata"
      :enableEdit="false"
      :hideOldMembers="true"
    />
  </div>
</template>

<script>
import MemberList from "@/components/MemberList";
import EventList from "@/components/EventList";
import EventsHeader from "@/components/EventsHeader";
import { members, events } from "@/firebase";

export default {
  name: "RollView",
  components: {
    EventsHeader,
    MemberList,
    EventList,
  },
  data() {
    return {
      selectedEventId: "",
      eventsdata: events,
      membersdata: members,
      hideOldEvents: true,
    };
  },
  methods: {
    selectEvent(eventId) {
      console.log("RollView selectEvent() " + eventId);
      this.selectedEventId = eventId;
    },
    deselectEvent() {
      console.log("RollView deselectEvent()");
      this.selectedEventId = "";
    },
    filterOldEvents() {
      console.log("RollView filterOldEvents() ");
      this.hideOldEvents = !this.hideOldEvents;
    },
  },
  props: {},
  beforeCreate() {
    console.log("RollView beforeCreate()");
  },
  created() {
    console.log("RollView created()");
  },
  beforeMount() {
    console.log("RollView beforeMount()");
  },
  mounted() {
    console.log("RollView mounted()");
  },
  beforeUnmount() {
    console.log("RollView beforeUnmount()");
  },
  unmounted() {
    console.log("RollView unmounted()");
  },
  beforeUpdate() {
    console.log("RollView beforeUpdate()");
  },
  unpdate() {
    console.log("RollView unpdate()");
  },
};
</script>
