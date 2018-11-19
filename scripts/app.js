angular.module('ESS', [ 'kendo.directives',
                        'LocalStorageModule',
                        'ess.config',
                        'ess.validatorService',
                        'ess.registerService',
                        'ess.userAuthenticationService',
                        'ess.employeeService',
                        'ess.employeeProfileService',
                        'ess.companyService',
                        'ess.LoginController',
                        'ess.UserController',
                        'ess.CompanyController',
                        'ess.CompanyChartController',
                        'ess.EmployeeController',
                        'ess.EmployeeProfileController',
                        'ess.RegisterController',
                        'ess.alertPopupDirective',
                        'ess.confirmPopupDirective',
                        'validation.match'
                      ]);