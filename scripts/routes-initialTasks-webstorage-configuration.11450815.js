(function (mifosX) {
    var defineRoutes = function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/start.html'
            })
            .when('/login', {
                templateUrl: 'views/login.html'
            })
            .when('/home', {
                templateUrl: 'views/home.html'
            })
            .when('/richdashboard', {
                templateUrl: 'views/private/rich_dashboard.html'
            })
            .when('/products', {
                templateUrl: 'views/products/products.html'
            })
            .when('/templates', {
                templateUrl: 'views/templates/templates.html'
            })
            .when('/createstandinginstruction/:officeId/:clientId/:accountType', {
                templateUrl: 'views/accounttransfers/create_standinginstruction.html'
            })
            .when('/editstandinginstruction/:instructionId/:from', {
                templateUrl: 'views/accounttransfers/edit_standinginstruction.html'
            })
            .when('/viewstandinginstruction/:instructionId', {
                templateUrl: 'views/accounttransfers/view_standinginstruction.html'
            })
            .when('/liststandinginstructions/:officeId/:clientId', {
                templateUrl: 'views/accounttransfers/list_standinginstruction.html'
            })
            .when('/listaccounttransactions/:instructionId', {
                templateUrl: 'views/accounttransfers/list_transactions.html'
            })
            .when('/standinginstructions/history', {
                templateUrl: 'views/accounttransfers/standinginstructions_history.html'
            })
            .when('/createtemplate', {
                templateUrl: 'views/templates/createtemplate.html'
            })
            .when('/viewtemplate/:id', {
                templateUrl: 'views/templates/viewtemplate.html'
            })
            .when('/edittemplate/:id', {
                templateUrl: 'views/templates/edittemplate.html'
            })
            .when('/createloanproduct', {
                templateUrl: 'views/products/createloanproduct.html'
            })
            .when('/editloanproduct/:id', {
                templateUrl: 'views/products/editloanproduct.html'
            })
            .when('/createsavingproduct', {
                templateUrl: 'views/products/createsavingproduct.html'
            })
            .when('/editsavingproduct/:id', {
                templateUrl: 'views/products/editsavingproduct.html'
            })
            .when('/admin/viewrole/:id', {
                templateUrl: 'views/administration/viewrole.html'
            })
            .when('/admin/roles', {
                templateUrl: 'views/administration/roles.html'
            })
            .when('/admin/addrole', {
                templateUrl: 'views/administration/addrole.html'
            })
            .when('/admin/viewmctasks', {
                templateUrl: 'views/administration/makerchecker.html'
            })
            .when('/admin/users', {
                templateUrl: 'views/administration/users.html'
            })
            .when('/clients', {
                templateUrl: 'views/clients/clients.html'
            })
            .when('/createclient', {
                templateUrl: 'views/clients/createclient.html'
            })
            .when('/editclient/:id', {
                templateUrl: 'views/clients/editclient.html'
            })
            .when('/viewclient/:id', {
                templateUrl: 'views/clients/viewclient.html'
            })
            .when('/viewclient/:id/addcharge', {
                templateUrl: 'views/clients/addnewclientcharge.html'
            })
            .when('/viewclient/:id/paycharge/:chargeid', {
                templateUrl: 'views/clients/payclientcharge.html'
            })
            .when('/viewclient/:clientId/charges/:chargeId', {
                templateUrl: 'views/clients/viewclientcharge.html'
            })
            .when('/viewclient/:id/chargeoverview', {
                templateUrl: 'views/clients/clientchargeoverview.html'
            })
            .when('/clientscreenreport/:clientId', {
                templateUrl: 'views/clients/clientscreenreport.html'
            })
            .when('/client/:id/:action', {
                templateUrl: 'views/clients/clientactions.html'
            })
            .when('/transferclient/:id', {
                templateUrl: 'views/clients/transferclient.html'
            })
            .when('/addclientdocument/:clientId', {
                templateUrl: 'views/clients/addclientdocument.html'
            })
            .when('/clientclosedloanaccount/:clientId', {
                templateUrl: 'views/clients/clientclosedloanaccount.html'
            })
            .when('/clientclosedsavingaccount/:clientId', {
                templateUrl: 'views/clients/clientclosedsavingaccount.html'
            })
            .when('/addclientidentifier/:clientId', {
                templateUrl: 'views/clients/addclientidentifier.html'
            })
            .when('/addclientidentifierdocument/:clientId/:resourceId', {
                templateUrl: 'views/clients/addclientidentifierdocument.html'
            })
            .when('/addserviceperson', {
                templateUrl: 'views/clients/createserviceperson.html'
            })
            .when('/editserviceperson', {
                templateUrl: 'views/clients/editserviceperson.html'
            })
            .when('/addindividual', {
                templateUrl: 'views/clients/addindividual.html'
            })
            .when('/editindividual', {
                templateUrl: 'views/clients/editindividual.html'
            })
            .when('/addfunding', {
                templateUrl: 'views/clients/addfunding.html'
            })
            .when('/editfunding', {
                templateUrl: 'views/clients/editfunding.html'
            })
            .when('/addcontact', {
                templateUrl: 'views/clients/addcontact.html'
            })
            .when('/editcontact', {
                templateUrl: 'views/clients/editcontact.html'
            })
            .when('/survey/:clientId', {
                templateUrl: 'views/clients/survey.html'
            })
            .when('/viewsurvey/:id', {
                templateUrl: 'views/surveys/viewsurvey.html'
            })
            .when('/clients/survey/:clientId', {
                templateUrl: 'views/surveys/viewclientsurvey.html'
            })
            .when('/newclientloanaccount/:clientId', {
                templateUrl: 'views/loans/newloanaccount.html'
            })
            .when('/newgrouploanaccount/:groupId', {
                templateUrl: 'views/loans/newloanaccount.html'
            })
            .when('/newindividualjlgloanaccount/:groupId/:clientId', {
                templateUrl: 'views/loans/newloanaccount.html'
            })
            .when('/newjlgloanaccount/:groupId', {
                templateUrl: 'views/loans/newjlgloanaccount.html'
            })
            .when('/viewloanaccount/:id', {
                templateUrl: 'views/loans/viewloanaccountdetails.html'
            })
            .when('/adjustrepaymentschedule/:accountId', {
                templateUrl: 'views/loans/AdjustRepaymentSchdule.html'
            })
            .when('/loanaccount/:id/:action', {
                templateUrl: 'views/loans/loanaccountactions.html'
            })
            .when('/loanaccountcharge/:id/:action/:chargeId', {
                templateUrl: 'views/loans/loanaccountactions.html'
            })
            .when('/loandisbursedetail/:id/:action/:disbursementId', {
                templateUrl: 'views/loans/loanaccountactions.html'
            })
            .when('/loandisbursedetail/:id/:action', {
                templateUrl: 'views/loans/loanaccountactions.html'
            })
            .when('/editloanaccount/:id', {
                templateUrl: 'views/loans/editloanaccount.html'
            })
            .when('/loanscreenreport/:loanId', {
                templateUrl: 'views/loans/loanscreenreport.html'
            })
            .when('/addloancharge/:id', {
                templateUrl: 'views/loans/addloancharge.html'
            })
            .when('/addcollateral/:id', {
                templateUrl: 'views/loans/addloancollateral.html'
            })
            .when('/loan/:loanId/editcollateral/:id', {
                templateUrl: 'views/loans/editloancollateral.html'
            })
            .when('/loan/:loanId/viewcollateral/:id', {
                templateUrl: 'views/loans/viewloancollateral.html'
            })
            .when('/loan/:loanId/viewcharge/:id', {
                templateUrl: 'views/loans/viewloancharge.html'
            })
            .when('/loan/:loanId/editcharge/:id', {
                templateUrl: 'views/loans/editloancharge.html'
            })
            .when('/assignloanofficer/:id', {
                templateUrl: 'views/loans/assignloanofficer.html'
            })
            .when('/addloandocument/:loanId', {
                templateUrl: 'views/loans/addloandocument.html'
            })
            .when('/viewloantrxn/:accountId/trxnId/:id', {
                templateUrl: 'views/loans/view_loan_transaction.html'
            })
            .when('/organization', {
                templateUrl: 'views/administration/organization.html'
            })
            .when('/system', {
                templateUrl: 'views/administration/system.html'
            })
            .when('/loanproducts', {
                templateUrl: 'views/products/loanproducts.html'
            })
            .when('/charges', {
                templateUrl: 'views/products/charges.html'
            })
            .when('/viewcharge/:id', {
                templateUrl: 'views/products/viewcharge.html'
            })
            .when('/floatingrates', {
                templateUrl: 'views/products/floatingrates/FloatingRates.html'
            })
            .when('/createfloatingrate', {
                templateUrl: 'views/products/floatingrates/CreateFloatingRate.html'
            })
            .when('/viewfloatingrate/:floatingRateId', {
                templateUrl: 'views/products/floatingrates/ViewFloatingRate.html'
            })
            .when('/editfloatingrate/:floatingRateId', {
                templateUrl: 'views/products/floatingrates/EditFloatingRate.html'
            })

            .when('/savingproducts', {
                templateUrl: 'views/products/savingproducts.html'
            })
            .when('/shareproducts', {
                templateUrl: 'views/products/shareproducts.html'
            })
            .when('/createshareproduct', {
                templateUrl: 'views/products/createshareproduct.html'
            })
            .when('/editshareproduct/:id', {
                templateUrl: 'views/products/editshareproduct.html'
            })
            .when('/viewshareproduct/:id', {
                templateUrl: 'views/products/viewshareproduct.html'
            })
            .when('/viewsavingproduct/:id', {
                templateUrl: 'views/products/viewsavingproduct.html'
            })
            .when('/fixeddepositproducts', {
                templateUrl: 'views/products/fixeddepositproducts.html'
            })
            .when('/viewfixeddepositproduct/:productId', {
                templateUrl: 'views/products/viewfixeddepositproduct.html'
            })
            .when('/createfixeddepositproduct', {
                templateUrl: 'views/products/createfixeddepositproduct.html'
            })
            .when('/editfixeddepositproduct/:productId', {
                templateUrl: 'views/products/editfixeddepositproduct.html'
            })
            .when('/recurringdepositproducts', {
                templateUrl: 'views/products/recurringdepositproducts.html'
            })
            .when('/viewrecurringdepositproduct/:productId', {
                templateUrl: 'views/products/viewrecurringdepositproduct.html'
            })
            .when('/createrecurringdepositproduct', {
                templateUrl: 'views/products/createrecurringdepositproduct.html'
            })
            .when('/editrecurringdepositproduct/:productId', {
                templateUrl: 'views/products/editrecurringdepositproduct.html'
            })
            .when('/createinterestratechart/:productId/:productName/:productType', {
                templateUrl: 'views/products/createinterestratechart.html'
            })
            .when('/interestratecharts/:productId/:productName/:productType', {
                templateUrl: 'views/products/interestratecharts.html'
            })
            .when('/editinterestratecharts/:chartId/:productId/:productName/:productType', {
                templateUrl: 'views/products/editinterestratechart.html'
            })
            .when('/offices', {
                templateUrl: 'views/organization/offices.html'
            })
            .when('/createoffice', {
                templateUrl: 'views/organization/createoffice.html'
            })
            .when('/viewoffice/:id', {
                templateUrl: 'views/organization/viewoffice.html'
            })
            .when('/editoffice/:id', {
                templateUrl: 'views/organization/editoffice.html'
            })
            .when('/tasks', {
                templateUrl: 'views/tasks.html'
            })
            .when('/currconfig', {
                templateUrl: 'views/organization/currencyconfig.html'
            })
            .when('/search/:query', {
                templateUrl: 'views/search/glresults.html'
            })
            .when('/viewloanproduct/:id', {
                templateUrl: 'views/products/viewloanproduct.html'
            })
            .when('/usersetting', {
                templateUrl: 'views/administration/usersettings.html'
            })
            .when('/users/', {
                templateUrl: 'views/administration/userslist.html'
            })
            .when('/createuser/', {
                templateUrl: 'views/administration/createuser.html'
            })
            .when('/viewuser/:id', {
                templateUrl: 'views/administration/viewuser.html'
            })
            .when('/edituser/:id', {
                templateUrl: 'views/administration/edituser.html'
            })
            .when('/employees', {
                templateUrl: 'views/organization/employees.html'
            })
            .when('/viewemployee/:id', {
                templateUrl: 'views/organization/viewemployee.html'
            })
            .when('/editemployee/:id', {
                templateUrl: 'views/organization/editemployee.html'
            })
            .when('/createemployee/', {
                templateUrl: 'views/organization/createemployee.html'
            })
            .when('/managefunds/', {
                templateUrl: 'views/organization/managefunds.html'
            })
            .when('/nav/offices', {
                templateUrl: 'views/navigation/offices.html'
            })
            .when('/accounting', {
                templateUrl: 'views/accounting/accounting.html'
            })
            .when('/accounting_coa', {
                templateUrl: 'views/accounting/accounting_coa.html'
            })
            .when('/createglaccount', {
                templateUrl: 'views/accounting/createglaccounting.html'
            })
            .when('/viewglaccount/:id', {
                templateUrl: 'views/accounting/viewglaccounting.html'
            })
            .when('/editglaccount/:id', {
                templateUrl: 'views/accounting/editglaccounting.html'
            })
            .when('/freqposting', {
                templateUrl: 'views/accounting/freqposting.html'
            })
            .when('/viewtransactions/:transactionId', {
                templateUrl: 'views/accounting/view_transactions.html'
            })
            .when('/journalentry', {
                templateUrl: 'views/accounting/journalentry_posting.html'
            })
            .when('/searchtransaction', {
                templateUrl: 'views/accounting/search_transaction.html'
            })
            .when('/accounts_closure', {
                templateUrl: 'views/accounting/accounts_closure.html'
            })
            .when('/view_close_accounting/:id', {
                templateUrl: 'views/accounting/view_close_accounting.html'
            })
            .when('/accounting_rules', {
                templateUrl: 'views/accounting/accounting_rules.html'
            })
            .when('/viewaccrule/:id', {
                templateUrl: 'views/accounting/view_acc_rule.html'
            })
            .when('/add_accrule', {
                templateUrl: 'views/accounting/add_acc_rule.html'
            })
            .when('/editaccrule/:id', {
                templateUrl: 'views/accounting/edit_acc_rule.html'
            })
            .when('/run_periodic_accrual',{
                templateUrl: 'views/accounting/periodic_accrual_accounting.html'
            })
            .when('/openingbalances',{
                templateUrl: 'views/accounting/openingbalances.html'
            })
            .when('/viewprovisioningentries',{
                templateUrl: 'views/accounting/provisioning/ProvisioningEntries.html'
            })
            .when('/createprovisioningentries',{
                templateUrl: 'views/accounting/provisioning/CreateProvisioningEntries.html'
            })
            .when('/viewprovisioningentry/:entryId',{
                templateUrl: 'views/accounting/provisioning/ViewProvisioningEntry.html'
            })
            .when('/viewprovisioningjournalentry/:entryId',{
                templateUrl: 'views/accounting/provisioning/ViewProvisioningJournalEntries.html'
            })
            .when('/viewcode/:id', {
                templateUrl: 'views/system/viewcode.html'
            })
            .when('/datatables', {
                templateUrl: 'views/system/datatables.html'
            })
            .when('/viewdatatable/:tableName', {
                templateUrl: 'views/system/viewdatatable.html'
            })
            .when('/createdatatable', {
                templateUrl: 'views/system/createdatatable.html'
            })
            .when('/editdatatable/:tableName', {
                templateUrl: 'views/system/editdatatable.html'
            })
            .when('/makedatatableentry/:tableName/:entityId', {
                templateUrl: 'views/system/makedatatableentry.html'
            })
            .when('/viewdatatableentry/:tableName/:entityId/:resourceId', {
                templateUrl: 'views/system/viewdatatableentry.html'
            })
            .when('/viewsingledatatableentry/:tableName/:entityId', {
                templateUrl: 'views/system/viewdatatableentry.html'
            })
            .when('/addcode', {
                templateUrl: 'views/system/addcode.html'
            })
            .when('/jobs', {
                templateUrl: 'views/system/schedulerjobs.html'
            })
            .when('/viewschedulerjob/:id', {
                templateUrl: 'views/system/viewschedulerjob.html'
            })
            .when('/editschedulerjob/:id', {
                templateUrl: 'views/system/editschedulerjob.html'
            })
            .when('/viewhistory/:id', {
                templateUrl: 'views/system/viewschedulerjobhistory.html'
            })
            .when('/codes', {
                templateUrl: 'views/system/codes.html'
            })
            .when('/editcode/:id', {
                templateUrl: 'views/system/editcode.html'
            })
            .when('/hooks', {
                templateUrl: 'views/system/hooks.html'
            })
            .when('/viewhook/:id', {
                templateUrl: 'views/system/viewhook.html'
            })
            .when('/addhook', {
                templateUrl: 'views/system/addhook.html'
            })
            .when('/edithook/:id', {
                templateUrl: 'views/system/edithook.html'
            })
            .when('/entitytoentitymapping', {
                templateUrl: 'views/system/entitytoentitymapping.html'
            })
            .when('/reports', {
                templateUrl: 'views/system/reports.html'
            })
            .when('/system/viewreport/:id', {
                templateUrl: 'views/system/viewreport.html'
            })
            .when('/createreport', {
                templateUrl: 'views/system/createreport.html'
            })
            .when('/editreport/:id', {
                templateUrl: 'views/system/editreport.html'
            })
            .when('/accountnumberpreferences', {
                templateUrl: 'views/system/accountnumberpreferences.html'
            })
            .when('/addaccountnumberpreferences', {
                templateUrl: 'views/system/addaccountnumberpreferences.html'
            })
            .when('/viewaccountnumberpreferences/:id', {
                templateUrl: 'views/system/viewaccountnumberpreferences.html'
            })
            .when('/editaccountnumberpreferences/:id', {
                templateUrl: 'views/system/editaccountnumberpreferences.html'
            })
            .when('/holidays', {
                templateUrl: 'views/organization/holidays.html'
            })
            .when('/createholiday', {
                templateUrl: 'views/organization/createholiday.html'
            })
            .when('/viewholiday/:id', {
                templateUrl: 'views/organization/viewholiday.html'
            })
            .when('/editholiday/:id', {
                templateUrl: 'views/organization/editholiday.html'
            })
            .when('/workingdays', {
                templateUrl: 'views/organization/workingdays.html'
            })
            .when('/passwordpreferences', {
                templateUrl: 'views/organization/passwordpreferences.html'
            })
            .when('/viewpaymenttype/', {
                templateUrl: 'views/organization/viewpaymenttype.html'
            })
            .when('/createPaymentType/', {
                templateUrl: 'views/organization/createpaymenttype.html'
            })
            .when('/editPaymentType/:id', {
                templateUrl: 'views/organization/editpaymenttype.html'
            })
            .when('/reports/:type', {
                templateUrl: 'views/reports/view_reports.html'
            })
            .when('/run_report/:name', {
                templateUrl: 'views/reports/run_reports.html'
            })
            .when('/xbrl', {
                templateUrl: 'views/reports/xbrl.html'
            })
            .when('/xbrlreport', {
                templateUrl: 'views/reports/xbrlreport.html'
            })
            .when('/new_client_saving_application/:clientId', {
                templateUrl: 'views/savings/new_saving_account_application.html'
            })
            .when('/new_group_saving_application/:groupId', {
                templateUrl: 'views/savings/new_saving_account_application.html'
            })
            .when('/new_group_saving_application/:groupId/:centerEntity', {
                templateUrl: 'views/savings/new_saving_account_application.html'
            })
            .when('/new_jlg_saving_application/:groupId/:clientId', {
                templateUrl: 'views/savings/new_saving_account_application.html'
            })
            .when('/viewsavingaccount/:id', {
                templateUrl: 'views/savings/view_saving_account_details.html'
            })
            .when('/savings/:savingId/viewcharge/:id', {
                templateUrl: 'views/savings/viewsavingscharge.html'
            })
            .when('/viewonholdtransactions/:savingsId/:fromPath/:fromPathId', {
                templateUrl: 'views/savings/list_onhold_transactions.html'
            })
            .when('/groups', {
                templateUrl: 'views/groups/groups.html'
            })
            .when('/creategroup', {
                templateUrl: 'views/groups/creategroup.html'
            })
            .when('/attachmeeting/:id/:entityType', {
                templateUrl: 'views/groups/attachmeeting.html'
            })
            .when('/editcalendarbasedonmeetingdates/:entityType/:groupOrCenterId/:calendarId', {
                templateUrl: 'views/groups/editmeeting_based_on_meeting_date.html'
            })
            .when('/editcalendar/:entityType/:groupOrCenterId/:calendarId', {
                templateUrl: 'views/groups/editmeeting.html'
            })
            .when('/editsavingaccount/:id', {
                templateUrl: 'views/savings/edit_saving_account_application.html'
            })
            .when('/savingaccount/:id/:action', {
                templateUrl: 'views/savings/saving_account_actions.html'
            })
            .when('/savingaccountcharge/:id/:action/:chargeId', {
                templateUrl: 'views/savings/saving_account_actions.html'
            })
            .when('/savingaccounts/:id/charges', {
                templateUrl: 'views/savings/addnewsavingscharge.html'
            })
            .when('/viewaccounttransfers/:id', {
                templateUrl: 'views/accounttransfers/view_accounttransfer.html'
            })
            .when('/accounttransfers/:accountType/:accountId', {
                templateUrl: 'views/accounttransfers/make_accounttransfer.html'
            })
            .when('/viewsavingtrxn/:accountId/trxnId/:id', {
                templateUrl: 'views/savings/view_saving_transaction.html'
            })
            .when('/newclientfixeddepositaccount/:clientId', {
                templateUrl: 'views/deposits/fixed/newapplication.html'
            })
            .when('/viewfixeddepositaccount/:id', {
                templateUrl: 'views/deposits/fixed/viewaccountdetails.html'
            })
            .when('/editfixeddepositaccount/:id', {
                templateUrl: 'views/deposits/fixed/edit_account_application.html'
            })
            .when('/fixeddepositaccount/:id/charges', {
                templateUrl: 'views/deposits/fixed/add_new_fixed_deposit_charge.html'
            })
            .when('/fixeddepositaccount/:id/:action', {
                templateUrl: 'views/deposits/fixed/fixed_deposit_account_actions.html'
            })
            .when('/fixeddepositaccountcharge/:id/:action/:chargeId', {
                templateUrl: 'views/deposits/fixed/fixed_deposit_account_actions.html'
            })
            .when('/viewfixeddepositaccounttrxn/:accountId/:transactionId', {
                templateUrl: 'views/deposits/fixed/view_fixed_deposit_transaction.html'
            })
            .when('/newclientrecurringdepositaccount/:clientId', {
                templateUrl: 'views/deposits/recurring/newapplication.html'
            })
            .when('/viewrecurringdepositaccount/:id', {
                templateUrl: 'views/deposits/recurring/viewaccountdetails.html'
            })
            .when('/editrecurringdepositaccount/:id', {
                templateUrl: 'views/deposits/recurring/edit_account_application.html'
            })
            .when('/recurringdepositaccount/:id/charges', {
                templateUrl: 'views/deposits/recurring/add_new_recurring_deposit_charge.html'
            })
            .when('/recurringdepositaccount/:id/:action', {
                templateUrl: 'views/deposits/recurring/recurring_deposit_account_actions.html'
            })
            .when('/recurringdepositaccountcharge/:id/:action/:chargeId', {
                templateUrl: 'views/deposits/recurring/recurring_deposit_account_actions.html'
            })
            .when('/viewrecurringdepositaccounttrxn/:accountId/:transactionId', {
                templateUrl: 'views/deposits/recurring/view_recurring_deposit_transaction.html'
            })
            .when('/viewgroup/:id', {
                templateUrl: 'views/groups/viewgroup.html'
            })
            .when('/editgroup/:id', {
                templateUrl: 'views/groups/editgroup.html'
            })
            .when('/addmember', {
                templateUrl: 'views/clients/createclient.html'
            })
            .when('/groupattendance', {
                templateUrl: 'views/groups/groupattendance.html'
            })
            .when('/closegroup/:id', {
                templateUrl: 'views/groups/closegroup.html'
            })
            .when('/groupclosedloanaccount/:groupId', {
                templateUrl: 'views/groups/groupclosedloanaccount.html'
            })
            .when('/groupclosedsavingaccount/:groupId', {
                templateUrl: 'views/groups/groupclosedsavingaccount.html'
            })
            .when('/addrole/:id', {
                templateUrl: 'views/groups/addrole.html'
            })
            .when('/membermanage/:id', {
                templateUrl: 'views/groups/membermanage.html'
            })
            .when('/transferclients/:id', {
                templateUrl: 'views/groups/transferclients.html'
            })
            .when('/centers', {
                templateUrl: 'views/centers/centers.html'
            })
            .when('/viewcenter/:id', {
                templateUrl: 'views/centers/viewcenter.html'
            })
            .when('/createcenter', {
                templateUrl: 'views/centers/createcenter.html'
            })
            .when('/editcenter/:id', {
                templateUrl: 'views/centers/editcenter.html'
            })
            .when('/closecenter/:id', {
                templateUrl: 'views/centers/closecenter.html'
            })
            .when('/managegroupmembers/:id', {
                templateUrl: 'views/centers/managegroupmembers.html'
            })
            .when('/addgroup', {
                templateUrl: 'views/groups/creategroup.html'
            })
            .when('/centerattendance', {
                templateUrl: 'views/centers/centerattendance.html'
            })
            .when('/createcharge', {
                templateUrl: 'views/products/createcharge.html'
            })
            .when('/editcharge/:id', {
                templateUrl: 'views/products/editcharge.html'
            })
            .when('/productivesheet/:officeId/:officeName/:meetingDate/:staffId', {
                templateUrl: 'views/collection/productivecollectionsheet.html'
            })
            .when('/entercollectionsheet', {
                templateUrl: 'views/collection/collectionsheet.html'
            })
            .when('/individualcollectionsheet', {
                templateUrl: 'views/collection/individualcollectionsheet.html'
            })
            .when('/assignstaff/:id/:entityType', {
                templateUrl: 'views/groups/assignstaff.html'
            })
            .when('/global', {
                templateUrl: 'views/administration/global.html'
            })
            .when('/configurations/:configId/editconfig', {
                templateUrl: 'views/administration/editGlobalConfiguration.html'
            })
            .when('/productmix', {
                templateUrl: 'views/products/productmix/productmix.html'
            })
            .when('/viewproductmix/:id', {
                templateUrl: 'views/products/productmix/viewproductmix.html'
            })
            .when('/editproductmix/:id', {
                templateUrl: 'views/products/productmix/editproductmix.html'
            })
            .when('/addproductmix', {
                templateUrl: 'views/products/productmix/addproductmix.html'
            })
            .when('/bulkloan', {
                templateUrl: 'views/organization/bulkloan.html'
            })
            .when('/audit', {
                templateUrl: 'views/system/audit.html'
            })
            .when('/viewaudit/:id', {
                templateUrl: 'views/system/viewaudit.html'
            })
            .when('/createclosure', {
                templateUrl: 'views/accounting/createclosure.html'
            })
            .when('/guarantor/:id', {
                templateUrl: 'views/loans/guarantor.html'
            })
            .when('/listguarantors/:id', {
                templateUrl: 'views/loans/list_guarantor.html'
            })
            .when('/viewcheckerinbox/:id', {
                templateUrl: 'views/system/viewcheckerinbox.html'
            })
            .when('/editguarantor/:id/:loanId', {
                templateUrl: 'views/loans/editguarantor.html'
            })
            .when('/viewguarantortransactions/:savingsId/:fundingId/:fromPath/:fromPathId', {
                templateUrl: 'views/savings/list_onhold_transactions.html'
            })
            .when('/expertsearch', {
                templateUrl: 'views/expertsearch.html'
            })
            .when('/profile', {
                templateUrl: 'views/profile.html'
            })
            .when('/viewMakerCheckerTask/:commandId', {
                templateUrl: 'views/system/viewMakerCheckerTask.html'
            })
            .when('/help', {
                templateUrl: 'views/help.html'
            })
            .when('/checkeractionperformed', {
                templateUrl: 'views/system/checkerActionPerformed.html'
            })
            .when('/advsearch', {
                templateUrl: 'views/search/advsearch.html'
            })
            .when('/editfinancialactivitymapping/:mappingId', {
                templateUrl: 'views/accounting/edit_financial_activity_mapping.html'
            })
            .when('/viewfinancialactivitymapping/:mappingId', {
                templateUrl: 'views/accounting/view_financial_activity.html'
            })
            .when('/financialactivityaccountmappings', {
                templateUrl: 'views/accounting/financial_accounting_mapping.html'
            })
            .when('/addfinancialmapping', {
                templateUrl: 'views/accounting/add_financial_accounting_mapping.html'
            })
            .when('/assignsavingsofficer/:id', {
                templateUrl: 'views/savings/assignsavingsofficer.html'
            })
            .when('/unassignsavingsofficer/:id', {
                templateUrl: 'views/savings/unassignsavingsofficer.html'
            })
            .when('/tellers', {
                templateUrl: 'views/organization/cashmgmt/tellers.html'
            })
            .when('/createTeller', {
                templateUrl: 'views/organization/cashmgmt/createTeller.html'
            })
            .when('/viewtellers/:id', {
                templateUrl: 'views/organization/cashmgmt/viewTeller.html'
            })
            .when('/tellers/:tellerId/cashiers', {
                templateUrl: 'views/organization/cashmgmt/cashiersForTeller.html'
            })
            .when('/tellers/:tellerId/cashiers/:cashierId', {
                templateUrl: 'views/organization/cashmgmt/viewCashiersForTeller.html'
            })
            .when('/tellers/:tellerId/cashiers/:cashierId/txns/:currencyCode', {
                templateUrl: 'views/organization/cashmgmt/cashierTransactions.html'
            })
            .when('/tellers/:tellerId/cashiers/:cashierId/actions/:action', {
                templateUrl: 'views/organization/cashmgmt/cashierFundsAllocationSettlement.html'
            })
            .when('/tellers/:tellerId/cashiers/:cashierId/settle', {
                templateUrl: 'views/organization/cashmgmt/cashierFundsAllocationSettlement.html'
            })
            .when('/tellers/:tellerId/createCashierForTeller', {
                templateUrl: 'views/organization/cashmgmt/createCashier.html'
            })
            .when('/editteller/:id', {
                templateUrl: 'views/organization/cashmgmt/editTeller.html'
            })
            .when('/tellers/:tellerId/editcashier/:id', {
                templateUrl: 'views/organization/cashmgmt/editcashier.html'
            })
            .when('/externalservices', {
                templateUrl: 'views/administration/externalServices.html'
            })
            .when('/externalservices/:externalServicesType', {
                templateUrl: 'views/administration/viewExternalServicesConfiguration.html'
            })
            .when('/externalservices/:externalServicesType/editconfig', {
                templateUrl: 'views/administration/editExternalServicesConfiguration.html'
            })
            .when('/twofactorconfig', {
                templateUrl: 'views/administration/viewTwoFactorConfig.html'
            })
            .when('/twofactorconfig/edit/:configType', {
                templateUrl: 'views/administration/editTwoFactorConfig.html'
            })
            .when('/loans/:loanId/reschedule/', {
                templateUrl: 'views/loans/rescheduleloans.html'
            })
            .when('/loans/:loanId/viewreschedulerequest/:requestId', {
                templateUrl: 'views/loans/viewreschedulerequest.html'
            })
            .when('/loans/:loanId/approvereschedulerequest/:requestId', {
                templateUrl: 'views/loans/approveloanreschedule.html'
            })
            .when('/loans/:loanId/rejectreschedulerequest/:requestId', {
                templateUrl: 'views/loans/rejectloanreschedule.html'
            })
            .when('/loans/:loanId/previewloanrepaymentschedule/:requestId', {
                templateUrl: 'views/loans/previewloanrepaymentschedule.html'
            })
            .when('/viewallprovisionings', {
                templateUrl: 'views/organization/provisioning/ViewAllProvisioningCriteria.html'
            })
            .when('/createprovisioningcriteria', {
                templateUrl: 'views/organization/provisioning/CreateProvisioningCriteria.html'
            })
            .when('/viewprovisioningcriteria/:criteriaId', {
                templateUrl: 'views/organization/provisioning/ViewProvisioningCriteria.html'
            })
            .when('/editprovisioningcriteria/:criteriaId', {
                templateUrl: 'views/organization/provisioning/EditProvisioningCriteria.html'
            })
            .when('/taxconfiguration',{
                templateUrl: 'views/products/tax/TaxConfigurations.html'
            })
            .when('/createtaxcomponent', {
                templateUrl: 'views/products/tax/CreateTaxComponent.html'
            })
            .when('/taxcomponents', {
                templateUrl: 'views/products/tax/TaxComponents.html'
            })
            .when('/viewtaxcomponent/:taxComponentId', {
                templateUrl: 'views/products/tax/ViewTaxComponent.html'
            })
            .when('/edittaxcomponent/:taxComponentId', {
                templateUrl: 'views/products/tax/EditTaxComponent.html'
            })
            .when('/createtaxgroup', {
                templateUrl: 'views/products/tax/CreateTaxGroup.html'
            })
            .when('/taxgroups', {
                templateUrl: 'views/products/tax/TaxGroups.html'
            })
            .when('/viewtaxgroup/:taxGroupId', {
                templateUrl: 'views/products/tax/ViewTaxGroup.html'
            })
            .when('/edittaxgroup/:taxGroupId', {
                templateUrl: 'views/products/tax/EditTaxGroup.html'
            })
            .when('/createshareaccount/:clientId', {
                templateUrl: 'views/shares/createshareaccount.html'
            })
            .when('/viewshareaccount/:id', {
                templateUrl: 'views/shares/viewshareaccount.html'
            })
            .when('/editshareaccount/:accountId', {
                templateUrl: 'views/shares/editshareaccount.html'
            })
            .when('/shareaccount/:accountId/:action', {
                templateUrl: 'views/shares/shareaccountactions.html'
            })
            .when('/shareaccount/:accountId/purchasedshares/:purchasedSharesId/:action', {
                templateUrl: 'views/shares/shareaccountactions.html'
            })
            .when('/dividends/:productId/', {
                templateUrl: 'views/products/dividendlisting.html'
            })
            .when('/dividends/:productId/dividend/:dividendId/:status', {
                templateUrl: 'views/products/viewdividends.html'
            })
            .when('/shareproduct/:productId/:action', {
                templateUrl: 'views/products/shareproductactions.html'
            })
            .when('/shareproduct/:productId/:dividendId/:action', {
                templateUrl: 'views/products/shareproductactions.html'
            })
            .when('/loanforeclosure/:id', {
                templateUrl: 'views/loans/loanforeclosure.html'
            })
            .when('/address/:id', {
                templateUrl: 'views/administration/AddressForm.html'
            })
            .when('/editAddress/:addrType/:addrId/:clientId', {
                templateUrl: 'views/administration/EditAddress.html'
            })
            .when('/smscampaigns', {
                templateUrl: 'views/organization/smscampaigns/smscampaigns.html'
            })
            .when('/createsmscampaign', {
                templateUrl: 'views/organization/smscampaigns/createsmscampaign.html'
            })
            .when('/viewsmscampaign/:campaignId', {
                templateUrl: 'views/organization/smscampaigns/viewsmscampaign.html'
            })
            .when('/editsmscampaign/:campaignId', {
                templateUrl: 'views/organization/smscampaigns/editsmscampaign.html'
            })
            .when('/entitydatatablechecks', {
                templateUrl: 'views/organization/entitydatatablechecks/entitydatatablechecks.html'
            })
            .when('/notifications', {
                templateUrl: 'views/notification/notifications.html'
            })
            .when('/surveys',{
                templateUrl: 'views/surveys/surveys.html'
            })
            .when('/surveys/add',{
                templateUrl: 'views/surveys/createsurvey.html'
            })
            .when('/editsurvey/:id',{
                templateUrl: 'views/surveys/editsurvey.html'
            })
            .when('/editfamilymember/:clientId/:familyMemberId', {
                templateUrl: 'views/clients/editfamilymembers.html'
            })
            .when('/addfamilymembers/:clientId/', {
                templateUrl: 'views/clients/addfamilymembers.html'
            })
            .when('/bulkimportoffices', {
                 templateUrl: 'views/organization/bulkimport/bulkimportoffices.html'
             })
             .when('/bulkimportclients', {
                 templateUrl: 'views/organization/bulkimport/bulkimportclients.html'
             })
            .when('/bulkimportloanaccounts', {
            templateUrl: 'views/organization/bulkimport/bulkimportloanaccounts.html'
            })
            .when('/bulkimportloanrepayments', {
                templateUrl: 'views/organization/bulkimport/bulkimportloanrepayments.html'
            })
            .when('/bulkimportguarantor', {
                templateUrl: 'views/organization/bulkimport/bulkimportguarantor.html'
            })
            .when('/bulkimportsavingsaccounts', {
                templateUrl: 'views/organization/bulkimport/bulkimportsavingsaccounts.html'
            })
            .when('/bulkimportsavingsaccountstransactions', {
                templateUrl: 'views/organization/bulkimport/bulkimportsavingsaccountstransactions.html'
            })
            .when('/bulkimportrecurringdeposits', {
                templateUrl: 'views/organization/bulkimport/bulkimportrecurringdeposits.html'
            })
            .when('/bulkimportrecurringdepositstransactions', {
                templateUrl: 'views/organization/bulkimport/bulkimportrecurringdepositstransactions.html'
            })
            .when('/bulkimportshareaccounts', {
                templateUrl: 'views/organization/bulkimport/bulkimportshareaccounts.html'
            })
            .when('/bulkimportfixeddepositaccounts', {
                templateUrl: 'views/organization/bulkimport/bulkimportfixeddepositaccounts.html'
            })
            .when('/bulkimportfixeddeposittransactions', {
                templateUrl: 'views/organization/bulkimport/bulkimportfixeddeposittransactions.html'
            })
            .when('/bulkimportcoa', {
                templateUrl: 'views/organization/bulkimport/bulkimportcoa.html'
            })
            .when('/bulkimportjournalentries', {
                templateUrl: 'views/organization/bulkimport/bulkimportjournalentries.html'
            })
            .when('/bulkimportgroup', {
                templateUrl: 'views/organization/bulkimport/bulkimportgroup.html'
            })
            .when('/bulkimportcenters', {
                templateUrl: 'views/organization/bulkimport/bulkimportcenters.html'
            })
            .when('/bulkimportemployees', {
                templateUrl: 'views/organization/bulkimport/bulkimportemployees.html'
            })
            .when('/bulkimportusers', {
                templateUrl: 'views/organization/bulkimport/bulkimportusers.html'
            })
            .when('/bulkimport', {
                templateUrl: 'views/organization/bulkimport/bulkimport.html'
            })
			.when('/adhocquery/', {
                templateUrl: 'views/adhocquery/adhocquerylists.html'
            })
            .when('/createadhocquery/', {
                templateUrl: 'views/adhocquery/createadhocquery.html'
            })
            .when('/viewadhocquery/:id', {
                templateUrl: 'views/adhocquery/viewadhocquery.html'
            })
            .when('/editadhocquery/:id', {
                templateUrl: 'views/adhocquery/editadhocquery.html'
            })
            .when('/lenders', {
                templateUrl: 'views/lenders/lenders.html'
            })
            .when('/createlender', {
                templateUrl: 'views/lenders/createlender.html'
            })
            .when('/editlender', {
                templateUrl: 'views/lenders/editlender.html'
            })
            .when('/addlenderscheme', {
                templateUrl: 'views/lenders/addscheme.html'
            })
            .when('/viewlenderscheme', {
                templateUrl: 'views/lenders/viewscheme.html'
            })
            .when('/editlenderscheme', {
                templateUrl: 'views/lenders/editscheme.html'
            })
            .when('/addlenderaccount', {
                templateUrl: 'views/lenders/addaccount.html'
            })
            .when('/viewlenderaccount', {
                templateUrl: 'views/lenders/viewaccount.html'
            })
            .when('/editlenderaccount', {
                templateUrl: 'views/lenders/editaccount.html'
            })
            .when('/addlendercontacts', {
                templateUrl: 'views/lenders/addcontacts.html'
            })
            .when('/viewlendercontacts', {
                templateUrl: 'views/lenders/viewcontacts.html'
            })
            .when('/editlendercontacts', {
                templateUrl: 'views/lenders/editcontacts.html'
            })
            .when('/viewlender', {
                templateUrl: 'views/lenders/viewlender.html'
            })
            .when('/activatelender', {
                templateUrl: 'views/lenders/activate.html'
            })
            .when('/closelender', {
                templateUrl: 'views/lenders/close.html'
            })
            .when('/fldg', {
                templateUrl: 'views/fldg/fldg.html'
            })
            .when('/createfldg', {
                templateUrl: 'views/fldg/createfldg.html'
            })
            .when('/editfldg', {
                templateUrl: 'views/fldg/editfldg.html'
            })
            .when('/viewfldg', {
                templateUrl: 'views/fldg/viewfldg.html'
            })
            .when('/addrevenueshare', {
                templateUrl: 'views/fldg/addrevenueshare.html'
            })
            .when('/editrevenueshare', {
                templateUrl: 'views/fldg/editrevenueshare.html'
            })
            .when('/viewrevenueshare', {
                templateUrl: 'views/fldg/viewrevenueshare.html'
            })
            .when('/channelpartners', {
                templateUrl: 'views/channelpartners/channelpartners.html'
            })
            .when('/createchannelpartner', {
                templateUrl: 'views/channelpartners/createchannelpartner.html'
            })
            .when('/viewchannelpartner', {
                templateUrl: 'views/channelpartners/viewchannelpartner.html'
            })
            .when('/editchannelpartner', {
                templateUrl: 'views/channelpartners/editchannelpartner.html'
            })
            .when('/addchannelbilling', {
                templateUrl: 'views/channelpartners/addbilling.html'
            })
            .when('/viewchannelbilling', {
                templateUrl: 'views/channelpartners/viewbilling.html'
            })
            .when('/editchannelbilling', {
                templateUrl: 'views/channelpartners/editbilling.html'
            })
            .when('/editchannelcontact', {
                templateUrl: 'views/channelpartners/editcontacts.html'
            })
            .when('/addchannelcontact', {
                templateUrl: 'views/channelpartners/addcontacts.html'
            })
            .when('/viewchannelcontact', {
                templateUrl: 'views/channelpartners/viewcontacts.html'
            })
            .when('/activatechannel', {
                templateUrl: 'views/channelpartners/activate.html'
            })
            .when('/closechannel', {
                templateUrl: 'views/channelpartners/close.html'
            })
            .when('/activatefldg', {
                templateUrl: 'views/fldg/activatefldg.html'
            })
            .when('/closefldg', {
                templateUrl: 'views/fldg/closefldg.html'
            })
            .when('/margindeposits', {
                templateUrl: 'views/margin-deposit/margindeposits.html'
            })
            .when('/margindeposit', {
                templateUrl: 'views/margin-deposit/margin-deposit.html'
            })
            .when('/viewmargindeposit', {
                templateUrl: 'views/margin-deposit/viewmargin-deposit.html'
            })
            .when('/editmargindeposit', {
                templateUrl: 'views/margin-deposit/editmargin-deposit.html'
            })
            .when('/servicemodels', {
                templateUrl: 'views/products/servicemodel/servicemodels.html'
            })
            .when('/createloanservicemodel', {
                templateUrl: 'views/products/servicemodel/createloanservicemodel.html'
            })
            .when('/editloanservicemodel', {
                templateUrl: 'views/products/servicemodel/editloanservicemodel.html'
            })
            .when('/viewloanservicemodel', {
                templateUrl: 'views/products/servicemodel/viewloanservicemodel.html'
            })
            .when('/uploaddisbursement', {
                templateUrl: 'views/clients/uploaddisbursement.html'
            })
            .when('/uploadloanrepayment', {
                templateUrl: 'views/operations/uploadloanrepayments.html'
            })
            .when('/uploadnachfailure', {
                templateUrl: 'views/operations/uploadnachfailure.html'
            })
            .when('/interestpayment', {
                templateUrl: 'views/margin-deposit/interestpayment.html'
            })
            .when('/badloanclaims', {
                templateUrl: 'views/operations/badloanclaims/badloanclaims.html'
            })
            .when('/createbadloanclaims', {
                templateUrl: 'views/operations/badloanclaims/createbadloanclaims.html'
            })
            .when('/viewbadloanclaims', {
                templateUrl: 'views/operations/badloanclaims/viewbadloanclaims.html'
            })
            .when('/editbadloanclaims', {
                templateUrl: 'views/operations/badloanclaims/editbadloanclaims.html'
            })
            .when('/loanservicing', {
                templateUrl: 'views/operations/Loanservicingincome/loanservicingincome.html'
            })
            .when('/mktcommission', {
                templateUrl: 'views/operations/Loanservicingincome/mktcommision.html'
            })
            .when('/viewmktcommission', {
                templateUrl: 'views/operations/Loanservicingincome/viewmktcommission.html'
            })
            .when('/fldgshare', {
                templateUrl: 'views/operations/Loanservicingincome/fldgshare.html'
            })
            .when('/viewfldgshare', {
                templateUrl: 'views/operations/Loanservicingincome/viewfldgshare.html'
            })
            .when('/prsshare', {
                templateUrl: 'views/operations/Loanservicingincome/prsshare.html'
            })
            .when('/viewprsshare', {
                templateUrl: 'views/operations/Loanservicingincome/viewprsshare.html'
            })
            .when('/loansourcing', {
                templateUrl: 'views/operations/loansourcingexpenses/loansourcingexpenses.html'
            })
            .when('/dsamonthend', {
                templateUrl: 'views/operations/loansourcingexpenses/dsamonthendcommission.html'
            })
            .when('/viewdsamonthend', {
                templateUrl: 'views/operations/loansourcingexpenses/viewdsamonthendcommission.html'
            })
            .when('/dsainvoice', {
                templateUrl: 'views/operations/loansourcingexpenses/dsainvoicepayment.html'
            })
            .when('/viewdsainvoice', {
                templateUrl: 'views/operations/loansourcingexpenses/viewdsainvoicepayment.html'
            })
            .when('/approvedsainvoice', {
                templateUrl: 'views/operations/loansourcingexpenses/approvedsainvoice.html'
            })
            .when('/adddsainvoice', {
                templateUrl: 'views/operations/loansourcingexpenses/adddsainvoicepayment.html'
            })
            .when('/editdsainvoice', {
                templateUrl: 'views/operations/loansourcingexpenses/editdsainvoicepayment.html'
            })
            .when('/addloanserviceperson', {
                templateUrl: 'views/loans/addserviceperson.html'
            })
            .when('/viewserviceperson', {
                templateUrl: 'views/loans/viewserviceperson.html'
            })
            .when('/editloanserviceperson', {
                templateUrl: 'views/loans/editserviceperson.html'
            })
            .when('/dlod', {
                templateUrl: 'views/dlod/dlod.html'
            })
            .when('/createdlod', {
                templateUrl: 'views/dlod/createdlod.html'
            })
            .when('/viewdlod', {
                templateUrl: 'views/dlod/viewdlod.html'
            })
            .when('/editdlod', {
                templateUrl: 'views/dlod/editdlod.html'
            })
            .when('/uploadstatement', {
                templateUrl: 'views/operations/transactionstatementupload.html'
            })
            .when('/roledashboard', {
                templateUrl: 'views/private/role_dashboard.html'
            })
            .when('/downloadtallyexcel', {
                templateUrl: 'views/accounting/downloadtallyexcel.html'
            })
            .when('/taskdashboard', {
                templateUrl: 'views/tasks/taskdashboard.html'
            })
            .when('/taskoverview', {
                templateUrl: 'views/tasks/taskoverview.html'
            })
            .when('/createtask', {
                templateUrl: 'views/tasks/createtask.html'
            })
            .when('/closetask', {
                templateUrl: 'views/tasks/closetask.html'
            })
            .when('/deletetask', {
                templateUrl: 'views/tasks/deletetask.html'
            })
            .when('/reassigntask', {
                templateUrl: 'views/tasks/reassigntask.html'
            })
            .when('/reopentask', {
                templateUrl: 'views/tasks/reopentask.html'
            })
            .when('/taskstatustransition', {
                templateUrl: 'views/tasks/taskstatustransition.html'
            })
            .when('/updatetask', {
                templateUrl: 'views/tasks/updatetask.html'
            })
            .when('/viewtask', {
                templateUrl: 'views/tasks/viewtask.html'
            })
            .when('/loanclaim', {
                templateUrl: 'views/margin-deposit/loanclaimwithdrawal.html'
            })
            .when('/close', {
                templateUrl: 'views/margin-deposit/closure.html'
            })
            .when('/closedlod', {
                templateUrl: 'views/dlod/close.html'
            })
            .when('/foreclosuresaving', {
                templateUrl: 'views/savings/foreclosure.html'
            })
            .when('/editclientdocument', {
                templateUrl: 'views/clients/editdocument.html'
            })
            .when('/editloandocument', {
                templateUrl: 'views/loans/editloandocument.html'
            })

            .otherwise({
                templateUrl: "views/errors/404.html"
            });
        $locationProvider.html5Mode(false);
    };
    mifosX.ng.application.config(defineRoutes).run(function ($log) {
        $log.info("Routes definition completed");
    });
}(mifosX || {}));
;
(function (mifosX) {
    var defineHeaders = function ($httpProvider, $translateProvider, ResourceFactoryProvider, HttpServiceProvider, $idleProvider, $keepaliveProvider, IDLE_DURATION, WARN_DURATION, KEEPALIVE_INTERVAL) {
        var mainLink = getLocation(window.location.href);
        var baseApiUrl = "https://demo.openmf.org";
        var host = "";
        var portNumber = "";
        //accessing from openmf server
        if (mainLink.hostname.indexOf('openmf.org') >= 0) {
            var hostname = window.location.hostname;
            console.log('hostname---' + hostname);
            domains = hostname.split('.');
            console.log('domains---' + domains);
            // For multi tenant hosting
            if (domains[0] == "demo") {
                $httpProvider.defaults.headers.common['Fineract-Platform-TenantId'] = 'default';
                ResourceFactoryProvider.setTenantIdenetifier('default');
                console.log("demo server", domains[0]);
            } else {
                $httpProvider.defaults.headers.common['Fineract-Platform-TenantId'] = domains[0];
                ResourceFactoryProvider.setTenantIdenetifier(domains[0]);
                console.log("other than demo server", domains[0]);
            }
            host = "https://" + mainLink.hostname;
            console.log('hostname from mainLink = ', host);
        }
        //accessing from a file system or other servers
        else {
            if (mainLink.hostname != "") {
                baseApiUrl = "https://" + mainLink.hostname + (mainLink.port ? ':' + mainLink.port : '');
            }

            if (QueryParameters["baseApiUrl"]) {
                baseApiUrl = QueryParameters["baseApiUrl"];
            }
            var queryLink = getLocation(baseApiUrl);
            host = "https://" + queryLink.hostname + (queryLink.port ? ':' + queryLink.port : '');
            portNumber = queryLink.port;

            $httpProvider.defaults.headers.common['Fineract-Platform-TenantId'] = 'default';
            ResourceFactoryProvider.setTenantIdenetifier('default');
            if (QueryParameters["tenantIdentifier"]) {
                $httpProvider.defaults.headers.common['Fineract-Platform-TenantId'] = QueryParameters["tenantIdentifier"];
                ResourceFactoryProvider.setTenantIdenetifier(QueryParameters["tenantIdentifier"]);
            }
        }

        ResourceFactoryProvider.setBaseUrl(host);
        HttpServiceProvider.addRequestInterceptor('demoUrl', function (config) {
            return _.extend(config, {url: host + config.url });
        });

        // Enable CORS! (see e.g. http://enable-cors.org/)
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        //Set headers
        $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';

        // Configure i18n and preffer language
        //$translateProvider.translations('en', translationsEN);
        //$translateProvider.translations('de', translationsDE);
        $translateProvider.useSanitizeValueStrategy('escaped');
        $translateProvider.useStaticFilesLoader({
            prefix: 'global-translations/locale-',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.fallbackLanguage('en');
        //Timeout settings.
        $idleProvider.idleDuration(IDLE_DURATION); //Idle time 
        $idleProvider.warningDuration(WARN_DURATION); //warning time(sec)
        $keepaliveProvider.interval(KEEPALIVE_INTERVAL); //keep-alive ping
    };
    mifosX.ng.application.config(defineHeaders).run(function ($log, $idle) {
        $log.info("Initial tasks are done!");
        $idle.watch();
    });
}(mifosX || {}));

getLocation = function (href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

QueryParameters = (function () {
    var result = {};
    if (window.location.search) {
        // split up the query string and store in an associative array
        var params = window.location.search.slice(1).split("&");
        for (var i = 0; i < params.length; i++) {
            var tmp = params[i].split("=");
            result[tmp[0]] = unescape(tmp[1]);
        }
    }
    return result;
}());
;define(['angular', 'webstorage'], function (angular) {
    angular.module('webStorageModule')
        .constant('prefix', 'mifosX')
        .run(function ($log, webStorage) {
            if (webStorage.isSupported) {
                if (webStorage.local.isSupported) {
                    $log.info('Using local storage');
                } else if (webStorage.session.isSupported) {
                    $log.info('Using session storage');
                } else {
                    $log.warn('Using memory storage: a page reload will clear all stored data');
                }
            }
        });
});