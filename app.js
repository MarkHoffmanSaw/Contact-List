const App = {
  data() {
    return {
      title: "Contact List",
      nameContact: "",
      placeholderString: "Enter the name",
      inputValue: "",
      inputExtraName: "",
      inputExtraInfo: "",
      ///// Variables
      // Array -> Object -> fullName, extraInfo
      contacts: [],
      // Object -> fullName, extraInfo
      currentContact: "",
      // -> extraInfo
      currentEdit: "",

      ///// List-1 & List-2
      mainPage: true,
      mainPage2: false,
      // Alert indicators
      deleteIndicator: false,
      deleteIndicatorExtraInfo: false,
      cancelIndicatorInfo: false,
      // Info editing
      isActiveInfo: true,
    };
  },
  methods: {
    /////////////// LIST 1 - operations with contacts ///////////
    /////////////////////////////////////////////////////////////
    addNewContact() {
      if (this.inputValue !== "") {
        this.contacts.push({ fullName: this.inputValue, extraInfo: [] });
        this.inputValue = "";
      }
    },
    // Alert before deleting
    alertDelete(i) {
      this.nameContact = this.contacts[i].fullName;
      this.deleteIndicator = true;
      this.mainPage = false;
      deletedContact = this.contacts[i];
    },
    // Delete a contact
    deleteContact() {
      indexDelContact = this.contacts.indexOf(deletedContact);
      this.contacts.splice(indexDelContact, 1);
      this.mainPage = true;
      this.deleteIndicator = false;
    },
    // No delete a contact
    noDeleteContact() {
      this.mainPage = true;
      this.deleteIndicator = false;
    },
    /////////////// LIST 2 - operations with info ///////////
    /////////////////////////////////////////////////////////
    moveToInfo(i) {
      this.mainPage = false;
      this.mainPage2 = true;
      this.title = "Contact information: " + this.contacts[i].fullName;
      this.currentContact = this.contacts[i];
    },
    addInfo() {
      // Inputs must be filled
      if (this.inputExtraName && this.inputExtraInfo !== "") {
        extraInfoArr = this.currentContact.extraInfo;
        extraInfoArr.push(`${this.inputExtraName}: ${this.inputExtraInfo}`);
      }
      this.inputExtraName = "";
      this.inputExtraInfo = "";
    },
    editInfo(i) {
      this.isActiveInfo = false;
      splitedArr = this.currentContact.extraInfo[i].split(": ");
      this.inputExtraName = splitedArr[0];
      this.inputExtraInfo = splitedArr[1];
      this.currentEdit = this.currentContact.extraInfo[i];
    },
    saveInfo() {
      indexArr = this.currentContact.extraInfo.indexOf(this.currentEdit);
      console.log(indexArr);
      this.currentContact.extraInfo.splice(
        indexArr,
        1,
        `${this.inputExtraName}: ${this.inputExtraInfo}`
      );
      this.isActiveInfo = true;
      this.inputExtraName = "";
      this.inputExtraInfo = "";
    },
    ////////// Cancel - "Step back" //////////
    stepBack() {
      if (this.currentContact.extraInfo.length !== extraInfoArr) {
        this.currentContact.extraInfo.pop();
      }
      if (typeof indexArr !== "undefined") {
        this.currentContact.extraInfo?.splice(indexArr, 1, this.currentEdit);
      }
    },
    ////////// Deleting extra info //////////
    // Alert before deleting
    alertDeleteExtraInfo(i) {
      this.mainPage2 = false;
      this.deleteIndicatorExtraInfo = true;
      deletedExtraInfo = this.currentContact.extraInfo[i];
    },
    // Del an info
    deleteExtraInfo(i) {
      indexDelExtraInfo =
        this.currentContact.extraInfo.indexOf(deletedExtraInfo);
      this.currentContact.extraInfo.splice(indexDelExtraInfo, 1);
      this.mainPage2 = true;
      this.deleteIndicatorExtraInfo = false;
    },
    // Non-del an info
    noDeleteExtraInfo() {
      this.mainPage2 = true;
      this.deleteIndicatorExtraInfo = false;
    },
    ////////// Editing extra info //////////
    // Cancel editing?
    alertCancelEdit() {
      this.cancelIndicatorInfo = true;
      this.mainPage2 = false;
    },
    // Yes
    cancelEdit() {
      this.isActiveInfo = true;
      this.cancelIndicatorInfo = false;
      this.mainPage2 = true;
      this.inputExtraName = "";
      this.inputExtraInfo = "";
    },
    // No
    noCancelEdit() {
      this.cancelIndicatorInfo = false;
      this.mainPage2 = true;
      this.isActiveInfo = false;
    },
    ////////// Switch 2 to 1 page //////////
    moveToBack() {
      this.title = "Contact List";
      this.mainPage = true;
      this.mainPage2 = false;
    },
  },
};

const app = Vue.createApp(App);
app.mount("#app");
