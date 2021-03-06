myApp.controller('GalleryCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $location) {
    $scope.template = TemplateService.getHTML("content/gallery.html");
    TemplateService.title = "Gallery"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.formSubmitted = false;
    $scope.submitForm = function (data) {
        console.log(data);
        $scope.formSubmitted = true;
        $.fancybox.close(true);
    };

    //for season3
    $scope.season3 = [{
            img1: 'img/season3/235.jpg',
            img2: 'img/small-season3/235.jpg',
        }, {
            img1: 'img/season3/236.jpg',
            img2: 'img/small-season3/236.jpg',
        }, {
            img1: 'img/season3/237.jpg',
            img2: 'img/small-season3/237.jpg',
        }, {
            img1: 'img/season3/238.jpg',
            img2: 'img/small-season3/238.jpg',
        }, {
            img1: 'img/season3/239.jpg',
            img2: 'img/small-season3/239.jpg',
        }, {
            img1: 'img/season3/240.jpg',
            img2: 'img/small-season3/240.jpg',
        }, {
            img1: 'img/season3/241.jpg',
            img2: 'img/small-season3/241.jpg',
        }, {
            img1: 'img/season3/242.jpg',
            img2: 'img/small-season3/242.jpg',
        }, {
            img1: 'img/season3/243.jpg',
            img2: 'img/small-season3/243.jpg',
        }, {
            img1: 'img/season3/244.jpg',
            img2: 'img/small-season3/244.jpg',
        }, {
            img1: 'img/season3/245.jpg',
            img2: 'img/small-season3/245.jpg',
        }, {
            img1: 'img/season3/246.jpg',
            img2: 'img/small-season3/246.jpg',
        }, {
            img1: 'img/season3/247.jpg',
            img2: 'img/small-season3/247.jpg',
        }, {
            img1: 'img/season3/248.jpg',
            img2: 'img/small-season3/248.jpg',
        }, {
            img1: 'img/season3/249.jpg',
            img2: 'img/small-season3/249.jpg',
        }, {
            img1: 'img/season3/250.jpg',
            img2: 'img/small-season3/250.jpg',
        }, {
            img1: 'img/season3/251.jpg',
            img2: 'img/small-season3/251.jpg',
        }, {
            img1: 'img/season3/252.jpg',
            img2: 'img/small-season3/252.jpg',
        }, {
            img1: 'img/season3/253.jpg',
            img2: 'img/small-season3/253.jpg',
        }, {
            img1: 'img/season3/254.jpg',
            img2: 'img/small-season3/254.jpg',
        }, {
            img1: 'img/season3/255.jpg',
            img2: 'img/small-season3/255.jpg',
        }, {
            img1: 'img/season3/256.jpg',
            img2: 'img/small-season3/256.jpg',
        }, {
            img1: 'img/season3/257.jpg',
            img2: 'img/small-season3/257.jpg',
        }, {
            img1: 'img/season3/258.jpg',
            img2: 'img/small-season3/258.jpg',
        }, {
            img1: 'img/season3/259.jpg',
            img2: 'img/small-season3/259.jpg',
        },
        // {
        //     img1: 'img/season3/260.jpg',
        //     img2: 'img/small-season3/260.jpg',
        // },
        {
            img1: 'img/season3/261.jpg',
            img2: 'img/small-season3/261.jpg',
        }, {
            img1: 'img/season3/262.jpg',
            img2: 'img/small-season3/262.jpg',
        }, {
            img1: 'img/season3/263.jpg',
            img2: 'img/small-season3/263.jpg',
        }, {
            img1: 'img/season3/264.jpg',
            img2: 'img/small-season3/264.jpg',
        }, {
            img1: 'img/season3/265.jpg',
            img2: 'img/small-season3/265.jpg',
        }, {
            img1: 'img/season3/266.jpg',
            img2: 'img/small-season3/266.jpg',
        }
        // , {
        //     img1: 'img/season3/267.jpg',
        //     img2: 'img/small-season3/267.jpg',
        // }
        // , {
        //     img1: 'img/season3/268.jpg',
        //     img2: 'img/small-season3/268.jpg',
        // }
        , {
            img1: 'img/season3/269.jpg',
            img2: 'img/small-season3/269.jpg',
        }, {
            img1: 'img/season3/270.jpg',
            img2: 'img/small-season3/270.jpg',
        }, {
            img1: 'img/season3/271.jpg',
            img2: 'img/small-season3/271.jpg',
        }, {
            img1: 'img/season3/272.jpg',
            img2: 'img/small-season3/272.jpg',
        }
        // , {
        //     img1: 'img/season3/273.jpg',
        //     img2: 'img/small-season3/273.jpg',
        // }
        // , {
        //     img1: 'img/season3/274.jpg',
        //     img2: 'img/small-season3/274.jpg',
        // }
        // , {
        //     img1: 'img/season3/275.jpg',
        //     img2: 'img/small-season3/275.jpg',
        // }
        , {
            img1: 'img/season3/276.jpg',
            img2: 'img/small-season3/276.jpg',
        }, {
            img1: 'img/season3/277.jpg',
            img2: 'img/small-season3/277.jpg',
        }
        // , {
        //     img1: 'img/season3/278.jpg',
        //     img2: 'img/small-season3/278.jpg',
        // }
        // , {
        //     img1: 'img/season3/279.jpg',
        //     img2: 'img/small-season3/279.jpg',
        // }
        // , {
        //     img1: 'img/season3/280.jpg',
        //     img2: 'img/small-season3/280.jpg',
        // }
        , {
            img1: 'img/season3/281.jpg',
            img2: 'img/small-season3/281.jpg',
        }, {
            img1: 'img/season3/282.jpg',
            img2: 'img/small-season3/282.jpg',
        }, {
            img1: 'img/season3/283.jpg',
            img2: 'img/small-season3/283.jpg',
        }, {
            img1: 'img/season3/284.jpg',
            img2: 'img/small-season3/284.jpg',
        }
        // , {
        //     img1: 'img/season3/285.jpg',
        //     img2: 'img/small-season3/285.jpg',
        // }
        // , {
        //     img1: 'img/season3/286.jpg',
        //     img2: 'img/small-season3/286.jpg',
        // }
        , {
            img1: 'img/season3/287.jpg',
            img2: 'img/small-season3/287.jpg',
        }, {
            img1: 'img/season3/288.jpg',
            img2: 'img/small-season3/288.jpg',
        }, {
            img1: 'img/season3/289.jpg',
            img2: 'img/small-season3/289.jpg',
        }, {
            img1: 'img/season3/290.jpg',
            img2: 'img/small-season3/290.jpg',
        }, {
            img1: 'img/season3/291.jpg',
            img2: 'img/small-season3/291.jpg',
        }
        // , {
        //     img1: 'img/season3/292.jpg',
        //     img2: 'img/small-season3/292.jpg',
        // }
        // , {
        //     img1: 'img/season3/293.jpg',
        //     img2: 'img/small-season3/293.jpg',
        // }
        // , {
        //     img1: 'img/season3/294.jpg',
        //     img2: 'img/small-season3/294.jpg',
        // }
        // , {
        //     img1: 'img/season3/295.jpg',
        //     img2: 'img/small-season3/295.jpg',
        // }
        // , {
        //     img1: 'img/season3/296.jpg',
        //     img2: 'img/small-season3/296.jpg',
        // }
        , {
            img1: 'img/season3/297.jpg',
            img2: 'img/small-season3/297.jpg',
        }, {
            img1: 'img/season3/298.jpg',
            img2: 'img/small-season3/298.jpg',
        }, {
            img1: 'img/season3/299.jpg',
            img2: 'img/small-season3/299.jpg',
        }, {
            img1: 'img/season3/300.jpg',
            img2: 'img/small-season3/300.jpg',
        }, {
            img1: 'img/season3/301.jpg',
            img2: 'img/small-season3/301.jpg',
        }, {
            img1: 'img/season3/302.jpg',
            img2: 'img/small-season3/302.jpg',
        }, {
            img1: 'img/season3/303.jpg',
            img2: 'img/small-season3/303.jpg',
        }, {
            img1: 'img/season3/304.jpg',
            img2: 'img/small-season3/304.jpg',
        }
        // , {
        //     img1: 'img/season3/305.jpg',
        //     img2: 'img/small-season3/305.jpg',
        // }
        // , {
        //     img1: 'img/season3/306.jpg',
        //     img2: 'img/small-season3/306.jpg',
        // }
        // , {
        //     img1: 'img/season3/307.jpg',
        //     img2: 'img/small-season3/307.jpg',
        // }
        // , {
        //     img1: 'img/season3/308.jpg',
        //     img2: 'img/small-season3/308.jpg',
        // }
        // , {
        //     img1: 'img/season3/309.jpg',
        //     img2: 'img/small-season3/309.jpg',
        // }
        , {
            img1: 'img/season3/234.jpg',
            img2: 'img/small-season3/234.jpg',
        },
        {
            img1: 'img/season3/233.jpg',
            img2: 'img/small-season3/233.jpg',
        }
        // , {
        //     img1: 'img/season3/232.jpg',
        //     img2: 'img/small-season3/232.jpg',
        // }
        // , {
        //     img1: 'img/season3/231.jpg',
        //     img2: 'img/small-season3/231.jpg',
        // }
        // , {
        //     img1: 'img/season3/230.jpg',
        //     img2: 'img/small-season3/230.jpg',
        // }
        // , {
        //     img1: 'img/season3/229.jpg',
        //     img2: 'img/small-season3/229.jpg',
        // }
        // , {
        //     img1: 'img/season3/228.jpg',
        //     img2: 'img/small-season3/228.jpg',
        // }
        // , {
        //     img1: 'img/season3/227.jpg',
        //     img2: 'img/small-season3/227.jpg',
        // }
        // , {
        //     img1: 'img/season3/226.jpg',
        //     img2: 'img/small-season3/226.jpg',
        // }
        // , {
        //     img1: 'img/season3/225.jpg',
        //     img2: 'img/small-season3/225.jpg',
        // }
        // , {
        //     img1: 'img/season3/224.jpg',
        //     img2: 'img/small-season3/224.jpg',
        // }
        // , {
        //     img1: 'img/season3/223.jpg',
        //     img2: 'img/small-season3/223.jpg',
        // }
        // , {
        //     img1: 'img/season3/222.jpg',
        //     img2: 'img/small-season3/222.jpg',
        // }
        , {
            img1: 'img/season3/221.jpg',
            img2: 'img/small-season3/221.jpg',
        }, {
            img1: 'img/season3/220.jpg',
            img2: 'img/small-season3/220.jpg',
        }
        // , {
        //     img1: 'img/season3/219.jpg',
        //     img2: 'img/small-season3/219.jpg',
        // }
        // , {
        //     img1: 'img/season3/218.jpg',
        //     img2: 'img/small-season3/218.jpg',
        // }
        // , {
        //     img1: 'img/season3/217.jpg',
        //     img2: 'img/small-season3/217.jpg',
        // }
        , {
            img1: 'img/season3/216.jpg',
            img2: 'img/small-season3/216.jpg',
        }
        // , {
        //     img1: 'img/season3/215.jpg',
        //     img2: 'img/small-season3/215.jpg',
        // }
        // , {
        //     img1: 'img/season3/214.jpg',
        //     img2: 'img/small-season3/214.jpg',
        // }
        // , {
        //     img1: 'img/season3/213.jpg',
        //     img2: 'img/small-season3/213.jpg',
        // }
        // , {
        //     img1: 'img/season3/212.jpg',
        //     img2: 'img/small-season3/212.jpg',
        // }
        ,

        {
            img1: 'img/season3/211.jpg',
            img2: 'img/small-season3/211.jpg',
        }, {
            img1: 'img/season3/210.jpg',
            img2: 'img/small-season3/210.jpg',
        }, {
            img1: 'img/season3/209.jpg',
            img2: 'img/small-season3/209.jpg',
        }, {
            img1: 'img/season3/208.jpg',
            img2: 'img/small-season3/208.jpg',
        }, {
            img1: 'img/season3/207.jpg',
            img2: 'img/small-season3/207.jpg',
        }, {
            img1: 'img/season3/206.jpg',
            img2: 'img/small-season3/206.jpg',
        }, {
            img1: 'img/season3/205.jpg',
            img2: 'img/small-season3/205.jpg',
        }, {
            img1: 'img/season3/204.jpg',
            img2: 'img/small-season3/204.jpg',
        },
        // {
        //     img1: 'img/season3/203.jpg',
        //     img2: 'img/small-season3/203.jpg',
        // }, 
        {
            img1: 'img/season3/202.jpg',
            img2: 'img/small-season3/202.jpg',
        }, {
            img1: 'img/season3/201.jpg',
            img2: 'img/small-season3/201.jpg',
        }, {
            img1: 'img/season3/200.jpg',
            img2: 'img/small-season3/200.jpg',
        }, {
            img1: 'img/season3/199.jpg',
            img2: 'img/small-season3/199.jpg',
        }, {
            img1: 'img/season3/198.jpg',
            img2: 'img/small-season3/198.jpg',
        }, {
            img1: 'img/season3/197.jpg',
            img2: 'img/small-season3/197.jpg',
        }, {
            img1: 'img/season3/196.jpg',
            img2: 'img/small-season3/196.jpg',
        }, {
            img1: 'img/season3/195.jpg',
            img2: 'img/small-season3/195.jpg',
        }, {
            img1: 'img/season3/194.jpg',
            img2: 'img/small-season3/194.jpg',
        }, {
            img1: 'img/season3/193.jpg',
            img2: 'img/small-season3/193.jpg',
        }, {
            img1: 'img/season3/192.jpg',
            img2: 'img/small-season3/192.jpg',
        }, {
            img1: 'img/season3/191.jpg',
            img2: 'img/small-season3/191.jpg',
        }, {
            img1: 'img/season3/190.jpg',
            img2: 'img/small-season3/190.jpg',
        }, {
            img1: 'img/season3/189.jpg',
            img2: 'img/small-season3/189.jpg',
        }, {
            img1: 'img/season3/188.jpg',
            img2: 'img/small-season3/188.jpg',
        }, {
            img1: 'img/season3/187.jpg',
            img2: 'img/small-season3/187.jpg',
        }, {
            img1: 'img/season3/186.jpg',
            img2: 'img/small-season3/186.jpg',
        }, {
            img1: 'img/season3/185.jpg',
            img2: 'img/small-season3/185.jpg',
        }, {
            img1: 'img/season3/184.jpg',
            img2: 'img/small-season3/184.jpg',
        }, {
            img1: 'img/season3/183.jpg',
            img2: 'img/small-season3/183.jpg',
        }, {
            img1: 'img/season3/182.jpg',
            img2: 'img/small-season3/182.jpg',
        }, {
            img1: 'img/season3/203.jpg',
            img2: 'img/small-season3/203.jpg',
        }, {
            img1: 'img/season3/181.jpg',
            img2: 'img/small-season3/203.jpg',
        }
        // , {
        //     img1: 'img/season3/180.jpg',
        //     img2: 'img/small-season3/180.jpg',
        // }
        // , {
        //     img1: 'img/season3/179.jpg',
        //     img2: 'img/small-season3/179.jpg',
        // }
        , {
            img1: 'img/season3/178.jpg',
            img2: 'img/small-season3/178.jpg',
        }, {
            img1: 'img/season3/177.jpg',
            img2: 'img/small-season3/177.jpg',
        }, {
            img1: 'img/season3/176.jpg',
            img2: 'img/small-season3/176.jpg',
        }, {
            img1: 'img/season3/175.jpg',
            img2: 'img/small-season3/175.jpg',
        }, {
            img1: 'img/season3/174.jpg',
            img2: 'img/small-season3/174.jpg',
        }, {
            img1: 'img/season3/173.jpg',
            img2: 'img/small-season3/173.jpg',
        }
        // , {
        //     img1: 'img/season3/172.jpg',
        //     img2: 'img/small-season3/172.jpg',
        // }
        // , {
        //     img1: 'img/season3/171.jpg',
        //     img2: 'img/small-season3/171.jpg',
        // }
        , {
            img1: 'img/season3/170.jpg',
            img2: 'img/small-season3/170.jpg',
        }, {
            img1: 'img/season3/169.jpg',
            img2: 'img/small-season3/169.jpg',
        }, {
            img1: 'img/season3/168.jpg',
            img2: 'img/small-season3/168.jpg',
        }
        // ,
        //  {
        //     img1: 'img/season3/167.jpg',
        //     img2: 'img/small-season3/167.jpg',
        // }
        ,
        {
            img1: 'img/season3/166.jpg',
            img2: 'img/small-season3/166.jpg',
        }, {
            img1: 'img/season3/165.jpg',
            img2: 'img/small-season3/165.jpg',
        }, {
            img1: 'img/season3/164.jpg',
            img2: 'img/small-season3/164.jpg',
        }, {
            img1: 'img/season3/163.jpg',
            img2: 'img/small-season3/163.jpg',
        }, {
            img1: 'img/season3/162.jpg',
            img2: 'img/small-season3/162.jpg',
        }, {
            img1: 'img/season3/161.jpg',
            img2: 'img/small-season3/161.jpg',
        }, {
            img1: 'img/season3/160.jpg',
            img2: 'img/small-season3/160.jpg',
        }, {
            img1: 'img/season3/159.jpg',
            img2: 'img/small-season3/159.jpg',
        }, {
            img1: 'img/season3/158.jpg',
            img2: 'img/small-season3/158.jpg',
        }, {
            img1: 'img/season3/157.jpg',
            img2: 'img/small-season3/157.jpg',
        }, {
            img1: 'img/season3/156.jpg',
            img2: 'img/small-season3/156.jpg',
        }
        // , {
        //     img1: 'img/season3/151.jpg',
        //     img2: 'img/small-season3/151.jpg',
        // }
        , {
            img1: 'img/season3/155.jpg',
            img2: 'img/small-season3/155.jpg',
        }
        // , {
        //     img1: 'img/season3/154.jpg',
        //     img2: 'img/small-season3/154.jpg',
        // }
        // , {
        //     img1: 'img/season3/153.jpg',
        //     img2: 'img/small-season3/153.jpg',
        // }
        , {
            img1: 'img/season3/152.jpg',
            img2: 'img/small-season3/152.jpg',
        }
        // , {
        //     img1: 'img/season3/151.jpg',
        //     img2: 'img/small-season3/151.jpg',
        // }
        // , {
        //     img1: 'img/season3/150.jpg',
        //     img2: 'img/small-season3/150.jpg',
        // }
        , {
            img1: 'img/season3/149.jpg',
            img2: 'img/small-season3/149.jpg',
        }, {
            img1: 'img/season3/148.jpg',
            img2: 'img/small-season3/148.jpg',
        }, {
            img1: 'img/season3/147.jpg',
            img2: 'img/small-season3/147.jpg',
        }, {
            img1: 'img/season3/146.jpg',
            img2: 'img/small-season3/146.jpg',
        }, {
            img1: 'img/season3/145.jpg',
            img2: 'img/small-season3/145.jpg',
        }, {
            img1: 'img/season3/144.jpg',
            img2: 'img/small-season3/144.jpg',
        }, {
            img1: 'img/season3/143.jpg',
            img2: 'img/small-season3/143.jpg',
        }, {
            img1: 'img/season3/142.jpg',
            img2: 'img/small-season3/142.jpg',
        }, {
            img1: 'img/season3/141.jpg',
            img2: 'img/small-season3/141.jpg',
        }, {
            img1: 'img/season3/140.jpg',
            img2: 'img/small-season3/140.jpg',
        }, {
            img1: 'img/season3/139.jpg',
            img2: 'img/small-season3/139.jpg',
        }, {
            img1: 'img/season3/138.jpg',
            img2: 'img/small-season3/138.jpg',
        }, {
            img1: 'img/season3/137.jpg',
            img2: 'img/small-season3/137.jpg',
        }, {
            img1: 'img/season3/136.jpg',
            img2: 'img/small-season3/136.jpg',
        }, {
            img1: 'img/season3/135.jpg',
            img2: 'img/small-season3/135.jpg',
        }, {
            img1: 'img/season3/134.jpg',
            img2: 'img/small-season3/134.jpg',
        }, {
            img1: 'img/season3/133.jpg',
            img2: 'img/small-season3/133.jpg',
        }, {
            img1: 'img/season3/132.jpg',
            img2: 'img/small-season3/132.jpg',
        }, {
            img1: 'img/season3/131.jpg',
            img2: 'img/small-season3/131.jpg',
        }, {
            img1: 'img/season3/130.jpg',
            img2: 'img/small-season3/130.jpg',
        }
        // , {
        //     img1: 'img/season3/129.jpg',
        //     img2: 'img/small-season3/129.jpg',
        // }
        , {
            img1: 'img/season3/128.jpg',
            img2: 'img/small-season3/128.jpg',
        }
        // , {
        //     img1: 'img/season3/127.jpg',
        //     img2: 'img/small-season3/127.jpg',
        // }
        // , {
        //     img1: 'img/season3/126.jpg',
        //     img2: 'img/small-season3/126.jpg',
        // }
        , {
            img1: 'img/season3/125.jpg',
            img2: 'img/small-season3/125.jpg',
        }
        // , {
        //     img1: 'img/season3/124.jpg',
        //     img2: 'img/small-season3/124.jpg',
        // }
        , {
            img1: 'img/season3/123.jpg',
            img2: 'img/small-season3/123.jpg',
        }, {
            img1: 'img/season3/122.jpg',
            img2: 'img/small-season3/122.jpg',
        }
        // , {
        //     img1: 'img/season3/121.jpg',
        //     img2: 'img/small-season3/121.jpg',
        // }
        // , {
        //     img1: 'img/season3/120.jpg',
        //     img2: 'img/small-season3/120.jpg',
        // }
        , {
            img1: 'img/season3/119.jpg',
            img2: 'img/small-season3/119.jpg',
        }
        // , {
        //     img1: 'img/season3/118.jpg',
        //     img2: 'img/small-season3/118.jpg',
        // }
        , {
            img1: 'img/season3/117.jpg',
            img2: 'img/small-season3/117.jpg',
        }, {
            img1: 'img/season3/116.jpg',
            img2: 'img/small-season3/116.jpg',
        }
        // , {
        //     img1: 'img/season3/115.jpg',
        //     img2: 'img/small-season3/115.jpg',
        // }
        , {
            img1: 'img/season3/114.jpg',
            img2: 'img/small-season3/114.jpg',
        }, {
            img1: 'img/season3/113.jpg',
            img2: 'img/small-season3/113.jpg',
        }, {
            img1: 'img/season3/112.jpg',
            img2: 'img/small-season3/112.jpg',
        }, {
            img1: 'img/season3/111.jpg',
            img2: 'img/small-season3/111.jpg',
        }, {
            img1: 'img/season3/110.jpg',
            img2: 'img/small-season3/110.jpg',
        }, {
            img1: 'img/season3/109.jpg',
            img2: 'img/small-season3/109.jpg',
        }
        // , {
        //     img1: 'img/season3/108.jpg',
        //     img2: 'img/small-season3/108.jpg',
        // }
        // , {
        //     img1: 'img/season3/107.jpg',
        //     img2: 'img/small-season3/107.jpg',
        // }
        , {
            img1: 'img/season3/106.jpg',
            img2: 'img/small-season3/106.jpg',
        }, {
            img1: 'img/season3/105.jpg',
            img2: 'img/small-season3/105.jpg',
        },
        // {
        //     img1: 'img/season3/104.jpg',
        //     img2: 'img/small-season3/104.jpg',
        // } ,
        {
            img1: 'img/season3/104.jpg',
            img2: 'img/small-season3/104.jpg',
        }, {
            img1: 'img/season3/103.jpg',
            img2: 'img/small-season3/103.jpg',
        }
        // , {
        //     img1: 'img/season3/102.jpg',
        //     img2: 'img/small-season3/102.jpg',
        // }
        , {
            img1: 'img/season3/101.jpg',
            img2: 'img/small-season3/101.jpg',
        }, {
            img1: 'img/season3/100.jpg',
            img2: 'img/small-season3/100.jpg',
        }
        // , {
        //     img1: 'img/season3/99.jpg',
        //     img2: 'img/small-season3/99.jpg',
        // // }
        // , {
        //     img1: 'img/season3/98.jpg',
        //     img2: 'img/small-season3/98.jpg',
        // }

        // , {
        //     img1: 'img/season3/97.jpg',
        //     img2: 'img/small-season3/97.jpg',
        // }
        , {
            img1: 'img/season3/96.jpg',
            img2: 'img/small-season3/96.jpg',
        }, {
            img1: 'img/season3/95.jpg',
            img2: 'img/small-season3/95.jpg',
        }
        // , {
        //     img1: 'img/season3/94.jpg',
        //     img2: 'img/small-season3/94.jpg',
        // }
        // , {
        //     img1: 'img/season3/93.jpg',
        //     img2: 'img/small-season3/93.jpg',
        // }
        , {
            img1: 'img/season3/92.jpg',
            img2: 'img/small-season3/92.jpg',
        }, {
            img1: 'img/season3/91.jpg',
            img2: 'img/small-season3/91.jpg',
        }, {
            img1: 'img/season3/72.jpg',
            img2: 'img/small-season3/72.jpg',
        }, {
            img1: 'img/season3/73.jpg',
            img2: 'img/small-season3/73.jpg',
        }, {
            img1: 'img/season3/74.jpg',
            img2: 'img/small-season3/74.jpg',
        }, {
            img1: 'img/season3/75.jpg',
            img2: 'img/small-season3/75.jpg',
        }, {
            img1: 'img/season3/76.jpg',
            img2: 'img/small-season3/76.jpg',
        }, {
            img1: 'img/season3/77.jpg',
            img2: 'img/small-season3/77.jpg',
        }, {
            img1: 'img/season3/78.jpg',
            img2: 'img/small-season3/78.jpg',
        }, {
            img1: 'img/season3/79.jpg',
            img2: 'img/small-season3/79.jpg',
        }, {
            img1: 'img/season3/80.jpg',
            img2: 'img/small-season3/80.jpg',
        }, {
            img1: 'img/season3/81.jpg',
            img2: 'img/small-season3/81.jpg',
        }, {
            img1: 'img/season3/82.jpg',
            img2: 'img/small-season3/82.jpg',
        }, {
            img1: 'img/season3/83.jpg',
            img2: 'img/small-season3/83.jpg',
        }, {
            img1: 'img/season3/84.jpg',
            img2: 'img/small-season3/84.jpg',
        }, {
            img1: 'img/season3/85.jpg',
            img2: 'img/small-season3/85.jpg',
        }, {
            img1: 'img/season3/86.jpg',
            img2: 'img/small-season3/86.jpg',
        }, {
            img1: 'img/season3/87.jpg',
            img2: 'img/small-season3/87.jpg',
        }, {
            img1: 'img/season3/88.jpg',
            img2: 'img/small-season3/88.jpg',
        }, {
            img1: 'img/season3/89.jpg',
            img2: 'img/small-season3/89.jpg',
        }, {
            img1: 'img/season3/90.jpg',
            img2: 'img/small-season3/90.jpg',
        }, {
            img1: 'img/season3/1.jpg',
            img2: 'img/small-season3/1.jpg',
        },
        //  {
        //     img1: 'img/season3/5.jpg',
        //     img2: 'img/small-season3/5.jpg',
        // },

        {
            img1: 'img/season3/7.jpg',
            img2: 'img/small-season3/7.jpg',
        }, {
            img1: 'img/season3/8.jpg',
            img2: 'img/small-season3/8.jpg',
        },

        // {
        //     img1: 'img/season3/12.jpg',
        //     img2: 'img/small-season3/12.jpg',
        // }, 
        // {
        //     img1: 'img/season3/15.jpg',
        //     img2: 'img/small-season3/15.jpg',
        // },
        // {
        //     img1: 'img/season3/17.jpg',
        //     img2: 'img/small-season3/17.jpg',
        // },
        // {
        //     img1: 'img/season3/18.jpg',
        //     img2: 'img/small-season3/18.jpg',
        // },
        // {
        //     img1: 'img/season3/19.jpg',
        //     img2: 'img/small-season3/19.jpg',
        // },
        {
            img1: 'img/season3/20.jpg',
            img2: 'img/small-season3/20.jpg',
        }, {
            img1: 'img/season3/21.jpg',
            img2: 'img/small-season3/21.jpg',
        }
        // , {
        //     img1: 'img/season3/24.jpg',
        //     img2: 'img/small-season3/24.jpg',
        // }
        // , {
        //     img1: 'img/season3/25.jpg',
        //     img2: 'img/small-season3/25.jpg',
        // }
        // , {
        //     img1: 'img/season3/26.jpg',
        //     img2: 'img/small-season3/26.jpg',
        // }
        ,
        {
            img1: 'img/season3/27.jpg',
            img2: 'img/small-season3/27.jpg',
        }, {
            img1: 'img/season3/28.jpg',
            img2: 'img/small-season3/28.jpg',
        }
        // , {
        //     img1: 'img/season3/29.jpg',
        //     img2: 'img/small-season3/29.jpg',
        // }
        , {
            img1: 'img/season3/30.jpg',
            img2: 'img/small-season3/30.jpg',
        }
        // , {
        //     img1: 'img/season3/31.jpg',
        //     img2: 'img/small-season3/31.jpg',
        // }
        // , {
        //     img1: 'img/season3/32.jpg',
        //     img2: 'img/small-season3/32.jpg',
        // }
        // , {
        //     img1: 'img/season3/33.jpg',
        //     img2: 'img/small-season3/33.jpg',
        // }
        , {
            img1: 'img/season3/34.jpg',
            img2: 'img/small-season3/34.jpg',
        }, {
            img1: 'img/season3/35.jpg',
            img2: 'img/small-season3/35.jpg',
        }, {
            img1: 'img/season3/36.jpg',
            img2: 'img/small-season3/36.jpg',
        }, {
            img1: 'img/season3/37.jpg',
            img2: 'img/small-season3/37.jpg',
        }, {
            img1: 'img/season3/38.jpg',
            img2: 'img/small-season3/38.jpg',
        }
        // , {
        //     img1: 'img/season3/39.jpg',
        //     img2: 'img/small-season3/39.jpg',
        // }
        // , {
        //     img1: 'img/season3/40.jpg',
        //     img2: 'img/small-season3/40.jpg',
        // }
        , {
            img1: 'img/season3/41.jpg',
            img2: 'img/small-season3/41.jpg',
        }, {
            img1: 'img/season3/42.jpg',
            img2: 'img/small-season3/42.jpg',
        }, {
            img1: 'img/season3/43.jpg',
            img2: 'img/small-season3/43.jpg',
        }
        // , {
        //     img1: 'img/season3/44.jpg',
        //     img2: 'img/small-season3/44.jpg',
        // }
        // , {
        //     img1: 'img/season3/45.jpg',
        //     img2: 'img/small-season3/45.jpg',
        // }
        // , {
        //     img1: 'img/season3/46.jpg',
        //     img2: 'img/small-season3/46.jpg',
        // }
        , {
            img1: 'img/season3/47.jpg',
            img2: 'img/small-season3/47.jpg',
        }, {
            img1: 'img/season3/48.jpg',
            img2: 'img/small-season3/48.jpg',
        }
        // , {
        //     img1: 'img/season3/49.jpg',
        //     img2: 'img/small-season3/49.jpg',
        // }
        // , {
        //     img1: 'img/season3/50.jpg',
        //     img2: 'img/small-season3/50.jpg',
        // }
        // , {
        //     img1: 'img/season3/51.jpg',
        //     img2: 'img/small-season3/51.jpg',
        // }
        // , {
        //     img1: 'img/season3/52.jpg',
        //     img2: 'img/small-season3/52.jpg',
        // }
        , {
            img1: 'img/season3/53.jpg',
            img2: 'img/small-season3/53.jpg',
        }, {
            img1: 'img/season3/54.jpg',
            img2: 'img/small-season3/54.jpg',
        },


        {
            img1: 'img/season3/57.jpg',
            img2: 'img/small-season3/57.jpg',
        }, {
            img1: 'img/season3/58.jpg',
            img2: 'img/small-season3/58.jpg',
        }
        // , {
        //     img1: 'img/season3/59.jpg',
        //     img2: 'img/small-season3/59.jpg',
        // }
        ,

        {
            img1: 'img/season3/61.jpg',
            img2: 'img/small-season3/61.jpg',
        }, {
            img1: 'img/season3/62.jpg',
            img2: 'img/small-season3/62.jpg',
        }, {
            img1: 'img/season3/63.jpg',
            img2: 'img/small-season3/63.jpg',
        }, {
            img1: 'img/season3/64.jpg',
            img2: 'img/small-season3/64.jpg',
        }, {
            img1: 'img/season3/65.jpg',
            img2: 'img/small-season3/65.jpg',
        }, {
            img1: 'img/season3/66.jpg',
            img2: 'img/small-season3/66.jpg',
        }, {
            img1: 'img/season3/67.jpg',
            img2: 'img/small-season3/67.jpg',
        }, {
            img1: 'img/season3/68.jpg',
            img2: 'img/small-season3/68.jpg',
        }, {
            img1: 'img/season3/69.jpg',
            img2: 'img/small-season3/69.jpg',
        }, {
            img1: 'img/season3/70.jpg',
            img2: 'img/small-season3/70.jpg',
        }
        // , {
        //     img1: 'img/season3/71.jpg',
        //     img2: 'img/small-season3/71.jpg',
        // }
        ,

    ];

    $scope.more3 = false;
    $scope.view3 = true;

    $scope.viewMore3 = function () {
        $scope.more3 = true;
        $scope.view3 = false;
    }
    $scope.viewLess3 = function () {
        $scope.more3 = false;
        $scope.view3 = true;
    }
    //end of season3

    //for season2
    $scope.season2 = [{
            img1: 'img/season2/1.jpg',
            img2: 'img/small-season2/1.jpg',
        }, {
            img1: 'img/season2/2.jpg',
            img2: 'img/small-season2/2.jpg',
        }
        // , {
        //     img1: 'img/season2/3.jpg',
        //     img2: 'img/small-season2/3.jpg',
        // }
        , {
            img1: 'img/season2/4.jpg',
            img2: 'img/small-season2/4.jpg',
        }
        // , {
        //     img1: 'img/season2/5.jpg',
        //     img2: 'img/small-season2/5.jpg',
        // }
        // , {
        //     img1: 'img/season2/6.jpg',
        //     img2: 'img/small-season2/6.jpg',
        // }
        , {
            img1: 'img/season2/7.jpg',
            img2: 'img/small-season2/7.jpg',
        }
        // , {
        //     img1: 'img/season2/8.jpg',
        //     img2: 'img/small-season2/8.jpg',
        // }
        // , {
        //     img1: 'img/season2/9.jpg',
        //     img2: 'img/small-season2/9.jpg',
        // }
        // , {
        //     img1: 'img/season2/10.jpg',
        //     img2: 'img/small-season2/10.jpg',
        // }
        , {
            img1: 'img/season2/11.jpg',
            img2: 'img/small-season2/11.jpg',
        }, {
            img1: 'img/season2/12.jpg',
            img2: 'img/small-season2/12.jpg',
        }, {
            img1: 'img/season2/13.jpg',
            img2: 'img/small-season2/13.jpg',
        }, {
            img1: 'img/season2/14.jpg',
            img2: 'img/small-season2/14.jpg',
        }, {
            img1: 'img/season2/15.jpg',
            img2: 'img/small-season2/15.jpg',
        }
        // , {
        //     img1: 'img/season2/16.jpg',
        //     img2: 'img/small-season2/16.jpg',
        // }
        // , {
        //     img1: 'img/season2/17.jpg',
        //     img2: 'img/small-season2/17.jpg',
        // }
        , {
            img1: 'img/season2/18.jpg',
            img2: 'img/small-season2/18.jpg',
        }, {
            img1: 'img/season2/19.jpg',
            img2: 'img/small-season2/19.jpg',
        }, {
            img1: 'img/season2/20.jpg',
            img2: 'img/small-season2/20.jpg',
        }, {
            img1: 'img/season2/21.jpg',
            img2: 'img/small-season2/21.jpg',
        }, {
            img1: 'img/season2/22.jpg',
            img2: 'img/small-season2/22.jpg',
        }, {
            img1: 'img/season2/23.jpg',
            img2: 'img/small-season2/23.jpg',
        }, {
            img1: 'img/season2/24.jpg',
            img2: 'img/small-season2/24.jpg',
        }, {
            img1: 'img/season2/25.jpg',
            img2: 'img/small-season2/25.jpg',
        }, {
            img1: 'img/season2/26.jpg',
            img2: 'img/small-season2/26.jpg',
        }, {
            img1: 'img/season2/27.jpg',
            img2: 'img/small-season2/27.jpg',
        }, {
            img1: 'img/season2/28.jpg',
            img2: 'img/small-season2/28.jpg',
        }, {
            img1: 'img/season2/29.jpg',
            img2: 'img/small-season2/29.jpg',
        }, {
            img1: 'img/season2/30.jpg',
            img2: 'img/small-season2/30.jpg',
        }, {
            img1: 'img/season2/31.jpg',
            img2: 'img/small-season2/31.jpg',
        }
        // , {
        //     img1: 'img/season2/32.jpg',
        //     img2: 'img/small-season2/32.jpg',
        // }
    ];

    $scope.more2 = false;
    $scope.view2 = true;

    $scope.viewMore2 = function () {
        $scope.more2 = true;
        $scope.view2 = false;
    }
    $scope.viewLess2 = function () {
        $scope.more2 = false;
        $scope.view2 = true;
    }
    //end of season2

    //for season1
    $scope.season1 = [{
            img1: 'img/season1/1.jpg',
            img2: 'img/small-season1/1.jpg',
        }, {
            img1: 'img/season1/2.jpg',
            img2: 'img/small-season1/2.jpg',
        }, {
            img1: 'img/season1/3.jpg',
            img2: 'img/small-season1/3.jpg',
        }, {
            img1: 'img/season1/4.jpg',
            img2: 'img/small-season1/4.jpg',
        }, {
            img1: 'img/season1/5.jpg',
            img2: 'img/small-season1/5.jpg',
        }
        // , {
        //     img1: 'img/season1/6.jpg',
        //     img2: 'img/small-season1/6.jpg',
        // }
        , {
            img1: 'img/season1/7.jpg',
            img2: 'img/small-season1/7.jpg',
        }, {
            img1: 'img/season1/8.jpg',
            img2: 'img/small-season1/8.jpg',
        }, {
            img1: 'img/season1/9.jpg',
            img2: 'img/small-season1/9.jpg',
        }, {
            img1: 'img/season1/10.jpg',
            img2: 'img/small-season1/10.jpg',
        }, {
            img1: 'img/season1/11.jpg',
            img2: 'img/small-season1/11.jpg',
        }, {
            img1: 'img/season1/12.jpg',
            img2: 'img/small-season1/12.jpg',
        }, {
            img1: 'img/season1/13.jpg',
            img2: 'img/small-season1/13.jpg',
        }, {
            img1: 'img/season1/14.jpg',
            img2: 'img/small-season1/14.jpg',
        }, {
            img1: 'img/season1/15.jpg',
            img2: 'img/small-season1/15.jpg',
        }, {
            img1: 'img/season1/16.jpg',
            img2: 'img/small-season1/16.jpg',
        }, {
            img1: 'img/season1/17.jpg',
            img2: 'img/small-season1/17.jpg',
        }, {
            img1: 'img/season1/18.jpg',
            img2: 'img/small-season1/18.jpg',
        }, {
            img1: 'img/season1/19.jpg',
            img2: 'img/small-season1/19.jpg',
        }
        // , {
        //     img1: 'img/season1/20.jpg',
        //     img2: 'img/small-season1/20.jpg',
        // }
        // , {
        //     img1: 'img/season1/21.jpg',
        //     img2: 'img/small-season1/21.jpg',
        // }
        , {
            img1: 'img/season1/22.jpg',
            img2: 'img/small-season1/22.jpg',
        }, {
            img1: 'img/season1/23.jpg',
            img2: 'img/small-season1/23.jpg',
        }, {
            img1: 'img/season1/24.jpg',
            img2: 'img/small-season1/24.jpg',
        }, {
            img1: 'img/season1/25.jpg',
            img2: 'img/small-season1/25.jpg',
        }, {
            img1: 'img/season1/26.jpg',
            img2: 'img/small-season1/26.jpg',
        }, {
            img1: 'img/season1/27.jpg',
            img2: 'img/small-season1/27.jpg',
        }
        // , {
        //     img1: 'img/season1/28.jpg',
        //     img2: 'img/small-season1/28.jpg',
        // }
        , {
            img1: 'img/season1/29.jpg',
            img2: 'img/small-season1/29.jpg',
        }
        // , {
        //     img1: 'img/season1/30.jpg',
        //     img2: 'img/small-season1/30.jpg',
        // }
        // , {
        //     img1: 'img/season1/31.jpg',
        //     img2: 'img/small-season1/31.jpg',
        // }
        , {
            img1: 'img/season1/32.jpg',
            img2: 'img/small-season1/32.jpg',
        }, {
            img1: 'img/season1/33.jpg',
            img2: 'img/small-season1/33.jpg',
        }
        // , {
        //     img1: 'img/season1/34.jpg',
        //     img2: 'img/small-season1/34.jpg',
        // }
        , {
            img1: 'img/season1/35.jpg',
            img2: 'img/small-season1/35.jpg',
        }, {
            img1: 'img/season1/36.jpg',
            img2: 'img/small-season1/36.jpg',
        }, {
            img1: 'img/season1/37.jpg',
            img2: 'img/small-season1/37.jpg',
        }, {
            img1: 'img/season1/38.jpg',
            img2: 'img/small-season1/38.jpg',
        }
        // , {
        //     img1: 'img/season1/39.jpg',
        //     img2: 'img/small-season1/39.jpg',
        // }
        , {
            img1: 'img/season1/40.jpg',
            img2: 'img/small-season1/40.jpg',
        }, {
            img1: 'img/season1/41.jpg',
            img2: 'img/small-season1/41.jpg',
        }, {
            img1: 'img/season1/42.jpg',
            img2: 'img/small-season1/42.jpg',
        }, {
            img1: 'img/season1/43.jpg',
            img2: 'img/small-season1/43.jpg',
        }, {
            img1: 'img/season1/44.jpg',
            img2: 'img/small-season1/44.jpg',
        }
    ];

    $scope.more1 = false;
    $scope.view1 = true;

    $scope.viewMore1 = function () {
        $scope.more1 = true;
        $scope.view1 = false;
    }
    $scope.viewLess1 = function () {
        $scope.more1 = false;
        $scope.view1 = true;
    }
    //end of season1

})