'use strict';

/**
 * @ngdoc overview
 * @name anguApp
 * @description
 * # anguApp
 *
 * Main module of the application.
 */
var anguApp = angular.module('anguApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
     'ngTable'
  ])
  .config(function ($routeProvider) {
      $routeProvider
        .when("/", {
            redirectTo: "Dashboard"
        })


         .when("/Dashboard", {

             templateUrl: "views/Dashboard.html"
         })
         .when("/folders", {

             templateUrl: "views/marketing/folders.html"
         })

             
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })
          .when("/automation", {

              templateUrl: "views/marketing/automation.html"
          })

        .when("/automation/rules", {

            templateUrl: "views/marketing/automation_rules.html"
        })

        .when("/dripProgram", {

            templateUrl: "views/marketing/automation_dripprogram.html"
        })

     .when("/calendar", {

         templateUrl: "views/marketing/calender.html"
     })

     .when("/campaign", {

         templateUrl: "views/marketing/campaigns.html"
     })
        .when("/email", {

            templateUrl: "views/marketing/Emails.html"
        })

        .when("/email/index/view/alldraft", {

            templateUrl: "views/marketing/email_drafts.html"
        })
        .when("/email/index/view/scheduled", {

            templateUrl: "views/marketing/email_scheduled.html"
        }).when("/email/index/view/allsentlist", {

            templateUrl: "views/marketing/email_sent.html"
        }).when("/emailTemplate", {

            templateUrl: "views/marketing/email_templets.html"
        }).when("/emailTest", {

            templateUrl: "views/marketing/email_test.html"
        })


        .when("/email/index/view/abtests", {

            templateUrl: "views/marketing/email_abtest.html"
        })


        .when("/unsubscribeProspec", {

            templateUrl: "views/marketing/email_unsubscribepage.html"
        })



        .when("/emailPreferencesPage", {

            templateUrl: "views/marketing/email_prefrencepage.html"
        })


        .when("/email/draft/edit", {

            templateUrl: "views/marketing/email_newemail.html"
        })

           .when("/email/template/draft/create", {

               templateUrl: "views/marketing/email_newemailtemp.html"
           })

        .when("/file", {

            templateUrl: "views/marketing/content_files.html"
        })

        .when("/content", {

            templateUrl: "views/marketing/content.html"
        })


        .when("/dynamicContent", {

            templateUrl: "views/marketing/content_dynamic.html"
        })


        .when("/customUrl", {

            templateUrl: "views/marketing/content_customeredirects.html"
        })


        .when("/form", {

            templateUrl: "views/marketing/form.html"
        })


        .when("/formHandler", {

            templateUrl: "views/marketing/form_handler.html"
        })



        .when("/layoutTemplate", {

            templateUrl: "views/marketing/form_layouttemp.html"
        })


        .when("/marketing/", {

            templateUrl: "views/marketing/.html"
        })


        .when("/form/wizard", {

            templateUrl: "views/marketing/form_newform.html"
        })



        .when("/form/forms", {

            templateUrl: "views/marketing/forms.html"
        })



        .when("/landingPage", {

            templateUrl: "views/marketing/landing_pages.html"
        })

        .when("/landingPage/landingPages", {

            templateUrl: "views/marketing/landing_page1.html"
        })

        .when("/layoutTemplate", {

            templateUrl: "views/marketing/landing_layout.html"
        })

        .when("/multivariateTest", {

            templateUrl: "views/marketing/landing_mul.html"
        })

        .when("/landingPage/wizard", {

            templateUrl: "views/marketing/landing_newlanding.html"
        })

        .when("/searchMarketing", {

            templateUrl: "views/marketing/searchingmarketing.html"
        })


        .when("/keyword", {

            templateUrl: "views/marketing/serchingm_keyword.html"
        })

        .when("/competitor", {

            templateUrl: "views/marketing/serchingm_competitor.html"
        })


        .when("/paidSearchCampaign", {

            templateUrl: "views/marketing/serchingm_paid.html"
        })



        .when("/segmentation", {

            templateUrl: "views/marketing/segmentation.html"
        })


        .when("/list", {

            templateUrl: "views/marketing/segment_list.html"
        })


        .when("/segmentation/rules", {

            templateUrl: "views/marketing/segment_rule.html"
        })

        .when("/tag", {

            templateUrl: "views/marketing/segment_tag.html"
        })

        .when("/profile", {

            templateUrl: "views/marketing/segmentm_profile.html"
        })


        .when("/siteSearch", {

            templateUrl: "views/marketing/sitesearch.html"
        })

        .when("/social", {

            templateUrl: "views/marketing/social.html"
        })



        .when("/prospect", {

            templateUrl: "views/prospects/ProspectList.html"
        })


        .when("/prospect/oneToOneEmails", {

            templateUrl: "views/prospects/OnetoOneEmails.html"
        })


        .when("/prospectAccount", {

            templateUrl: "views/prospects/ProspectAccounts.html"
        })


        .when("/visitor", {

            templateUrl: "views/prospects/Visitors.html"
        })



         .when("/report", {
             templateUrl: "views/Reports/Campaigns.html"
         })
             .when("/report/gooddata", {
                 templateUrl: "views/Reports/GoodData.html"
             })
             .when("/content/report", {
                 templateUrl: "views/Reports/Content.html"
             })
             .when("/conversion/report", {
                 templateUrl: "views/Reports/Conversions.html"
             })
             .when("/email/report", {
                 templateUrl: "views/Reports/Emails.html"
             })
             .when("/event", {
                 templateUrl: "views/Reports/Events.html"
             })
             .when("/form/report", {
                 templateUrl: "views/Reports/Forms.html"
             })
             .when("/landingPage/report", {
                 templateUrl: "views/Reports/LandingPages.html"
             })
             .when("/lifecycle/report", {
                 templateUrl: "views/Reports/Lifecycle.html"
             })
             .when("/naturalSearch/report", {
                 templateUrl: "views/Reports/NaturalSearch.html"
             })
             .when("/olark/report", {
                 templateUrl: "views/Reports/Olark.html"
             })
             .when("/opportunity/report", {
                 templateUrl: "views/Reports/Opportunities.html"
             })
             .when("/paidSearch", {
                 templateUrl: "views/Reports/PaidSearch.html"
             })
             .when("/siteSearch/report", {
                 templateUrl: "views/Reports/SiteSearch.html"
             })
             .when("/social/report", {
                 templateUrl: "views/Reports/Webinars.html"
             })
             .when("/webinar", {
                 templateUrl: "views/Reports/Social.html"
         
             })



            .when("/prospectAccount/configureFields", {
                templateUrl: "views/Admin/AccountFields.html"
            })

          .when("/connector", {
              templateUrl: "views/Admin/Connectors.html"
          })
          .when("/customObject", {
              templateUrl: "views/Admin/CustomObj.html"
          })
          .when("/group", {
              templateUrl: "views/Admin/Groups.html"
          })
          
          .when("/opportunity/configureFields", {
              templateUrl: "views/Admin/OpportunityF.html"
          })
          .when("/administration", {
              templateUrl: "views/Admin/Overview.html"
          })
          .when("/pageAction", {
              templateUrl: "views/Admin/PageActions.html"
          })

           .when("/prospectField", {
               templateUrl: "views/Admin/ProspectF.html"
           })
           .when("/import", {
               templateUrl: "views/Admin/Prospects.html"
           })
           .when("/administration/recycleBins", {
               templateUrl: "views/Admin/RecycleBin.html"
           })
           .when("/role", {
               templateUrl: "views/Admin/Roles.html"
           })
           .when("/scoringRules", {
               templateUrl: "views/Admin/ScoringRules.html"
           })
           .when("/security", {
               templateUrl: "views/Admin/Security.html"
           })
           
           .when("/systemEmail", {
               templateUrl: "views/Admin/SystemEmails.html"
           })
           .when("/user", {
               templateUrl: "views/Admin/Users.html",
               controller: "CtrlUser"
           })
           .when("/filter", {
               templateUrl: "views/Admin/VisitorFilters.html"
           })
      .when("/createAjax", {
          templateUrl: "views/user/createAjax.html"
      })
           .when("/usercancel", {
               templateUrl: "views/Dashboard.html"
           })
      .when("/groupcreateAjax", {
          templateUrl: "views/Groups/createAjax.html"
      })
      .when("/rolecreateAjax", {
          templateUrl: "views/role/createAjax.html"
      })
      .when("/rolecancel", {
          templateUrl: "views/role/cancel.html"
      })
      ;


      
      
  });
