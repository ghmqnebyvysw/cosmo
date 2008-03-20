/*
 * Copyright 2006 Open Source Applications Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
({
    "Yes": "Yes",
    "No": "No",

// Entire app
//====================
// Full days of week
    "App.Sunday": "Sunday",
    "App.Monday": "Monday",
    "App.Tuesday": "Tuesday",
    "App.Wednesday": "Wednesday",
    "App.Thursday": "Thursday",
    "App.Friday": "Friday",
    "App.Saturday": "Saturday",
// Abbr. days of week
    "App.Sun": "Sun",
    "App.Mon": "Mon",
    "App.Tue": "Tue",
    "App.Wed": "Wed",
    "App.Thu": "Thu",
    "App.Fri": "Fri",
    "App.Sat": "Sat",
// Full month names
    "App.January": "January",
    "App.February": "February",
    "App.March": "March",
    "App.April": "April",
    "App.May": "May",
    "App.June": "June",
    "App.July": "July",
    "App.August": "August",
    "App.September": "September",
    "App.October": "October",
    "App.November": "November",
    "App.December": "December",
// Abbr. month names
    "App.Jan": "Jan",
    "App.Feb": "Feb",
    "App.Mar": "Mar",
    "App.Apr": "Apr",
    "App.May": "May",
    "App.Jun": "Jun",
    "App.Jul": "Jul",
    "App.Aug": "Aug",
    "App.Sep": "Sep",
    "App.Oct": "Oct",
    "App.Nov": "Nov",
    "App.Dec": "Dec",
// AM/PM
    "App.AM": "AM",
    "App.PM": "PM",
// Noon
    "App.Noon": "Noon",

// Page title
    "App.Welcome": "Welcome to Chandler Server",

// Global buttons
    "App.Button.Submit": "Submit",
    "App.Button.OK": "OK",
    "App.Button.Cancel": "Cancel",
    "App.Button.Remove": "Remove",
    "App.Button.Save": "Save",
    "App.Button.Go": "Go",
    "App.Button.Close": "Close",
    "App.Button.Create": "Create",
    "App.Button.Yes": "Yes",
    "App.Button.No": "No",

// Timeout dialog
    "App.Timeout.Title": "Session timed out",
    "App.Timeout.Prompt": "You have been inactive for more than ${0} minutes. As a security precaution you will be logged out in ${1} seconds.",

    "App.Status.LoadingApp": "Loading...",
    "App.Status.LoadingCollection": "Loading...",
    "App.Status.Processing": "Processing...",

// Global errors
// =====================
     
    "App.Error.InvalidDateFormat": "Dates must be entered in the following format: mm/dd/yyyy (ex. 5/1/2006).",
    "App.Error.InvalidMonthRange": "Month must be between 1 and 12.",
    "App.Error.InvalidDayRange": "Day must be between 1 and 31.",
    "App.Error.FebruaryDays": "Too many days for February of that year.",
    "App.Error.InvalidTimeFormat": "Time must be in the following format: hh:mm (ex. 4:35).",
    "App.Error.InvalidHourRange": "Hour must be between 1 and 12.",
    "App.Error.InvalidMinutesRange": "Minutes must be between 00 and 59.",
    "App.Error.NoEndTimeWithoutStartTime": "You cannot have an end time without a start time.",
    "App.Error.RecurEnd": "The reccurrence end date must be after the start date.",
    "App.Error.NoTzId": "Please select a city for the time zone region select",

// Identity
// ======================

    "App.Name": "Chandler Server",
    "App.LogoUri": "logo_en.png",
    "App.TemplateName": "default",

// Login screen
// =====================
    
    "Login.Username": "Username:",
    "Login.Password": "Password:",
    "Login.Button.Ok": "Log in",
    "Login.Prompt.Init": "Enter your username and password, and click Log in.",
    "Login.Prompt.Processing": "Verifying username and password. Please wait...",
    "Login.Error.RequiredFields": "Both Username and Password are required fields.",
    "Login.Error.AuthFailed": "Could not verify your username and password. Please try again.<br/><br/>If you have just signed up for an account, check your email to activate your account before logging in.",
    "Login.CreateAccount": "Don&#8217;t have an account?",
    "Login.CreateClickHere": "Sign up.",
    "Login.Forgot": "Forgot your username or password?",
    "Login.ForgotClickHere": "Click here.",
    "Login.LostActivation": "Lose your activation email?",
    "Login.LostActivationClickHere": "Click here.",
    "Login.ClickHere": "Click here.",
    "Login.AboutCosmo": "About Chandler Server...",
    "Login.HeadTitle": "Chandler Server | Log in",
    "Login.Extra": "",

// Authentication box
// =====================
        
    "AuthBox.CreateAccount": "Don't have an account? ",
    "AuthBox.CreateClickHere": "Sign up.",

// Activation recovery dialog
// =====================

    "Account.RecoverActivation.InitialInfo": "<b>Lose your activation?</b><br/><br/>Enter your username or the email address you used to sign up for your account and click 'Send&nbsp;Email.'<br/><br/>",
    "Account.RecoverActivation.Submit": "Send Email",
    "Account.RecoverActivation.Username": "Username:",
    "Account.RecoverActivation.Email": "Email:",
    "Account.RecoverActivation.Success": "Thanks! We will resend your activation link to the address you provided at signup.",
    "Account.RecoverActivation.Error.404": "Could not find activation token for an account matching these details. The account may already be active, or may not exist.",

// Password recovery dialog
// =====================

    "Account.RecoverPassword.InitialInfo": "<b>Forget your password?</b><br/><br/>Enter your username or the email address you used to sign up for your account and click 'Send&nbsp;Email.'<br/><br/>",
    "Account.RecoverPassword.Submit": "Send Email",
    "Account.RecoverPassword.Username": "Username:",
    "Account.RecoverPassword.Email": "Email:",
    "Account.RecoverPassword.Success": "Thanks! We will send you an email with a link to create a new password.",
    "Account.RecoverPassword.Error.404": "Could not find an account matching these details, please try again.",

    "Account.Recoverer.Or": "OR",

// Password reset dialog
// =====================

    "Account.PasswordReset.InitialInfo": "Almost done.<br/><br/>Please enter and confirm your new password and click 'Set Password.'<br/><br/>",
    "Account.PasswordReset.Submit": "Set Password",
    "Account.PasswordReset.Password": "Password:",
    "Account.PasswordReset.Confirm": "Confirm:",
    "Account.PasswordReset.Success": "Thank you. Your password has been changed.<br/><br/>You can now <a href='${0}'>log in</a>.",
    "Account.PasswordReset.Error.404": "Sorry, we could not find a password recovery key matching ${0}. Please try again.",
    "Account.PasswordReset.Error.PasswordMatch": "Passwords do not match.",

// Signup dialog
// =====================

    "Signup.Form.Username": "Username",
    "Signup.Form.FirstName": "First name",
    "Signup.Form.LastName": "Last name",
    "Signup.Form.EMailAddress": "Email address",
    "Signup.Form.Password": "Password",
    "Signup.Form.ConfirmPassword": "Confirm password",
    "Signup.Form.TOS": "I have read and agree to the Terms of Service.",
    "Signup.Form.Subscription.Name": "Subscription name",
    "Signup.Form.Subscription.Ticket": "Subscription ticket",
    "Signup.Form.Subscription.Uuid": "Subscription UUID",

    "Signup.Error.Main": "There was an error in the form.",
    "Signup.Error.MinLength": "Minimum number of characters required.",
    "Signup.Error.MaxLength": "Maximum number of characters exceeded.",
    "Signup.Error.RequiredField": "Required field.",
    "Signup.Error.ValidEMail": "Valid email address required.",
    "Signup.Error.MatchPassword": "Passwords do not match.",
    "Signup.Error.TOS": "Please read and agree to the Terms of Service.",
    "Signup.Error.UsernameInUse": "The username you entered is already in use. Please pick another username and try again.",
    "Signup.Error.UsernameInvalidLength": "Username must be between 3 and 32 characters.",
    "Signup.Error.UsernameIllegalChar": "Username contains illegal character ${1}.",
    "Signup.Error.UsernameBMP": "The character at index ${1} is outside the Basic Multilingual Plane.",
    "Signup.Error.UsernameControl": "The character at index ${1} is a control character.",
    "Signup.Error.FirstNameInvalidLength": "First name must be between 1 and 128 characters.",
    "Signup.Error.LastNameInvalidLength": "Last name must be between 1 and 128 characters.",
    "Signup.Error.PasswordInvalidLength": "Password must be between 5 and 16 characters.",
    "Signup.Error.EMailInUse": "The email address you entered is already in use. Please enter a different email address and try again.",
    "Signup.Error.AlreadyLoggedIn": "You are already logged in to Chandler Server. You cannot create a new account while logged in.",
    "Signup.Error.Generic": "An error occurred setting up the user account.",
    "Signup.Config.Server": "Server",
    "Signup.Config.Path": "Path",
    "Signup.Config.Username": "Username",
    "Signup.Config.Password": "Password",
    "Signup.Config.PortNumber": "Port number",
    "Signup.Config.UseSSL": "Use SSL",
    "Signup.Config.FullURL": "Full URL",
    "Signup.Links.LogInToCosmo": "Log in to Chandler Server with your new account.",
    "Signup.Prompt.AllFieldsRequired": "All fields are required.",
    "Signup.Prompt.Success": "You have successfully created your Chandler Server account.",
    "Signup.Prompt.AccountSetup": "Set up Chandler Desktop or your favorite calendar application to publish to Chandler Server.",
    "Signup.Prompt.AccountActivation": "Note: This account has not been activated. Please check your email to activate your account.",

// Main
// =====================

    "Main.Welcome": "Welcome, ${0}",
    "Main.Account": "Account",
    "Main.Calendar": "Calendar",
    "Main.Home": "Home Collection",
    "Main.Console": "Admin Console",
    "Main.About": "About Chandler Server...",
    "Main.SubscribeWith": "Subscribe with...",
    "Main.Preferences": "Preferences",
    "Main.Help": "Help",
    "Main.LogOut": "Log out",
    "Main.LogIn": "Log in",
    "Main.SignUp": "Sign up!",
    "Main.AccountBrowser": "Account Browser",
    "Main.Settings": "Settings",
    "Main.TermsOfService": "Terms of Service",
    "Main.PrivacyPolicy": "Privacy Policy",

    "Main.NavBar.QuickItemEntryHint": "Create a new item ",

    "Main.NewEvent": "New Event",
    "Main.DetailForm.ReadOnly": "You cannot make changes to items in this collection.",
    "Main.DetailForm.Error": "Error in item details",
    "Main.DetailForm.EMail": "Send an email notification",
    "Main.DetailForm.From": "From&nbsp;",
    "Main.DetailForm.To": "To&nbsp;",
    "Main.DetailForm.Cc": "Cc&nbsp;",
    "Main.DetailForm.Bcc": "Bcc&nbsp;",
    "Main.DetailForm.displayName": "Title",
    "Main.DetailForm.Location": "Location",
    "Main.DetailForm.startDate": "Starts",
    "Main.DetailForm.endDate": "Ends",
    "Main.DetailForm.At": "at",
    "Main.DetailForm.Timezone": "Time zone",
    "Main.DetailForm.Region": "Region...",
    "Main.DetailForm.TimezoneSelector.Timezone": "Time zone...",
    "Main.DetailForm.TimezoneSelector.None": "None",
    "Main.DetailForm.Status": "Status",
    "Main.DetailForm.rrule": "Occurs",
    "Main.DetailForm.Ending": "ends",
    "Main.DetailForm.Description": "Notes",
    "Main.DetailForm.Hide": "[Hide]",
    "Main.DetailForm.Show": "[Show]",
    "Main.DetailForm.Byline.DateFormat": "%D, at %l:%M:%S %p",
    "Main.DetailForm.Byline.Edited": "Item edited: ",
    "Main.DetailForm.Byline.Queued": "Item queued: ",
    "Main.DetailForm.Byline.Sent": "Item sent: ",
    "Main.DetailForm.Byline.Updated": "Item updated: ",
    "Main.DetailForm.Byline.Created": "Item created: ",
    "Main.DetailForm.Byline.Who": "By ",
    "Main.DetailForm.Byline.When": "On ",
    "Main.DetailForm.RecurrenceInterval.Once": "Once",
    "Main.DetailForm.RecurrenceInterval.Daily": "Daily",
    "Main.DetailForm.RecurrenceInterval.Weekly": "Weekly",
    "Main.DetailForm.RecurrenceInterval.Biweekly": "Biweekly",
    "Main.DetailForm.RecurrenceInterval.Monthly": "Monthly",
    "Main.DetailForm.RecurrenceInterval.Yearly": "Yearly",

    "Main.GoTo": "Go to",
    "Main.Processing": "Processing...",
    "Main.Prompt.ItemRemoveConfirm": "Remove this item?",

    "Main.Error.LoadItemsFailed": "Could not load items.",
    "Main.Error.InitCollectionCreateFailed": "Could not create default collection for new account.",
    "Main.Error.ItemNewSaveFailed": "Could not save new item.",
    "Main.Error.ItemEditSaveFailed": "Could not save changes to item.",
    "Main.Error.ItemRemoveFailed": "Could not remove item.",
    "Main.Error.ItemTimezoneMismatch": "Item's Start and End-times have different time zones.",
    "Main.Error.GoToDate": "Go to date error.",
    "Main.Error.Concurrency": "Someone else is editing this item right now.",
    "Main.Error.ItemDoesNotExist": "Item has been deleted from the server.",
    "Main.Error.SubscribedCollectionDeleted": "'${0}' has been deleted from the server.",
    "Main.Error.EventEditSaveFailed.EventRemoved": "Could not save edits. Event has been deleted from the server.",
    "Main.Error.EventEditSaveFailed.CollectionLocked": "Could not save edits. Collection is locked, please try again.",
    "Main.Error.CollectionRemoved": "'${0}' has been deleted from the server.",
    "Main.Error.NoCollectionsForItemSave": "No collections loaded. Please create a new collection in which to save your item.",

    "Main.CollectionAdd.AttemptPrompt": "Adding collection to your account...",
    "Main.CollectionAdd.SuccessPrompt": "Logging into Chandler Server...",
    "Main.CollectionAdd.ErrorPrompt": "Error: Could not add this collection to your account.",
    "Main.CollectionAdd.RedirectPrompt": "Redirecting to your collections...",
    "Main.CollectionAdd.Prompt": "Add to my account...",
    "Main.CollectionAdd.AuthPrompt": "Enter your username and password, and click Log in.",
    "Main.CollectionAdd.Tooltip": "Add this collection to your Chandler Server account.",
    "Main.CollectionAdd.LoadingInfo": "Loading subscription information...",

    "Main.CollectionDetails.NameLabel": "Name",
    "Main.CollectionDetails.ChangeName": "Change Name",
    "Main.CollectionDetails.CalendarLabel": "Calendar",
    "Main.CollectionDetails.CollectionAddress": "URL",
    "Main.CollectionDetails.For.ics": "For .ics Calendar",
    "Main.CollectionDetails.For.atom": "For Feed Reader",
    "Main.CollectionDetails.For.chandler": "For Chandler Desktop",
    "Main.CollectionDetails.Instructions.1": "Copy and paste the URL below into the appropriate application.",
    "Main.CollectionDetails.Instructions.2": "(You can hold down the right mouse button to 'copy link location'.)",
    "Main.CollectionDetails.Close": "Close",
    "Main.CollectionDetails.SelectYourClient": "Subscribe with",
    "Main.CollectionDetails.Delete": "Delete",
    "Main.CollectionDetail.Tooltip": "View details for this collection.",
    "Main.CollectionAdd.AlreadySubscribedOwnCollection": "This collection already exists in your account. ",
    "Main.CollectionAdd.AlreadySubscribedToSubscription": "You are already subscribed to this collection.",
    "Main.CollectionAdd.DisplayNameExistsPrompt": "You already have a collection named '${0}'. Please choose a different name.",
    "Main.CollectionAdd.EnterDisplayNamePrompt": "Please enter a new name.",

    "Main.CollectionDetails.Client.Chandler": "Chandler Desktop",
    "Main.CollectionDetails.Client.Outlook": "Outlook",
    "Main.CollectionDetails.Client.Evolution": "Evolution",
    "Main.CollectionDetails.Client.iCal": "Apple iCal",
    "Main.CollectionDetails.Client.Sunbird": "Sunbird",
    "Main.CollectionDetails.Client.FeedReader": "Feed Reader",
    "Main.CollectionDetails.Client.Download": "Download calendar and tasks",
    "Main.CollectionDetails.Client.Other": "Other...",

    "Main.CollectionDetails.Instructions.Chandler.1": "1. Copy URL to the clipboard.",
    "Main.CollectionDetails.Instructions.Chandler.2": "2. Start up Chandler. Go to the 'Share' menu and select 'Subscribe...'.",
    "Main.CollectionDetails.Instructions.Chandler.3": "3. Paste the URL into the 'URL' field.",
    "Main.CollectionDetails.Instructions.Chandler.4": "4. Click 'Subscribe'.",
    "Main.CollectionDetails.Instructions.iCal.1": "1. Copy the URL below to the clipboard.",
    "Main.CollectionDetails.Instructions.iCal.2": "2. Start up iCal. Go to the 'Calendar' menu and select 'Subscribe...'.",
    "Main.CollectionDetails.Instructions.iCal.3": "3. Paste the URL into the 'URL' field.",
    "Main.CollectionDetails.Instructions.iCal.4": "4. Click 'Subscribe'. (Note: iCal will ask you for your username and password when subscribing to this collection.)",
    "Main.CollectionDetails.Instructions.icalNotSupported.1": "Unfortunately Chandler Server only supports Https connections, which Apple iCal cannot currently access.",
    "Main.CollectionDetails.Instructions.FeedReader.1": "Subscribe with the URL below.",
    "Main.CollectionDetails.Instructions.Download.1": "Save the task and events in this collection to an .ics file on your desktop. Import the file into your favorite calendar application.",
    "Main.CollectionDetails.na": "N/A",
    "Main.CollectionDetails.webcal": "WebCal",
    "Main.CollectionDetails.caldav": "CalDAV",
    "Main.CollectionDetails.atom": "Atom",
    "Main.CollectionDetails.protocolInstructions": "Subscribe with the appropriate URL below.",
    "Main.CollectionDetails.Save": "Save",
    "Main.CollectionDetails.Help": "Help",
    "Main.CollectionDetails.ClickHere": "Click Here",
    "Main.CollectionDetails.HelpLink": "http://chandlerproject.org/Projects/SubscribeToChandlerServer",
    "Main.CollectionDetails.ChandlerPlugDownload": "http://chandlerproject.org/download",
    "Main.CollectionDetails.ChandlerPlug": "Don't Have Chandler Desktop? ${0}Download here${1}.",
    "Main.CollectionDetails.LinkImageToolTip": "Link to '${0}'",

    "Main.NewCollectionPrompt": "(You have no collections to put your items in. Add a collection by clicking on the \"New collection\" link below.)",
    "Main.NewCollectionLink": "New collection...",
    "Main.NewCollection.DefaultName": "Untitled",
    "Main.NewCollection.NameInUse": "This name is already in use.",
    "Main.NewCollection.NamePrompt": "What would you like to name this collection?",

    "Main.DeleteCollection.Confirm": "Are you sure you want to delete ${0}? <br/>This will delete all data in this collection.",
    "Main.DeleteCollection.Failed": "Attempt to delete ${0} failed.",

    "Main.DeleteSubscription.Confirm": "Are you sure you want to unsubscribe from ${0}?",

    "Main.Prompt.RecurRemoveConfirm": "This is a recurring item. Which items in the series would you like to remove?",
    "Main.Prompt.RecurSaveConfirm": "This is a recurring item. Which items in the series do you wish to change?",
    "Main.Prompt.RecurButtonAll": "All Items",
    "Main.Prompt.RecurButtonFuture": "All Future Items",
    "Main.Prompt.RecurButtonOnly": "Only This Item",
    "Main.Prompt.RecurSaveConfirmAllItemsOnly": "This is a recurring item -- this will change all items in the series. Save this change?",
    "Main.Prompt.RecurRemoveConfirmAllItemsOnly": "This is a recurring item -- this will remove all items in the series from this collection. Remove these items?",

    "Main.Prompt.UnsavedChangesConfirm": "You have unsaved changes in the item-detail form. What do you want to do?",
    "Main.Prompt.UnsavedChangesDiscard": "Discard Changes",
    "Main.Prompt.UnsavedChangesSave": "Save Changes",

    "Ticket.Error.Privilege": "You must select a privilege.",
    "Ticket.Error.Timeout": "Invalid timeout.",

    "AccountSettings.Title": "Settings",
    "AccountSettings.General": "General",
    "AccountSettings.Advanced": "Advanced",
    "AccountSettings.About": "About Chandler Server",
    "AccountSettings.Prompt.BlankPassword": "Leave Password and Confirm Password blank for no change.",
    "AccountSettings.Error.Load": "There was an error loading your account settings.",
    "AccountSettings.Error.Update": "There was an error updating your account settings.",
    "AccountSettings.Advanced.AccountBrowser": "Turn on access to Account Browser",

    "About.HeadTitle": "Chandler Server | About",
    "About.LogoAltText": "Chandler Server",
    "About.Version": "Version ${0}",
    "About.VersionString": "Version",
    "About.LogoLink": "http://chandlerproject.org",
    "About.LicenseLink": "http://www.apache.org/licenses/LICENSE-2.0",
    "About.License": "Chandler Server is licensed under the ${0}Apache License, Version 2.0${1}.",
    "About.InfoLink": "http://chandlerproject.org",
    "About.Info": "Visit ${0}chandlerproject.org${1} for more information.",
    "About.NoticesUrl": "/NOTICE.txt",
    "About.Width": "500",
    "About.Height": "500",

    "Sidebar.Email.Title": "Title:",
    "Sidebar.Email.TimeFormat": "%m/%d/%Y at %I:%M %p",
    "Sidebar.Email.Timezone": "Time zone:",
    "Sidebar.Email.Starts": "Starts:",
    "Sidebar.Email.Ends": "Ends:",
    "Sidebar.Email.AllDay": "This is an all-day item.",
    "Sidebar.Email.Recurs": "This item recurs",
    "Sidebar.Email.EndingOn": " ends on",
    "Sidebar.Email.Status": "Status:",
    "Sidebar.Email.Description": "Notes:",

    "Dashboard.ColHeaders.Title": "Title",
    "Dashboard.ColHeaders.UpdatedBy": "Edited by",
    "Dashboard.ColHeaders.StartsOn": "Starts on",
    "Dashboard.ColHeaders.Triage": "Triage",
    "Dashboard.ListEntry.TriageNow": "NOW",
    "Dashboard.ListEntry.TriageLater": "LATER",
    "Dashboard.ListEntry.TriageDone": "DONE",

    "Service.Error.ProblemGettingItems": "There was a problem getting items from the server. Please reload the page, or try again later. ",

    "Error.DeferredPrimary": "Error in Deferred:",
    "Error.DeferredSecondary": " ",
    "Error.Rendering": "Error rendering ${0}",
    "Error.NoCollections": "Sorry, you do not have any collections.",

    "TermsOfService.HeadTitle": "Chandler Server | Terms of Service",
    "TermsOfService.Body": "Insert terms of service here.",
    "TermsOfService.Width": "400",
    "TermsOfService.Height": "400",

    "PrivacyPolicy.HeadTitle": "Chandler Server | Privacy Policy",
    "PrivacyPolicy.Body": "Insert privacy policy here.",
    "PrivacyPolicy.Width": "400",
    "PrivacyPolicy.Height": "400",

// General validation messages
    "Validation.MatchRegExp": "String ${0} does not match ${1}.",
    "Validation.DoesNotMatchRegExp": "String ${0} contains ${1}.",
    "Validation.NonBMPChar": "Character with code point ${0} at index ${1} is a Unicode surrogate, so the character it represents is outside the Basic Multilingual Plane.",
    "Validation.ControlChar": "Character with code point ${0} at index ${1} is a control character."
})