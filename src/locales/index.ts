export default {
  common: {
    extensionUser: "Extension user",
    selectAll: "Select All",
    progressing: "Progressing",
    done: "Done!",
    allDone: "All done!",
    save: "Save",
    clearInputs: "Clear text inputs",
    delete: "Delete",
    confirm: "Confirm",
    deleteN: "Delete %{number_of_contents}",
    confirmed: "Confirmed",
    deleted: "Deleted",
    edit: "Edit",
    profileID: "Profile ID",
    profileLinksOrIds: "Profile links or ids..",
    nick: "Nick",
    moderator: "Moderator",
    date: "Date",
    show: "Show",
    remove: "Remove",
    select: "Select",
    start: "Start",
    startAll: "Start all",
    stop: "Stop",
    continue: "Continue",
    no: "No",
    shortPoints: "Pts",
    writeSomething: "Write something",
    userHasNoPrivilege: "User has no privilege",
    nUsers: "%{n} users",
    nIds: "%{n} ids",
    nNotFound: "%{n} not found",
    removeAll: "Remove all",
    notificationMessages: {
      operationError: "An error occurred during operation. Please try again",
      somethingWentWrong: "Oops, something went wrong",
      somethingWentWrongPleaseRefresh:
        "Something happened, please refresh the page",
      cannotShareUserInfoWithServer:
        "An unexpected error occurred while trying to communicate with extension's server. Please try again in 2 sec",
      ongoingProcess:
        "Some contents are still processing. Do you still want to exit the page?",
      areYouSure: "Are you sure?",
      mayRequireWarning: "Do you want to apply a warning to this content?",
      ongoingProcessWait:
        "Some contents are still processing and you have to wait till it finished",
      xSendYouANewMessage: "%{userName} send you a new message",
      newNotification: "New notification",
      operationCompleted: "Operation completed",
      unsavedChanges:
        "You have some unsaved changes. Do you still want to close?",
      youNeedToSelectAtLeastOne: "You need to select at least one",
      cannotShareUserInfoWithServer_RefreshPage:
        "An unexpected error occurred while trying to communicate with extension's server. Could you refresh the page please?",
    },
    moderating: {
      moreOptions: "More Options",
      moderate: "Moderate",
      doYouWantToDelete: "Do you want to delete?",
      selectContentType: "Please select a content type",
      selectReason: "Please select a reason",
      editInPanel: "Edit in moderation panel",
      point: "point",
      returnPoints: {
        text: "Don't give the points back",
        title: "Don't give the points back to owner",
      },
      giveWarning: {
        text: "Give a warning",
        title: "Delete selected contents with a warning",
      },
      approve: "Approve",
      approved: "Approved",
      unapprove: "Unapprove",
      unapproved: "Unapproved",
      doYouWantToDeleteWithReason:
        "Do you want to delete it?\n\n%{reason_title}:\n%{reason_message}",
      takePoints: {
        question: {
          text: "Take back respondent's points",
          title:
            "Remove the points received by the respondent's, when they answered the question",
        },
        answer: {
          text: "Take points back",
          title: "Take points back from user",
        },
      },
    },
    personalNote: {
      text: "Personal note",
      title:
        "You can add a personal private note here and that will relate to this user only",
      clickToAddANote: "Click to add a note",
    },
    listOfIds: "List of ids",
    pointsWithExample: {
      text: "Points: (1 or -1)",
      title:
        "You can add points by typing positive numbers like 123\nor\nyou can remove points by typing negative numbers like -123",
    },
    showMore: "Show more..",
    userHasNPoints: "User has %{n} points",
    send: "Send",
    deleteAll: "Delete all",
    ok: "OK",
    cancel: "Cancel",
    optional: "OPTIONAL",
    add: "Add",
    chooseAnOption: "Choose an option",
    deleteAcross: "Delete across",
    profileLinkOrId: "Profile link or id",
    beta: "Beta",
    deletedUser: "Deleted user",
    toggleAll: "Toggle all",
  },
  popup: {
    notificationMessages: {
      shortLinkSuccessMessage:
        "Short link has been created and copied to clipboard(CTRL + C)",
      languageChanged: "Language changed",
      cannotFindUser: "I couldn't find the user with entered ID number",
      createdMessage: "Created successfully",
      updatedMessage: "Updated successfully",
      removedMessage: "Removed successfully",
      published: "Published",
      unpublished: "Unpublished",
      layoutExtended: "Layout extended",
      switchedToNormal: "Switched back to normal",
      notifierOn: "Notifier active",
      notifierOff: "Notifier closed",
      idNumberRequired: "You need to enter an ID number",
      invalidId: "Invalid ID number",
      pleaseWait: "Please wait",
      openABrainlyPage: "You need to open a Brainly page in your browser",
      errorN: "Error %{error_code}",
      preparingUnsuccessful:
        "An error occurred while preparing the delete reasons and fetching from Brainly",
      noEvidenceFound: "Moderator didn't add any evidence nor comment",
      doYouWannaGiveThisPrivilege:
        "Do you wanna give this privilege to all extension users?",
      doYouWannaRevokeThisPrivilege:
        "Do you wanna revoke this privilege from all extension users?",
      privilegeHasGiven: "Privilege has given to %{user_amount} users",
      privilegeHasRevoked: "Privilege has revoked from %{user_amount} users",
      iCantFetchMarketData: "I can't fetch market data",
      incorrectDate:
        "I'm unable to fetch your data from Brainly<br><br>Please go to Brainly's homepage or reload the page",
    },
    createShortLinkButton: {
      text: "Shorten URL",
      title: "Create a short link for this web page",
    },
    shortenedLinks: {
      text: "Shortened Links",
      originalURL: "Original URL",
      created: "Created",
      shortURL: "Short URL",
      allClicks: "All Clicks",
      searchURL: "Search URL",
    },
    extensionOptions: {
      title: "Extension Options",
      themeColor: {
        title: "Theme Color",
        setYourColor: "Set your color",
        rainbow: "Rainbow",
        pickAColor: "Pick a color",
        colorFormatInfo:
          "You can set theme color with Hex color codes. I mean, you need to set #FF0000 for the red color",
      },
      quickDeleteButtons: {
        text: "Quick Delete Buttons",
        title: "You can set delete reasons of the quick delete buttons",
        comment: "Comment",
        question: "Question",
        answer: "Answer",
      },
      otherOptions: {
        title: "Other Options",
        extendMessagesLayout: {
          text: "Expand messages layout",
          title:
            "This option will extend the layout of the messages page. You can try it when the messages page is opened",
        },
        extensionLanguage: {
          text: "Extension language",
          chooseLanguage: "Select a language",
        },
        notifier: {
          text: "Browser notifications",
          title:
            "Extension will toast a notification you when you have a new message or new notification on Brainly",
        },
      },
    },
    extensionManagement: {
      title: "Ext. Management",
      users: {
        text: "Users",
        title: "You can set the extension user's permission and privileges",
        changeUserPrivileges: "Change all users privileges",
        revoke: "Revoke",
        give: "Give",
        addNewOrEditUser: "Add a new or edit extension user",
        permission: "Access permission",
        privileges: "Privileges",
        firstUsageTimeAgoPreTitle: "Started to use %{time}",
        hasntUsed: "User hasn't used the extension yet",
        important: "Important",
        lessImportant: "Less important",
        harmless: "Harmless",
        explainingColors: {
          line1:
            "Some users have colored border in their avatars and this colors shows that their access permission status of the extension.",
          line2:
            "<s>Red</s> border means that shown user are banned from the extension.",
          line3:
            "<s>Mustard</s> border means the user has permission to use the extension but hasn't started use it yet",
          line4:
            "<s>Green</s> color means the user is an active authorized user.",
          line5:
            "<s>No border</s> means that user has some privileges assigned but not given permission to use the extension in their account and hasn't started to use the extension yet.",
        },
        privilegeList: {
          0: {
            title: "Extension admin",
            description:
              "Can able use the extension without any restriction. (No need to assign any other privileges, this will remove all restrictions)",
          },
          1: {
            title: "Quick delete questions",
            description:
              "On the pages of questions, archive mod and homepage, user can use the quick delete buttons for deleting the question/s",
          },
          2: {
            title: "Quick delete answers",
            description:
              "On the pages of questions, archive mod and homepage, user can use the quick delete buttons for deleting the answers",
          },
          4: {
            title: "Announcement management",
            description:
              "Can create, edit, remove or publish the internal extension announcements",
          },
          5: {
            title: "Manage extension users",
            description:
              "Can add or editing the extension users and give them privileges or permission to use the extension",
          },
          6: {
            title: "Selective answer approvement",
            description:
              "On the user contents page, user can approve or unapprove the answers by selecting",
          },
          7: {
            title: "Mass-Content deleter",
            description:
              "In the moderation panel, user can use this function for deleting multiple questions/answers/comments from Brainly",
          },
          8: {
            title: "Group messages",
            description:
              "In the messages page, user can send private messages to multiple users in a group at once",
          },
          9: {
            title: "Mass-Message sender",
            description:
              "In the moderation panel, user can use this function for sending a private message to entire users of your market",
          },
          10: {
            title: "Supervisors page, Message sender",
            description:
              "In the supervisors page, user can send a private message to listed moderators or all moderators of your market",
          },
          11: {
            title: "Delete reasons preferences management",
            description: "Can set warning level of delete reasons",
          },
          12: {
            title: "User deletion reports",
            description:
              "In the extension options, user can see account deletion reports",
          },
          13: {
            title: "Mass-Point changer",
            description:
              "In the moderation panel, user can change user's points by their ids",
          },
          14: {
            title: "Selective question deletion",
            description:
              "On the user contents and question searching page, user can use the selective deletion function to delete selected questions",
          },
          15: {
            title: "Selective answer deletion",
            description:
              "On the user contents page, user can use the selective deletion function to delete selected answers",
          },
          16: {
            title: "Selective comment deletion",
            description:
              "On the user contents page, user can use the selective deletion function to delete selected comments",
          },
          17: {
            title: "Reported comments deleter",
            description:
              "User can use this function to delete all the reported comments from Moderate all",
          },
          18: {
            title: "Mass-Moderate reported contents",
            description:
              "User can use this function to confirm/delete reported contents massively from the Moderate all by filtering",
          },
          19: {
            title: "Selective ask for correction",
            description:
              "On the user contents page, user can use the selective ask for correction to report answers",
          },
          20: {
            title: "Notice board management",
            description: "Can edit notice board content",
          },
          21: {
            title: "Review user privileges",
            description:
              "User can review other extension users privileges without making any changes",
          },
          22: {
            title: "Can change access permission",
            description: "User can manage permissions to use the extension",
          },
          23: {
            title: "Can change important privilege",
            description:
              "User can assign/revoke important privileges to other extension users",
          },
          24: {
            title: "Can change less important privilege",
            description:
              "User can assign/revoke less important privileges to extension users",
          },
          25: {
            title: "Can change harmless privilege",
            description:
              "User can assign/revoke harmless privileges to other extension users",
          },
          26: {
            title: "Selective question deletion(Multiple pages)",
            description:
              "On the question searching page, user can use the selective deletion function to delete selected questions from multiple pages at once",
          },
          27: {
            title: "Mass-Manage users",
            description:
              "User can use this function to manage users massively. Like, changing a list of users points or approve answers of users or etc.",
          },
          28: {
            title: "Mod. Action H. Approval",
            description:
              "User can use this function to report- actions of moderators from moderator actions history page.",
          },
          45: {
            title: "Quick delete comments",
            description:
              "On the pages of questions and archive mod, user can use the quick delete buttons for deleting the comments",
          },
          29: {
            title: "Mass-Moderate contents",
            description:
              "User can use this function to moderate contents massively",
          },
          30: {
            title: "Approve all answers",
            description:
              "User can use this function to approve all answers of users massively by providing list of ids/links of users",
          },
          31: {
            title: "Delete users",
            description:
              "User can use this function to delete users massively by providing list of ids/links of users",
          },
          32: {
            title: "Change points",
            description:
              "User can use this function to change points of users massively by providing list of ids/links of users",
          },
          33: {
            title: "Change ranks",
            description:
              "User can use this function to change ranks of users massively by providing list of ids/links of users",
          },
          34: {
            title: "Point transferer req.",
            description:
              'User can use the "Mark as point transferer" button to mark a user that uses some point transferring methods to gain points',
          },
          36: {
            title: "Content delete options on profile page",
            description:
              "Allow this moderator to see the links used to delete all questions, answers, and comments from profile page of a user",
          },
          99: {
            title: "Reported contents (Beta)",
          },
          37: {
            title: "Moderate Panel > Delete all comments",
            description:
              "Ability to delete comments in bulk from the moderate panel",
          },
        },
        veryImportant: "Very important",
      },
      announcements: {
        text: "Announcements",
        addNewAnnouncement: "Add a new announcement",
        editorTitle: "Title",
        editorContent: "Content",
        cancelEdit: "Cancel edit",
        update: "Update",
        publish: "Publish",
        unpublish: "Unpublish",
        readOn: "Read on:\n%{date}",
      },
      DeleteReasonsPreferences: {
        text: "Delete reasons preferences",
        withoutAsk: "Give warning without asking confirmation",
        withAsk: "Show confirmation dialog while deleting a content",
        findReason: "Find a reason",
        explaining: {
          line1: "You can find delete reasons by typing the name of the reason",
          line2:
            "After selecting one from the results, you can click %{exclamation-circle} button to give warning without asking confirmation from moderators while they are deleting a content. But in some cases, that may can change and moderators should decide if giving a warning is necessary or not. So you can click %{exclamation-triangle} to show confirmation dialog to moderators while they are deleting a content.",
        },
      },
      accountDeleteReports: {
        text: "Account delete reports",
        listAllUsers: "Search on all users",
        onModerators: "On moderators",
        onDeletedAccounts: "On deleted accounts",
        download: "Download",
        playOrPause: "Play/Pause",
      },
    },
  },
  core: {
    assignExtensionPermission: "Assign extension permission",
    notificationMessages: {
      cantFetchDeleteReasons:
        "An unexpected error occurred while trying to prepare delete reasons",
      searching: "Searching..",
      userNotFound: "User not found",
      extensionServerError:
        "An unexpected error occurred while connecting the extension server. Please try again in ~5 sec.",
      ifErrorPersists:
        "If this error persists, please contact with extension manager and explain what happened :)",
      accessPermissionDenied:
        "You are not authorized to use the Brainly Tools.\nPlease contact with an admin or community manager to ask permission",
      updateNeeded:
        "A new version of the extension is available.\nIt'll be updated in the background so could you wait ~10 seconds then refresh the page, please?",
      warningBeforeDelete:
        "This process will be executed and the numbers of questions ids in the input will be deleted once you confirmed this warning. \n\n Are you triple times sure?",
      enterIdWarn:
        "You need to add at least 1 id number of question that you want to delete",
      youNeedToEnterValidId: "You need to enter a valid id number",
      tryingToSendTheSameMessage:
        "You're trying to send the last message again. Do you still want to send?",
      alreadyStarted: "Process has already started",
      pointsAdded: "Points added",
      doYouWantToContinue: "Do you want to continue?",
      couldntAbleToGetNoticeBoardContent:
        "I couldn't able to get content of notice board",
      changesMayNotBeSaved: "Changes you made may not be saved",
      stillProcessing:
        "This section is still in process. Do you want to remove this block?\n(this will stop the moderating process)",
      youNeedToChooseActionType: "You need to choose an action type",
      errorOccurredWhileDeletingTheN:
        "An error occurred while deleting the %{content_id}",
      clickHereToSeeTheChangelog: "Click here to see the changelog",
    },
    MassContentDeleter: {
      text: "Mass-Content deleter",
      nIdsToDeleted: "%{n} ids to delete",
      nHasBeenDeleted: "%{n} ids has been deleted",
      containerExplanation:
        "You need to put content links or ids to text box line by line. Each line should contain 1 id number",
      select: {
        reason: "Reason",
        subReason: "Sub reason",
        action: "Action",
      },
    },
    MessageSender: {
      text: "Mass-Message sender",
      lastRegisteredUserId: "Enter last registered user id",
      information:
        "This function can send your message to the users by counting backwards from the given id number. Once you've start the process and if you want to send the message to the id numbers, you should have to wait and not close this page(this includes your computer as well) till the process finishes.",
      target: "Target",
      allUsers: "All users",
      moderators: "Moderators",
      startOver: "Start over",
      sent: "Sent",
      usersNotFound: "Users not found",
      errors: "Errors",
      unknownError: "Unknown error",
    },
    announcements: {
      text: "Announcements",
      title: "Once you've read the announcement you need to mark it as read",
      markAsRead: "Mark as read",
    },
    pointChanger: {
      text: "Mass-Point changer",
      enterOrPasteUID: "Enter or paste user profile ID",
      youNeedToEnterOrPaste:
        "You need to enter user id or you can paste copied list of user ids into input",
      pastingExample: "Example list of users ids",
      pastingExample2:
        "Also, you can specify the points in the list before copy paste",
      addPoints: "Add points to this user",
      addPointsToAll: "Add points to all users",
      pointsNotSpecified:
        "You must give points to at least 1 user in order to proceed",
      applyPointsToAllInputs: "Apply points to all inputs",
    },
    reportedCommentsDeleter: {
      text: "Reported comments deleter",
      description:
        "You can delete all reported comments in Moderate All with one click. You just need to start and keep this tab open that's all.",
      deleting: "Deleting",
      stopped: "Stopped",
      numberOfPending: "Pending",
      selectAReason: "Select a reason",
    },
    massModerateReportedContents: {
      text: "Mass-Moderate reported contents",
      informationText: [
        "Tool needs to fetch all reported contents from all pages of moderate all and collecting the details may take a while to finish.",
        "It can't collect all reported contents instantly because of the architectural limitations of moderate all",
        'While collecting details, other moderators can also moderate reported contents from moderate all regularly but this means the numbers under the "%{addModerator}" button, can be affected and may not match.',
      ],
      notificationMessages: {
        cantFetchDetailsFromExtensionServer:
          "There is a problem with extension's server while fetching details about moderate all",
        noModeratableContentLeft: "There is no moderatable content remain",
      },
      addModerator: "Add moderator section",
      moderatorN: "Moderator %{n}",
      filter: {
        ContentType: {
          text: "Content type",
        },
        Reporter: {
          text: "Reporter user",
          title: "The user who was reports contents",
        },
        Reported: {
          text: "Reported user",
          title: "The user who has their contents being reported",
        },
        DateRange: {
          text: "Reporting date",
          title: "Find reports between two dates",
        },
        Subject: {
          text: "Subject",
          title: "Find reports by subjects",
        },
      },
      filteredReports: "Filtered reports",
      userId: "User id",
      moderateActions: {
        Confirm: {
          text: "Confirm",
          confirmModeration:
            "Do you really want to confirm %{n} reported contents?",
        },
        Delete: {
          text: "Delete",
          choose: {
            Question: "Delete reason for questions",
            Answer: "Delete reason for answers",
          },
          confirmDeletion:
            "Do you really want to delete %{n} reported contents?",
        },
      },
      exportToSpreadsheet: "Export reports as spreadsheet(%{file_format})",
      failedToModerate: "Failed to moderate",
      findReports: "Find reports",
      moderatedReports: "Moderated reports",
      totalReportedContents: "Total reported contents",
      collectedReports: "Collected reports",
    },
    noticeBoard: {
      text: "Noticeboard",
      lastChanges: "Last changes",
      readBy: "Read by",
    },
    massManageUsers: {
      notificationMessages: {
        doYouWantToRemoveSelectedUsers:
          "Do you want to remove selected users from the list?",
        doYouReallyWantToRemoveAllUsers:
          "Do you really want to remove all users from the list?",
        tryingToAddPreviouslyRemovedIds:
          'The ids you\'ve entered contains previously removed id numbers from the list\n\nClick "OK" if you want to add or\nclick "Cancel" if you want to exclude.',
        areYouSureAboutDeletingAllListedUsers:
          "You are about to confirm to delete all listed users.\n\nAre you triple sure about this?",
        thereIsNoUserLeft: "There is no user left in the list",
      },
      text: "Mass-Manage users",
      removeSelected: "Remove selected",
      removeSelectedUsersFromTheList: "Remove selected users from the list",
      removeAllUsersFromTheList: "Remove all users from the list",
      sections: {
        approveAnswers: {
          numberOfApprovedAnswers: "Number of approved answers",
          numberOfAlreadyApprovedAnswers: "Number of already approved answers",
          actionButton: {
            text: "Approve answers",
            title: "Approve all answers of all listed users",
          },
        },
        deleteUsers: {
          actionButton: {
            text: "Delete users",
            title: "Delete all listed users",
          },
        },
        changePoints: {
          actionButton: {
            text: "Change points",
            title: "Change points of all listed users",
          },
          applyToAll: "Apply to all",
          applyToSelected: "Apply to selected",
          notificationMessages: {
            doYouWantToGiveNPointsToAllListedUsers:
              "Do you want to give %{n} points to all listed users?",
            doYouWantToGiveNPointsToSelectedUsers:
              "Do you want to give %{n} points to selected users?",
            oopsYouDidntSpecifyThePoints: "Oops, you didn't specify the points",
            thereIsNoPointToGiveZeroPoints:
              "There is no point to give zero points :)",
          },
        },
        changeRanks: {
          actionButton: {
            text: "Change ranks",
            title: "Add or remove ranks from all listed users",
          },
        },
      },
    },
    MassModerateContents: {
      text: "Mass-Moderate contents",
      nContents: "%{n} contents",
      nIgnored: "%{n} ignored",
      contentType: "Content type",
      targets: {
        text: "Specify targets",
        listOfIds: {
          contentLinksOrIDs: "Content links or ids..",
        },
        idRange: {
          text: "Id range",
          youNeedToEnterTwoDifferentIdNumbers:
            "You need to enter different id numbers separated by a dash(-) or dots(.. or ...) to moderate the numbers between range",
          exampleUsage: "Example Usage",
          input: "Input",
          output: "Output",
        },
        searchQuestion: {
          text: "Search question",
          whatIsYourQuestion: "What is your question?",
        },
      },
      methods: {
        text: "Methods",
        clickListToCopy: "Click list to copy ids to clipboard",
        copied: "Copied!",
        iCantCopy: "I can't copy :(",
        reportForAbuse: {
          chooseAReason: "Choose a reason",
          tabButton: {
            text: "Report for abuse",
            title: "Report abusive contents",
          },
        },
        addAnswer: {
          tabButton: {
            text: "Add answer",
            title: "Add an answer to target questions",
          },
        },
        approveAnswers: {
          tabButton: {
            text: "Approve answers",
            title: "Approve answers of questions, relatively",
          },
        },
      },
    },
  },
  home: {
    todaysActions: "Today's actions",
  },
  messages: {
    notificationMessages: {
      unsendedMessage:
        "You didn't send your message, do you still want to leave?",
    },
    groups: {
      title: "Groups",
      createGroup: "Create a group",
      editGroup: "Edit group",
      deleteGroup: "Delete group",
      groupName: "Group name",
      groupColor:
        "You can set a color for this group name to make it look different from other created groups",
      groupMembers: "Group members",
      searchResults: "Search results",
      selectGroupType: "Select a group type",
      addAll: "Add all",
      writeSomething: "Type your message here",
      pinTip: "You can pin your groups by clicking the %{pin} icon.",
      notificationMessages: {
        groupCreated: "%{groupName} successfully created",
        groupUpdated: "%{groupName} updated",
        cantCreate:
          "I can't create this group because something must be wrong. Could you please check your details?",
        userAlreadyAdded: "This user is already on the list",
        doYouWantToRemoveMembers: "Do you want to remove all group members?",
        youNeedToAddMembers:
          "You need add at least one user in the group members list",
        youHaventCreatedAGroupYet: "You haven't created a group yet..",
        wrongMessageLength:
          "Your message must be between 1 and %{max_value} characters long",
        messageContainsSwear:
          "Oops! It seems like your message contains swearwords. You can't send it!",
        cantFetchGroupData:
          "There is an unexpected error occurred. I couldn't able to fetch messages of this group from the extension server",
      },
      userCategories: {
        findUsers: {
          text: "Find users",
          nickOrID: "Nick or profile id",
        },
        friendsList: "Friends list",
        moderatorRanks: {
          text: "Moderator ranks",
          selectRank: "Select a rank",
        },
        allModerators: "All moderators",
      },
    },
  },
  userContent: {
    notificationMessages: {
      alreadyApproved: "This answer is already approved",
      alreadyUnapproved: "This answer is already unapproved",
      someOfSelectedAnswersAreApproved:
        "Some of selected answers have already been approved, so you don't need to approve those answers again",
      selectAnUnapprovedAnswerForApproving:
        "You need select some unapproved answers for start approving",
      confirmApproving: "Do you want to approve this answer?",
      someOfSelectedAnswersAreUnapproved:
        "Some of selected answers isn't approved, so you don't need to unapprove those answers again",
      selectAnApprovedAnswerForUnapproving:
        "You need select some approved answer/s for start",
      confirmUnapproving: "Do you want to remove approvement from this answer?",
      doYouWantToConfirmThisContent: "Do you want to confirm this content?",
      confirmReporting:
        "Do you want to report selected answers for correction?",
      selectAtLeastOneContent: "Select at least one content",
      xIsAlreadyApproved: "%{row_id} has already approved",
      xIsAlreadyUnapproved: "%{row_id} has already unapproved",
      confirmApprovingSelected: "Do you want to approve selected answers?",
    },
    approvedAnswer: "Approved answer",
    bestAnswer: "Best answer",
    askForCorrection: {
      text: "Ask for correction",
      placeholder: "Write additional information for users",
      ask: "Ask",
    },
    hasAttachment: {
      question: "Question has attachment",
      answer: "Answer has attachment",
    },
    reported: {
      question: "Reported question",
      answer: "Reported answer",
      comment: "Reported comment",
    },
  },
  userProfile: {
    notificationMessages: {
      areYouSureDeleteSelectedFriends:
        "Are you sure you want to remove selected user's from your friends list?",
      areYouSureRemoveAllFriends:
        "Are you sure you want to remove all your friends?",
      youHaveNoFriends:
        "Don't be sad because you have no friends to list :/ Sorry",
      cannotChangeBio: "I couldn't able to change your bio :/ Sorry..",
      fileSizeExceeded:
        "The %{file_name} file exceeds the size limit of %{file_size}",
      aShortcutFile:
        "You're trying to add a shortcut of a file and it's kind of garbage.\nYou may need to select the original file instead that is linked\nDo you still want to add this shortcut?",
      unableToReportAccountDeleting:
        "I couldn't able report your delete request to community manager, so I can't continue to delete. Sorry :/<br>If this error persist, ask for help from your extension manager",
      confirmNoEvidenceOrComment:
        "You didn't add any evidence or comment.\nDo you still want to delete this account?",
      selectAtLeastOneUser: "You need to select at least one user",
      youNeedToProvideSomeDetails: "You need to provide some details",
      confirmAccountDeletion: "Do you want to delete this profile?",
    },
    previousNicks: {
      text: "Previous nicks",
      title: "Previous nicks of the user registered in the database",
    },
    userBio: {
      title: "Bio",
      description: "Bio text from the mobile app of Brainly",
    },
    showAllFriends: {
      text: "Show all",
      title: "List your all friends",
    },
    removeAllFriends: {
      text: "Unfriend all",
      title: "Remove all your friends",
    },
    removeSelectedFriends: {
      text: "Unfriend",
      title: "You can remove the selected friends from your friend list",
    },
    accountDelete: {
      evidences: "Evidences",
      willBeReviewedByCommunityManager:
        "will be reviewed by your Community Manager",
      addFiles: "Add files",
      compressingTheFile: "Compressing the %{file_name}",
      compressingTheFiles: "Compressing the files",
      uploading: "Contents uploading %{percentage_value}",
      deletingContinues: "Deleting continues..",
      reasonForDeletion: "Any reason for deletion?",
    },
    rankManager: {
      title: "Manage special ranks",
      removeAllRanks: "Remove all special ranks",
      allRanksRemoved: "All special ranks are removed",
      updatingRanks: "Updating ranks",
      xHasAssigned: "%{rank_name} has assigned",
      removingAllSpecialRanks: "Removing all special ranks..",
    },
    morePanel: {
      title: "More..",
      privileges: {
        title: "Active privileges",
      },
      manageExtensionUser: {
        title: "Manage extension privileges",
      },
      reportUser: {
        report: "Report this user",
        whatIsTheReason: "What is the reason?",
        reasons: {
          pointTransferer: "Point transferer",
          spammer: "Spammer",
          other: "Other",
        },
      },
    },
  },
  userWarnings: {
    notificationMessages: {
      ifYouHavePrivileges:
        "Warning/s will be revoked if you have authority. Also, I'll suggest you to wait like ~10 seconds once the process has started",
    },
    cancelWarnings: "Cancel Warnings",
  },
  supervisors: {
    notificationMessages: {
      noUser: "There are no users to send this message",
      emptyMessage: "You cannot send empty message",
    },
    allRanks: "All Ranks",
    tableLayout: "Table Layout",
    sendMessagesToMods: "Send message to mods",
    sendMessagesToListedMods: {
      text: "to listed mods",
      title: "Send a message to only listed moderators",
    },
    sendMessagesToAllMods: {
      text: "to all mods",
      title: "Send a message to all moderators",
    },
  },
  uploader: {
    notificationMessages: {
      alreadyExist: "%{file_name} already exists",
      fileNameCannotContainBackslash:
        "File name cannot contain backslash. Please rename the %{file_name}",
    },
    text: "Upload multiple files",
    selectFiles: "Select files",
  },
  moderateAll: {
    wrongContentConfirmer: {
      text: "Confirm all corrected contents",
    },
    notificationMessage: {
      questionRemovedPanelClosing:
        "Question has been removed. Panel will close in few seconds",
    },
  },
  moderatorActionHistory: {
    notificationMessages: {
      doYouWantToConfirm: "Do you want to confirm this action?",
      doYouWantToConfirmUnreviewedActions:
        "Do you want to confirm all unreviewed actions?",
      doYouWantToDisapprove: "Do you want to disapprove this action?",
      doYouWantToDisapproveUnreviewedActions:
        "Do you want to disapprove all unreviewed actions?",
      doYouWantToRevertThisReport: "Do you want to revert this report?",
      iCouldntRevertThisReport: "I couldn't revert this report",
      wouldYouLikeToInform:
        "Would you like to inform %{nick} about this action with a private message?",
    },
    confirm: "Confirm",
    confirmAll: "Confirm all",
    disapprove: "Disapprove",
    disapproveAll: "Disapprove all",
    revert: "Revert",
    PM: "PM",
    sampleMessage:
      "Hello %{n}\n\n[Write your reason here]\n\nAction: %{a}\nQuestion: %{q}",
    reviewedOn: {
      confirm: "Confirmed on %{date} by %{nick}",
      disapprove: "Disapproved on %{date} by %{nick}",
    },
  },
  question: {
    keywords: "Keywords",
  },
  reportedContents: {
    questionAnswerReports: {
      text: "Questions/Answers (%{number_of_reports})",
      title: "Click here to see reported questions and answers",
    },
    commentReports: {
      text: "Comments (%{number_of_reports})",
      title: "Click here to see reported comments",
    },
    correctionReports: {
      text: "Correction Reports (%{number_of_reports})",
      title:
        "Click here to see the contents which has reported for correction and waiting for to be confirmed",
    },
    subjectFilterFirstOption: "Subject - ALL",
    options: {
      buttonVisibility: {
        optionName: "Action buttons visibility",
        alwaysVisible: "Always visible",
        onHoverOrTouch: "On hover/touch",
        defaultVisibility: "Default",
      },
      filter: {
        optionName: "Filter reports",
        description:
          "Filters can only be applied to reports that has been load",
        filters: {
          reporter: {
            name: "Reporter user",
            by: {
              nick: "Reporter nick",
              id: "Reporter user id",
            },
            lookFor: "Look for",
          },
          reported: {
            name: "Reported user",
            by: {
              nick: "Reported nick",
              id: "Reported user id",
            },
            lookFor: "Look for",
          },
          reportingDate: {
            name: "Reported between",
            startingDate: "Starting date",
            endingDate: "Ending date",
          },
          contentType: {
            name: "Content type",
            Question: "Question",
            Answer: "Answer",
            Comment: "Comment",
          },
          contentLength: {
            name: "Content length",
            equals: "equals to",
            graterThan: "grater than",
            lowerThan: "lower than",
            label: {
              equals: "equals to %{N}",
              graterThan: "grater than %{N}",
              lowerThan: "lower than %{N}",
            },
          },
        },
        pageNumberInputTitle:
          "Enter a page number between %{MIN_N} and %{MAX_N}",
      },
      name: "Options",
      density: {
        optionName: "Density",
        defaultDensity: "Default",
      },
    },
    queue: {
      rating: "%{rating} points for %{ratesCount} votes",
      bestAnswer: "This is Brainliest Answer",
      popularQuestion: "Popular question!",
      moderatorVerifiedSomeonesAnswer:
        "%{verifier} has verified %{author}'s answer",
    },
    loadAll: "Load all reports",
    loadAllConfirmationMessage:
      "I'll try to fetch all reported contents from Brainly but the process can be interrupted by Brainly because of elevated requests.\nPlease confirm to start the process",
    massModerate: {
      name: "Mass-Moderate contents",
      description: "You can only moderate contents that has been load",
      confirm: {
        text: "Confirm",
        noContentToConfirm: "There is no content available for to confirm",
        confirmModeration:
          "Do you really want to confirm %{n} reported contents?",
      },
      delete: {
        text: "Delete",
        choose: {
          Question: "Choose a reason for questions",
          Answer: "Choose a reason for answers",
          Comment: "Choose a reason for comments",
        },
        noContentToDelete: "There is no content available for to delete",
        confirmDeletion: "Do you really want to delete %{n} reported contents?",
      },
      status: {
        fetched: "%{count} fetched",
        filtered: "%{count} filtered",
        visible: "%{count} visible",
        moderated: "%{count} moderated",
        failed: "%{count} failed",
      },
    },
    categoryFilterFirstOption: {
      name: "Report reason - ALL",
      reasonsFor: {
        Question: "Reasons for questions",
        Answer: "Reasons for answers",
        Comment: "Reasons for comments",
      },
    },
    name: "Reported contents",
  },
  moderationPanel: {
    text: "Question Moderation",
    answers: "Answers (%{number_of_answers})",
    log: "Log",
    panelWillClose: "Moderation panel will close in %{remain_N}",
    showAllComments: "Show all comments",
    failedToGetLogs: "Cannot fetch logs of question",
    seeMoreDeleteOptions: "See more delete options",
    confirmReportingForCorrection:
      "Do you want to report this answer for correction?",
    thereIsNoReportLeft: "There is no report left",
    deleteAllComments: "Delete all comments",
    confirmDeletingNComments: "Please confirm deleting %{N} comments",
  },
  shortAnswersPage: {
    selectAtLeastOneAnswer: "You need to select at least one answer",
    doYouWantToDeleteSelectedAnswers:
      "Do you really want delete selected answers?",
  },
};
