angular.module('pwqx.controllers', [])
.controller('listCtrl', function($rootScope,$scope, $state, $ionicPopup) {
	//$scope.data = [{color:'red',name:'111'},{color:'darkgoldenrod',name:'222'},{color:'green',name:'333'},{color:'blue',name:'444'}];
	$scope.items = [{'key':'text','value':'文本框'},
	{'key':'button','value':'按钮'},
	{'key':'card','value':'卡片'},
	{'key':'grid','value':'表格'},
	{'key':'color','value':'颜色'},
	{'key':'toggle','value':'切换'},
	{'key':'checkbox','value':'复选框'},
	{'key':'range','value':'滑块'},
	{'key':'tab','value':'选项卡'},
	{'key':'icon','value':'图标'},
	{'key':'list1','value':'列表'},
	{'key':'putUpMenu','value':'上拉菜单'},
	{'key':'background','value':'背景层'},
	{'key':'popover','value':'浮动框'},
	{'key':'refresh','value':'刷新'}];
	$scope.messageDetils = function(msg) {
		$state.go(msg.key, {
			"value": msg.key
		});
	};
})
.controller('textCtrl', function($scope, $state, $stateParams) {
	$scope.name = $stateParams.value;
	$scope.myclick = function() {
//		$state.go("tab1", {
//		});
	};
})
.controller('buttonCtrl', function($scope, $state, $stateParams) {
	$scope.name = $stateParams.value;
	$scope.myclick = function() {
//		$state.go("tab1", {
//		});
	};
})
.controller('cardCtrl', function($scope, $state, $stateParams) {
	$scope.name = $stateParams.value;
	$scope.myclick = function() {
//		$state.go("tab1", {
//		});
	};
})
.controller('iconCtrl', function($scope, $state, $stateParams) {
	$scope.name = $stateParams.value;
	$scope.myclick = function() {
//		$state.go("tab1", {
//		});
	};
})
.controller('gridCtrl', function($scope, $state, $stateParams) {
	$scope.name = $stateParams.value;
	$scope.myclick = function() {
//		$state.go("tab1", {
//		});
	};
})
.controller('colorCtrl', function($scope, $state, $stateParams) {
	$scope.name = $stateParams.value;
	$scope.myclick = function() {
//		$state.go("tab1", {
//		});
	};
})
.controller('toggleCtrl', function($scope, $state, $stateParams) {
	$scope.name = $stateParams.value;
	$scope.myclick = function() {
//		$state.go("tab1", {
//		});
	};
})
.controller('checkboxCtrl', function($scope, $state, $stateParams) {
	$scope.name = $stateParams.value;
	$scope.myclick = function() {
//		$state.go("tab1", {
//		});
	};
})
.controller('rangeCtrl', function($scope, $state, $stateParams) {
	$scope.name = $stateParams.value;
	$scope.myclick = function() {
//		$state.go("tab1", {
//		});
	};
})
.controller('tabCtrl', function($scope, $state, $stateParams) {
	$scope.name = $stateParams.value;
	$scope.myclick = function() {
//		$state.go("tab1", {
//		});
	};
})
.controller('list1Ctrl', function($scope, $state, $stateParams) {
	$scope.name = $stateParams.value;
	$scope.myclick = function() {
//		$state.go("tab1", {
//		});
	};
})
.controller('putUpMenuCtrl', function($scope, $state, $stateParams,$timeout,$ionicActionSheet) {
	 $scope.show = function() {

      var hideSheet = $ionicActionSheet.show({
          buttons: [
            { text: '<b>Share</b> This' },
            { text: 'Move' }
          ],
          destructiveText: 'Delete',
          titleText: 'Modify your album',
          cancelText: 'Cancel',
          cancel: function() {
               // add cancel code..
             },
          buttonClicked: function(index) {
            return true;
          }
      });

      $timeout(function() {
          hideSheet();
      }, 2000);

    };  
})
.controller('backgroundCtrl', function($scope, $timeout, $ionicBackdrop) {
	$scope.action = function() {
       $ionicBackdrop.retain();
       $timeout(function() {    //默认让它1秒后消失
         $ionicBackdrop.release();
       }, 1000);
    }; 
})
.controller('refreshCtrl', function($scope, $timeout, $http) {
	$scope.items=[
        {
            "name":"HTML5"
        },
        {
            "name":"JavaScript"
        },
        {
            "name":"Css3"
        }
    ];

    $scope.doRefresh = function() {
        $http.get('templates/controls/text/refresh.json')  //注意改为自己本站的地址，不然会有跨域问题
            .success(function(newItems) {
                $scope.items = newItems;
            })
            .finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });
    };
})
.controller('popoverCtrl', function($scope,$ionicPopover,$timeout) {
	 $scope.popover = $ionicPopover.fromTemplateUrl('my-popover.html', {
    	scope: $scope
  });
 
  // .fromTemplateUrl() 方法
  $ionicPopover.fromTemplateUrl('my-popover.html', {
		    scope: $scope
		  }).then(function(popover) {
		    $scope.popover = popover;
		  });
		 
		 
		  $scope.openPopover = function($event) {
		    $scope.popover.show($event);
		  };
		  $scope.closePopover = function() {
		    $scope.popover.hide();
		  };
		  // 清除浮动框
		  $scope.$on('$destroy', function() {
		    $scope.popover.remove();
		  });
		  // 在隐藏浮动框后执行
		  $scope.$on('popover.hidden', function() {
		    // 执行代码
		  });
		  // 移除浮动框后执行
		  $scope.$on('popover.removed', function() {
		    // 执行代码
		  });
})
;