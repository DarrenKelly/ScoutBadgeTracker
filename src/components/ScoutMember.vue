<template>
  <div
    @click="onClick"
    :class="[
      'member',
      member.archived ? 'archived' : '',
      state == 'Helping'
        ? 'helper'
        : state == 'Leader'
        ? 'leader'
        : state == 'Attended'
        ? 'attended'
        : '',
      member.patrol == 'RED'
        ? 'red-patrol'
        : member.patrol == 'ORANGE'
        ? 'orange-patrol'
        : member.patrol == 'PURPLE'
        ? 'purple-patrol'
        : member.patrol == 'YELLOW'
        ? 'yellow-patrol'
        : member.patrol == 'BLUE'
        ? 'blue-patrol'
        : member.patrol == 'GREEN'
        ? 'green-patrol'
        : '',
    ]"
  >
    <div class="title">
      {{ member.givenname }} {{ member.familyname }}
      <p class="date">{{ member.dob }} {{ member.location }}</p>
    </div>
    <div>
      <img
        src="@/assets/Helper.png"
        :class="[state == 'Helping' ? 'icon' : 'gone']"
      />
      <img
        src="@/assets/Leader.png"
        :class="[state == 'Leader' ? 'icon' : 'gone']"
      />
    </div>

    <div>
      {{ member.type }} {{ member.section }} {{ member.patrol ? "," : "" }}
      {{ member.patrol }}
      {{ member.patrol ? "patrol" : "" }}
    </div>
  </div>
  <div v-if="enableEdit && showEditForm">
    <MemberForm
      @update-member="updateMember"
      @delete-member="deleteMember"
      :allow-delete="true"
      :prefill="member"
    />
  </div>
</template>

<script>
import MemberForm from "@/components/MemberForm.vue";

export default {
  name: "ScoutMember",
  data() {
    return {
      showEditForm: false,
      state: "",
    };
  },
  props: {
    member: Object,
    enableEdit: Boolean,
  },
  components: {
    MemberForm,
  },
  emits: ["update-member", "delete-member"],
  methods: {
    onClick() {
      console.log(
        "Clicked on Member with Id " +
          this.member.id +
          (this.enableEdit
            ? " form enabled"
            : " Changing state from '" + this.state + "'")
      );
      if (this.enableEdit) {
        this.showEditForm = !this.showEditForm;
      } else {
        switch (this.state) {
          case "":
            this.state = "Attended";
            break;
          case "Attended":
            this.state = "Helping";
            break;
          case "Helping":
            this.state = "Leader";
            break;
          case "Leader":
            this.state = "";
            break;
        }
      }
    },
    updateMember(modifiedMember) {
      console.log("ScoutMember updateMember with Id " + modifiedMember.id);
      this.$emit("update-member", modifiedMember);
      this.showEditForm = false;
    },
    deleteMember(memberId) {
      console.log("ScoutMember deleteMember with Id " + memberId);
      this.$emit("delete-member", memberId);
      this.showEditForm = false;
    },
  },
};
</script>

<style scoped>
.member {
  background: #f4f4f4;
  display: grid;
  grid-template-columns: auto 60px;
  height: 2cm;
  margin: 5px;
  padding: 10px 5px;
}
.helper {
  background: #a4d4a4;
}
.leader {
  background: #a4d4a4;
}
.attended {
  background: #a4d4a4;
}

.member.archived {
  border-left: 5px solid red;
}
.title {
  align-items: left;
}
.type {
  font-size: 12px;
}
.date {
  font-size: 12px;
}
.icon {
  width: 45px;
  height: auto;
}
.gone {
  display: none;
}
.midblock {
  margin-left: auto;
  margin-right: 10px;
}
.red-patrol {
  border-right: 5pt solid #a60518;
}
.orange-patrol {
  border-right: 5pt solid #f58206;
}
.purple-patrol {
  border-right: 5pt solid #7005a6;
}
.yellow-patrol {
  border-right: 5pt solid #ecd901;
}
.blue-patrol {
  border-right: 5pt solid #0909db;
}
.green-patrol {
  border-right: 5pt solid #14c704;
}
</style>
