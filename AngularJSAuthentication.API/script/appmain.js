var app = angular.module("app", ["ngRoute", "ngAnimate", 'angular-loading-bar', 'LocalStorageModule','angularjs-dropdown-multiselect', "ui.bootstrap",'daterangepicker', 'ngTable', 'angularFileUpload', "easypiechart", "mgo-angular-wizard", "textAngular", "app.ui.ctrls", "app.ui.directives", "app.ui.services", "app.controllers", "app.directives", "app.form.validation", "app.ui.form.ctrls", "app.ui.form.directives", "app.tables", "app.task", "app.localization", "app.chart.ctrls", "app.chart.directives"])

app.config(["$routeProvider", function ($routeProvider) {
    return $routeProvider.when("/", {
        redirectTo: "/dashboard"
    })
        .when("/dashboard", {
            controller: "dashboardController",
            templateUrl: "views/dashboard.html"
        })
    .when("/pages/confirmEmail", {
        controller: "confirmEmailController",
        templateUrl: "views/pages/ConfirmEmail.html"
    })
        .when("/o365dashboard", {
            controller: "o365dashboardController",
            templateUrl: "views/o365/o365dashboard.html"
        })
    
     .when("/userdashboard/:id", {
         controller: "userdashboardController",
         templateUrl: "views/report/userdashboard.html"
     })
      .when("/clientdashboard/:id", {
          controller: "clientdashboardController",
          templateUrl: "views/report/clientdashboard.html"
      })
           .when("/projectdashboard/:id", {
               controller: "projectdashboardController",
               templateUrl: "views/report/projectdashboard.html"
           })
          .when("/taskdashboard/:id", {
              controller: "taskdashboardController",
              templateUrl: "views/report/taskdashboard.html"
          })

         .when("/settings", {
             controller: "settingsController",
             templateUrl: "/views/admin/setting.html"
         })

         .when("/settings/settingEdit", {
             controller: "settingsController",
             templateUrl: "/views/admin/settingEdit.html"
         })
          .when("/customers", {
              controller: "customerController",
              templateUrl: "/views/admin/customers.html"
          })
         .when("/projects", {
             controller: "projectsController",
             templateUrl: "/views/admin/projects.html"
         })
         .when("/projecttasks", {
             controller: "tasksController",
             templateUrl: "/views/admin/projectsTasks.html"
         })
         .when("/tasktypes", {
             controller: "tasktypesController",
             templateUrl: "/views/admin/tasktypes.html"
         })
         .when("/people", {
             controller: "peoplesController",
             templateUrl: "/views/admin/people.html"
         })
        .when("/expenses", {
            controller: "expensesController",
            templateUrl: "/views/admin/expenses.html"
        })

        .when("/categorys", {
            controller: "categorysController",
            templateUrl: "/views/admin/categorys.html"
        })
    .when("/expensecat", {
        controller: "expensecatController",
        templateUrl: "/views/admin/expensecat.html"
    })
     .when("/tfsweektimesheet", {
         controller: "TFSweektimesheetController",
         templateUrl: "/views/timesheet/tfsweektimesheet.html"
     })

        .when("/weektimesheet", {
            controller: "weektimesheetController",
            templateUrl: "/views/timesheet/weektimesheet.html"
        })

          .when("/weektasktimesheet", {
              controller: "weektasktimesheetController",
              templateUrl: "/views/timesheet/weektasktimesheet.html"
          })
         .when("/daytimesheet", {
             controller: "daytimesheetController",
             templateUrl: "/views/timesheet/daytimesheet.html"
         })
         .when("/daytasktimesheet", {
             controller: "daytasktimesheetController",
             templateUrl: "/views/timesheet/daytasktimesheet.html"
         })
        .when("/monthtimesheet", {
              controller: "monthtimesheetController",
              templateUrl: "/views/timesheet/monthtimesheet.html"
          })
         
         .when("/leave", {
             controller: "leavesController",
             templateUrl: "/views/timesheet/leavepage.html"
         })
          .when("/report/time", {
              controller: "reportsController",
              templateUrl: "/views/report/time.html"
          })

         .when("/invoice/creatingRecurringinvoice", {

             templateUrl: "/views/invoice/creatingRecurringinvoice.html"
         })
         .when("/invoice/invoicemoreyeahs", {
             //controller: "invoiceController",
             controller: "AddInvoiceController",             
             templateUrl: "/views/invoice/invoicemoreyeahs.html"
         })
         .when("/invoice/3", {

             templateUrl: "/views/invoice/recurring.html"
         })
        .when("/ui/typography", {
            templateUrl: "views/ui/typography.html"
        }).when("/ui/buttons", {
            templateUrl: "views/ui/buttons.html"
        }).when("/ui/icons", {
            templateUrl: "views/ui/icons.html"
        }).when("/ui/grids", {
            templateUrl: "views/ui/grids.html"
        }).when("/ui/widgets", {
            templateUrl: "views/ui/widgets.html"
        }).when("/ui/components", {
            templateUrl: "views/ui/components.html"
        }).when("/ui/timeline", {
            templateUrl: "views/ui/timeline.html"
        }).when("/ui/pricing-tables", {
            templateUrl: "views/ui/pricing-tables.html"
        }).when("/forms/elements", {
            templateUrl: "views/forms/elements.html"
        }).when("/forms/layouts", {
            templateUrl: "views/forms/layouts.html"
        }).when("/forms/validation", {
            templateUrl: "views/forms/validation.html"
        }).when("/forms/wizard", {
            templateUrl: "views/forms/wizard.html"
        }).when("/tables/static", {
            templateUrl: "views/tables/static.html"
        }).when("/tables/responsive", {
            templateUrl: "views/tables/responsive.html"
        }).when("/tables/dynamic", {
            templateUrl: "views/tables/dynamic.html"
        }).when("/charts/others", {
            templateUrl: "views/charts/charts.html"
        }).when("/charts/morris", {
            templateUrl: "views/charts/morris.html"
        }).when("/charts/flot", {
            templateUrl: "views/charts/flot.html"
        }).when("/mail/inbox", {
            templateUrl: "views/mail/inbox.html"
        }).when("/mail/compose", {
            templateUrl: "views/mail/compose.html"
        }).when("/mail/single", {
            templateUrl: "views/mail/single.html"
        }).when("/pages/features", {
            templateUrl: "views/pages/features.html"
        }).when("/pages/signin", {
            controller: "loginController",
            templateUrl: "views/pages/signin.html"
        }).when("/pages/signup", {
            controller: "signupController",
            templateUrl: "views/pages/signup.html"
        }).when("/pages/lock-screen", {
            templateUrl: "views/pages/lock-screen.html"
        }).when("/pages/profile", {
            controller: "profilesController",
            templateUrl: "views/pages/profile.html"
        })
        .when("/pages/profile/profileEdit", {
            controller: "profilesController",
            templateUrl: "views/pages/profileEdit.html"
        })

        .when("/404", {
            templateUrl: "views/pages/404.html"
        }).when("/pages/500", {
            templateUrl: "views/pages/500.html"
        }).when("/pages/blank", {
            templateUrl: "views/pages/blank.html"
        }).when("/pages/invoice", {
            templateUrl: "views/pages/invoice.html"
        }).when("/tasks", {
            templateUrl: "views/tasks/tasks.html"
        }).otherwise({
            redirectTo: "/404"
        })
}]);
//var serviceBase = 'http://time.webfortis.in/';
var serviceBase = 'http://localhost:26264/';
//var serviceBase = 'http://ngauthenticationapi.azurewebsites.net/';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);
