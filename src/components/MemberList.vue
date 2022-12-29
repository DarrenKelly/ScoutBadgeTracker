<template>
  <div v-for="member in patrolNameSort(members)" :key="member.id">
    <ScoutMember
      :enableEdit="enableEdit"
      :member="member"
      @update-member="updateMember"
      @delete-member="deleteMember"
      v-if="!hideOldMembers || !member.archived"
    />
  </div>
</template>

<script>
import ScoutMember from "./ScoutMember";

function patrolName(a, b) {
  if (typeof a.patrol !== "undefined" && typeof b.patrol == "undefined")
    return -1;
  if (typeof a.patrol == "undefined" && typeof b.patrol !== "undefined")
    return 1;
  if (a.patrol < b.patrol) return -1;
  if (a.patrol > b.patrol) return 1;
  if (a.givenname < b.givenname) return -1;
  if (a.givenname > b.givenname) return 1;
  if (a.familyname < b.familyname) return -1;
  if (a.familyname > b.familyname) return 1;
  return 0;
}

export default {
  name: "MemberList",
  props: {
    members: Array,
    hideOldMembers: Boolean,
    enableEdit: Boolean,
  },
  components: {
    ScoutMember,
  },
  emits: ["update-member", "delete-member"],
  methods: {
    updateMember(modifiedMember) {
      console.log("MemberList updateMember with Id " + modifiedMember.id);
      this.$emit("update-member", modifiedMember);
    },
    deleteMember(memberId) {
      console.log("MemberList deleteMember with Id " + memberId);
      this.$emit("delete-member", memberId);
    },
    patrolNameSort(memberList) {
      return [...memberList].sort(patrolName);
    },
  },
  data() {
    return {};
  },
  beforeCreate() {
    console.log("MemberList beforeCreate()");
  },
  created() {
    console.log("MemberList created()");
  },
  beforeMount() {
    console.log("MemberList beforeMount()");
  },
  mounted() {
    console.log("MemberList mounted()");
  },
  beforeUnmount() {
    console.log("MemberList beforeUnmount()");
  },
  unmounted() {
    console.log("MemberList unmounted()");
  },
  beforeUpdate() {
    console.log("MemberList beforeUpdate()");
    console.log("members=" + this.members);
  },
  unpdate() {
    console.log("MemberList unpdate()");
  },
};
</script>
