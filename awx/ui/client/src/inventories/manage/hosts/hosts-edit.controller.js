/*************************************************
 * Copyright (c) 2016 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

 export default
    ['$state', '$stateParams', '$scope', 'HostForm', 'ParseTypeChange', 'HostManageService', 'host',
    function($state, $stateParams, $scope, HostForm, ParseTypeChange, HostManageService, host){

        init();

        function init(){
            $scope.$watch('host.summary_fields.user_capabilities.edit', function(val) {
                if (val === false) {
                    $scope.canAdd = false;
                }
            });

            $scope.parseType = 'yaml';
            $scope.host = host;
            $scope.variables = host.variables === '' ? '---' : host.variables;
            $scope.name = host.name;
            $scope.description = host.description;
            ParseTypeChange({
                scope: $scope,
                field_id: 'host_variables',
            });
        }
        $scope.formCancel = function(){
            $state.go('^');
        };
        $scope.toggleHostEnabled = function(){
            $scope.host.enabled = !$scope.host.enabled;
        };
        $scope.formSave = function(){
            var host = {
                id: $scope.host.id,
                variables: $scope.variables === '---' || $scope.variables === '{}' ? null : $scope.variables,
                name: $scope.name,
                description: $scope.description,
                enabled: $scope.host.enabled
            };
            HostManageService.put(host).then(function(){
                $state.go($state.current, null, {reload: true});
            });
        };
    }];
