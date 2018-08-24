/**
 * User: Doron Sinai
 * Date: 1/19/14, Time: 10:22 AM
 */
(function () {
    if (!window.emLocales) {
        window.emLocales = {};
    }
    window.emLocales["en-US"] = {
        "$": {
            "locale": "en-US",
            "test": {
                "yesText": "yes",
                "noText": "no",
                "someTextWithParams": "This {{0}} a string {{1}} params"
            }
        },
        "units": {
            "seconds-full": "seconds",
            "second-full": "second",
            "giga-bytes": "GB",
            "mega-bytes": "MB",
            "kilo-bytes": "KB",
            "bytes": "B",
            "percentage": "%",
            "hours": "hours",
            "hour": "hour",
            "minutes": "minutes",
            "minute": "minute",
            "mili-seconds": "ms",
            "seconds": "s",
            "throughput": "calls/min",
            "throughput-short" : "c/m"
        },
        "number": {
            "thousands": "K",
            "millions": "M",
            "billions": "G"
        },
        "month-names-short": ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

        "messageBox": {
            "search": "Search",
            "EditButton": "Edit",
            "CancelButton": "Cancel",
            "OKButton": "OK",
            "YesButton": "Yes",
            "NoButton": "No",
            "CloseButton": "Close",
            "SysError": "System Error",
            "GeneralError": "Error",
            "DeleteButton": "Delete",
            "RemoveButton": "Remove"
        },
        "timeFilter": {
            "pastFiveMinutes": "Last 5 minutes",
            "pastTwentyMinutes": "Last 20 minutes",
            "pastThirtyMinutes": "Last 30 minutes",
            "pastHour": "Last Hour",
            "pastTwelveHours": "Last 12 Hours",
            "pastDay": "Last 24 Hours",
            "pastWeek": "Last 7 Days",
            "pastMonth": "Last 30 Days",
            "pastThreeMonth": "Last 90 Days",
            "pastYear": "Last Year",
            "custom": "Custom...",
            'dateFormatHeader': "MMM dd",
            'dateFormatFooter': 'MMM dd yyyy',
            'selectRange': 'Select Range',
            'rangePermitted': '(up to {{0}} days back)',
            "tooltip": "From {{0}} - to {{1}}",
            'apply': 'Apply',
            'cancel': 'cancel',
            'timeFilter': 'Time Filter',
            'freemiumTooltip': 'Available for Premium'

        },
        "statusFilter": {
            "all": "All",
            "critical": "Critical"
        },
        "mastHead": {
            "app-name": "AppPulse",
            "app-name-trace": "Trace",
            "logout": "Logout",
            "license": "License",
            "integration": "Integration",
            "privacy-statement": "Privacy Statement",
            "text-video1": "AppPulse Mobile in a heartbeat",
            "text-video2": "How to get started on Android apps",
            "text-video3": "How to get started on iOS apps",
            "gettingStarted": "Getting Started",
            "add-demo-app": "Add demo app to dashboard",
            "help-button": "Help",
            "settings-button": "Settings"
        },

        "onBoarding": {
            "download-agent-error-header": "Download Agent File",
            "download-agent-error-msg": "Error occurred while trying to download agent file.",
            "download-agent-info-msg": "<p>Use a non-mobile device to download the agent.</p>",

            "download-agent-new-application-created-header": "New Application Created",
            "download-agent-new-application-created-msg": "Application [{{0}}] has been created.",
            "application-name-error-header": "Application Name Error",
            "application-name-error-msg": "Application name [{{0}}] is already in use.",

            "app-pulse-demo-video-name": "AppPulse Trace",
            "app-pulse-demo-video-length": "Demo 3:59",
            "app-pulse-getting-started-video-name": "Getting Started",
            "app-pulse-getting-started-video-length": "2:24",

            "download-agent-modal-header-add-app": "Add New Application",
            "download-agent-modal-header-download-agent": "Download Application Agent",

            "header-line-hello": "Hello",
            "header-line-welcome": "Welcome to AppPulse Trace",
            "diag-header-line-welcome": "Welcome to Diagnostics new UI",
            "header-line-desc1": "Get visibility into transaction flow, code and logs.",
            "diag-header-line-desc1": "Get visibility into transaction flow, code and logs.",
            "header-line-desc2": "Investigate problematic transactions using drill from AppPulse Mobile, Active and Web.",
            "diag-header-line-desc2": "",
            "diag-content-line1": "The new UI of Diagnostics is designed to focus the user on the most important flows and metrics.",
            "diag-content-line2": "In Diagnostics New UI each Application in the langing page represents a probe group, they will aggregate and display metric data accordingly.",
            "diag-content-line3": "You will be able to see a new 360 view of your Top Level Requests view.",

            "dotnet-type-not-supported-tooltip": "We are working on making .NET application monitoring available as soon as possible",
            "node-type-not-supported-tooltip": "We are working on making NODE.js application monitoring available as soon as possible",
            "php-type-not-supported-tooltip": "We are working on making PHP application monitoring available as soon as possible",

            "modal-add-button": "Add",
            "modal-header-new-app": "Start monitoring your application with AppPulse Trace",
            "modal-header-existing-app": "Download and deploy your application agent",

            "steps-name-your-app": "Name your application",
            "steps-app-name": "Application Name",
            "steps-app-created-successfully": "Application Created Successfully",
            "steps-app-input-placeholder": "Enter application name",
            "steps-input-invalid-error": "Valid characters are: A-Z, a-z, 0-9, and ( ) . _ - <space>",
            "steps-select-app-to-install": "Select the application agent to install",
            "steps-download-agent": "Download the agent",
            "steps-download-agent-java": "Download Java agent",
            "steps-download-agent-dotnet": "Download .NET IIS agent",
            "steps-download-agent-button": "Download Agent",
            "steps-install-agent": "Deploy the agent",
            "steps-install-agent-description": "Deploy the downloaded agent on the application server",
            "steps-install-instructions-1": "Unzip the downloaded agent file into the Application Server Home directory.",
            "steps-install-instructions-2": "Navigate to <application server home>/AppPulseJavaAgent/lib",
            "steps-install-instructions-3": "java -jar AppPulseAgent.jar setup",
            "steps-install-instructions-3-run": "Run: ",
            "steps-install-instructions-4": "More Details",
            "steps-restart-app-server": "Restart the application server",
            "steps-restart-app-server-dotnet": "Restart the IIS application server",
            "steps-view-app-data": "View application data",
            "steps-view-app-data-description-page": "In a few minutes, your application will send data to AppPulse Trace and you can start monitoring your application's performance. View the application in the",
            "steps-view-app-data-description": "Generate traffic and wait a few minutes to view  ",
            "steps-app-dashboard-link": "data.",

            "steps-dotnet-restart-server-tooltip-title": ".NET Agent",
            "steps-dotnet-restart-server-tooltip-content": "If you did not restart the application server as part of the .NET installation, restart it now.",
            "steps-install-dotnet-instruction-permissions": "Run the .NET agent installer using administrative permissions on  the same machine as your IIS server.",
            "steps-install-dotnet-instruction": "Copy the following <b>Installation token</b> to the installation wizard:",

            "steps-dotnet-deploy-tooltip-title-1": ".NET installation wizard screen",
            "steps-dotnet-deploy-tooltip-title-2": "The installation token can also be viewed in the application's settings window.",
            "copy-to-clipboard": "Copy key to clipboard",
            "copy-to-clipboard-key-tooltip": "Click the Copy icon to copy this token to your clipboard"
        },
        "compatibility": {
            "message": "We recommend you use AppPulse Trace on the following browsers:",
            "ie-support": "Internet Explorer 11 and higher*",
            "firefox-support": "Firefox",
            "chrome-support": "Google Chrome",
            "safari-support": "Safari",
            "header": "Recommended Browsers",
            "footer": "* please verify you are not using compatibility view"
        },
        "common": {
            "loading-mask": {
                "loading": "Loading...",
                "failed-loading": "Failed to load data"
            },
            "grid": {
                "filter-all": "All"
            },
            "donut": {
                "other-slice-title": "Others"
            }
        },
        "license": {
            "popupWindow": {
                "licenseExpired": {
                    "title": "License Expired",
                    "line1": "Time flies when you're having fun!",
                    "line2": "Your license has expired.",
                    "line3": "To keep on enjoying AppPulseTrace, buy a license today!",
                    "later": "Later",
                    "contactSales": "Contact Sales"
                },
                "capacityExceeded": {
                    "title": "License Capacity Exceeded",
                    "line1": "Your current license is for {{0}} OS instance(s) only, but you are monitoring {{1}} OS instances.",
                    "buyMoreLicenses": "Buy more licenses",
                    "buyALicense": "Buy a license",
                    "line2": " to monitor additional OS instances.",
                    "later": "Later",
                    "contactSales": "Contact Sales"
                }
            }
        },
        "integration": {
            "pageTitle": "Integrations",
            "back": "Back",
            "mqm": {
                "title": "Micro Focus ADM",
                "description": "Not configured",
                "instructions": "Use these parameters to configure Micro Focus ADM",
                "providerURL": "AppPulse Trace URL:",
                "tenantID": "Tenant ID:",
                "userName": "User Name:",
                "password": "Password:",
                "buttonShow": "Show Credentials",
                "buttonHide": "Hide Credentials"
            }
        },
        "userLicense": {

            "licenseTypes": {
                "trial": "Complementary",
                "express": "Express",
                "premium": "Premium",
                "freemium": "Community Edition"
            },

            "licenseDetailsWindow": {
                "header": "License | AppPulse Trace",
                "licenseMessage": {
                    "licenseExpired": "Your license has expired.",
                    "osiCapacityExceeded": "You have exceeded your license.",
                    "default": "Do you need to monitor more Operating Systems?",
                    "buyLicenseButton": "Contact Us",
                    "butLicenseButtonFreemuim": "Buy License"
                },
                "usageSummary": {
                    "title": "License Usage Summary",
                    "osi": "OS Instances",
                    "usage": "Using {{0}} out of {{1}} OS instances included in your license",
                    "usage-exceeded": "Using {{0}} OS instances, license includes {{1}}.",
                    "helpToolTip": {
                        "text": "What happens now?",
                        "title": "License Exceeded",
                        "content": "You have purchased a license for {{0}} OS instances, but are actually monitoring {{1}}. " +
                        "Contact sales to upgrade your license so that you won’t lose data.",
                        "content-freemuim": "You are using AppPulse Community edition.</br><a href='{{0}}' target='_blank' class='buy-license'>Buy a license</a> to monitor more operating systems.",
                        "tooltip-osi-many-many": "You have purchased license for {{0}} OS Instances, and currently monitoring {{1}} OS Instances.",
                        "tooltip-osi-many-single": "You have purchased license for {{0}} OS Instances, and currently monitoring 1 OS Instance."
                    },
                    "license-exceeded": "License exceeded by {{0}}!",
                    "license-details-freemium": "Free monitoring of 1 OS instance, with data retention of 7 days."
                },
                "licenseDetails": {
                    "title": "License Details",
                    "type": "Type",
                    "expires": "Expires",
                    "expired": "Expired",
                    "noExpiration": "No Expiration date"
                },
                "licenseTerms": "View License Terms"
            }
        },
        "licenseMsg": {
            "license-reached-limit": "You have reached the license limit of the number of users on one or more of your apps.",
            "app-license-reached-limit": "You have reached the license limit of the number of users on this app.",
            "view-license": "View license to upgrade",
            "license-expired": "Your license has expired!",
            "license-expired-trial": "Your trial has expired!",
            "license-about-to-expire": "Your license expires in {{0}} days.",
            "license-day-to-expire": "Your license expires in 1 day.",
            "license-today-expire": "Your license expires today.",
            "license-about-to-expire-trial": "Your trial expires in {{0}} days.",
            "license-day-to-expire-trial": "Your trial expires in 1 day.",
            "license-today-expire-trial": "Your trial expires today.",
            "manage-license": "Manage your license",
            "renew-license": "Renew your license",
            "buy-license": "Buy a license"
        },
        "and": "and",

        "datePicker": {
            "next": "next",
            "prev": "prev",
            "January": "January",
            "February": "February",
            "March": "March",
            "April": "April",
            "May": "May",
            "June": "June",
            "July": "July",
            "August": "August",
            "September": "September",
            "October": "October",
            "November": "November",
            "December": "December",
            "Monday": 'M',
            "Tuesday": 'T',
            "Wednesday": 'W',
            "Thursday": 'T',
            "Friday": 'F',
            "Saturday": 'S',
            "Sunday": 'S'
        },
        "landingPage": {
            "browser-support": {
                "title": "Recommended Browsers",
                "sub-title": "We recommend you use AppPulse Trace on the following browsers:<br>",
                "body": "<ul><li>Chrome</li><li>Internet Explorer 11</li><li>Edge</li><li>FireFox</li><li>Safari 9</li></ul>"

            },
            "demo-app": "Demo",
            "imported-app": "Imported App",
            "edit-application": "Settings",
            "remove-application": "Delete",
            "add-application": "Add Application",
            "options": "Options",
            "refresh": "Refresh",
            "waiting-for-data": "No data yet",
            "active-users-num-24h": "Active Users (Last 24 Hours)",
            "my-apps": "Applications",
            "application": "Application",
            "no-application": "Application not found!",
            "agent-downloaded": "No data yet",
            "options-demo": "Remove Demo App",
            "delete-application": "Delete Application",
            "delete-app-from-web": "This app can only be \ndeleted from AppPulse Web.",
            "delete-application-demo": "Remove Demo Application",
            "confirm-delete": "You are about to delete the '{{0}}' application. The application will no longer be monitored and historic data will be deleted.<br/>After deletion, remove the monitoring agents. Follow the instructions <a class=\"color-text--link\" target=\"_blank\" href=\"{{1}}\">here</a>.",
            "cannot-show-details-delete-application": "The application you are trying to view has been deleted.",
            "confirm-delete-demo": "You are about to remove the demo application from your dashboard.<br><br>However, you can always bring it back if needed.",
            "add-first-app": "Add your first app here :)",
            "add-app-hint": "Add another app here :)",
            "add-app-modifier": "It only takes a few minutes.",
            "add-app-viewer": "You need permissions to add an application. Please contact your admin.",
            "click-demo-app": "Click on the demo app to explore our great features.",
            "first-app-hint": "Your first application has been added and is waiting to receive data. Click the link to see some of the reasons why it may not have data yet.",

            "what-to-do": "What should I do to see data?",
            "no-data-yet-footer-text" : "Deploy agent to get started",
            "no-data-yet-footer-not-authorized": "You need permissions to download application agent. Please contact your admin.",
            "application-waiting-for-data-footer-text-multiple": "{{0}} agents connected. \nGenerate traffic to see data...",
            "application-waiting-for-data-footer-text-single": "1 agent connected. \nGenerate traffic to see data...",
            "application-waiting-for-data-title": "No Data Yet",
            "application-download-server-busy-title": "Server is busy",
            "application-download-server-busy-message": "The download server is currently busy with other requests. Try again later.",

            "application-waiting-for-data-body-single": "1 agent has successfully connected and is ready to start monitoring.<br>Generate traffic for your application and in a short time you'll see data.",
            "application-waiting-for-data-body-multiple": "{{0}} agents have successfully connected and are ready to start monitoring.<br>Generate traffic for your application and in a short time you'll see data.",
            "download-agent-button": "Download Agent",
            "transactions-link-text": "Transactions",
            "services-link-text": "Application Health",
            "operation-link-text": "Operations",
            "services-drill-link-text": "Service Overview",
            "responseTime": "Transaction Server Time",
            "failureRate": "Transactions Failed",
            "services": "Services with problems ",
            "throughputUnits": "Calls/min",
            "servicesOk" : "All services \nare OK",
            "servicesWithProblems" : "of {{0}} services \nwith problems",
            "serviceWithProblems" : "of {{0}} service \nwith problems",
            "servicesNoData" : "No data on \nservices"
        },
        "applicationAdmin": {
            "application-settings": "Application Settings",
            "application-details": "Application Details",
            "application-name-required": "Application name (required)",
            "application-key": "Application key",
            "add-new-application": "Add New Application",
            "name": "Application name",
            "platform-type": "Platform",
            "key": "Key",
            "threshold": "Action response-time threshold",
            "cellular-data-usage-threshold": "Cellular data usage",
            "launch-time-threshold": "Launch time threshold",
            "battery-usage-threshold": "Battery usage",
            "cellular-data-usage-threshold-explanation": "Updated threshold will be applied to newly reported user actions.",
            "threshold-time-unit": "seconds",
            "battery-usage-threshold-unit": "%/Minute",
            "cellular-usage-threshold-unit": "KB/Minute",
            "enable-monitoring": "Enable monitoring",
            "enable": "On",
            "disable": "Off",
            "enable-monitoring-explanation": "Select \"Off\" to stop data collection from this application",
            "threshold-error": "Invalid Threshold. Threshold should be a number between 0 and 99",
            "active": "Active",
            "platform-type-android": "Android",
            "platform-type-ios": "iOS",
            "platform-type-ios-soon": "iOS - Coming soon",
            "created-successfully": "Application '{{0}}' was created successfully.",
            "app-key-message": "Application Key: ",
            "failed-to-load": "Failed to load application details: {{0}}",
            "operation-failed": "Operation Failed: {{0}}",
            "application": "Application",
            "auto-generated": "Auto generated",
            "alpha-numeric": "Alpha-Numeric string of 10 characters",
            "platform": "Platform",
            "ok": "OK",
            "cancel": "Cancel",
            "download-instrumentation-1": "Download",
            "download-instrumentation-2": "AppPulse Mobile SDK",
            "user-action-monitoring": "Performance Threshold",
            "resource-utilization-title": "Resource Utilization Threshold",
            "threshold-explanation": "The new threshold will be applied to newly reported user actions",
            "launch-time-threshold-explanation": "The new threshold will be applied to newly reported launches",
            "battery-usage-threshold-explanation": "Updated threshold will be applied to newly reported user actions.",
            "threshold-instruction": "This threshold is used to monitor user-action performance",
            "utilization-thresholds-instruction": "These thresholds are used to monitor battery and cellular data usage of your app.",
            "monitoring-your-app": "Setting up Your App",
            "download-instruction-open": "Download",
            "download-instruction-app-pulse-sdk": "AppPulse SDK",
            "download-instruction-android1": ", and run this command line (open",
            "download-instruction-android2": "Windows > Start > cmd)",
            "download-instruction-android3": "For more details and advanced options see the 'Setting up Android Apps' pdf in the SDK.",
            "download-instruction-ios": ", and follow the instructions in the 'Setting up iOS Apps' pdf in the SDK.",
            "cmd-line-1": "<path to SDK>\\AppPulse_mobile.bat -appkey ",
            "cmd-line-2": " <path to your APK file>",
            "download-instruction-title": "What's Next?",
            "applicationCreated": "Application created successfully!",
            "app-name-validation": "Invalid character",
            "app-threshold-example": "e.g: 1.5",

            "add-application-title": "Add New Application",
            "your-application-name": "Your Application Name",
            "choose-platform": "Choose Platform",
            "create-application": "Create Application",
            "app-name-placeholder": "Enter name here",
            "footer-header": "Quick look at what's inside",
            "iosComingSoon": "iOS support coming soon!",
            "gettingStartedLink": "How to get started",
            "license-expired": "License Expired",
            "demo_application_error": "Delete Application Error",
            "demo_application_deletion_failure": "Could not delete application since it is configured as Demo Application",
            "app_name_in_use": "Application name already in use",
            "thresholds_title": "Thresholds",
            "thresholds_description": "The following thresholds determine the status of the application's services and nodes. If a threshold is breached, the application will be displayed as having a performance or availability problem",
            "diag_thresholds_description": "The following thresholds determine the status of the application. If a threshold is breached, the application will be displayed as having a performance or availability problem",
            "thresholds_error_rate": "Failed operations threshold",
            "thresholds_latency": "Average operation response time threshold",
            "thresholds_latency_units": "ms",
            "thresholds_error_rate_units": "%",

            "addAndroidApp": {
                "title": "Add AppPulse Mobile to Android App",
                "step-1": {
                    "title": "DOWNLOAD SDK",
                    "download": "Download",
                    "change-to-unix": "Change to UNIX"
                },

                "step-2": {
                    "title": "REBUILD YOUR APK",
                    "instruction-1": "First, obtain your APK file",
                    "instruction-2": "Then, extract the SDK you downloaded and run this command",
                    "app-key": "App key for ",
                    "whatThis": "What's this",
                    "example": "Example: ApplyMobileUX.bat -appkey 000000 c:\\MyApplication\\MyApp.APK",
                    "note": "Note: You need to have ",
                    "noteJRE": "JRE 7",
                    "noteJREver": " (or later)",
                    "moreFeatures": "More features",
                    "hideFeatures": "Hide features"
                },
                "step-3": {
                    "title": "INSTALL NEW APK",
                    "instruction-1": "Now install the new APK on a device or emulator",
                    "instruction-2": "Run your app and in just a few minutes you'll see your data!"
                },
                "share": "Share",
                "shareMsg": " this with someone else",
                "dashboardButton": "Continue to Dashboard",
                "appCreateSuccessfullyMsg": "Application created successfully",
                "editButton": "Edit",
                "android": "(Android)"
            }
        },
        "sideMenu": {

            "collapse" : "Collapse",
            "expand" : "Expand",
            "beta": "Beta",

            "home": "Home",

            "monitoring" :{
                "main" : "MONITORING",
                "items" : {
                    "transaction" : "Transactions",
                    "services" : "Application Health",
                    "service" : "Services"
                }
            },

            "configuration": {
                "main": "CONFIGURATION",
                items: {
                    "configuration": "Configuration"
                }
            }
        },

        "webPages": {
            "title": "Web Pages List",
            "pageName": "Page Name",
            "throughput": "Throughput (tph)",
            "latency": "Latency (ms)",
            "latencyTrend": "Latency Details",
            "gridSlowestTitle": "Slowest Pages",
            "gridMostUsedTitle": "Most Used",
            "dropDownLeftTitle": "Select data type",
            "backToPages": "Back",
            "backToPagesTooltip": "Back to Page",
            "drillToTrx": "Investigate Server Time",
            "drillToErrTrx": "Investigate Server Failure",
            "trends": {
                "latency": "Latency (ms)",
                "errorRate": "Error Rate",
                "throughput": "Throughput (rpm)"
            }
        },

        "callTrace": {
            "method": "Method",
            "selfLatency": "Self Latency",
            "contributionLatency": "Contribution Latency",
            "modal-header": "Call Profile",
            "transactionInstance": "Transaction Instance",
            "url": "URL",
            "name": "Transaction Name",
            "backToTransaction": "Back",
            "backToTransactionTooltip": "Back to Transaction",
            "backMobileErrors": "Back to Mobile Errors",
            "backToActive": "Back to AppPulse Active",
            "slowestCallsSummaryTitle": "Slowest Calls",
            "slowestCallsSummaryTitleTooltip": "Displays up to the 20 slowest instances",
            "mostRecentFailuresSummaryTitle": "Failures Calls",
            "mostRecentFailuresSummaryTitleTooltip": "Displays up to the 20 most recent failed instances",
            "transaction": "Transaction",
            "serverTime": "Server Time",
            "exceptions": "Exceptions",
            "httpStatus": "HTTP Status",
            "navigateToAggregatedTransaction": "Go to Transaction Over Time",
            "instanceTitleDrill": "Failed Call",
            "instanceTitleNotDrill": "Slow Call",
            "viewSummaryListButton": "View Call List",
            "viewTransactionInstanceButton": "View Selected Call",
            "timeLine": "TRANSACTION TIMELINE"
        },

        "summaryBox": {
            "backToTitle": "Back",
            "latencyClientTitle": "Response Time",
            "latencyUnits": "sec",
            "latencyServerUnits": "ms",
            "latencyClientUnits": "ms",
            "throughputUnits": "calls/min",
            "errorsServerUnits": "%",
            "server": "Server time (avg)"
        },

        "operationOverview": {
            "operationOverTime": "Operation Over Time",
            "summaryBox": {
                "nameTitle": "Operation",
                "backButtonTooltip": "Back to Service Health",
                "typeTitle": "Operation Type",
                "throughputTitle": "Operation Calls/min",
                "errorsTitle": "of operations failed",
                "errorsDetails": "of operations are failed",
                "latencyServerTitle": "Server Time (avg)",
                "throughputServerUnits": "calls/min"
            },
            "infoTooltip": {
                "errorRate": {
                    "title": "Percent of failed operations",
                    "contents": "Percentage of failed requests (for example, those ending with an HTTP 5xx response code)."
                }
            },
            trends: {
                "throughput": {
                    "throughputGraphTitle": "Operation Calls",
                    "throughputTotalLegend": "Total of {{0}} operation calls during the {{1}}"
                }
            },
            callTrace : {
                "viewSummaryListButton": "View Operation Instances",
                "viewTransactionInstanceButton": "View Selected Instance",
                "timeLine": "OPERATION TIMELINE",
                "backToTooltip": "Back to Operation"
            },
            "transactionTrend_throughput_server":"Operation Calls",
            "transactionTrend_errors_server":"of operations failed",
            "transactionTrend_errors_total":"Total of {{0}} operation failures during the {{1}}",
            "transactionTrend_error_total":"Total of 1 operation failure during the {{0}}",
            "noErrors":"No Operation Failures"

        },

        "serviceList": {
            "dropDownFilterTitle" : "Order by:",
            "serviceName": "Service",
            "status": "Status"
        },

        "transactionList": {
            "summaryBox": {
                "nameTitle": "Transaction",
                "typeTitle": "Transaction Type",
                "throughputTitle": "Transaction Calls/min",
                "errorsTitle": "of transactions failed",
                "errorsDetails": "of transactions are failed",
                "latencyServerTitle": "Server Time (avg)",
                "throughputServerUnits": "calls/min",
                "backButtonTooltip": "Back"
            },

            "infoTooltip": {
                "errorRate": {
                    "title": "Percent of failed transactions",
                    "contents": "Percentage of failed requests (for example, those ending with an HTTP 5xx response code)."
                }
            },

            trends: {
                "throughput": {
                    "throughputGraphTitle": "Transaction Calls",
                    "throughputTotalLegend": "Total of {{0}} transaction calls during the {{1}}"
                }
            },
            callTrace : {
                "viewSummaryListButton": "View Call List",
                "viewTransactionInstanceButton": "View Selected Call",
                "timeLine": "TRANSACTION TIMELINE",
                "backToTooltip": "Back to Transaction"
            },

            "transactionTrend_throughput_server":"Transaction Calls",
            "transactionTrend_errors_server":"of transactions failed",
            "transactionTrend_errors_total":"Total of {{0}} transaction failures during the {{1}}",
            "transactionTrend_error_total":"Total of 1 transaction failure during the {{0}}",
            "noErrors":"No Transaction Failures",


            "transactionOverTime": "Transaction Over Time",
            "transactionTraces": "Transaction Traces",
            "transactionsText": "Transactions",
            "title": "Transaction List",
            "breakdown": "Transaction BreakDown",
            "details": "Transaction Details",

            "logsTab": "Log",
            "logsTabNoData": "There are no log messages for this transaction instance",
            "codeTab": "Code",
            "graphTab": "Operations",
            "logsSR": "Operation",
            "logsHostName": "Hostname",

            "exceptionTab": "Exceptions",
            "exceptionsTabNoData": "There are no exceptions for this transaction instance",
            "showMoreText": "Show more",
            "showLessText": "Show less",
            "methodClickTooltip": "Click to view the exception in the operation's method flow",

            "dropDownFilterTitle": "Order by:",

            "throughput": "Volume (calls/min)",
            "latencyServer": "Server Time (ms)",
            "latencyClient": "End User Time (sec)",
            "timeConsuming": "Time Consuming (%)",

            "gridServerSlowestTitle": "Server Slowest Transaction",
            "gridClientSlowestTitle": "Client Slowest Transaction",
            "gridMostUsedTitle": "Most Used",
            "mostTimeConsuming": "Most Time Consuming",

            "endUser": "Response Time",
            "transactionType": "Transaction Type",
            "transaction": "Transaction",
            "transactionName": "Transaction",
            "PAGE": "Page",
            "AJAX": "AJAX",
            "SERVER": "API",

            "gridStates": {
                "mostTimeConsuming": "Most time consuming",
                "slowestClient": "Slowest response time",
                "slowestServer": "Slowest server time",
                "highestFailure": "Highest failure rate",
                "throughput": "Highest volume"
            },

            "gridStatesTitles": {
                "mostTimeConsuming": "Server Time (%)",
                "slowestClient": "Response Time (ms)",
                "slowestServer": "Server Time (ms)",
                "highestFailure": "Failures (%)",
                "throughput": "Call/min"
            }
        },

        "infoTooltip":{
            "selfTime" : {
                "title": "Self Time",
                "contents" : "Self time is the duration of a method execution without presented child methods"
            },
            "pageLoadTime":{
                "title" : "Load Time area chart",
                "contents" : "Description will be soon...:)"
            },
            "errorRate": {
                "title": "Percent of failed transactions",
                "contents": "Percentage of failed requests (for example, those ending with an HTTP 5xx response code)."
            }
        },

        "transactionTrend_latency_toolTip": " Average Response Time ",
        "transactionTrend_latency":"Server Time",
        "transactionTrend_latency_client":"Response Time",
        "transactionTrend_latency_server":"Server Time",

        "transactionTrend_errors":"Failures",
        "transactionTrend_drillToFailures":"View Recent Failed Calls",
        "transactionTrend_drillToSlowest":"View Slowest Calls",

        "transactionTrend_drillToFailures_location":"failures",
        "transactionTrend_drillToSlowest_location":"slowestServerTime",

        "noData" : "No Data",

        "pageTrend_errors":"Failed Page Loads",
        "pageTrend_errors_server":"Failed page loads",
        "pageTrend_errors_total":"Total {{0}} failed page loads during {{1}}",
        "pageTrend_error_total":"Total 1 failed page load during {{0}}",
        "noPagesErrors":"No failed page loads",

        "errors": {
            "generalServerError": "<p>Please try again later or <a class=\"color-text--link\" target=\"_blank\" href=\"{{0}}\">open a ticket.</a></p>",
            "generalServerErrorTitle": "Operation Failed",
            "authenticationErrorTitle": "Unauthorized User",
            "authenticationError": "You do not have access rights. Please contact the application's administrator for access",
            "sessionExpiredTitle": "Your login session has expired",
            "sessionExpiredContent": "Your login session has expired. \n You will be redirected to the login page."
        },
        "transactionCallProfile":{
            "sql":"SQL",
            "sqlStatment":"SQL Statement",
            "sqlOpJdbcPrefix":"SQL query to ",
            "sqlOpPrefix":"SQL query to database from ",
            "sqlOpSuffix":" method",
            "sqlDatabaseOn":"  database on ",
            "crossVm": "call",
            "to":" to ",
            "from":" from ",
            "on":" on ",
            "NonCrossVm": "Not Traced",
            "NonCrossVmOp": "(Not Traced)",
            "AsyncIndication": "ASYNC",
            "noDataMessage": "No Data",
            "noTraceMessage": "There are no traces for this transaction in the selected time frame",
            "showAll": "Show",
            "hideAll": "Hide",
            "nestedMethods": "nested methods",
            "operationGridTitle" : "OPERATION FLOW",
            "backToOperationFlow": "Operation Flow",
            "backToOperationFlowTooltip": "Back to Operation Flow",
            "operationSqlTitle" : "Query:",
            "totalContribution" : "TOTAL CONTRIBUTION (%)",
            "showBubbleGraph" : "Show Timeline"
        },
        "action-details" : {
            "prev-instance" : "Previous Call",
            "next-instance" : "Next Call"
        },
        "applicationOverview" :  {
            "title" : "TRANSACTIONS HEALTH",
            "backToServiceList" : "Back",

            "responseTimeLeftHeaderText":"PERFORMANCE",
            "responseTimeHeaderText": "Response Time",
            "responseTimeFooterText": "Transaction Server Time (avg)",
            "responseTimeUnitsText": "ms",

            "failuresLeftHeaderText": "FAILURES",
            "failuresHeaderText": "Failures",
            "failuresFooterText": "of transactions failed",
            "failuresUnitsText": "%",

            "throughputLeftHeaderText": "VOLUME",
            "throughputHeaderText": "Volume",
            "throughputFooterText": "Transaction Calls/min",

            "header": "SERVICE HEALTH",

            "service_with_problems_single": "  ({{0}} of {{1}} services has a problem)",
            "service_with_problems_plural": "  ({{0}} of {{1}} services have a problem)",

            "service_node_metric_ok" : "All nodes are OK",

            "service_node_latency_single" : "1 node with performance problems",
            "service_node_latency_plural" : "{{0}} of {{1}} nodes with performance problems",

            "service_node_failure_single" : "1 node with availability problems",
            "service_node_failure_plural" : "{{0}} of {{1}} nodes with availability problems",

            "service_node_throughput_metric_single" : "Node operation volume",
            "service_node_throughput_metric_multiple" : "Nodes operation volume"
        },
        "serviceOverview" :  {
            "serviceOverview" : "Service Overview",
            "serviceDependencies" : "Service Dependencies",
            "backToServiceList" : "Back",
            "backToServiceListTooltip" : "Back to Application Health",
            "serviceHealthHeader": "Service Health",
            "serviceHealthInfotip": "A service is one or more components of an application that provide a certain functionality and for which you would like to be able to view aggregated data.",

            "serviceDependency": "SERVICE DEPENDENCY",
            "dependencyMapHeader": "Dependency Map",
            "dependencyMapHeaderNote": "(beta)",
            "dependencyMapInfotip": "The chart displays incoming and outgoing calls between the selected service and other services of the relevant application. It does not display calls from other source types such as consumers, or calls to other target types such as databases.",
            "dependencyMapReachMaxNumberOfServices": "Note: There are more than {{0}} services, some of them may not be displayed",
            "noDependencies": "No dependencies for this service",
            "noLeftDependenciesLine1" : "We haven't identified incoming",
            "noRightDependenciesLine1" : "We haven't identified outgoing",
            "noLeftDependenciesLine2" : "service calls to this service",
            "noRightDependenciesLine2" : "service calls from this service",
            "noDataForDependenciesLine1": "No activity on this service",
            "noDataForDependenciesLine2": "Try a different time period",

            "responseTimeHeaderText": "Response Time",
            "responseTimeFooterText": "Operation | Server Time (avg)",
            "responseTimeUnitsText": "ms",

            "failuresHeaderText": "Failures",
            "failuresFooterText": "of Operations | Failed",
            "failuresUnitsText": "%",

            "throughputHeaderText": "Volume",
            "throughputFooterText": "Operation | Calls/min",

            "services-with-problem-none"             : "All services are OK",

            "services-with-problem-all-single"       : "1 service with problems",
            "services-with-problem-all-multiple"     : "{{0}} of {{1}} services with problems",

            "services-with-problem-latency-single"   : "1 service with performance problems",
            "services-with-problem-latency-multiple" : "{{0}} of {{1}} services with performance problems",

            "services-with-problem-failure-single"   : "1 service with availability problems",
            "services-with-problem-failure-multiple" : "{{0}} of {{1}} services with availability problems",

            "servicesDrillText" :{
                "slowest" :  "Slow transactions",
                "failed" : "Failed transactions",
                "popular" : "Popular transactions"

            },

            "serviceTitle" : "Service",

            "servicesHeader": "SERVICE OVERVIEW",

            "nodesAndOperationsHeaderText": "NODES & OPERATIONS",

            "operationTime" : "Operation Server Time (avg)",
            "failedOperations": "of operations failed",
            "operationCallsPerMinute" : "Operation Calls/min",
            "investigateService" : "Investigate Service",
            "addService" : "Add another service to your app",

            "gridStates" : {
                "responseTime" : "Slowest server time",
                "failures" : "Highest failure rate",
                "highestCallRate" : "Highest volume"
            },

            "nodes" : {
                "panelTitle" : "Nodes",
                "panelTitleInfo" : "{{0}} of {{1}} nodes with problems",
                "nodeDisplayName" : "Node",
                "hostDisplayName": "Host Name",
                "serverTimeDisplayName" : "Operation server Time (avg)",
                "serverTimeColumnHeaderTooltip" : "Average response time of operation on each node",
                "operationsFailuresDisplayName" : "Operation Failures",
                "operationsFailuresTooltip" : "Percentage of calls with errors, out of total operation calls on each node",
                "operationsThroughputDisplayName" : "Operation Calls/min",
                "operationsThroughputTooltip" : "Rate of operation calls on each node"
            },

            "operations" : {
                "panelTitle" : "Operations (TOP 5)",
                "filterBy": "Show:",
                "errors_tooltip": "Total of {{0}} operation failures during the {{1}}",
                "throughput_tooltip": "Total {{0}} operation calls during the {{1}}",
                "operationDisplayName" : "Inbound Operation",
                "serverTimeDisplayName" : "Server Time (avg)",
                "serverTimeTooltip" : "Average response time of operation calls",
                "failuresDisplayName" : "Failures",
                "failuresTooltip" : "Percentage of calls with errors",
                "operationThroughputDisplayName" : "Calls/min",
                "serverTimeColumnHeaderTooltip" : "Average response time of operation on all nodes",
                "operationsFailuresTooltip" : "Percentage of calls with errors, out of total operation calls on all nodes",
                "operationThroughputTooltip" : "Rate of operation calls on all nodes"
            }
        },
        "simpleChart" : {
            "tooltips" : {
                "responseTime": "Server Time",
                "responseTimeToolTipUnits": " ms",

                "errorRate": "Failures",
                "errorRateToolTipUnits": "%",

                "throughput": "Operation Calls",
                "throughputToolTipUnits": " calls/min"
            }
        }
    };
    window.emLocales["en"] = window.emLocales["en-US"];
    window.emLocales["te-ST"] = window.emLocales["en-US"];
    window.emLocales["te"] = window.emLocales["en-US"];
})();