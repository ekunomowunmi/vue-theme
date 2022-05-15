const DocMenuConfig = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
     
        svgIcon: "media/icons/duotune/general/gen025.svg",
        sub: [
          {
            heading: "logistics",
            route: "/pages/logistics",
          },
          {
            heading: "ecommerce",
            route: "/pages/ecommerce",
          },
          {
            heading: "projects",
            route: "/pages/projects",
          },
          {
            heading: "marketing",
            route: "/pages/marketing",
          },
          {
            heading: "store_analytics",
            route: "/pages/store_analytics",
          },
        ],
      },
      {
        sectionTitle: "pages",
        route: "/pages",
        svgIcon: "media/icons/duotune/ecommerce/ecm007.svg",
        sub: [
          {
            heading: "aboutUs",
            route: "/pages/about-us",
          },
          {
            heading: "invoice",
            route: "/pages/invoice",
          },
          {
            heading: "faq",
            route: "/pages/faq",
          },
          {
            heading: "wizard",
            route: "/pages/wizard",
          },
          {
            heading: "pricing",
            route: "/pages/pricing",
          },
        ],
      },
      {
        sectionTitle: "account",
        route: "/account",
        svgIcon: "media/icons/duotune/communication/com006.svg",
        sub: [
          {
            heading: "overview",
            route: "/account/overview",
          },
          {
            heading: "settings",
            route: "/account/settings",
            
          },
          {
            heading: "security",
            route: "/account/security",
            
          },
          {
            heading: "auditLogs",
            route: "/account/audit-logs",
            
          },
          {
            heading: "activity",
            route: "/account/activity",
            
          },
        ],
      },
      {
        sectionTitle: "orders",
        route: "/orders",
        svgIcon: "media/icons/duotune/communication/com006.svg",
        sub: [
          {
            heading: "ordersListing",
            route: "/orders/order-listing",
          },
          {
            heading: "ordersDetails",
            route: "/orders/order-details",
            
          },
          {
            heading: "newOrder",
            route: "/orders/new-order",
            
          },
          {
            heading: "editOrder",
            route: "/orders/edit-order",
            
          },
        ],
      },
      {
        sectionTitle: "authentication",
        route: "/authentication",
        svgIcon: "media/icons/duotune/technology/teh004.svg",
        
        sub: [
          {
            sectionTitle: "base",
            route: "/base",
            sub: [
              {
                heading: "signIn",
                route: "/authentication/base/sign-in",
                
              },
              {
                heading: "signUp",
                route: "/authentication/base/sign-up",
                
              },
              // {
              //   heading: "twoStepsAuth",
              //   route: "/authentication/base/two-steps-auth",
              // },
              {
                heading: "passwordReset",
                route: "/authentication/base/password-reset",
                
              },
              // {
              //   heading: "newPassword",
              //   route: "/authentication/base/new-password",
              // },
            ],
          },
          {
            sectionTitle: "extended",
            route: "/extended",
            sub: [
              {
                heading: "multiStep",
                route: "/authentication/extended/multi-steps",
                
              },
              // {
              //   heading: "freeTrial",
              //   route: "/authentication/extended/free-trial",
              // },
              {
                heading: "comingSoon",
                route: "/authentication/extended/coming-soon",
                
              },
            ],
          },
          {
            sectionTitle: "general",
            route: "/general",
            sub: [
              {
                heading: "welcome",
                route: "/authentication/general/welcome",
                
              },
              {
                heading: "verifyEmail",
                route: "/authentication/general/verify-email",
                
              },
              {
                heading: "passwordConfirmation",
                route: "/authentication/general/password-confirmation",
                
              },
              {
                heading: "closeAccount",
                route: "/authentication/general/close-account",
                
              },
              {
                heading: "error404",
                route: "/authentication/general/404",
                
              },
              {
                heading: "error500",
                route: "/authentication/general/500",
                
              },
            ],
          },
          {
            sectionTitle: "email",
            route: "/email",
            sub: [
              {
                heading: "verifyEmail",
                route: "/authentication/email/verify-email",
                
              },
              {
                heading: "passwordReset",
                route: "/authentication/email/password-reset",
                
              },
              {
                heading: "passwordChange",
                route: "/authentication/email/password-change",
                
              },
            ],
          },
        ],
      },
      {
        sectionTitle: "subscriptions",
        route: "/subscriptions",
        
        svgIcon: "media/icons/duotune/ecommerce/ecm002.svg",
        sub: [
          {
            heading: "getStarted",
            route: "/subscriptions/getting-started",
            
          },
          {
            heading: "subscriptionList",
            route: "/subscriptions/subscription-list",
            
          },
          {
            heading: "addSubscription",
            route: "/subscriptions/add-subscription",
            
          },
          {
            heading: "viewSubscription",
            route: "/subscriptions/view-subscription",
            
          },
        ],
      },
      {
        sectionTitle: "chat",
        route: "/chat",
        
        svgIcon: "media/icons/duotune/communication/com012.svg",
        sub: [
          {
            heading: "privateChat",
            route: "/chat/private-chat",
            
          },
          {
            heading: "groupChat",
            route: "/chat/group-chat",
            
          },
          {
            heading: "drawerChat",
            route: "/chat/drawer-chat",
            
          },
        ],
      },
      {
        heading: "calendar",
        route: "/calendar",
        svgIcon: "media/icons/duotune/general/gen014.svg",
        
      },
    ],
  },
];

export default DocMenuConfig;
