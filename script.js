TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_6A135E23_6034_9A79_41D4_267F0D45E80B",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 150,
  "thumbnailUrl": "media/panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_t.jpg",
  "class": "Panorama",
  "label": "Salvador sobre la Sangre Derramada",
  "audios": [
   {
    "data": {
     "label": "bensound-summer"
    },
    "autoplay": true,
    "id": "audio_CE754C64_DFF5_6FA9_41DE_A3CD31E15BDA",
    "class": "PanoramaAudio",
    "audio": {
     "mp3Url": "media/audio_CE754C64_DFF5_6FA9_41DE_A3CD31E15BDA.mp3",
     "oggUrl": "media/audio_CE754C64_DFF5_6FA9_41DE_A3CD31E15BDA.ogg",
     "class": "AudioResource"
    }
   }
  ],
  "cardboardMenu": {
   "rollOverFontColor": "#FFFFFF",
   "selectedFontColor": "#FFFFFF",
   "opacity": 0.4,
   "fontFamily": "Arial",
   "class": "Menu",
   "selectedBackgroundColor": "#202020",
   "label": "Media",
   "backgroundColor": "#404040",
   "rollOverBackgroundColor": "#000000",
   "rollOverOpacity": 0.8,
   "id": "Menu_6861A619_66D1_9FA9_41C7_57A12C835E78",
   "children": [
    {
     "label": "Salvador sobre la Sangre Derramada",
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "class": "MenuItem"
    },
    {
     "label": "Casa Singer",
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "class": "MenuItem"
    },
    {
     "label": "Catedral de Kazán",
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "class": "MenuItem"
    },
    {
     "label": "Kazán de Noche",
     "click": "this.mainPlayList.set('selectedIndex', 3)",
     "class": "MenuItem"
    },
    {
     "label": "Iglesia de Annenkirche",
     "click": "this.mainPlayList.set('selectedIndex', 4)",
     "class": "MenuItem"
    },
    {
     "label": "Templo Budista Dazán",
     "click": "this.mainPlayList.set('selectedIndex', 5)",
     "class": "MenuItem"
    },
    {
     "label": "Teatro Mariinsky",
     "click": "this.mainPlayList.set('selectedIndex', 6)",
     "class": "MenuItem"
    },
    {
     "label": "Palacio de Peterhof",
     "click": "this.mainPlayList.set('selectedIndex', 7)",
     "class": "MenuItem"
    },
    {
     "label": "Plaza del Palacio",
     "click": "this.mainPlayList.set('selectedIndex', 8)",
     "class": "MenuItem"
    },
    {
     "label": "Catedral de San Isaac",
     "click": "this.mainPlayList.set('selectedIndex', 9)",
     "class": "MenuItem"
    }
   ],
   "fontColor": "#FFFFFF"
  },
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6A135E23_6034_9A79_41D4_267F0D45E80B.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_949652B5_9862_C760_41B1_9F9D3AA76489",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 13.03,
        "yaw": -91.56,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 392,
           "width": 211,
           "url": "media/panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 9.86
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_97C7B247_9866_C722_41D3_30B71649B40E",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 13.11,
        "yaw": -92.45,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 169,
           "width": 212,
           "url": "media/panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 9.94
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_88452BB6_9822_C562_41BA_D5E12926E0D3",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 34.61,
        "yaw": 103.55,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 199,
           "width": 652,
           "url": "media/panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 31.99
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_884DF4C2_9822_4323_41D7_8ECC16A1DC7C",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 12.41,
        "yaw": 105.2,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 208,
           "width": 231,
           "url": "media/panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 31.11
       }
      ]
     },
     {
      "hfov": 45.6,
      "id": "panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_tcap0",
      "inertia": false,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "preloadEnabled": false,
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonCardboardView": "this.IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1",
  "buttonToggleHotspots": {
   "iconURL": "skin/IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733.png",
   "mode": "toggle",
   "paddingRight": 0,
   "height": 31,
   "verticalAlign": "middle",
   "width": 37,
   "propagateClick": false,
   "paddingBottom": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "maxHeight": 31,
   "maxWidth": 37,
   "backgroundOpacity": 0,
   "shadow": false,
   "cursor": "hand",
   "borderRadius": 0,
   "horizontalAlign": "center",
   "minHeight": 1,
   "id": "IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733",
   "borderSize": 0,
   "paddingLeft": 0,
   "pressedIconURL": "skin/IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733_pressed.png",
   "data": {
    "name": "button show hotspots"
   },
   "minWidth": 1,
   "transparencyActive": true
  },
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "buttonStop": [
   {
    "iconURL": "skin/IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D.png",
    "mode": "push",
    "paddingRight": 0,
    "height": 24,
    "verticalAlign": "middle",
    "width": 24,
    "propagateClick": false,
    "rollOverIconURL": "skin/IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D_rollover.png",
    "paddingBottom": 0,
    "paddingTop": 0,
    "class": "IconButton",
    "maxHeight": 24,
    "maxWidth": 24,
    "click": "this.setComponentVisibility(this.Container_5EE70B16_547D_F3EC_41D0_2B6D527AFE8A, false, 0, null, null, false)",
    "backgroundOpacity": 0,
    "shadow": false,
    "top": "0%",
    "cursor": "hand",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D",
    "paddingLeft": 0,
    "borderSize": 0,
    "transparencyActive": true,
    "data": {
     "name": "X"
    },
    "minWidth": 1,
    "right": "0%"
   },
   {
    "iconURL": "skin/IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0.png",
    "mode": "push",
    "paddingRight": 0,
    "height": 40,
    "verticalAlign": "middle",
    "width": 40,
    "propagateClick": false,
    "rollOverIconURL": "skin/IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0_rollover.png",
    "paddingBottom": 0,
    "paddingTop": 0,
    "class": "IconButton",
    "maxHeight": 80,
    "maxWidth": 80,
    "backgroundOpacity": 0,
    "click": "this.setComponentVisibility(this.Container_ECB4524F_E163_9AF0_41E5_60E049D28740, false, 0, null, null, false)",
    "shadow": false,
    "top": 20,
    "cursor": "hand",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0",
    "paddingLeft": 0,
    "borderSize": 0,
    "transparencyActive": true,
    "data": {
     "name": "IconButton X"
    },
    "minWidth": 1,
    "left": 20
   },
   "this.IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29"
  ]
 },
 {
  "initialPosition": {
   "hfov": 135,
   "class": "PanoramaCameraPosition",
   "yaw": 13.08,
   "pitch": 27.37
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 10.61,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.61,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.61,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_6A67C542_6037_8E3A_41D5_D6B5239F3CFD",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_6A67C542_6037_8E3A_41D5_D6B5239F3CFD_t.jpg",
  "class": "Panorama",
  "label": "Casa Singer",
  "audios": [
   {
    "data": {
     "label": "bensound-hey"
    },
    "autoplay": true,
    "id": "audio_B9C92810_ACE9_131D_41D3_AF8BFB37CA4F",
    "class": "PanoramaAudio",
    "audio": {
     "mp3Url": "media/audio_B9C92810_ACE9_131D_41D3_AF8BFB37CA4F.mp3",
     "oggUrl": "media/audio_B9C92810_ACE9_131D_41D3_AF8BFB37CA4F.ogg",
     "class": "AudioResource"
    }
   }
  ],
  "cardboardMenu": "this.Menu_6861A619_66D1_9FA9_41C7_57A12C835E78",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_6A67C542_6037_8E3A_41D5_D6B5239F3CFD_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6A67C542_6037_8E3A_41D5_D6B5239F3CFD.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_6A67C542_6037_8E3A_41D5_D6B5239F3CFD_t.jpg",
    "overlays": [
     {
      "bleaching": 0.7,
      "bleachingDistance": 0.16,
      "id": "overlay_7CD646E1_6FEB_49BF_41B8_9601661C0C6C",
      "class": "LensFlarePanoramaOverlay",
      "yaw": -160.78,
      "pitch": 15.87
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_ABAEA1BA_A75B_E487_41E3_49E3089F2CB1",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 13.4,
        "yaw": -129.57,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 93,
           "width": 226,
           "url": "media/panorama_6A67C542_6037_8E3A_41D5_D6B5239F3CFD_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 18.68
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_AAF97A6F_A745_A79E_41B1_546CF3AEC95F",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 9.24,
        "yaw": -129.51,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 153,
           "width": 156,
           "url": "media/panorama_6A67C542_6037_8E3A_41D5_D6B5239F3CFD_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 18.67
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_A871112D_A746_A582_41E4_4016F6F92BE4",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 7.74,
        "yaw": 24.56,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 125,
           "url": "media/panorama_6A67C542_6037_8E3A_41D5_D6B5239F3CFD_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 10.05
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_A8A15517_A746_6D8E_41A5_CC01A31D2FC5",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 14.93,
        "yaw": 24.69,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 202,
           "width": 242,
           "url": "media/panorama_6A67C542_6037_8E3A_41D5_D6B5239F3CFD_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 10.12
       }
      ]
     },
     {
      "hfov": 45.6,
      "id": "panorama_6A67C542_6037_8E3A_41D5_D6B5239F3CFD_tcap0",
      "inertia": false,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "initialPosition": {
   "hfov": 121,
   "class": "PanoramaCameraPosition",
   "yaw": -41.57,
   "pitch": 10.25
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 10.61,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.61,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.61,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_6A67C542_6037_8E3A_41D5_D6B5239F3CFD_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_6A1E38BD_6034_8649_41CE_6C81418A986F",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_6A1E38BD_6034_8649_41CE_6C81418A986F_t.jpg",
  "class": "Panorama",
  "label": "Catedral de Kaz\u00e1n",
  "audios": [
   {
    "data": {
     "label": "bensound-allthat"
    },
    "autoplay": true,
    "id": "audio_CE184C6B_DFFD_6FBF_41C4_9F317B38A4A1",
    "class": "PanoramaAudio",
    "audio": {
     "mp3Url": "media/audio_CE184C6B_DFFD_6FBF_41C4_9F317B38A4A1.mp3",
     "oggUrl": "media/audio_CE184C6B_DFFD_6FBF_41C4_9F317B38A4A1.ogg",
     "class": "AudioResource"
    }
   }
  ],
  "cardboardMenu": "this.Menu_6861A619_66D1_9FA9_41C7_57A12C835E78",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_6A1E38BD_6034_8649_41CE_6C81418A986F_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6A1E38BD_6034_8649_41CE_6C81418A986F.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_6A1E38BD_6034_8649_41CE_6C81418A986F_t.jpg",
    "overlays": [
     {
      "bleaching": 0.7,
      "bleachingDistance": 0.4,
      "id": "overlay_76D8A8D8_6FF5_509B_41D9_9E3D1ACF366B",
      "class": "LensFlarePanoramaOverlay",
      "yaw": -35.04,
      "pitch": 34.27
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_B7788FA1_A74A_FC82_41E0_3C0993AEA336",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 8.8,
        "yaw": -107.82,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 125,
           "width": 174,
           "url": "media/panorama_6A1E38BD_6034_8649_41CE_6C81418A986F_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 36.36
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_B748E2DD_A74A_A482_41C1_CA12A923369B",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 10.39,
        "yaw": -108.21,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 208,
           "width": 206,
           "url": "media/panorama_6A1E38BD_6034_8649_41CE_6C81418A986F_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 36.31
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_A8C9F755_A74A_ED82_41DF_3C9E20E324EA",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 12.4,
        "yaw": 91.3,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 96,
           "width": 200,
           "url": "media/panorama_6A1E38BD_6034_8649_41CE_6C81418A986F_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 8.26
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_B5A2F6AF_A746_AC9E_41D6_7148AC286428",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 10.14,
        "yaw": 91.3,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 166,
           "width": 163,
           "url": "media/panorama_6A1E38BD_6034_8649_41CE_6C81418A986F_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 8.12
       }
      ]
     },
     {
      "hfov": 45.6,
      "id": "panorama_6A1E38BD_6034_8649_41CE_6C81418A986F_tcap0",
      "inertia": false,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "initialPosition": {
   "hfov": 122,
   "class": "PanoramaCameraPosition",
   "yaw": -79.5,
   "pitch": 13.84
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 10.61,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 10.61,
     "yawDelta": -323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 10.61,
     "yawDelta": -18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_6A1E38BD_6034_8649_41CE_6C81418A986F_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_6A19FEA4_6037_9A7E_41C4_019429B8CD8B",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_6A19FEA4_6037_9A7E_41C4_019429B8CD8B_t.jpg",
  "class": "Panorama",
  "label": "Kaz\u00e1n de Noche",
  "audios": [
   {
    "data": {
     "label": "acoustic-guitar-russian-horse-preview"
    },
    "autoplay": true,
    "id": "audio_CDE181F7_DFF5_7897_41E3_AB7A1859ADD2",
    "class": "PanoramaAudio",
    "audio": {
     "mp3Url": "media/audio_CDE181F7_DFF5_7897_41E3_AB7A1859ADD2.mp3",
     "oggUrl": "media/audio_CDE181F7_DFF5_7897_41E3_AB7A1859ADD2.ogg",
     "class": "AudioResource"
    }
   }
  ],
  "cardboardMenu": "this.Menu_6861A619_66D1_9FA9_41C7_57A12C835E78",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_6A19FEA4_6037_9A7E_41C4_019429B8CD8B_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6A19FEA4_6037_9A7E_41C4_019429B8CD8B.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_6A19FEA4_6037_9A7E_41C4_019429B8CD8B_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_B6B2FA41_A7FF_A782_41E3_747BB34433B9",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 9.7,
        "yaw": 57.64,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 110,
           "width": 161,
           "url": "media/panorama_6A19FEA4_6037_9A7E_41C4_019429B8CD8B_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 16.44
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_B4CAB06E_A7FE_639E_41E0_8B5321BDD19C",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 10.41,
        "yaw": 57.64,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 173,
           "width": 173,
           "url": "media/panorama_6A19FEA4_6037_9A7E_41C4_019429B8CD8B_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 16.31
       }
      ]
     },
     {
      "hfov": 45,
      "id": "panorama_6A19FEA4_6037_9A7E_41C4_019429B8CD8B_tcap0",
      "inertia": false,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_6A19FEA4_6037_9A7E_41C4_019429B8CD8B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 95.51,
   "pitch": 14.17
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 8.49,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.49,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 8.49,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_6A19FEA4_6037_9A7E_41C4_019429B8CD8B_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_6A1A1904_6037_863E_41CA_5BA88511BBDC",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 124,
  "thumbnailUrl": "media/panorama_6A1A1904_6037_863E_41CA_5BA88511BBDC_t.jpg",
  "class": "Panorama",
  "label": "Iglesia de Annenkirche",
  "audios": [
   {
    "data": {
     "label": "bensound-slowmotion"
    },
    "autoplay": true,
    "id": "audio_BBCA5498_ACF9_330E_41D3_5ABFCFD5DE04",
    "class": "PanoramaAudio",
    "audio": {
     "mp3Url": "media/audio_BBCA5498_ACF9_330E_41D3_5ABFCFD5DE04.mp3",
     "oggUrl": "media/audio_BBCA5498_ACF9_330E_41D3_5ABFCFD5DE04.ogg",
     "class": "AudioResource",
     "id": "audioresource_CD9BFB51_DFFB_E9EB_41C9_754211973C8D"
    }
   }
  ],
  "cardboardMenu": "this.Menu_6861A619_66D1_9FA9_41C7_57A12C835E78",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_6A1A1904_6037_863E_41CA_5BA88511BBDC_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6A1A1904_6037_863E_41CA_5BA88511BBDC.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_6A1A1904_6037_863E_41CA_5BA88511BBDC_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_B5A380F6_A7CA_648E_41CC_6A998015B33A",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 17.74,
        "yaw": -97.82,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 111,
           "width": 306,
           "url": "media/panorama_6A1A1904_6037_863E_41CA_5BA88511BBDC_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 21.96
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_B3C9B5FB_A7C6_6C86_41E1_E4EA2D3BD241",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 11.14,
        "yaw": -98.18,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 192,
           "width": 192,
           "url": "media/panorama_6A1A1904_6037_863E_41CA_5BA88511BBDC_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 21.86
       }
      ]
     },
     {
      "hfov": 45.6,
      "id": "panorama_6A1A1904_6037_863E_41CA_5BA88511BBDC_tcap0",
      "inertia": false,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 24.07,
   "pitch": -12.15
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_6A1A1904_6037_863E_41CA_5BA88511BBDC_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_6B5A09AA_6034_864A_41D3_62280B61838E",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_6B5A09AA_6034_864A_41D3_62280B61838E_t.jpg",
  "class": "Panorama",
  "label": "Templo Budista Daz\u00e1n",
  "audios": [
   {
    "data": {
     "label": "bensound-newdawn"
    },
    "autoplay": true,
    "id": "audio_BA045DE6_ACF8_ED02_41E4_5013CB42750D",
    "class": "PanoramaAudio",
    "audio": {
     "mp3Url": "media/audio_BA045DE6_ACF8_ED02_41E4_5013CB42750D.mp3",
     "oggUrl": "media/audio_BA045DE6_ACF8_ED02_41E4_5013CB42750D.ogg",
     "class": "AudioResource"
    }
   }
  ],
  "cardboardMenu": "this.Menu_6861A619_66D1_9FA9_41C7_57A12C835E78",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_6B5A09AA_6034_864A_41D3_62280B61838E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6B5A09AA_6034_864A_41D3_62280B61838E.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_6B5A09AA_6034_864A_41D3_62280B61838E_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_B479F851_A7C5_E385_41D7_5871688F2E41",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 10.55,
        "yaw": 43.73,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 164,
           "width": 175,
           "url": "media/panorama_6B5A09AA_6034_864A_41D3_62280B61838E_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 15.51
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_BFF0529A_A74A_A486_41C3_59B95BD6CB7E",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 20.42,
        "yaw": 43.53,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 94,
           "width": 339,
           "url": "media/panorama_6B5A09AA_6034_864A_41D3_62280B61838E_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 15.49
       }
      ]
     },
     {
      "hfov": 45.6,
      "id": "panorama_6B5A09AA_6034_864A_41D3_62280B61838E_tcap0",
      "inertia": false,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -136.18,
   "pitch": 12.38
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_6B5A09AA_6034_864A_41D3_62280B61838E_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_6AE87867_6034_86FA_41C1_738C4D8E2329",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 143,
  "thumbnailUrl": "media/panorama_6AE87867_6034_86FA_41C1_738C4D8E2329_t.jpg",
  "class": "Panorama",
  "label": "Teatro Mariinsky",
  "cardboardMenu": "this.Menu_6861A619_66D1_9FA9_41C7_57A12C835E78",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_6AE87867_6034_86FA_41C1_738C4D8E2329_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6AE87867_6034_86FA_41C1_738C4D8E2329.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_6AE87867_6034_86FA_41C1_738C4D8E2329_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_B75A9CA3_A7CD_9C85_41DC_60F263A38D6E",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 7.58,
        "yaw": -115.47,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 109,
           "width": 123,
           "url": "media/panorama_6AE87867_6034_86FA_41C1_738C4D8E2329_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 10.38
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_B4BF2CBC_A7CF_9C82_41D2_D4CF4045A0F6",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 12.26,
        "yaw": -115.41,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 207,
           "width": 199,
           "url": "media/panorama_6AE87867_6034_86FA_41C1_738C4D8E2329_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 10.27
       }
      ]
     },
     {
      "video": {
       "height": 1584,
       "width": 3168,
       "mp4Url": "media/video_8F8C4F07_938E_A69B_41D8_FF40F01AD1D0.mp4",
       "class": "VideoResource"
      },
      "vfov": 17.99,
      "data": {
       "label": "Video"
      },
      "videoVisibleOnStop": false,
      "blending": 0.1,
      "loop": false,
      "roll": 1.04,
      "rotationY": 4.12,
      "enabledInCardboard": true,
      "hfov": 25.21,
      "autoplay": true,
      "yaw": -178.29,
      "id": "overlay_89523F30_9386_A6F5_41C1_091C8F83DDED",
      "class": "VideoPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 1584,
         "width": 3168,
         "url": "media/overlay_89523F30_9386_A6F5_41C1_091C8F83DDED_t.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "pitch": -18.95,
      "rotationX": 19.41,
      "useHandCursor": true
     },
     {
      "hfov": 45.6,
      "id": "panorama_6AE87867_6034_86FA_41C1_738C4D8E2329_tcap0",
      "inertia": false,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "initialPosition": {
   "hfov": 136,
   "class": "PanoramaCameraPosition",
   "yaw": 104.13,
   "pitch": 3.69
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 9.6,
     "path": "shortest",
     "pitchSpeed": 5.28,
     "easing": "linear",
     "targetYaw": -129.25,
     "targetPitch": -2.7,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_6AE87867_6034_86FA_41C1_738C4D8E2329_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_6A2E7385_6034_8A3E_4153_591ECF1F0432",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_6A2E7385_6034_8A3E_4153_591ECF1F0432_t.jpg",
  "class": "Panorama",
  "label": "Palacio de Peterhof",
  "audios": [
   {
    "data": {
     "label": "Audio1"
    },
    "autoplay": true,
    "id": "audio_CD9BEB51_DFFB_E9EB_41EA_0591CA352200",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_CD9BFB51_DFFB_E9EB_41C9_754211973C8D"
   }
  ],
  "cardboardMenu": "this.Menu_6861A619_66D1_9FA9_41C7_57A12C835E78",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_6A2E7385_6034_8A3E_4153_591ECF1F0432_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6A2E7385_6034_8A3E_4153_591ECF1F0432.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_6A2E7385_6034_8A3E_4153_591ECF1F0432_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_B78CF599_A7C5_AC82_41A8_2870B80F75EC",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 20.38,
        "yaw": -31.23,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 133,
           "width": 411,
           "url": "media/panorama_6A2E7385_6034_8A3E_4153_591ECF1F0432_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 37.49
       }
      ]
     },
     {
      "hfov": 45.6,
      "id": "panorama_6A2E7385_6034_8A3E_4153_591ECF1F0432_tcap0",
      "inertia": false,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_2703F255_2827_65E6_41C0_704F173105BD",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 14.94,
        "yaw": -31.12,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 239,
           "width": 302,
           "url": "media/panorama_6A2E7385_6034_8A3E_4153_591ECF1F0432_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 37.7
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 69.96,
   "pitch": 14.17
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_6A2E7385_6034_8A3E_4153_591ECF1F0432_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_62685964_6FD4_B1AB_41C5_AD27293D1AB5",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_62685964_6FD4_B1AB_41C5_AD27293D1AB5_t.jpg",
  "class": "Panorama",
  "label": "Plaza del Palacio",
  "audios": [
   {
    "data": {
     "label": "bensound-happyrock"
    },
    "autoplay": true,
    "id": "audio_B980D686_ACF9_1F05_41CD_BC8E904248AB",
    "class": "PanoramaAudio",
    "audio": {
     "mp3Url": "media/audio_B980D686_ACF9_1F05_41CD_BC8E904248AB.mp3",
     "oggUrl": "media/audio_B980D686_ACF9_1F05_41CD_BC8E904248AB.ogg",
     "class": "AudioResource"
    }
   }
  ],
  "cardboardMenu": "this.Menu_6861A619_66D1_9FA9_41C7_57A12C835E78",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_62685964_6FD4_B1AB_41C5_AD27293D1AB5_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_62685964_6FD4_B1AB_41C5_AD27293D1AB5.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_62685964_6FD4_B1AB_41C5_AD27293D1AB5_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_B7403CF3_A7CA_9C86_41E0_C854B9D5749A",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 13.53,
        "yaw": 43.74,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 80,
           "width": 221,
           "url": "media/panorama_62685964_6FD4_B1AB_41C5_AD27293D1AB5_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 12.12
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_B46E134D_A7CE_6582_41DD_E7050F43A5E4",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 8.36,
        "yaw": 43.73,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 131,
           "width": 136,
           "url": "media/panorama_62685964_6FD4_B1AB_41C5_AD27293D1AB5_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 12.07
       }
      ]
     },
     {
      "hfov": 45.6,
      "id": "panorama_62685964_6FD4_B1AB_41C5_AD27293D1AB5_tcap0",
      "inertia": false,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "initialPosition": {
   "hfov": 121,
   "class": "PanoramaCameraPosition",
   "yaw": 147.2,
   "pitch": 16.64
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_62685964_6FD4_B1AB_41C5_AD27293D1AB5_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_637E0101_6FED_C87C_41C4_B6AC49887554",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_637E0101_6FED_C87C_41C4_B6AC49887554_t.jpg",
  "class": "Panorama",
  "label": "Catedral de San Isaac",
  "audios": [
   {
    "data": {
     "label": "Audio1"
    },
    "autoplay": true,
    "id": "audio_BA089B51_ACF9_351F_41D9_4B80102FB690",
    "class": "PanoramaAudio",
    "audio": {
     "mp3Url": "media/audio_BA089B51_ACF9_351F_41D9_4B80102FB690.mp3",
     "oggUrl": "media/audio_BA089B51_ACF9_351F_41D9_4B80102FB690.ogg",
     "class": "AudioResource"
    }
   }
  ],
  "cardboardMenu": "this.Menu_6861A619_66D1_9FA9_41C7_57A12C835E78",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_637E0101_6FED_C87C_41C4_B6AC49887554_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_637E0101_6FED_C87C_41C4_B6AC49887554.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_637E0101_6FED_C87C_41C4_B6AC49887554_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 7)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_B7F32036_A7BD_E38F_41CB_AD9A44197C42",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 12.64,
        "yaw": -111.71,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 120,
           "width": 228,
           "url": "media/panorama_637E0101_6FED_C87C_41C4_B6AC49887554_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 27.69
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "id": "overlay_B67F5AB6_A7BE_E48E_41A6_8BC07680A8CB",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 11.14,
        "yaw": -111.87,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 199,
           "width": 201,
           "url": "media/panorama_637E0101_6FED_C87C_41C4_B6AC49887554_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 27.6
       }
      ]
     },
     {
      "hfov": 45,
      "id": "panorama_637E0101_6FED_C87C_41C4_B6AC49887554_tcap0",
      "inertia": false,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -55.51,
   "pitch": 6.18
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_637E0101_6FED_C87C_41C4_B6AC49887554_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_6A135E23_6034_9A79_41D4_267F0D45E80B",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6A67C542_6037_8E3A_41D5_D6B5239F3CFD",
    "camera": "this.panorama_6A67C542_6037_8E3A_41D5_D6B5239F3CFD_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0F88DB_98DC_52D5_41CB_B8A40AB3DA72, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0F98DB_98DC_52D5_41B0_D6B33194F24C, 'hideEffect', false); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0F98DB_98DC_52D5_41B0_D6B33194F24C, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6A1E38BD_6034_8649_41CE_6C81418A986F",
    "camera": "this.panorama_6A1E38BD_6034_8649_41CE_6C81418A986F_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0CC8DB_98DC_52D4_41C7_12C51B1E1490, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0CF8DC_98DC_52D3_41C0_DB95F0DB6259, 'hideEffect', false); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0CF8DC_98DC_52D3_41C0_DB95F0DB6259, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6A19FEA4_6037_9A7E_41C4_019429B8CD8B",
    "camera": "this.panorama_6A19FEA4_6037_9A7E_41C4_019429B8CD8B_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0A28DC_98DC_52D3_41B4_C75BAA1FB8B8, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0A58DC_98DC_52D3_41BC_64B34C790786, 'hideEffect', false); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0A58DC_98DC_52D3_41BC_64B34C790786, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6A1A1904_6037_863E_41CA_5BA88511BBDC",
    "camera": "this.panorama_6A1A1904_6037_863E_41CA_5BA88511BBDC_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0B98DD_98DC_52CD_41D0_086944784C0E, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0BB8DD_98DC_52CD_41B1_9C17DBC951FE, 'hideEffect', false); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0BB8DD_98DC_52CD_41B1_9C17DBC951FE, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6B5A09AA_6034_864A_41D3_62280B61838E",
    "camera": "this.panorama_6B5A09AA_6034_864A_41D3_62280B61838E_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B08E8DE_98DC_52CF_41BC_7EA6BCE8E68B, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B08F8DE_98DC_52CF_41C8_D06EAB2B8B83, 'hideEffect', false); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B08F8DE_98DC_52CF_41C8_D06EAB2B8B83, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6AE87867_6034_86FA_41C1_738C4D8E2329",
    "camera": "this.panorama_6AE87867_6034_86FA_41C1_738C4D8E2329_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0648DE_98DC_52CF_41C4_3D29F57E60D2, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0668DE_98DC_52CF_4162_5B8A824E46D8, 'hideEffect', false); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0668DE_98DC_52CF_4162_5B8A824E46D8, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6A2E7385_6034_8A3E_4153_591ECF1F0432",
    "camera": "this.panorama_6A2E7385_6034_8A3E_4153_591ECF1F0432_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B07B8DF_98DC_52CD_41D9_1A1484B000B8, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B07C8DF_98DC_52CD_41E0_2A7A891408EF, 'hideEffect', false); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B07C8DF_98DC_52CD_41E0_2A7A891408EF, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_62685964_6FD4_B1AB_41C5_AD27293D1AB5",
    "camera": "this.panorama_62685964_6FD4_B1AB_41C5_AD27293D1AB5_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0228E0_98DC_52F3_41DD_7D14420B1A77, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0248E0_98DC_52F3_41D0_9CACEAAE7ECC, 'hideEffect', false); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0248E0_98DC_52F3_41D0_9CACEAAE7ECC, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_637E0101_6FED_C87C_41C4_B6AC49887554",
    "camera": "this.panorama_637E0101_6FED_C87C_41C4_B6AC49887554_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0378E0_98DC_52F4_41E1_9F0F13CF0F4A, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B03A8E0_98DC_52F4_41D0_DA41EAC703EC, 'hideEffect', false); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B03A8E0_98DC_52F4_41D0_DA41EAC703EC, 'hideEffect', false); this.trigger('tourEnded')"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 0, 1)",
    "media": "this.panorama_6A135E23_6034_9A79_41D4_267F0D45E80B",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6A135E23_6034_9A79_41D4_267F0D45E80B_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6A67C542_6037_8E3A_41D5_D6B5239F3CFD",
    "camera": "this.panorama_6A67C542_6037_8E3A_41D5_D6B5239F3CFD_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 1, 2); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0F88DB_98DC_52D5_41CB_B8A40AB3DA72, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0F98DB_98DC_52D5_41B0_D6B33194F24C, 'hideEffect', false); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0F98DB_98DC_52D5_41B0_D6B33194F24C, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6A1E38BD_6034_8649_41CE_6C81418A986F",
    "camera": "this.panorama_6A1E38BD_6034_8649_41CE_6C81418A986F_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 2, 3); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0CC8DB_98DC_52D4_41C7_12C51B1E1490, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0CF8DC_98DC_52D3_41C0_DB95F0DB6259, 'hideEffect', false); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0CF8DC_98DC_52D3_41C0_DB95F0DB6259, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6A19FEA4_6037_9A7E_41C4_019429B8CD8B",
    "camera": "this.panorama_6A19FEA4_6037_9A7E_41C4_019429B8CD8B_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 3, 4); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0A28DC_98DC_52D3_41B4_C75BAA1FB8B8, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0A58DC_98DC_52D3_41BC_64B34C790786, 'hideEffect', false); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0A58DC_98DC_52D3_41BC_64B34C790786, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6A1A1904_6037_863E_41CA_5BA88511BBDC",
    "camera": "this.panorama_6A1A1904_6037_863E_41CA_5BA88511BBDC_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 4, 5); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0B98DD_98DC_52CD_41D0_086944784C0E, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0BB8DD_98DC_52CD_41B1_9C17DBC951FE, 'hideEffect', false); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0BB8DD_98DC_52CD_41B1_9C17DBC951FE, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6B5A09AA_6034_864A_41D3_62280B61838E",
    "camera": "this.panorama_6B5A09AA_6034_864A_41D3_62280B61838E_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 5, 6); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B08E8DE_98DC_52CF_41BC_7EA6BCE8E68B, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B08F8DE_98DC_52CF_41C8_D06EAB2B8B83, 'hideEffect', false); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B08F8DE_98DC_52CF_41C8_D06EAB2B8B83, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6AE87867_6034_86FA_41C1_738C4D8E2329",
    "camera": "this.panorama_6AE87867_6034_86FA_41C1_738C4D8E2329_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 6, 7); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0648DE_98DC_52CF_41C4_3D29F57E60D2, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0668DE_98DC_52CF_4162_5B8A824E46D8, 'hideEffect', false); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0668DE_98DC_52CF_4162_5B8A824E46D8, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6A2E7385_6034_8A3E_4153_591ECF1F0432",
    "camera": "this.panorama_6A2E7385_6034_8A3E_4153_591ECF1F0432_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 7, 8); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B07B8DF_98DC_52CD_41D9_1A1484B000B8, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B07C8DF_98DC_52CD_41E0_2A7A891408EF, 'hideEffect', false); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B07C8DF_98DC_52CD_41E0_2A7A891408EF, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_62685964_6FD4_B1AB_41C5_AD27293D1AB5",
    "camera": "this.panorama_62685964_6FD4_B1AB_41C5_AD27293D1AB5_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 8, 9); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0228E0_98DC_52F3_41DD_7D14420B1A77, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0248E0_98DC_52F3_41D0_9CACEAAE7ECC, 'hideEffect', false); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0248E0_98DC_52F3_41D0_9CACEAAE7ECC, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_637E0101_6FED_C87C_41C4_B6AC49887554",
    "camera": "this.panorama_637E0101_6FED_C87C_41C4_B6AC49887554_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist, 9, 0); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B0378E0_98DC_52F4_41E1_9F0F13CF0F4A, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B03A8E0_98DC_52F4_41D0_DA41EAC703EC, 'hideEffect', false); this.setComponentVisibility(this.Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE, false, -1, this.effect_8B03A8E0_98DC_52F4_41D0_DA41EAC703EC, 'hideEffect', false)"
   }
  ],
  "id": "ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist",
  "class": "PlayList"
 },
 {
  "thumbnailUrl": "media/video_8F8C4F07_938E_A69B_41D8_FF40F01AD1D0_t.jpg",
  "class": "Video",
  "label": "Spb2minutes",
  "video": {
   "height": 1584,
   "width": 3168,
   "mp4Url": "media/video_8F8C4F07_938E_A69B_41D8_FF40F01AD1D0.mp4",
   "class": "VideoResource"
  },
  "width": 3168,
  "id": "video_8F8C4F07_938E_A69B_41D8_FF40F01AD1D0",
  "loop": false,
  "height": 1584,
  "scaleMode": "fit_inside"
 },
 {
  "buttonStop": [
   "this.IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D",
   "this.IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0",
   "this.IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29"
  ],
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "id": "MainViewerVideoPlayer",
  "class": "VideoPlayer"
 },
 {
  "items": [
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_8F8C4F07_938E_A69B_41D8_FF40F01AD1D0",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_687FE612_66D1_9FBB_4180_528EC7486EBA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_687FE612_66D1_9FBB_4180_528EC7486EBA, 0, this.video_8F8C4F07_938E_A69B_41D8_FF40F01AD1D0)"
   }
  ],
  "id": "playList_687FE612_66D1_9FBB_4180_528EC7486EBA",
  "class": "PlayList"
 },
 "this.Menu_6861A619_66D1_9FA9_41C7_57A12C835E78",
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_8B0F88DB_98DC_52D5_41CB_B8A40AB3DA72",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_8B0F98DB_98DC_52D5_41B0_D6B33194F24C",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_8B0CC8DB_98DC_52D4_41C7_12C51B1E1490",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_8B0CF8DC_98DC_52D3_41C0_DB95F0DB6259",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_8B0A28DC_98DC_52D3_41B4_C75BAA1FB8B8",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_8B0A58DC_98DC_52D3_41BC_64B34C790786",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_8B0B98DD_98DC_52CD_41D0_086944784C0E",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_8B0BB8DD_98DC_52CD_41B1_9C17DBC951FE",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_8B08E8DE_98DC_52CF_41BC_7EA6BCE8E68B",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_8B08F8DE_98DC_52CF_41C8_D06EAB2B8B83",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_8B0648DE_98DC_52CF_41C4_3D29F57E60D2",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_8B0668DE_98DC_52CF_4162_5B8A824E46D8",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_8B07B8DF_98DC_52CD_41D9_1A1484B000B8",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_8B07C8DF_98DC_52CD_41E0_2A7A891408EF",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_8B0228E0_98DC_52F3_41DD_7D14420B1A77",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_8B0248E0_98DC_52F3_41D0_9CACEAAE7ECC",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_8B0378E0_98DC_52F4_41E1_9F0F13CF0F4A",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_8B03A8E0_98DC_52F4_41D0_DA41EAC703EC",
  "class": "FadeOutEffect"
 },
 "this.effect_8B0F88DB_98DC_52D5_41CB_B8A40AB3DA72",
 "this.effect_8B0F98DB_98DC_52D5_41B0_D6B33194F24C",
 "this.effect_8B0CC8DB_98DC_52D4_41C7_12C51B1E1490",
 "this.effect_8B0CF8DC_98DC_52D3_41C0_DB95F0DB6259",
 "this.effect_8B0A28DC_98DC_52D3_41B4_C75BAA1FB8B8",
 "this.effect_8B0A58DC_98DC_52D3_41BC_64B34C790786",
 "this.effect_8B0B98DD_98DC_52CD_41D0_086944784C0E",
 "this.effect_8B0BB8DD_98DC_52CD_41B1_9C17DBC951FE",
 "this.effect_8B08E8DE_98DC_52CF_41BC_7EA6BCE8E68B",
 "this.effect_8B08F8DE_98DC_52CF_41C8_D06EAB2B8B83",
 "this.effect_8B0648DE_98DC_52CF_41C4_3D29F57E60D2",
 "this.effect_8B0668DE_98DC_52CF_4162_5B8A824E46D8",
 "this.effect_8B07B8DF_98DC_52CD_41D9_1A1484B000B8",
 "this.effect_8B07C8DF_98DC_52CD_41E0_2A7A891408EF",
 "this.effect_8B0228E0_98DC_52F3_41DD_7D14420B1A77",
 "this.effect_8B0248E0_98DC_52F3_41D0_9CACEAAE7ECC",
 "this.effect_8B0378E0_98DC_52F4_41E1_9F0F13CF0F4A",
 "this.effect_8B03A8E0_98DC_52F4_41D0_DA41EAC703EC",
 "this.audio_B9C92810_ACE9_131D_41D3_AF8BFB37CA4F",
 "this.audio_B980D686_ACF9_1F05_41CD_BC8E904248AB",
 "this.audio_BA089B51_ACF9_351F_41D9_4B80102FB690",
 "this.audio_BBCA5498_ACF9_330E_41D3_5ABFCFD5DE04",
 "this.audio_BA045DE6_ACF8_ED02_41E4_5013CB42750D",
 "this.audio_CE754C64_DFF5_6FA9_41DE_A3CD31E15BDA",
 "this.audio_CE184C6B_DFFD_6FBF_41C4_9F317B38A4A1",
 "this.audio_CD9BEB51_DFFB_E9EB_41EA_0591CA352200",
 "this.audio_CDE181F7_DFF5_7897_41E3_AB7A1859ADD2"
], "children": [
 {
  "progressBorderSize": 0,
  "toolTipBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "toolTipShadowHorizontalLength": 0,
  "paddingRight": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "progressBorderRadius": 0,
  "toolTipShadowSpread": 0,
  "paddingBottom": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarBorderColor": "#000000",
  "transitionDuration": 500,
  "toolTipFontWeight": "normal",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingTop": 4,
  "toolTipOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "toolTipTextShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "playbackBarBottom": 5,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "transitionMode": "blending",
  "minHeight": 50,
  "toolTipTextShadowOpacity": 0.39,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipBorderRadius": 3,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeight": 10,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "minWidth": 100,
  "paddingLeft": 0,
  "playbackBarRight": 0,
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "toolTipFontStyle": "normal",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipFontSize": 12,
  "toolTipTextShadowHorizontalLength": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipShadowColor": "#333333",
  "propagateClick": false,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "paddingTop": 0,
  "progressLeft": 0,
  "class": "ViewerArea",
  "shadow": false,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarBorderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressBottom": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressHeight": 10,
  "top": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "borderRadius": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "id": "MainViewer",
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "bottom": "0%",
  "progressOpacity": 1,
  "toolTipBorderSize": 5,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadShadow": true,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipDisplayTime": 600,
  "borderSize": 0,
  "toolTipShadowOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "right": "0%",
  "progressBarOpacity": 1,
  "toolTipFontFamily": "Arial",
  "left": 0,
  "toolTipFontColor": "#606060"
 },
 {
  "paddingRight": 0,
  "verticalAlign": "middle",
  "propagateClick": false,
  "height": "15%",
  "url": "skin/Image_36CC0F73_3D14_7F51_41B8_C46D492CF2FA.png",
  "paddingBottom": 0,
  "paddingTop": 0,
  "width": "100%",
  "class": "Image",
  "maxHeight": 163,
  "maxWidth": 1918,
  "scaleMode": "fill",
  "backgroundOpacity": 0,
  "shadow": false,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Image_36CC0F73_3D14_7F51_41B8_C46D492CF2FA",
  "bottom": 0.03,
  "borderSize": 0,
  "data": {
   "name": "Gradient"
  },
  "minWidth": 1,
  "paddingLeft": 0,
  "left": "0%"
 },
 {
  "overflow": "scroll",
  "paddingRight": 0,
  "height": 50,
  "verticalAlign": "middle",
  "width": 1650,
  "scrollBarColor": "#000000",
  "scrollBarWidth": 10,
  "propagateClick": false,
  "paddingBottom": 0,
  "paddingTop": 0,
  "creationPolicy": "delayed",
  "class": "Container",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 12,
  "backgroundOpacity": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "horizontalAlign": "left",
  "scrollBarVisible": "rollOver",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_3649275E_3D3B_CF53_41C6_1DC9976EFC78",
  "bottom": "0%",
  "borderSize": 0,
  "paddingLeft": 20,
  "layout": "horizontal",
  "data": {
   "name": "-- Main Button Set"
  },
  "minWidth": 1,
  "left": "0%",
  "children": [
   {
    "iconURL": "skin/IconButton_36ED0B5A_3D3C_4752_41BA_FDC945E2A5D3.png",
    "mode": "push",
    "paddingRight": 0,
    "height": 33,
    "verticalAlign": "middle",
    "width": 82,
    "propagateClick": false,
    "rollOverIconURL": "skin/IconButton_36ED0B5A_3D3C_4752_41BA_FDC945E2A5D3_rollover.png",
    "paddingBottom": 0,
    "paddingTop": 0,
    "class": "IconButton",
    "maxHeight": 33,
    "maxWidth": 82,
    "click": "this.setComponentVisibility(this.Container_55273B39_437C_40D1_41B7_C9815CF1926F, true, 0, null, null, false); this.setComponentVisibility(this.Container_55E3858B_4314_C3B1_4199_F7924E88ECBA, true, 0, null, null, false); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false)",
    "backgroundOpacity": 0,
    "shadow": false,
    "cursor": "hand",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_36ED0B5A_3D3C_4752_41BA_FDC945E2A5D3",
    "borderSize": 0,
    "paddingLeft": 0,
    "transparencyActive": true,
    "data": {
     "name": "button ubicaci\u00f3n"
    },
    "minWidth": 1
   },
   {
    "iconURL": "skin/IconButton_36CC1B7B_3D34_C751_41A6_543261B4F483.png",
    "mode": "push",
    "paddingRight": 0,
    "height": 33,
    "verticalAlign": "middle",
    "width": 76,
    "propagateClick": false,
    "rollOverIconURL": "skin/IconButton_36CC1B7B_3D34_C751_41A6_543261B4F483_rollover.png",
    "paddingBottom": 0,
    "paddingTop": 0,
    "class": "IconButton",
    "maxHeight": 33,
    "maxWidth": 141,
    "click": "this.openLink(\"http://www.vrtourist.net\", \"_blank\"); this.setComponentVisibility(this.Container_53346047_5A6C_DD58_41B9_B595FF015610, false, 0, null, null, false)",
    "backgroundOpacity": 0,
    "shadow": false,
    "cursor": "hand",
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_36CC1B7B_3D34_C751_41A6_543261B4F483",
    "borderSize": 0,
    "paddingLeft": 0,
    "transparencyActive": true,
    "data": {
     "name": "button contacto"
    },
    "minWidth": 1
   }
  ]
 },
 {
  "paddingRight": 0,
  "verticalAlign": "bottom",
  "propagateClick": false,
  "height": "0.22%",
  "url": "skin/Image_3117F852_3D1C_4153_41C7_F45A80F07BAF.png",
  "paddingBottom": 0,
  "paddingTop": 0,
  "width": "100%",
  "class": "Image",
  "maxHeight": 2,
  "maxWidth": 1918,
  "scaleMode": "fit_to_width",
  "backgroundOpacity": 0,
  "shadow": false,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Image_3117F852_3D1C_4153_41C7_F45A80F07BAF",
  "bottom": 52,
  "borderSize": 0,
  "data": {
   "name": "white line"
  },
  "minWidth": 1,
  "paddingLeft": 0,
  "left": "0%"
 },
 {
  "iconURL": "skin/IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1.png",
  "mode": "push",
  "paddingRight": 0,
  "height": 37,
  "verticalAlign": "middle",
  "width": 49,
  "propagateClick": false,
  "rollOverIconURL": "skin/IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1_rollover.png",
  "paddingBottom": 0,
  "paddingTop": 0,
  "class": "IconButton",
  "maxHeight": 37,
  "maxWidth": 49,
  "backgroundOpacity": 0,
  "shadow": false,
  "cursor": "hand",
  "borderRadius": 0,
  "horizontalAlign": "center",
  "minHeight": 1,
  "id": "IconButton_312DE7F2_3D14_CF53_41CA_E1D66BC76AE1",
  "bottom": 7,
  "borderSize": 0,
  "paddingLeft": 0,
  "transparencyActive": false,
  "data": {
   "name": "IconButton VR"
  },
  "minWidth": 1,
  "right": 20
 },
 {
  "overflow": "scroll",
  "paddingRight": 0,
  "height": 110,
  "verticalAlign": "top",
  "width": 350,
  "scrollBarColor": "#000000",
  "scrollBarWidth": 10,
  "propagateClick": false,
  "paddingBottom": 0,
  "paddingTop": 0,
  "creationPolicy": "delayed",
  "class": "Container",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "backgroundOpacity": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "top": "0%",
  "horizontalAlign": "left",
  "scrollBarVisible": "rollOver",
  "borderRadius": 0,
  "id": "Container_5791757B_5C95_8734_4195_AD2599C9941B",
  "minHeight": 1,
  "paddingLeft": 0,
  "borderSize": 0,
  "layout": "absolute",
  "data": {
   "name": "-- Settings button set"
  },
  "minWidth": 1,
  "right": "0%",
  "children": [
   {
    "overflow": "scroll",
    "paddingRight": 0,
    "height": 110,
    "verticalAlign": "middle",
    "width": 110,
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "propagateClick": false,
    "paddingBottom": 0,
    "paddingTop": 0,
    "creationPolicy": "delayed",
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "backgroundOpacity": 0,
    "scrollBarOpacity": 0.5,
    "contentOpaque": false,
    "top": "0%",
    "horizontalAlign": "center",
    "scrollBarVisible": "rollOver",
    "borderRadius": 0,
    "id": "Container_57887AFF_5C94_8D2C_41D1_D25764D9D6F5",
    "minHeight": 1,
    "paddingLeft": 0,
    "borderSize": 0,
    "layout": "horizontal",
    "data": {
     "name": "container setting button"
    },
    "minWidth": 1,
    "right": "0%",
    "children": [
     {
      "iconURL": "skin/IconButton_57121596_5CED_87FC_41CA_B1CDFE3FF13E.png",
      "mode": "push",
      "paddingRight": 0,
      "height": 60,
      "verticalAlign": "middle",
      "width": 60,
      "propagateClick": false,
      "rollOverIconURL": "skin/IconButton_57121596_5CED_87FC_41CA_B1CDFE3FF13E_rollover.png",
      "paddingBottom": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "maxHeight": 60,
      "maxWidth": 60,
      "click": "this.setComponentVisibility(this.Container_50C22332_5CED_8334_41D2_0EC5525522E0, true, 0, null, null, false); this.setComponentVisibility(this.Container_50C22332_5CED_8334_41D2_0EC5525522E0, false, 3500, null, 'hideEffect', false)",
      "backgroundOpacity": 0,
      "shadow": false,
      "cursor": "hand",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "IconButton_57121596_5CED_87FC_41CA_B1CDFE3FF13E",
      "borderSize": 0,
      "paddingLeft": 0,
      "transparencyActive": false,
      "data": {
       "name": "settings button"
      },
      "minWidth": 1
     }
    ]
   },
   {
    "paddingRight": 0,
    "overflow": "scroll",
    "verticalAlign": "middle",
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "width": "60.857%",
    "propagateClick": false,
    "paddingBottom": 0,
    "paddingTop": 0,
    "creationPolicy": "delayed",
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 3,
    "backgroundOpacity": 0,
    "scrollBarOpacity": 0.5,
    "contentOpaque": false,
    "top": "0%",
    "horizontalAlign": "right",
    "visible": false,
    "scrollBarVisible": "rollOver",
    "borderRadius": 0,
    "minHeight": 1,
    "id": "Container_50C22332_5CED_8334_41D2_0EC5525522E0",
    "borderSize": 0,
    "paddingLeft": 0,
    "height": "100%",
    "data": {
     "name": "Hide buttons set"
    },
    "minWidth": 1,
    "left": "12.8%",
    "layout": "horizontal",
    "children": [
     {
      "iconURL": "skin/IconButton_50C63BB2_5CEC_8334_41D2_B851FC945BDB.png",
      "mode": "push",
      "paddingRight": 0,
      "height": 31,
      "verticalAlign": "middle",
      "width": 37,
      "propagateClick": false,
      "paddingBottom": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "maxHeight": 31,
      "maxWidth": 37,
      "backgroundOpacity": 0,
      "shadow": false,
      "cursor": "hand",
      "visible": false,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "IconButton_50C63BB2_5CEC_8334_41D2_B851FC945BDB",
      "paddingLeft": 0,
      "borderSize": 0,
      "transparencyActive": true,
      "data": {
       "name": "button floorplan"
      },
      "minWidth": 1
     },
     {
      "iconURL": "skin/IconButton_57380930_5CF3_8F34_41B9_422F0B32B0CB.png",
      "mode": "push",
      "paddingRight": 0,
      "height": 31,
      "verticalAlign": "middle",
      "width": 37,
      "propagateClick": false,
      "paddingBottom": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "maxHeight": 31,
      "maxWidth": 37,
      "backgroundOpacity": 0,
      "shadow": false,
      "cursor": "hand",
      "visible": false,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "IconButton_57380930_5CF3_8F34_41B9_422F0B32B0CB",
      "paddingLeft": 0,
      "borderSize": 0,
      "transparencyActive": true,
      "data": {
       "name": "button share"
      },
      "minWidth": 1
     },
     "this.IconButton_57242BD6_5CF3_837C_41C5_21400F3CE733",
     {
      "iconURL": "skin/IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D.png",
      "mode": "toggle",
      "paddingRight": 0,
      "height": 31,
      "verticalAlign": "middle",
      "width": 37,
      "propagateClick": false,
      "paddingBottom": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "maxHeight": 31,
      "maxWidth": 37,
      "backgroundOpacity": 0,
      "shadow": false,
      "cursor": "hand",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D",
      "borderSize": 0,
      "paddingLeft": 0,
      "pressedIconURL": "skin/IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D_pressed.png",
      "data": {
       "name": "button mute"
      },
      "minWidth": 1,
      "transparencyActive": true
     },
     {
      "iconURL": "skin/IconButton_572D056F_5CF4_872B_41B8_80B17D78415E.png",
      "mode": "toggle",
      "paddingRight": 0,
      "height": 31,
      "verticalAlign": "middle",
      "width": 37,
      "propagateClick": false,
      "paddingBottom": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "maxHeight": 31,
      "maxWidth": 37,
      "backgroundOpacity": 0,
      "shadow": false,
      "cursor": "hand",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "IconButton_572D056F_5CF4_872B_41B8_80B17D78415E",
      "borderSize": 0,
      "paddingLeft": 0,
      "pressedIconURL": "skin/IconButton_572D056F_5CF4_872B_41B8_80B17D78415E_pressed.png",
      "data": {
       "name": "button fullscreen"
      },
      "minWidth": 1,
      "transparencyActive": true
     }
    ]
   }
  ]
 },
 {
  "overflow": "scroll",
  "paddingRight": 27,
  "height": "100%",
  "verticalAlign": "middle",
  "scrollBarColor": "#000000",
  "scrollBarWidth": 10,
  "width": 213,
  "propagateClick": false,
  "paddingBottom": 0,
  "paddingTop": 0,
  "creationPolicy": "delayed",
  "class": "Container",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "backgroundOpacity": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "top": "0%",
  "horizontalAlign": "right",
  "scrollBarVisible": "rollOver",
  "borderRadius": 0,
  "id": "Container_53346047_5A6C_DD58_41B9_B595FF015610",
  "borderSize": 0,
  "minHeight": 1,
  "paddingLeft": 0,
  "layout": "horizontal",
  "data": {
   "name": "--Intro video"
  },
  "minWidth": 1,
  "right": "0%",
  "children": [
   {
    "iconURL": "skin/IconButton_53CF622F_5A64_7D28_41D1_7028AF95F4BB.png",
    "mode": "push",
    "paddingRight": 0,
    "height": 60,
    "verticalAlign": "middle",
    "width": 144,
    "propagateClick": false,
    "rollOverIconURL": "skin/IconButton_53CF622F_5A64_7D28_41D1_7028AF95F4BB_rollover.png",
    "paddingBottom": 0,
    "paddingTop": 0,
    "class": "IconButton",
    "maxHeight": 60,
    "maxWidth": 144,
    "backgroundOpacity": 0,
    "shadow": false,
    "cursor": "hand",
    "visible": false,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_53CF622F_5A64_7D28_41D1_7028AF95F4BB",
    "paddingLeft": 0,
    "borderSize": 0,
    "transparencyActive": true,
    "data": {
     "name": "button intro video"
    },
    "minWidth": 1
   }
  ]
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "overflow": "scroll",
  "paddingRight": 0,
  "verticalAlign": "top",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "propagateClick": false,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "paddingTop": 0,
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "class": "Container",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "backgroundOpacity": 0.6,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "horizontalAlign": "left",
  "top": "0%",
  "borderRadius": 0,
  "minHeight": 1,
  "visible": false,
  "id": "Container_85A0DC4E_A12F_4591_41E1_1507CA6675C4",
  "scrollBarVisible": "rollOver",
  "bottom": "0%",
  "borderSize": 0,
  "paddingLeft": 0,
  "layout": "absolute",
  "data": {
   "name": "---INFO"
  },
  "left": "0%",
  "minWidth": 1,
  "right": "0%",
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "overflow": "scroll",
    "paddingRight": 0,
    "verticalAlign": "top",
    "backgroundColor": [
     "#333333",
     "#333333"
    ],
    "propagateClick": false,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "paddingTop": 0,
    "creationPolicy": "delayed",
    "scrollBarColor": "#F10A00",
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "backgroundOpacity": 1,
    "scrollBarOpacity": 0.5,
    "contentOpaque": false,
    "horizontalAlign": "left",
    "top": "8%",
    "borderRadius": 0,
    "minHeight": 1,
    "id": "Container_85A02C4E_A12F_4591_41DC_68C7D63D67D7",
    "scrollBarVisible": "rollOver",
    "bottom": "8%",
    "borderSize": 0,
    "paddingLeft": 0,
    "layout": "absolute",
    "data": {
     "name": "Global"
    },
    "left": "6%",
    "minWidth": 1,
    "right": "6%",
    "children": [
     {
      "backgroundColorRatios": [
       1,
       1
      ],
      "overflow": "scroll",
      "paddingRight": 0,
      "height": "100%",
      "verticalAlign": "top",
      "backgroundColor": [
       "#000000",
       "#333333"
      ],
      "propagateClick": false,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "paddingTop": 0,
      "creationPolicy": "delayed",
      "scrollBarColor": "#000000",
      "class": "Container",
      "shadow": false,
      "scrollBarMargin": 2,
      "gap": 10,
      "backgroundOpacity": 1,
      "width": "62%",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "horizontalAlign": "left",
      "top": "0%",
      "borderRadius": 0,
      "minHeight": 1,
      "id": "Container_85A03C4E_A12F_4591_41DA_1C4E96B3B699",
      "borderSize": 0,
      "paddingLeft": 0,
      "layout": "absolute",
      "data": {
       "name": "left"
      },
      "scrollBarVisible": "rollOver",
      "left": "0%",
      "minWidth": 1,
      "children": [
       {
        "paddingRight": 0,
        "verticalAlign": "middle",
        "propagateClick": false,
        "height": "100%",
        "url": "skin/Image_85A00C4E_A12F_4591_41B5_D90DA2D3B95D.jpg",
        "paddingBottom": 0,
        "paddingTop": 0,
        "width": "100%",
        "class": "Image",
        "maxHeight": 948,
        "maxWidth": 1264,
        "scaleMode": "fit_outside",
        "backgroundOpacity": 0,
        "shadow": false,
        "top": "0%",
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "id": "Image_85A00C4E_A12F_4591_41B5_D90DA2D3B95D",
        "borderSize": 0,
        "paddingLeft": 0,
        "data": {
         "name": "img photo"
        },
        "minWidth": 1,
        "left": "0%"
       }
      ],
      "backgroundColorDirection": "vertical"
     },
     {
      "paddingRight": 50,
      "backgroundColorRatios": [
       0,
       1
      ],
      "overflow": "scroll",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "height": "100%",
      "verticalAlign": "middle",
      "propagateClick": false,
      "scrollBarWidth": 10,
      "paddingBottom": 20,
      "paddingTop": 20,
      "creationPolicy": "delayed",
      "scrollBarColor": "#E7392B",
      "class": "Container",
      "shadow": false,
      "scrollBarMargin": 2,
      "gap": 10,
      "backgroundOpacity": 1,
      "width": "54%",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "horizontalAlign": "center",
      "top": "0%",
      "borderRadius": 0,
      "minHeight": 500,
      "id": "Container_85A01C4E_A12F_4591_41E3_CE0B8DD057F5",
      "borderSize": 0,
      "paddingLeft": 50,
      "layout": "vertical",
      "data": {
       "name": "right"
      },
      "minWidth": 600,
      "scrollBarVisible": "rollOver",
      "right": "0%",
      "children": [
       {
        "paddingRight": 0,
        "height": "90%",
        "verticalAlign": "middle",
        "propagateClick": false,
        "url": "skin/Image_85A0EC4E_A12F_4591_41E4_40CC46AAD944.jpg",
        "paddingBottom": 0,
        "paddingTop": 0,
        "width": "90%",
        "class": "Image",
        "shadow": false,
        "maxWidth": 712,
        "scaleMode": "fit_inside",
        "backgroundOpacity": 0,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 500,
        "id": "Image_85A0EC4E_A12F_4591_41E4_40CC46AAD944",
        "borderSize": 0,
        "paddingLeft": 0,
        "data": {
         "name": "img text"
        },
        "minWidth": 500
       }
      ],
      "backgroundColorDirection": "vertical"
     },
     {
      "iconURL": "skin/IconButton_85A0CC4E_A12F_4591_4195_BE78EA3EE3DB.png",
      "mode": "push",
      "paddingRight": 0,
      "height": 24,
      "verticalAlign": "middle",
      "width": 24,
      "propagateClick": false,
      "rollOverIconURL": "skin/IconButton_85A0CC4E_A12F_4591_4195_BE78EA3EE3DB_rollover.png",
      "paddingBottom": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "maxHeight": 120,
      "maxWidth": 120,
      "click": "this.setComponentVisibility(this.Container_85A0DC4E_A12F_4591_41E1_1507CA6675C4, false, 0, null, null, false)",
      "backgroundOpacity": 0,
      "shadow": false,
      "top": 20,
      "cursor": "hand",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minHeight": 30,
      "id": "IconButton_85A0CC4E_A12F_4591_4195_BE78EA3EE3DB",
      "paddingLeft": 0,
      "borderSize": 0,
      "transparencyActive": true,
      "data": {
       "name": "x"
      },
      "minWidth": 30,
      "right": 20
     }
    ],
    "backgroundColorDirection": "vertical"
   }
  ],
  "backgroundColorDirection": "vertical"
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "100%",
  "verticalAlign": "middle",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "propagateClick": false,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "paddingTop": 0,
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "class": "Container",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "backgroundOpacity": 0.5,
  "width": "100%",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "horizontalAlign": "center",
  "visible": false,
  "top": "0%",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_55273B39_437C_40D1_41B7_C9815CF1926F",
  "borderSize": 0,
  "paddingLeft": 0,
  "layout": "horizontal",
  "data": {
   "name": "---LOCATION"
  },
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "minWidth": 1,
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "overflow": "scroll",
    "paddingRight": 0,
    "height": 700,
    "verticalAlign": "middle",
    "width": 1328,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "propagateClick": false,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "paddingTop": 0,
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "backgroundOpacity": 1,
    "scrollBarOpacity": 0.5,
    "contentOpaque": false,
    "horizontalAlign": "center",
    "scrollBarVisible": "rollOver",
    "borderRadius": 4,
    "id": "Container_55E3858B_4314_C3B1_4199_F7924E88ECBA",
    "minHeight": 1,
    "paddingLeft": 0,
    "borderSize": 0,
    "layout": "horizontal",
    "data": {
     "name": "Location global"
    },
    "minWidth": 1,
    "children": [
     {
      "backgroundColorRatios": [
       0,
       1
      ],
      "overflow": "scroll",
      "paddingRight": 0,
      "height": "94.868%",
      "verticalAlign": "top",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "propagateClick": false,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "paddingTop": 0,
      "creationPolicy": "delayed",
      "scrollBarColor": "#000000",
      "class": "Container",
      "shadow": false,
      "scrollBarMargin": 2,
      "gap": 10,
      "backgroundOpacity": 0.3,
      "width": "96.837%",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "horizontalAlign": "left",
      "scrollBarVisible": "rollOver",
      "borderRadius": 0,
      "id": "Container_55BED378_431C_475F_41C0_B13F978722EA",
      "borderSize": 0,
      "minHeight": 1,
      "paddingLeft": 0,
      "layout": "absolute",
      "data": {
       "name": "Container content"
      },
      "minWidth": 1,
      "children": [
       {
        "iconURL": "skin/IconButton_543C3AB8_431C_41DF_419C_F14291D09EBA.png",
        "mode": "push",
        "paddingRight": 0,
        "height": 24,
        "verticalAlign": "middle",
        "width": 24,
        "propagateClick": false,
        "rollOverIconURL": "skin/IconButton_543C3AB8_431C_41DF_419C_F14291D09EBA_rollover.png",
        "paddingBottom": 0,
        "paddingTop": 0,
        "class": "IconButton",
        "maxHeight": 24,
        "maxWidth": 24,
        "click": "this.setComponentVisibility(this.Container_55273B39_437C_40D1_41B7_C9815CF1926F, false, 0, null, null, false)",
        "backgroundOpacity": 0,
        "shadow": false,
        "top": "0%",
        "cursor": "hand",
        "borderRadius": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "id": "IconButton_543C3AB8_431C_41DF_419C_F14291D09EBA",
        "paddingLeft": 0,
        "borderSize": 0,
        "transparencyActive": true,
        "data": {
         "name": "X"
        },
        "minWidth": 1,
        "right": "0%"
       },
       {
        "paddingRight": 0,
        "overflow": "scroll",
        "height": "100%",
        "verticalAlign": "top",
        "scrollBarColor": "#000000",
        "scrollBarWidth": 10,
        "width": "31.182%",
        "propagateClick": false,
        "paddingBottom": 0,
        "paddingTop": 0,
        "creationPolicy": "delayed",
        "class": "Container",
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 10,
        "backgroundOpacity": 0,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "top": "0%",
        "horizontalAlign": "left",
        "visible": false,
        "scrollBarVisible": "rollOver",
        "borderRadius": 0,
        "id": "Container_559E5E68_431D_C17F_41BA_D57BAC710E9E",
        "borderSize": 0,
        "minHeight": 1,
        "paddingLeft": 0,
        "layout": "absolute",
        "data": {
         "name": "container text"
        },
        "minWidth": 1,
        "right": "0%",
        "children": [
         {
          "paddingRight": 0,
          "verticalAlign": "middle",
          "propagateClick": false,
          "url": "skin/Image_57432561_4314_C371_41B5_DB85A77FA6FA.jpg",
          "paddingTop": 0,
          "width": "100%",
          "class": "Image",
          "maxHeight": 600,
          "maxWidth": 402,
          "scaleMode": "fit_inside",
          "backgroundOpacity": 0,
          "paddingBottom": 0,
          "shadow": false,
          "top": "6.63%",
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "visible": false,
          "id": "Image_57432561_4314_C371_41B5_DB85A77FA6FA",
          "bottom": "3.01%",
          "borderSize": 0,
          "paddingLeft": 0,
          "data": {
           "name": "text img"
          },
          "minWidth": 1,
          "left": "0%"
         }
        ]
       },
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "verticalAlign": "top",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "propagateClick": false,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "paddingTop": 0,
        "creationPolicy": "delayed",
        "scrollBarColor": "#000000",
        "class": "Container",
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 10,
        "backgroundOpacity": 0.3,
        "width": "98%",
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "horizontalAlign": "left",
        "top": "0%",
        "borderRadius": 0,
        "minHeight": 1,
        "id": "Container_5555E455_436C_4151_41CC_029603B5193B",
        "borderSize": 0,
        "paddingLeft": 0,
        "layout": "absolute",
        "data": {
         "name": "Container webframe"
        },
        "scrollBarVisible": "rollOver",
        "left": "0%",
        "minWidth": 1,
        "children": [
         {
          "backgroundColorRatios": [
           0
          ],
          "paddingRight": 0,
          "height": "100%",
          "backgroundColor": [
           "#FFFFFF"
          ],
          "propagateClick": false,
          "paddingBottom": 0,
          "paddingTop": 0,
          "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.5204047757973!2d30.32671131609701!3d59.94009998187669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310c2b40516d%3A0x3e676f3bea7153b7!2sIglesia%20del%20Salvador%20sobre%20la%20sangre%20derramada!5e0!3m2!1ses-419!2sru!4v1587725366372!5m2!1ses-419!2sru\" ",
          "width": "100%",
          "class": "WebFrame",
          "shadow": false,
          "insetBorder": false,
          "backgroundOpacity": 1,
          "scrollEnabled": false,
          "top": "0%",
          "borderRadius": 0,
          "minHeight": 1,
          "id": "WebFrame_57792F91_436F_DFD1_41BE_B9C240373A43",
          "borderSize": 0,
          "paddingLeft": 0,
          "data": {
           "name": "WebFrame"
          },
          "left": "0%",
          "minWidth": 1,
          "backgroundColorDirection": "vertical"
         }
        ],
        "backgroundColorDirection": "vertical"
       }
      ],
      "backgroundColorDirection": "vertical"
     }
    ],
    "backgroundColorDirection": "vertical"
   }
  ],
  "backgroundColorDirection": "vertical"
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "100%",
  "verticalAlign": "middle",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "propagateClick": false,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "paddingTop": 0,
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "class": "Container",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 11,
  "backgroundOpacity": 0.5,
  "width": "100%",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "horizontalAlign": "center",
  "visible": false,
  "top": "0%",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_2F202A29_3D1C_C0F1_41CB_D5A027A7C11C",
  "borderSize": 0,
  "paddingLeft": 0,
  "layout": "horizontal",
  "data": {
   "name": "---PANORAMA LIST"
  },
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "minWidth": 1,
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "overflow": "scroll",
    "paddingRight": 0,
    "height": 580,
    "verticalAlign": "top",
    "width": 1050,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "propagateClick": false,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "paddingTop": 0,
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "backgroundOpacity": 1,
    "scrollBarOpacity": 0.5,
    "contentOpaque": false,
    "horizontalAlign": "left",
    "scrollBarVisible": "rollOver",
    "borderRadius": 4,
    "id": "Container_2E9E35C8_3D1C_43BF_41B7_13BBE9E68CEB",
    "minHeight": 1,
    "paddingLeft": 0,
    "borderSize": 0,
    "layout": "absolute",
    "data": {
     "name": "Container global"
    },
    "minWidth": 1,
    "children": [
     {
      "iconURL": "skin/IconButton_2EEDB1A2_3D14_43F3_41C1_DB67F965D307.png",
      "mode": "push",
      "paddingRight": 0,
      "height": 24,
      "verticalAlign": "middle",
      "width": 24,
      "propagateClick": false,
      "rollOverIconURL": "skin/IconButton_2EEDB1A2_3D14_43F3_41C1_DB67F965D307_rollover.png",
      "paddingBottom": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "maxHeight": 24,
      "maxWidth": 24,
      "click": "this.setComponentVisibility(this.Container_2F202A29_3D1C_C0F1_41CB_D5A027A7C11C, false, 0, null, null, false)",
      "backgroundOpacity": 0,
      "shadow": false,
      "top": "2.5%",
      "cursor": "hand",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "IconButton_2EEDB1A2_3D14_43F3_41C1_DB67F965D307",
      "paddingLeft": 0,
      "borderSize": 0,
      "transparencyActive": true,
      "data": {
       "name": "X"
      },
      "minWidth": 1,
      "right": "1.43%"
     },
     {
      "backgroundColorRatios": [
       0,
       1
      ],
      "overflow": "scroll",
      "paddingRight": 0,
      "height": "88%",
      "verticalAlign": "top",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "propagateClick": false,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "paddingTop": 0,
      "creationPolicy": "delayed",
      "scrollBarColor": "#000000",
      "class": "Container",
      "shadow": false,
      "scrollBarMargin": 2,
      "gap": 20,
      "backgroundOpacity": 0.3,
      "width": "100%",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "horizontalAlign": "center",
      "scrollBarVisible": "rollOver",
      "borderRadius": 0,
      "minHeight": 1,
      "id": "Container_2ED71618_3D14_C0DF_418D_C2F178EFBCA8",
      "bottom": "0%",
      "borderSize": 0,
      "layout": "vertical",
      "data": {
       "name": "Container thumblist"
      },
      "paddingLeft": 0,
      "minWidth": 1,
      "left": "0%",
      "children": [
       {
        "paddingRight": 0,
        "height": "14%",
        "verticalAlign": "middle",
        "propagateClick": false,
        "url": "skin/Image_2F2B45AC_3D14_C3F7_4187_D1D05CDB0583.png",
        "paddingBottom": 0,
        "paddingTop": 0,
        "width": "85.4%",
        "class": "Image",
        "maxHeight": 41,
        "maxWidth": 1133,
        "scaleMode": "fit_outside",
        "backgroundOpacity": 0,
        "shadow": false,
        "horizontalAlign": "left",
        "borderRadius": 0,
        "minHeight": 1,
        "id": "Image_2F2B45AC_3D14_C3F7_4187_D1D05CDB0583",
        "borderSize": 0,
        "paddingLeft": 0,
        "data": {
         "name": "Text image"
        },
        "minWidth": 1
       },
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "83.135%",
        "verticalAlign": "top",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "propagateClick": false,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "paddingTop": 0,
        "creationPolicy": "delayed",
        "scrollBarColor": "#000000",
        "class": "Container",
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 13,
        "backgroundOpacity": 0.3,
        "width": "89.619%",
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "horizontalAlign": "center",
        "scrollBarVisible": "rollOver",
        "borderRadius": 0,
        "id": "Container_2E0D0306_3D14_C0B3_41A4_18E077CBEE3C",
        "borderSize": 0,
        "minHeight": 1,
        "paddingLeft": 0,
        "layout": "horizontal",
        "data": {
         "name": "Container Thumblist"
        },
        "minWidth": 1,
        "children": [
         {
          "itemThumbnailWidth": 200,
          "backgroundColorRatios": [
           0
          ],
          "paddingRight": 20,
          "itemLabelFontStyle": "normal",
          "verticalAlign": "top",
          "backgroundColor": [
           "#FFFFFF"
          ],
          "paddingBottom": 10,
          "scrollBarWidth": 10,
          "itemHeight": 150,
          "gap": 25,
          "itemLabelHorizontalAlign": "center",
          "itemPaddingTop": 3,
          "backgroundOpacity": 0.2,
          "scrollBarOpacity": 0.5,
          "itemMode": "normal",
          "playList": "this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist",
          "itemPaddingRight": 3,
          "horizontalAlign": "left",
          "itemThumbnailHeight": 116,
          "itemLabelGap": 7,
          "itemLabelFontFamily": "Georgia",
          "itemLabelPosition": "bottom",
          "itemOpacity": 1,
          "minHeight": 1,
          "paddingLeft": 20,
          "itemBorderRadius": 0,
          "itemMaxHeight": 1000,
          "minWidth": 1,
          "itemVerticalAlign": "middle",
          "selectedItemLabelFontWeight": "bold",
          "itemMinWidth": 50,
          "itemThumbnailShadow": false,
          "itemWidth": 206,
          "backgroundColorDirection": "vertical",
          "itemBackgroundColor": [],
          "itemPaddingBottom": 3,
          "itemBackgroundColorRatios": [],
          "width": "100%",
          "itemPaddingLeft": 3,
          "itemMinHeight": 50,
          "propagateClick": false,
          "height": "90%",
          "itemThumbnailBorderRadius": 0,
          "itemHorizontalAlign": "center",
          "paddingTop": 14,
          "itemThumbnailOpacity": 1,
          "scrollBarColor": "#FFFFFF",
          "class": "ThumbnailGrid",
          "shadow": false,
          "itemLabelTextDecoration": "none",
          "scrollBarMargin": 2,
          "rollOverItemLabelFontWeight": "bold",
          "scrollBarVisible": "rollOver",
          "itemThumbnailScaleMode": "fit_outside",
          "borderRadius": 5,
          "id": "ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9",
          "selectedItemLabelFontColor": "#99BB1B",
          "itemLabelFontWeight": "normal",
          "itemLabelFontSize": 14,
          "rollOverItemLabelFontColor": "#000000",
          "itemBackgroundColorDirection": "vertical",
          "itemBackgroundOpacity": 0,
          "data": {
           "name": "ThumbnailList"
          },
          "borderSize": 0,
          "selectedItemLabelFontStyle": "italic",
          "itemLabelFontColor": "#333333",
          "itemMaxWidth": 1000
         }
        ],
        "backgroundColorDirection": "vertical"
       }
      ],
      "backgroundColorDirection": "vertical"
     }
    ],
    "backgroundColorDirection": "vertical"
   }
  ],
  "backgroundColorDirection": "vertical"
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "100%",
  "verticalAlign": "middle",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "propagateClick": false,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "paddingTop": 0,
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "class": "Container",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "backgroundOpacity": 0.5,
  "width": "100%",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "horizontalAlign": "center",
  "visible": false,
  "top": "0%",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_5EE70B16_547D_F3EC_41D0_2B6D527AFE8A",
  "borderSize": 0,
  "paddingLeft": 0,
  "layout": "horizontal",
  "data": {
   "name": "---VIDEOALBUM"
  },
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "minWidth": 1,
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "overflow": "scroll",
    "paddingRight": 0,
    "height": "83%",
    "verticalAlign": "middle",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "propagateClick": false,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "paddingTop": 0,
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "backgroundOpacity": 1,
    "width": "90.91%",
    "scrollBarOpacity": 0.5,
    "contentOpaque": false,
    "horizontalAlign": "center",
    "scrollBarVisible": "rollOver",
    "borderRadius": 4,
    "id": "Container_5EE70B15_547D_F3EC_41C1_999FBC34E663",
    "borderSize": 0,
    "minHeight": 1,
    "paddingLeft": 0,
    "layout": "horizontal",
    "data": {
     "name": "Container global"
    },
    "minWidth": 1,
    "children": [
     {
      "backgroundColorRatios": [
       0,
       1
      ],
      "overflow": "scroll",
      "paddingRight": 0,
      "height": "94.868%",
      "verticalAlign": "top",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "propagateClick": false,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "paddingTop": 0,
      "creationPolicy": "delayed",
      "scrollBarColor": "#000000",
      "class": "Container",
      "shadow": false,
      "scrollBarMargin": 2,
      "gap": 10,
      "backgroundOpacity": 0.3,
      "width": "96.837%",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "horizontalAlign": "left",
      "scrollBarVisible": "rollOver",
      "borderRadius": 0,
      "id": "Container_5EE70B15_547D_F3EC_41D0_339269FA65C3",
      "borderSize": 0,
      "minHeight": 1,
      "paddingLeft": 0,
      "layout": "absolute",
      "data": {
       "name": "Container content"
      },
      "minWidth": 1,
      "children": [
       "this.IconButton_5EE70B15_547D_F3EC_41C4_B5989A1C685D",
       {
        "paddingRight": 0,
        "overflow": "scroll",
        "height": "100%",
        "verticalAlign": "top",
        "scrollBarColor": "#000000",
        "scrollBarWidth": 10,
        "width": "27.805%",
        "propagateClick": false,
        "paddingBottom": 0,
        "paddingTop": 0,
        "creationPolicy": "delayed",
        "class": "Container",
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 10,
        "backgroundOpacity": 0,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "top": "0%",
        "horizontalAlign": "left",
        "scrollBarVisible": "rollOver",
        "borderRadius": 0,
        "id": "Container_5EE70B15_547D_F3EC_41A2_343375D7999C",
        "borderSize": 0,
        "minHeight": 1,
        "paddingLeft": 0,
        "layout": "absolute",
        "data": {
         "name": "Container text"
        },
        "minWidth": 1,
        "right": "0%",
        "children": [
         {
          "paddingRight": 0,
          "verticalAlign": "middle",
          "propagateClick": false,
          "url": "skin/Image_5EE70B15_547D_F3EC_41C6_17742D8BD11C.png",
          "paddingTop": 0,
          "width": "100%",
          "class": "Image",
          "maxHeight": 600,
          "maxWidth": 402,
          "scaleMode": "fit_inside",
          "backgroundOpacity": 0,
          "paddingBottom": 0,
          "shadow": false,
          "top": "6.63%",
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "id": "Image_5EE70B15_547D_F3EC_41C6_17742D8BD11C",
          "bottom": "58.73%",
          "borderSize": 0,
          "paddingLeft": 0,
          "data": {
           "name": "VideoGallery text"
          },
          "minWidth": 1,
          "left": "0%"
         },
         {
          "paddingRight": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "overflow": "visible",
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "height": "52.259%",
          "verticalAlign": "top",
          "propagateClick": false,
          "scrollBarWidth": 10,
          "paddingBottom": 0,
          "paddingTop": 0,
          "creationPolicy": "delayed",
          "scrollBarColor": "#000000",
          "class": "Container",
          "shadow": false,
          "scrollBarMargin": 2,
          "gap": 5,
          "backgroundOpacity": 0.3,
          "width": "76.072%",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "horizontalAlign": "center",
          "scrollBarVisible": "rollOver",
          "borderRadius": 0,
          "minHeight": 1,
          "id": "Container_5EE70B15_547D_F3EC_41D1_22CDC78688BF",
          "borderSize": 0,
          "bottom": "6.63%",
          "layout": "vertical",
          "data": {
           "name": "Container thumbs"
          },
          "minWidth": 1,
          "paddingLeft": 0,
          "right": "11.47%",
          "children": [
           {
            "backgroundColorRatios": [
             0,
             1
            ],
            "overflow": "visible",
            "paddingRight": 0,
            "height": "22.4%",
            "verticalAlign": "top",
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "propagateClick": false,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "paddingTop": 0,
            "creationPolicy": "delayed",
            "scrollBarColor": "#000000",
            "class": "Container",
            "shadow": false,
            "scrollBarMargin": 2,
            "gap": 10,
            "backgroundOpacity": 0.3,
            "width": "100%",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "horizontalAlign": "left",
            "scrollBarVisible": "rollOver",
            "borderRadius": 0,
            "id": "Container_5EE70B15_547D_F3EC_41A2_874A2F889A29",
            "borderSize": 0,
            "minHeight": 1,
            "paddingLeft": 0,
            "layout": "horizontal",
            "data": {
             "name": "Row 1"
            },
            "minWidth": 1,
            "children": [
             {
              "iconURL": "skin/IconButton_5EE70B15_547D_F3EC_41B1_9FCD63C81663.jpg",
              "mode": "push",
              "paddingRight": 0,
              "height": 82,
              "verticalAlign": "middle",
              "width": 145,
              "propagateClick": false,
              "rollOverIconURL": "skin/IconButton_5EE70B15_547D_F3EC_41B1_9FCD63C81663_rollover.jpg",
              "paddingBottom": 0,
              "paddingTop": 0,
              "class": "IconButton",
              "maxHeight": 82,
              "maxWidth": 145,
              "click": "this.setComponentVisibility(this.Image_679F467B_6E9E_E5C9_41CE_E1ECA9F9CA18, false, 0, null, null, false)",
              "backgroundOpacity": 0,
              "shadow": false,
              "cursor": "hand",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "id": "IconButton_5EE70B15_547D_F3EC_41B1_9FCD63C81663",
              "borderSize": 0,
              "paddingLeft": 0,
              "transparencyActive": true,
              "data": {
               "name": "IconButton intro"
              },
              "minWidth": 1
             },
             {
              "iconURL": "skin/IconButton_5EE70B16_547D_F3EC_41C9_24A61C47F57B.jpg",
              "mode": "push",
              "paddingRight": 0,
              "height": 82,
              "verticalAlign": "middle",
              "width": 145,
              "propagateClick": false,
              "rollOverIconURL": "skin/IconButton_5EE70B16_547D_F3EC_41C9_24A61C47F57B_rollover.jpg",
              "paddingBottom": 0,
              "paddingTop": 0,
              "class": "IconButton",
              "maxHeight": 82,
              "maxWidth": 145,
              "backgroundOpacity": 0,
              "shadow": false,
              "cursor": "hand",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "id": "IconButton_5EE70B16_547D_F3EC_41C9_24A61C47F57B",
              "paddingLeft": 0,
              "borderSize": 0,
              "transparencyActive": false,
              "data": {
               "name": "IconButton snorkel"
              },
              "minWidth": 1
             }
            ],
            "backgroundColorDirection": "vertical"
           },
           {
            "backgroundColorRatios": [
             0,
             1
            ],
            "overflow": "visible",
            "paddingRight": 0,
            "height": "22.4%",
            "verticalAlign": "top",
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "propagateClick": false,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "paddingTop": 0,
            "creationPolicy": "delayed",
            "scrollBarColor": "#000000",
            "class": "Container",
            "shadow": false,
            "scrollBarMargin": 2,
            "gap": 10,
            "backgroundOpacity": 0.3,
            "width": "100%",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "horizontalAlign": "left",
            "scrollBarVisible": "rollOver",
            "borderRadius": 0,
            "id": "Container_5EE70B16_547D_F3EC_41C9_971F1B00B22D",
            "borderSize": 0,
            "minHeight": 1,
            "paddingLeft": 0,
            "layout": "horizontal",
            "data": {
             "name": "Row 2"
            },
            "minWidth": 1,
            "children": [
             {
              "iconURL": "skin/IconButton_5EE70B16_547D_F3EC_41CA_F1E60F40A3D8.jpg",
              "mode": "push",
              "paddingRight": 0,
              "height": 82,
              "verticalAlign": "middle",
              "width": 145,
              "propagateClick": false,
              "rollOverIconURL": "skin/IconButton_5EE70B16_547D_F3EC_41CA_F1E60F40A3D8_rollover.jpg",
              "paddingBottom": 0,
              "paddingTop": 0,
              "class": "IconButton",
              "maxHeight": 82,
              "maxWidth": 145,
              "backgroundOpacity": 0,
              "shadow": false,
              "cursor": "hand",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "id": "IconButton_5EE70B16_547D_F3EC_41CA_F1E60F40A3D8",
              "paddingLeft": 0,
              "borderSize": 0,
              "transparencyActive": false,
              "data": {
               "name": "IconButton folklore"
              },
              "minWidth": 1
             },
             {
              "iconURL": "skin/IconButton_64D269B3_6E92_2F59_41D8_AD59CD19318F.jpg",
              "mode": "push",
              "paddingRight": 0,
              "height": 82,
              "verticalAlign": "middle",
              "width": 145,
              "propagateClick": false,
              "rollOverIconURL": "skin/IconButton_64D269B3_6E92_2F59_41D8_AD59CD19318F_rollover.jpg",
              "paddingBottom": 0,
              "paddingTop": 0,
              "class": "IconButton",
              "maxHeight": 82,
              "maxWidth": 145,
              "backgroundOpacity": 0,
              "shadow": false,
              "cursor": "hand",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "id": "IconButton_64D269B3_6E92_2F59_41D8_AD59CD19318F",
              "paddingLeft": 0,
              "borderSize": 0,
              "transparencyActive": false,
              "data": {
               "name": "IconButton empty"
              },
              "minWidth": 1
             }
            ],
            "backgroundColorDirection": "vertical"
           },
           {
            "backgroundColorRatios": [
             0,
             1
            ],
            "overflow": "visible",
            "paddingRight": 0,
            "height": "22.4%",
            "verticalAlign": "top",
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "propagateClick": false,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "paddingTop": 0,
            "creationPolicy": "delayed",
            "scrollBarColor": "#000000",
            "class": "Container",
            "shadow": false,
            "scrollBarMargin": 2,
            "gap": 10,
            "backgroundOpacity": 0.3,
            "width": "100%",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "horizontalAlign": "left",
            "scrollBarVisible": "rollOver",
            "borderRadius": 0,
            "id": "Container_5EE70B16_547D_F3EC_41D4_82701AFF0DAD",
            "borderSize": 0,
            "minHeight": 1,
            "paddingLeft": 0,
            "layout": "horizontal",
            "data": {
             "name": "Row 3 empty"
            },
            "minWidth": 1,
            "backgroundColorDirection": "vertical"
           }
          ],
          "backgroundColorDirection": "vertical"
         }
        ]
       },
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "verticalAlign": "top",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "propagateClick": false,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "paddingTop": 0,
        "creationPolicy": "delayed",
        "scrollBarColor": "#000000",
        "class": "Container",
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 10,
        "backgroundOpacity": 0.3,
        "width": "72.402%",
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "horizontalAlign": "left",
        "top": "0%",
        "borderRadius": 0,
        "minHeight": 1,
        "id": "Container_5EE70B16_547D_F3EC_41D3_F78FB47E4731",
        "borderSize": 0,
        "paddingLeft": 0,
        "layout": "absolute",
        "data": {
         "name": "Container Viewer"
        },
        "scrollBarVisible": "rollOver",
        "left": "0%",
        "minWidth": 1,
        "children": [
         {
          "progressBorderSize": 0,
          "toolTipBorderColor": "#000000",
          "toolTipShadowHorizontalLength": 0,
          "toolTipShadowOpacity": 1,
          "paddingRight": 0,
          "playbackBarLeft": 0,
          "playbackBarHeadHeight": 15,
          "progressBorderRadius": 0,
          "toolTipShadowSpread": 0,
          "paddingBottom": 0,
          "playbackBarHeadShadowBlurRadius": 3,
          "progressBarBorderColor": "#000000",
          "transitionDuration": 500,
          "toolTipFontWeight": "normal",
          "playbackBarProgressBackgroundColorRatios": [
           0
          ],
          "toolTipPaddingTop": 4,
          "toolTipOpacity": 1,
          "playbackBarHeadOpacity": 1,
          "toolTipTextShadowVerticalLength": 0,
          "playbackBarHeadBackgroundColorRatios": [
           0,
           1
          ],
          "progressBackgroundColorDirection": "vertical",
          "progressBorderColor": "#000000",
          "playbackBarBottom": 0,
          "progressBarBackgroundColorRatios": [
           0
          ],
          "progressBarBackgroundColor": [
           "#3399FF"
          ],
          "playbackBarProgressBackgroundColorDirection": "vertical",
          "transitionMode": "blending",
          "minHeight": 1,
          "toolTipTextShadowOpacity": 0.39,
          "progressBackgroundColor": [
           "#FFFFFF"
          ],
          "toolTipBorderRadius": 3,
          "toolTipBackgroundColor": "#F6F6F6",
          "playbackBarBackgroundColor": [
           "#FFFFFF"
          ],
          "playbackBarHeadWidth": 6,
          "paddingLeft": 0,
          "playbackBarBackgroundColorDirection": "vertical",
          "toolTipTextShadowBlurRadius": 3,
          "minWidth": 1,
          "playbackBarHeight": 10,
          "playbackBarRight": 0,
          "progressBarBorderSize": 0,
          "playbackBarProgressBorderSize": 0,
          "playbackBarProgressBorderRadius": 0,
          "progressBarBorderRadius": 0,
          "toolTipFontStyle": "normal",
          "playbackBarHeadShadowHorizontalLength": 0,
          "toolTipFontSize": 12,
          "toolTipTextShadowHorizontalLength": 0,
          "toolTipShadowBlurRadius": 3,
          "playbackBarBorderRadius": 0,
          "width": "100%",
          "playbackBarHeadBorderRadius": 0,
          "playbackBarProgressBorderColor": "#000000",
          "toolTipShadowColor": "#333333",
          "propagateClick": false,
          "height": "100%",
          "toolTipTextShadowColor": "#000000",
          "playbackBarHeadBorderColor": "#000000",
          "playbackBarHeadBorderSize": 0,
          "paddingTop": 0,
          "progressLeft": 0,
          "class": "ViewerArea",
          "shadow": false,
          "playbackBarProgressOpacity": 1,
          "playbackBarHeadBackgroundColor": [
           "#111111",
           "#666666"
          ],
          "playbackBarBorderSize": 0,
          "playbackBarBackgroundOpacity": 1,
          "progressBottom": 2,
          "playbackBarHeadShadowVerticalLength": 0,
          "progressHeight": 10,
          "top": "0%",
          "playbackBarHeadBackgroundColorDirection": "vertical",
          "borderRadius": 0,
          "toolTipPaddingBottom": 4,
          "playbackBarProgressBackgroundColor": [
           "#3399FF"
          ],
          "id": "ViewerAreaLabeled_5EE70B16_547D_F3EC_4177_5761BA34B830",
          "progressRight": 0,
          "progressBarBackgroundColorDirection": "vertical",
          "playbackBarHeadShadowColor": "#000000",
          "progressOpacity": 1,
          "toolTipBorderSize": 5,
          "toolTipPaddingLeft": 6,
          "playbackBarHeadShadow": true,
          "toolTipShadowVerticalLength": 0,
          "playbackBarHeadShadowOpacity": 0.7,
          "toolTipDisplayTime": 600,
          "borderSize": 0,
          "playbackBarBorderColor": "#FFFFFF",
          "progressBackgroundOpacity": 1,
          "progressBackgroundColorRatios": [
           0
          ],
          "playbackBarOpacity": 1,
          "toolTipFontColor": "#606060",
          "progressBarOpacity": 1,
          "toolTipFontFamily": "Arial",
          "left": "0%",
          "toolTipPaddingRight": 6
         },
         {
          "paddingRight": 0,
          "verticalAlign": "middle",
          "propagateClick": false,
          "height": "100%",
          "url": "skin/Image_679F467B_6E9E_E5C9_41CE_E1ECA9F9CA18.jpg",
          "paddingBottom": 0,
          "paddingTop": 0,
          "width": "100%",
          "class": "Image",
          "maxHeight": 821,
          "maxWidth": 1460,
          "scaleMode": "fit_outside",
          "backgroundOpacity": 0,
          "shadow": false,
          "top": "0%",
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "id": "Image_679F467B_6E9E_E5C9_41CE_E1ECA9F9CA18",
          "borderSize": 0,
          "paddingLeft": 0,
          "data": {
           "name": "-Image intro video"
          },
          "minWidth": 1,
          "left": "0%"
         }
        ],
        "backgroundColorDirection": "vertical"
       }
      ],
      "backgroundColorDirection": "vertical"
     }
    ],
    "backgroundColorDirection": "vertical"
   }
  ],
  "backgroundColorDirection": "vertical"
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "100%",
  "verticalAlign": "middle",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "propagateClick": false,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "paddingTop": 0,
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "class": "Container",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 11,
  "backgroundOpacity": 0.5,
  "width": "100%",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "horizontalAlign": "center",
  "visible": false,
  "top": "0%",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_C190A7DE_D1CF_0251_41D6_94510622876F",
  "borderSize": 0,
  "paddingLeft": 0,
  "layout": "horizontal",
  "data": {
   "name": "---VIDEO 360\u00ba"
  },
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "minWidth": 1,
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "overflow": "scroll",
    "paddingRight": 0,
    "height": 362,
    "verticalAlign": "top",
    "width": 872,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "propagateClick": false,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "paddingTop": 0,
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "backgroundOpacity": 1,
    "scrollBarOpacity": 0.5,
    "contentOpaque": false,
    "horizontalAlign": "left",
    "scrollBarVisible": "rollOver",
    "borderRadius": 4,
    "id": "Container_C190C7DD_D1CF_0253_41E6_E37D4ADD5212",
    "minHeight": 1,
    "paddingLeft": 0,
    "borderSize": 0,
    "layout": "absolute",
    "data": {
     "name": "Container global"
    },
    "minWidth": 1,
    "children": [
     {
      "iconURL": "skin/IconButton_C190F7DD_D1CF_0253_41E6_BF586D7AB5A0.png",
      "mode": "push",
      "paddingRight": 0,
      "height": 24,
      "verticalAlign": "middle",
      "width": 24,
      "propagateClick": false,
      "rollOverIconURL": "skin/IconButton_C190F7DD_D1CF_0253_41E6_BF586D7AB5A0_rollover.png",
      "paddingBottom": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "maxHeight": 24,
      "maxWidth": 24,
      "click": "this.setComponentVisibility(this.Container_C190A7DE_D1CF_0251_41D6_94510622876F, false, 0, null, null, false)",
      "backgroundOpacity": 0,
      "shadow": false,
      "top": "4%",
      "cursor": "hand",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "IconButton_C190F7DD_D1CF_0253_41E6_BF586D7AB5A0",
      "paddingLeft": 0,
      "borderSize": 0,
      "transparencyActive": true,
      "data": {
       "name": "X"
      },
      "minWidth": 1,
      "right": "1.43%"
     },
     {
      "paddingRight": 0,
      "overflow": "scroll",
      "verticalAlign": "top",
      "scrollBarColor": "#000000",
      "scrollBarWidth": 10,
      "width": "100%",
      "propagateClick": false,
      "paddingBottom": 0,
      "paddingTop": 0,
      "creationPolicy": "delayed",
      "class": "Container",
      "shadow": false,
      "scrollBarMargin": 2,
      "gap": 10,
      "backgroundOpacity": 0,
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "scrollBarVisible": "rollOver",
      "horizontalAlign": "center",
      "borderRadius": 0,
      "minHeight": 1,
      "id": "Container_C190E7DD_D1CF_0253_41C3_86133B23DE83",
      "bottom": "8.01%",
      "borderSize": 0,
      "height": "73.757%",
      "data": {
       "name": "Container content"
      },
      "minWidth": 1,
      "paddingLeft": 0,
      "layout": "vertical",
      "left": "0%",
      "children": [
       {
        "paddingRight": 0,
        "height": "15.356%",
        "verticalAlign": "middle",
        "propagateClick": false,
        "url": "skin/Image_C19097DE_D1CF_0251_41EA_014A5794BC3C.png",
        "paddingBottom": 0,
        "paddingTop": 0,
        "width": "80%",
        "class": "Image",
        "maxHeight": 41,
        "maxWidth": 1133,
        "scaleMode": "fit_inside",
        "backgroundOpacity": 0,
        "shadow": false,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "minHeight": 1,
        "id": "Image_C19097DE_D1CF_0251_41EA_014A5794BC3C",
        "borderSize": 0,
        "paddingLeft": 0,
        "data": {
         "name": "Panorama list title"
        },
        "minWidth": 1
       },
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "overflow": "visible",
        "paddingRight": 0,
        "height": "61.423%",
        "verticalAlign": "middle",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "propagateClick": false,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "paddingTop": 0,
        "creationPolicy": "delayed",
        "scrollBarColor": "#000000",
        "class": "Container",
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 10,
        "backgroundOpacity": 0.3,
        "width": "80%",
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "horizontalAlign": "left",
        "scrollBarVisible": "rollOver",
        "borderRadius": 0,
        "id": "Container_E916E277_E0EC_BA90_41E7_7B91E7367E91",
        "borderSize": 0,
        "minHeight": 1,
        "paddingLeft": 0,
        "layout": "horizontal",
        "data": {
         "name": "Container thumbs"
        },
        "minWidth": 1,
        "children": [
         {
          "iconURL": "skin/IconButton_E8C8584F_E125_B6F0_41A6_23688E8F08B3.jpg",
          "paddingRight": 0,
          "mode": "push",
          "height": "82%",
          "verticalAlign": "middle",
          "propagateClick": false,
          "rollOverIconURL": "skin/IconButton_E8C8584F_E125_B6F0_41A6_23688E8F08B3_rollover.jpg",
          "width": "35%",
          "paddingBottom": 0,
          "paddingTop": 0,
          "class": "IconButton",
          "maxHeight": 164,
          "maxWidth": 290,
          "backgroundOpacity": 0,
          "shadow": false,
          "cursor": "hand",
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minHeight": 1,
          "id": "IconButton_E8C8584F_E125_B6F0_41A6_23688E8F08B3",
          "borderSize": 0,
          "paddingLeft": 0,
          "transparencyActive": false,
          "data": {
           "name": "IconButton Powerboat"
          },
          "minWidth": 1
         },
         {
          "iconURL": "skin/IconButton_EB2F0719_E124_9A90_41E6_910CC36702EC.jpg",
          "paddingRight": 0,
          "mode": "push",
          "height": "82%",
          "verticalAlign": "middle",
          "propagateClick": false,
          "rollOverIconURL": "skin/IconButton_EB2F0719_E124_9A90_41E6_910CC36702EC_rollover.jpg",
          "width": "35%",
          "paddingBottom": 0,
          "paddingTop": 0,
          "class": "IconButton",
          "maxHeight": 164,
          "maxWidth": 290,
          "backgroundOpacity": 0,
          "shadow": false,
          "cursor": "hand",
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minHeight": 1,
          "id": "IconButton_EB2F0719_E124_9A90_41E6_910CC36702EC",
          "borderSize": 0,
          "paddingLeft": 0,
          "transparencyActive": false,
          "data": {
           "name": "IconButton Breakfast"
          },
          "minWidth": 1
         },
         {
          "iconURL": "skin/IconButton_EB2B4481_E125_BE70_41E3_F8B2DC2A2D2D.jpg",
          "paddingRight": 0,
          "mode": "push",
          "height": "82%",
          "verticalAlign": "middle",
          "propagateClick": false,
          "rollOverIconURL": "skin/IconButton_EB2B4481_E125_BE70_41E3_F8B2DC2A2D2D_rollover.jpg",
          "width": "35%",
          "paddingBottom": 0,
          "paddingTop": 0,
          "class": "IconButton",
          "maxHeight": 164,
          "maxWidth": 290,
          "backgroundOpacity": 0,
          "shadow": false,
          "cursor": "hand",
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minHeight": 1,
          "id": "IconButton_EB2B4481_E125_BE70_41E3_F8B2DC2A2D2D",
          "borderSize": 0,
          "paddingLeft": 0,
          "transparencyActive": false,
          "data": {
           "name": "IconButton PoolFun"
          },
          "minWidth": 1
         }
        ],
        "backgroundColorDirection": "vertical"
       }
      ]
     }
    ],
    "backgroundColorDirection": "vertical"
   }
  ],
  "backgroundColorDirection": "vertical"
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "100%",
  "verticalAlign": "top",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "propagateClick": false,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "paddingTop": 0,
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "class": "Container",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "backgroundOpacity": 1,
  "width": "100%",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "horizontalAlign": "left",
  "visible": false,
  "top": "0%",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_ECB4524F_E163_9AF0_41E5_60E049D28740",
  "borderSize": 0,
  "paddingLeft": 0,
  "layout": "absolute",
  "data": {
   "name": "---360"
  },
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "minWidth": 1,
  "children": [
   {
    "progressBorderSize": 0,
    "toolTipBorderColor": "#000000",
    "toolTipPaddingRight": 6,
    "toolTipShadowHorizontalLength": 0,
    "paddingRight": 0,
    "playbackBarLeft": 0,
    "playbackBarHeadHeight": 15,
    "progressBorderRadius": 0,
    "toolTipShadowSpread": 0,
    "paddingBottom": 0,
    "playbackBarHeadShadowBlurRadius": 3,
    "progressBarBorderColor": "#000000",
    "transitionDuration": 500,
    "toolTipFontWeight": "normal",
    "playbackBarProgressBackgroundColorRatios": [
     0
    ],
    "toolTipPaddingTop": 4,
    "toolTipOpacity": 1,
    "playbackBarHeadOpacity": 1,
    "toolTipTextShadowVerticalLength": 0,
    "playbackBarHeadBackgroundColorRatios": [
     0,
     1
    ],
    "progressBackgroundColorDirection": "vertical",
    "progressBorderColor": "#000000",
    "playbackBarBottom": 0,
    "progressBarBackgroundColorRatios": [
     0
    ],
    "progressBarBackgroundColor": [
     "#3399FF"
    ],
    "playbackBarProgressBackgroundColorDirection": "vertical",
    "transitionMode": "blending",
    "minHeight": 1,
    "toolTipTextShadowOpacity": 0.39,
    "progressBackgroundColor": [
     "#FFFFFF"
    ],
    "toolTipBorderRadius": 3,
    "toolTipBackgroundColor": "#F6F6F6",
    "playbackBarBackgroundColor": [
     "#FFFFFF"
    ],
    "toolTipTextShadowBlurRadius": 3,
    "paddingLeft": 0,
    "playbackBarBackgroundColorDirection": "vertical",
    "playbackBarHeadWidth": 6,
    "minWidth": 1,
    "playbackBarHeight": 10,
    "playbackBarRight": 0,
    "progressBarBorderSize": 0,
    "playbackBarProgressBorderSize": 0,
    "playbackBarProgressBorderRadius": 0,
    "progressBarBorderRadius": 0,
    "toolTipFontStyle": "normal",
    "playbackBarHeadShadowHorizontalLength": 0,
    "toolTipFontSize": 12,
    "toolTipTextShadowHorizontalLength": 0,
    "toolTipShadowBlurRadius": 3,
    "playbackBarBorderRadius": 0,
    "width": "100%",
    "playbackBarHeadBorderRadius": 0,
    "playbackBarProgressBorderColor": "#000000",
    "toolTipShadowColor": "#333333",
    "propagateClick": false,
    "height": "100%",
    "toolTipTextShadowColor": "#000000",
    "playbackBarHeadBorderColor": "#000000",
    "playbackBarHeadBorderSize": 0,
    "paddingTop": 0,
    "progressLeft": 0,
    "class": "ViewerArea",
    "shadow": false,
    "playbackBarProgressOpacity": 1,
    "playbackBarHeadBackgroundColor": [
     "#111111",
     "#666666"
    ],
    "playbackBarBorderSize": 0,
    "playbackBarBackgroundOpacity": 1,
    "progressBottom": 2,
    "playbackBarHeadShadowVerticalLength": 0,
    "progressHeight": 10,
    "toolTipPaddingBottom": 4,
    "playbackBarHeadBackgroundColorDirection": "vertical",
    "borderRadius": 0,
    "playbackBarProgressBackgroundColor": [
     "#3399FF"
    ],
    "id": "ViewerAreaLabeled_EF626468_E164_BEB0_41E7_F6DF4C667020",
    "progressRight": 0,
    "progressBarBackgroundColorDirection": "vertical",
    "bottom": "0%",
    "progressOpacity": 1,
    "toolTipBorderSize": 5,
    "toolTipPaddingLeft": 6,
    "playbackBarHeadShadow": true,
    "toolTipShadowVerticalLength": 0,
    "playbackBarHeadShadowColor": "#000000",
    "toolTipDisplayTime": 600,
    "borderSize": 0,
    "toolTipShadowOpacity": 1,
    "progressBackgroundOpacity": 1,
    "playbackBarHeadShadowOpacity": 0.7,
    "progressBackgroundColorRatios": [
     0
    ],
    "playbackBarOpacity": 1,
    "playbackBarBorderColor": "#FFFFFF",
    "progressBarOpacity": 1,
    "toolTipFontFamily": "Arial",
    "left": "0%",
    "toolTipFontColor": "#606060"
   },
   "this.IconButton_EF2F8867_E165_76B0_41D8_E8981983BDA0"
  ],
  "backgroundColorDirection": "vertical"
 },
 {
  "iconURL": "skin/IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29.png",
  "mode": "push",
  "paddingRight": 0,
  "height": 40,
  "verticalAlign": "middle",
  "width": 40,
  "propagateClick": false,
  "rollOverIconURL": "skin/IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29_rollover.png",
  "paddingBottom": 0,
  "paddingTop": 0,
  "class": "IconButton",
  "maxHeight": 80,
  "maxWidth": 80,
  "backgroundOpacity": 0,
  "shadow": false,
  "top": 20,
  "cursor": "hand",
  "visible": false,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "minHeight": 1,
  "id": "IconButton_C1F400F8_D141_073E_41D7_1B8678FC4A29",
  "paddingLeft": 0,
  "borderSize": 0,
  "transparencyActive": true,
  "data": {
   "name": "X 360"
  },
  "minWidth": 1,
  "left": 20
 },
 {
  "paddingRight": 0,
  "height": 70,
  "verticalAlign": "middle",
  "width": 125,
  "propagateClick": false,
  "url": "skin/Image_19470ABB_0A67_2982_418C_D469BE33D2C6.png",
  "paddingBottom": 0,
  "paddingTop": 0,
  "class": "Image",
  "maxHeight": 78,
  "maxWidth": 212,
  "scaleMode": "fit_to_width",
  "backgroundOpacity": 0,
  "shadow": false,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "minHeight": 1,
  "visible": false,
  "id": "Image_19470ABB_0A67_2982_418C_D469BE33D2C6",
  "bottom": 56,
  "borderSize": 0,
  "paddingLeft": 0,
  "data": {
   "name": "-Wheel mouse"
  },
  "minWidth": 1,
  "right": 20
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "100%",
  "verticalAlign": "middle",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "propagateClick": false,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "paddingTop": 0,
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "class": "Container",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "backgroundOpacity": 0.5,
  "width": "100%",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "horizontalAlign": "center",
  "visible": false,
  "top": "0%",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_474C01C8_4AA6_73BE_4193_40F3DA6DF623",
  "borderSize": 0,
  "paddingLeft": 0,
  "layout": "horizontal",
  "data": {
   "name": "---PHOTOALBUM"
  },
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "minWidth": 1,
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "overflow": "scroll",
    "paddingRight": 0,
    "height": 780,
    "verticalAlign": "middle",
    "width": 1500,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "propagateClick": false,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "paddingTop": 0,
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "backgroundOpacity": 1,
    "scrollBarOpacity": 0.5,
    "contentOpaque": false,
    "horizontalAlign": "center",
    "scrollBarVisible": "rollOver",
    "borderRadius": 4,
    "id": "Container_474C01C7_4AA6_73B2_41C6_B213F7F17334",
    "minHeight": 1,
    "paddingLeft": 0,
    "borderSize": 0,
    "layout": "horizontal",
    "data": {
     "name": "Main container"
    },
    "minWidth": 1,
    "children": [
     {
      "backgroundColorRatios": [
       0,
       1
      ],
      "overflow": "scroll",
      "paddingRight": 0,
      "height": "94.868%",
      "verticalAlign": "top",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "propagateClick": false,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "paddingTop": 0,
      "creationPolicy": "delayed",
      "scrollBarColor": "#000000",
      "class": "Container",
      "shadow": false,
      "scrollBarMargin": 2,
      "gap": 10,
      "backgroundOpacity": 0.3,
      "width": "96.837%",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "horizontalAlign": "left",
      "scrollBarVisible": "rollOver",
      "borderRadius": 0,
      "id": "Container_474C01C8_4AA6_73BE_41C7_421C083439CF",
      "borderSize": 0,
      "minHeight": 1,
      "paddingLeft": 0,
      "layout": "absolute",
      "data": {
       "name": "Content container"
      },
      "minWidth": 1,
      "children": [
       {
        "iconURL": "skin/IconButton_474C01C8_4AA6_73BE_41C5_79A3EA2FBF0C.png",
        "mode": "push",
        "paddingRight": 0,
        "height": 24,
        "verticalAlign": "middle",
        "width": 24,
        "propagateClick": false,
        "rollOverIconURL": "skin/IconButton_474C01C8_4AA6_73BE_41C5_79A3EA2FBF0C_rollover.png",
        "paddingBottom": 0,
        "paddingTop": 0,
        "class": "IconButton",
        "maxHeight": 24,
        "maxWidth": 24,
        "click": "this.setComponentVisibility(this.Container_474C01C8_4AA6_73BE_4193_40F3DA6DF623, false, 0, null, null, false)",
        "backgroundOpacity": 0,
        "shadow": false,
        "top": "0%",
        "cursor": "hand",
        "borderRadius": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "id": "IconButton_474C01C8_4AA6_73BE_41C5_79A3EA2FBF0C",
        "paddingLeft": 0,
        "borderSize": 0,
        "transparencyActive": true,
        "data": {
         "name": "X"
        },
        "minWidth": 1,
        "right": "0%"
       },
       {
        "paddingRight": 0,
        "overflow": "scroll",
        "height": "100%",
        "verticalAlign": "top",
        "scrollBarColor": "#000000",
        "scrollBarWidth": 10,
        "width": "27.805%",
        "propagateClick": false,
        "paddingBottom": 0,
        "paddingTop": 0,
        "creationPolicy": "delayed",
        "class": "Container",
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 10,
        "backgroundOpacity": 0,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "top": "0%",
        "horizontalAlign": "left",
        "scrollBarVisible": "rollOver",
        "borderRadius": 0,
        "id": "Container_474C01C8_4AA6_73BE_41B0_42F6E66589F6",
        "borderSize": 0,
        "minHeight": 1,
        "paddingLeft": 0,
        "layout": "absolute",
        "data": {
         "name": "Right container"
        },
        "minWidth": 1,
        "right": "0%",
        "children": [
         {
          "paddingRight": 0,
          "verticalAlign": "middle",
          "propagateClick": false,
          "url": "skin/Image_474C01C8_4AA6_73BE_4198_63728D42FC19.png",
          "paddingTop": 0,
          "width": "100%",
          "class": "Image",
          "maxHeight": 600,
          "maxWidth": 402,
          "scaleMode": "fit_inside",
          "backgroundOpacity": 0,
          "paddingBottom": 0,
          "shadow": false,
          "top": "6.63%",
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "id": "Image_474C01C8_4AA6_73BE_4198_63728D42FC19",
          "bottom": "58.73%",
          "borderSize": 0,
          "paddingLeft": 0,
          "data": {
           "name": "Text img"
          },
          "minWidth": 1,
          "left": "0%"
         },
         {
          "paddingRight": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "overflow": "visible",
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "height": "52.259%",
          "verticalAlign": "top",
          "propagateClick": false,
          "scrollBarWidth": 10,
          "paddingBottom": 0,
          "paddingTop": 0,
          "creationPolicy": "delayed",
          "scrollBarColor": "#000000",
          "class": "Container",
          "shadow": false,
          "scrollBarMargin": 2,
          "gap": 10,
          "backgroundOpacity": 0.3,
          "width": "76.072%",
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "horizontalAlign": "center",
          "scrollBarVisible": "rollOver",
          "borderRadius": 0,
          "minHeight": 1,
          "id": "Container_472B38FC_4AAE_1156_41B3_4C1A1EC48ED3",
          "borderSize": 0,
          "bottom": "6.63%",
          "layout": "vertical",
          "data": {
           "name": "Thumbs buttons container"
          },
          "minWidth": 1,
          "paddingLeft": 0,
          "right": "11.47%",
          "children": [
           {
            "backgroundColorRatios": [
             0,
             1
            ],
            "overflow": "visible",
            "paddingRight": 0,
            "height": "25%",
            "verticalAlign": "top",
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "propagateClick": false,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "paddingTop": 0,
            "creationPolicy": "delayed",
            "scrollBarColor": "#000000",
            "class": "Container",
            "shadow": false,
            "scrollBarMargin": 2,
            "gap": 10,
            "backgroundOpacity": 0.3,
            "width": "100%",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "horizontalAlign": "left",
            "scrollBarVisible": "rollOver",
            "borderRadius": 0,
            "id": "Container_470039F2_4AA2_3352_4188_8343FDAC53A2",
            "borderSize": 0,
            "minHeight": 1,
            "paddingLeft": 0,
            "layout": "horizontal",
            "data": {
             "name": "Container Row 1"
            },
            "minWidth": 1,
            "children": [
             {
              "iconURL": "skin/IconButton_44ADB92E_4AA2_10F2_41D2_B8CBD4047DD0.jpg",
              "mode": "push",
              "paddingRight": 0,
              "height": 82,
              "verticalAlign": "middle",
              "width": 145,
              "propagateClick": false,
              "rollOverIconURL": "skin/IconButton_44ADB92E_4AA2_10F2_41D2_B8CBD4047DD0_rollover.jpg",
              "paddingBottom": 0,
              "paddingTop": 0,
              "class": "IconButton",
              "maxHeight": 82,
              "maxWidth": 145,
              "backgroundOpacity": 0,
              "shadow": false,
              "cursor": "hand",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "id": "IconButton_44ADB92E_4AA2_10F2_41D2_B8CBD4047DD0",
              "paddingLeft": 0,
              "borderSize": 0,
              "transparencyActive": true,
              "data": {
               "name": "IconButton_house"
              },
              "minWidth": 1
             },
             {
              "iconURL": "skin/IconButton_449AFB03_4AA2_30B2_41D1_F5ADA79526F5.jpg",
              "mode": "push",
              "paddingRight": 0,
              "height": 82,
              "verticalAlign": "middle",
              "width": 145,
              "propagateClick": false,
              "rollOverIconURL": "skin/IconButton_449AFB03_4AA2_30B2_41D1_F5ADA79526F5_rollover.jpg",
              "paddingBottom": 0,
              "paddingTop": 0,
              "class": "IconButton",
              "maxHeight": 82,
              "maxWidth": 145,
              "backgroundOpacity": 0,
              "shadow": false,
              "cursor": "hand",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "id": "IconButton_449AFB03_4AA2_30B2_41D1_F5ADA79526F5",
              "paddingLeft": 0,
              "borderSize": 0,
              "transparencyActive": false,
              "data": {
               "name": "IconButton_garden"
              },
              "minWidth": 1
             }
            ],
            "backgroundColorDirection": "vertical"
           },
           {
            "backgroundColorRatios": [
             0,
             1
            ],
            "overflow": "visible",
            "paddingRight": 0,
            "height": "25%",
            "verticalAlign": "top",
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "propagateClick": false,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "paddingTop": 0,
            "creationPolicy": "delayed",
            "scrollBarColor": "#000000",
            "class": "Container",
            "shadow": false,
            "scrollBarMargin": 2,
            "gap": 10,
            "backgroundOpacity": 0.3,
            "width": "100%",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "horizontalAlign": "left",
            "scrollBarVisible": "rollOver",
            "borderRadius": 0,
            "id": "Container_470F7D71_4AA2_136E_41B0_AAAD0C68ACE5",
            "borderSize": 0,
            "minHeight": 1,
            "paddingLeft": 0,
            "layout": "horizontal",
            "data": {
             "name": "Container Row 2"
            },
            "minWidth": 1,
            "children": [
             {
              "iconURL": "skin/IconButton_44C31BD1_4AA6_77AE_41CF_A8741B86D814.jpg",
              "mode": "push",
              "paddingRight": 0,
              "height": 82,
              "verticalAlign": "middle",
              "width": 145,
              "propagateClick": false,
              "rollOverIconURL": "skin/IconButton_44C31BD1_4AA6_77AE_41CF_A8741B86D814_rollover.jpg",
              "paddingBottom": 0,
              "paddingTop": 0,
              "class": "IconButton",
              "maxHeight": 82,
              "maxWidth": 145,
              "backgroundOpacity": 0,
              "shadow": false,
              "cursor": "hand",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "id": "IconButton_44C31BD1_4AA6_77AE_41CF_A8741B86D814",
              "paddingLeft": 0,
              "borderSize": 0,
              "transparencyActive": false,
              "data": {
               "name": "IconButton_decoration"
              },
              "minWidth": 1
             },
             {
              "iconURL": "skin/IconButton_44C9C39F_4AA2_77D2_41BB_0AC2476E1EE6.jpg",
              "mode": "push",
              "paddingRight": 0,
              "height": 82,
              "verticalAlign": "middle",
              "width": 145,
              "propagateClick": false,
              "rollOverIconURL": "skin/IconButton_44C9C39F_4AA2_77D2_41BB_0AC2476E1EE6_rollover.jpg",
              "paddingBottom": 0,
              "paddingTop": 0,
              "class": "IconButton",
              "maxHeight": 82,
              "maxWidth": 145,
              "backgroundOpacity": 0,
              "shadow": false,
              "cursor": "hand",
              "borderRadius": 0,
              "horizontalAlign": "center",
              "minHeight": 1,
              "id": "IconButton_44C9C39F_4AA2_77D2_41BB_0AC2476E1EE6",
              "paddingLeft": 0,
              "borderSize": 0,
              "transparencyActive": false,
              "data": {
               "name": "IconButton_Swimming"
              },
              "minWidth": 1
             }
            ],
            "backgroundColorDirection": "vertical"
           },
           {
            "backgroundColorRatios": [
             0,
             1
            ],
            "overflow": "visible",
            "paddingRight": 0,
            "height": "25%",
            "verticalAlign": "top",
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "propagateClick": false,
            "scrollBarWidth": 10,
            "paddingBottom": 0,
            "paddingTop": 0,
            "creationPolicy": "delayed",
            "scrollBarColor": "#000000",
            "class": "Container",
            "shadow": false,
            "scrollBarMargin": 2,
            "gap": 10,
            "backgroundOpacity": 0.3,
            "width": "100%",
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "horizontalAlign": "left",
            "scrollBarVisible": "rollOver",
            "borderRadius": 0,
            "id": "Container_44F91F72_4AA6_2F52_41C3_1B4514891167",
            "borderSize": 0,
            "minHeight": 1,
            "paddingLeft": 0,
            "layout": "horizontal",
            "data": {
             "name": "Container Row 3"
            },
            "minWidth": 1,
            "backgroundColorDirection": "vertical"
           }
          ],
          "backgroundColorDirection": "vertical"
         }
        ]
       },
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "verticalAlign": "top",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "propagateClick": false,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "paddingTop": 0,
        "creationPolicy": "delayed",
        "scrollBarColor": "#000000",
        "class": "Container",
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 10,
        "backgroundOpacity": 0.3,
        "width": "72.402%",
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "horizontalAlign": "left",
        "top": "0%",
        "borderRadius": 0,
        "minHeight": 1,
        "id": "Container_474C01C8_4AA6_73BE_41C4_789A192CFF53",
        "borderSize": 0,
        "paddingLeft": 0,
        "layout": "absolute",
        "data": {
         "name": "Container Viewer"
        },
        "scrollBarVisible": "rollOver",
        "left": "0%",
        "minWidth": 1,
        "children": [
         {
          "progressBorderSize": 0,
          "toolTipBorderColor": "#000000",
          "toolTipShadowHorizontalLength": 0,
          "toolTipShadowOpacity": 1,
          "paddingRight": 0,
          "playbackBarLeft": 0,
          "playbackBarHeadHeight": 15,
          "progressBorderRadius": 0,
          "toolTipShadowSpread": 0,
          "paddingBottom": 0,
          "playbackBarHeadShadowBlurRadius": 3,
          "progressBarBorderColor": "#000000",
          "transitionDuration": 500,
          "toolTipFontWeight": "normal",
          "playbackBarProgressBackgroundColorRatios": [
           0
          ],
          "toolTipPaddingTop": 4,
          "toolTipOpacity": 1,
          "playbackBarHeadOpacity": 1,
          "toolTipTextShadowVerticalLength": 0,
          "playbackBarHeadBackgroundColorRatios": [
           0,
           1
          ],
          "progressBackgroundColorDirection": "vertical",
          "progressBorderColor": "#000000",
          "playbackBarBottom": 0,
          "progressBarBackgroundColorRatios": [
           0
          ],
          "progressBarBackgroundColor": [
           "#3399FF"
          ],
          "playbackBarProgressBackgroundColorDirection": "vertical",
          "transitionMode": "blending",
          "minHeight": 1,
          "toolTipTextShadowOpacity": 0.39,
          "progressBackgroundColor": [
           "#FFFFFF"
          ],
          "toolTipBorderRadius": 3,
          "toolTipBackgroundColor": "#F6F6F6",
          "playbackBarBackgroundColor": [
           "#FFFFFF"
          ],
          "playbackBarHeadWidth": 6,
          "paddingLeft": 0,
          "playbackBarBackgroundColorDirection": "vertical",
          "toolTipTextShadowBlurRadius": 3,
          "minWidth": 1,
          "playbackBarHeight": 10,
          "playbackBarRight": 0,
          "progressBarBorderSize": 0,
          "playbackBarProgressBorderSize": 0,
          "playbackBarProgressBorderRadius": 0,
          "progressBarBorderRadius": 0,
          "toolTipFontStyle": "normal",
          "playbackBarHeadShadowHorizontalLength": 0,
          "toolTipFontSize": 12,
          "toolTipTextShadowHorizontalLength": 0,
          "toolTipShadowBlurRadius": 3,
          "playbackBarBorderRadius": 0,
          "width": "100%",
          "playbackBarHeadBorderRadius": 0,
          "playbackBarProgressBorderColor": "#000000",
          "toolTipShadowColor": "#333333",
          "propagateClick": false,
          "height": "100%",
          "toolTipTextShadowColor": "#000000",
          "playbackBarHeadBorderColor": "#000000",
          "playbackBarHeadBorderSize": 0,
          "paddingTop": 0,
          "progressLeft": 0,
          "class": "ViewerArea",
          "shadow": false,
          "playbackBarProgressOpacity": 1,
          "playbackBarHeadBackgroundColor": [
           "#111111",
           "#666666"
          ],
          "playbackBarBorderSize": 0,
          "playbackBarBackgroundOpacity": 1,
          "progressBottom": 2,
          "playbackBarHeadShadowVerticalLength": 0,
          "progressHeight": 10,
          "top": "0%",
          "playbackBarHeadBackgroundColorDirection": "vertical",
          "borderRadius": 0,
          "toolTipPaddingBottom": 4,
          "playbackBarProgressBackgroundColor": [
           "#3399FF"
          ],
          "id": "ViewerAreaLabeled_451BE519_4B62_70DE_41C7_94BD7032FDA3",
          "progressRight": 0,
          "progressBarBackgroundColorDirection": "vertical",
          "playbackBarHeadShadowColor": "#000000",
          "progressOpacity": 1,
          "toolTipBorderSize": 5,
          "toolTipPaddingLeft": 6,
          "playbackBarHeadShadow": true,
          "toolTipShadowVerticalLength": 0,
          "playbackBarHeadShadowOpacity": 0.7,
          "toolTipDisplayTime": 600,
          "borderSize": 0,
          "playbackBarBorderColor": "#FFFFFF",
          "progressBackgroundOpacity": 1,
          "progressBackgroundColorRatios": [
           0
          ],
          "playbackBarOpacity": 1,
          "toolTipFontColor": "#606060",
          "progressBarOpacity": 1,
          "toolTipFontFamily": "Arial",
          "left": "0%",
          "toolTipPaddingRight": 6
         },
         {
          "paddingRight": 0,
          "overflow": "scroll",
          "verticalAlign": "middle",
          "scrollBarColor": "#000000",
          "scrollBarWidth": 10,
          "width": "100%",
          "propagateClick": false,
          "paddingBottom": 0,
          "paddingTop": 0,
          "creationPolicy": "delayed",
          "class": "Container",
          "shadow": false,
          "scrollBarMargin": 2,
          "gap": 300,
          "backgroundOpacity": 0,
          "scrollBarOpacity": 0.5,
          "contentOpaque": false,
          "top": "0%",
          "horizontalAlign": "center",
          "scrollBarVisible": "rollOver",
          "borderRadius": 0,
          "minHeight": 1,
          "id": "Container_5B704147_4B62_30B2_41C7_41C4A6280806",
          "borderSize": 0,
          "paddingLeft": 0,
          "height": "100%",
          "data": {
           "name": "Container buttons"
          },
          "minWidth": 1,
          "left": "0%",
          "layout": "horizontal",
          "children": [
           {
            "iconURL": "skin/IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177.png",
            "mode": "push",
            "paddingRight": 0,
            "height": 50,
            "verticalAlign": "middle",
            "width": 50,
            "propagateClick": false,
            "rollOverIconURL": "skin/IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177_rollover.png",
            "paddingBottom": 0,
            "paddingTop": 0,
            "class": "IconButton",
            "maxHeight": 50,
            "maxWidth": 50,
            "backgroundOpacity": 0,
            "shadow": false,
            "cursor": "hand",
            "borderRadius": 0,
            "horizontalAlign": "center",
            "minHeight": 1,
            "id": "IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177",
            "borderSize": 0,
            "paddingLeft": 0,
            "pressedIconURL": "skin/IconButton_5B64C788_4B62_3FBE_41B0_8EC50D1C7177_pressed.png",
            "data": {
             "name": "button <"
            },
            "minWidth": 1,
            "transparencyActive": true
           },
           {
            "paddingRight": 0,
            "overflow": "scroll",
            "height": "30.12%",
            "verticalAlign": "top",
            "scrollBarColor": "#000000",
            "scrollBarWidth": 10,
            "width": "70%",
            "propagateClick": false,
            "paddingBottom": 0,
            "paddingTop": 0,
            "creationPolicy": "delayed",
            "class": "Container",
            "shadow": false,
            "scrollBarMargin": 2,
            "gap": 10,
            "backgroundOpacity": 0,
            "scrollBarOpacity": 0.5,
            "contentOpaque": false,
            "scrollBarVisible": "rollOver",
            "horizontalAlign": "left",
            "borderRadius": 0,
            "id": "Container_5B3D27DD_4B61_FF56_41C7_13D4CF866C03",
            "borderSize": 0,
            "minHeight": 1,
            "paddingLeft": 0,
            "layout": "absolute",
            "data": {
             "name": "separator"
            },
            "minWidth": 1
           },
           {
            "iconURL": "skin/IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748.png",
            "mode": "push",
            "paddingRight": 0,
            "height": 50,
            "verticalAlign": "middle",
            "width": 50,
            "propagateClick": false,
            "rollOverIconURL": "skin/IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748_rollover.png",
            "paddingBottom": 0,
            "paddingTop": 0,
            "class": "IconButton",
            "maxHeight": 50,
            "maxWidth": 50,
            "backgroundOpacity": 0,
            "shadow": false,
            "cursor": "hand",
            "borderRadius": 0,
            "horizontalAlign": "center",
            "minHeight": 1,
            "id": "IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748",
            "borderSize": 0,
            "paddingLeft": 0,
            "pressedIconURL": "skin/IconButton_5B2C6260_4B7E_316E_41D0_0EA9EE4EE748_pressed.png",
            "data": {
             "name": "button >"
            },
            "minWidth": 1,
            "transparencyActive": true
           }
          ]
         }
        ],
        "backgroundColorDirection": "vertical"
       }
      ],
      "backgroundColorDirection": "vertical"
     }
    ],
    "backgroundColorDirection": "vertical"
   }
  ],
  "backgroundColorDirection": "vertical"
 },
 {
  "backgroundColorRatios": [
   0,
   1
  ],
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "100%",
  "verticalAlign": "middle",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "propagateClick": false,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "paddingTop": 0,
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "class": "Container",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "backgroundOpacity": 0.5,
  "width": "100%",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "horizontalAlign": "center",
  "visible": false,
  "top": "0%",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_4169474A_4F02_D74E_41C4_5387F4304140",
  "borderSize": 0,
  "paddingLeft": 0,
  "layout": "horizontal",
  "data": {
   "name": "CONTACTO"
  },
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "minWidth": 1,
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "overflow": "scroll",
    "paddingRight": 0,
    "height": 750,
    "verticalAlign": "middle",
    "width": 1450,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "propagateClick": false,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "paddingTop": 0,
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "backgroundOpacity": 1,
    "scrollBarOpacity": 0.5,
    "contentOpaque": false,
    "horizontalAlign": "center",
    "scrollBarVisible": "rollOver",
    "borderRadius": 4,
    "id": "Container_4169474A_4F02_D74E_41D2_8786E1AEB625",
    "minHeight": 1,
    "paddingLeft": 0,
    "borderSize": 0,
    "layout": "horizontal",
    "data": {
     "name": "Container global"
    },
    "minWidth": 1,
    "children": [
     {
      "backgroundColorRatios": [
       0,
       1
      ],
      "overflow": "scroll",
      "paddingRight": 0,
      "height": "94.868%",
      "verticalAlign": "top",
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "propagateClick": false,
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "paddingTop": 0,
      "creationPolicy": "delayed",
      "scrollBarColor": "#000000",
      "class": "Container",
      "shadow": false,
      "scrollBarMargin": 2,
      "gap": 10,
      "backgroundOpacity": 0.3,
      "width": "96.837%",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "horizontalAlign": "left",
      "scrollBarVisible": "rollOver",
      "borderRadius": 0,
      "id": "Container_4169474A_4F02_D74E_41C9_D049781FF241",
      "borderSize": 0,
      "minHeight": 1,
      "paddingLeft": 0,
      "layout": "absolute",
      "data": {
       "name": "Container content"
      },
      "minWidth": 1,
      "children": [
       {
        "iconURL": "skin/IconButton_4169474A_4F02_D74E_41D2_E2447B190450.png",
        "mode": "push",
        "paddingRight": 0,
        "height": 24,
        "verticalAlign": "middle",
        "width": 24,
        "propagateClick": false,
        "rollOverIconURL": "skin/IconButton_4169474A_4F02_D74E_41D2_E2447B190450_rollover.png",
        "paddingBottom": 0,
        "paddingTop": 0,
        "class": "IconButton",
        "maxHeight": 24,
        "maxWidth": 24,
        "click": "this.setComponentVisibility(this.Container_4169474A_4F02_D74E_41C4_5387F4304140, false, 0, null, null, false)",
        "backgroundOpacity": 0,
        "shadow": false,
        "top": "0%",
        "cursor": "hand",
        "borderRadius": 0,
        "horizontalAlign": "center",
        "minHeight": 1,
        "id": "IconButton_4169474A_4F02_D74E_41D2_E2447B190450",
        "paddingLeft": 0,
        "borderSize": 0,
        "transparencyActive": true,
        "data": {
         "name": "X"
        },
        "minWidth": 1,
        "right": "0%"
       },
       {
        "paddingRight": 0,
        "overflow": "scroll",
        "height": "100%",
        "verticalAlign": "top",
        "scrollBarColor": "#000000",
        "scrollBarWidth": 10,
        "width": "29.06%",
        "propagateClick": false,
        "paddingBottom": 0,
        "paddingTop": 0,
        "creationPolicy": "delayed",
        "class": "Container",
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 10,
        "backgroundOpacity": 0,
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "top": "0%",
        "horizontalAlign": "left",
        "scrollBarVisible": "rollOver",
        "borderRadius": 0,
        "id": "Container_4169474A_4F02_D74E_41CC_AAA712A39B4C",
        "borderSize": 0,
        "minHeight": 1,
        "paddingLeft": 0,
        "layout": "absolute",
        "data": {
         "name": "Container right text"
        },
        "minWidth": 1,
        "right": "0%",
        "children": [
         {
          "paddingRight": 0,
          "verticalAlign": "middle",
          "propagateClick": false,
          "url": "skin/Image_4169474A_4F02_D74E_418A_8DC243F4699E.png",
          "paddingTop": 0,
          "width": "100%",
          "class": "Image",
          "maxHeight": 600,
          "maxWidth": 402,
          "scaleMode": "fit_inside",
          "backgroundOpacity": 0,
          "paddingBottom": 0,
          "shadow": false,
          "top": "6.63%",
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "id": "Image_4169474A_4F02_D74E_418A_8DC243F4699E",
          "bottom": "17.77%",
          "borderSize": 0,
          "paddingLeft": 0,
          "data": {
           "name": "text image"
          },
          "minWidth": 1,
          "left": "0%"
         },
         {
          "iconURL": "skin/IconButton_41E48CE3_4F06_F97D_41CD_F1E19D5B82E4.png",
          "mode": "push",
          "paddingRight": 0,
          "height": 47,
          "verticalAlign": "middle",
          "width": 135,
          "propagateClick": false,
          "rollOverIconURL": "skin/IconButton_41E48CE3_4F06_F97D_41CD_F1E19D5B82E4_rollover.png",
          "paddingBottom": 0,
          "paddingTop": 0,
          "class": "IconButton",
          "maxHeight": 47,
          "maxWidth": 135,
          "backgroundOpacity": 0,
          "click": "this.openLink(\"http://www.3dvista.com\", \"_blank\")",
          "shadow": false,
          "cursor": "hand",
          "borderRadius": 0,
          "horizontalAlign": "center",
          "minHeight": 1,
          "id": "IconButton_41E48CE3_4F06_F97D_41CD_F1E19D5B82E4",
          "bottom": "12.45%",
          "borderSize": 0,
          "paddingLeft": 0,
          "transparencyActive": false,
          "data": {
           "name": "Button Book Now"
          },
          "minWidth": 1,
          "left": "12.22%"
         }
        ]
       },
       {
        "backgroundColorRatios": [
         0,
         1
        ],
        "overflow": "scroll",
        "paddingRight": 0,
        "height": "100%",
        "verticalAlign": "top",
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "propagateClick": false,
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "paddingTop": 0,
        "creationPolicy": "delayed",
        "scrollBarColor": "#000000",
        "class": "Container",
        "shadow": false,
        "scrollBarMargin": 2,
        "gap": 10,
        "backgroundOpacity": 0.3,
        "width": "70.869%",
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "horizontalAlign": "left",
        "top": "0%",
        "borderRadius": 0,
        "minHeight": 1,
        "id": "Container_4169474A_4F02_D74E_41D3_C66A0E7A6577",
        "borderSize": 0,
        "paddingLeft": 0,
        "layout": "absolute",
        "data": {
         "name": "Container Img"
        },
        "scrollBarVisible": "rollOver",
        "left": "0%",
        "minWidth": 1,
        "children": [
         {
          "paddingRight": 0,
          "verticalAlign": "middle",
          "propagateClick": false,
          "height": "100%",
          "url": "skin/Image_41194F8C_4F01_D7CA_41D0_80812518610D.jpg",
          "paddingBottom": 0,
          "paddingTop": 0,
          "width": "100%",
          "class": "Image",
          "shadow": false,
          "scaleMode": "fit_to_height",
          "backgroundOpacity": 0,
          "top": "0%",
          "horizontalAlign": "center",
          "borderRadius": 0,
          "minHeight": 1,
          "id": "Image_41194F8C_4F01_D7CA_41D0_80812518610D",
          "borderSize": 0,
          "paddingLeft": 0,
          "data": {
           "name": "Image"
          },
          "minWidth": 1,
          "left": "0%"
         }
        ],
        "backgroundColorDirection": "vertical"
       }
      ],
      "backgroundColorDirection": "vertical"
     }
    ],
    "backgroundColorDirection": "vertical"
   }
  ],
  "backgroundColorDirection": "vertical"
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "100%",
  "verticalAlign": "top",
  "backgroundColor": [
   "#000000"
  ],
  "propagateClick": false,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "paddingTop": 0,
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "class": "Container",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "backgroundOpacity": 0.7,
  "width": "100%",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "horizontalAlign": "left",
  "visible": false,
  "top": "0%",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_B18B0BF2_A688_648E_41D5_25CC213E30D8",
  "borderSize": 0,
  "paddingLeft": 0,
  "layout": "absolute",
  "data": {
   "name": "--- FLOORPLAN"
  },
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "minWidth": 1,
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "overflow": "scroll",
    "paddingRight": 30,
    "verticalAlign": "top",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "propagateClick": false,
    "scrollBarWidth": 10,
    "paddingBottom": 30,
    "paddingTop": 30,
    "creationPolicy": "delayed",
    "scrollBarColor": "#000000",
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "backgroundOpacity": 1,
    "scrollBarOpacity": 0.5,
    "contentOpaque": false,
    "horizontalAlign": "left",
    "top": "12%",
    "borderRadius": 0,
    "minHeight": 1,
    "id": "Container_BEFE9313_A688_258E_4198_33F6C1D0A579",
    "scrollBarVisible": "rollOver",
    "bottom": "12%",
    "borderSize": 0,
    "paddingLeft": 30,
    "layout": "absolute",
    "data": {
     "name": "Container global"
    },
    "left": "15%",
    "minWidth": 1,
    "right": "15%",
    "children": [
     {
      "progressBorderSize": 0,
      "toolTipBorderColor": "#000000",
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowOpacity": 1,
      "paddingRight": 0,
      "playbackBarLeft": 0,
      "playbackBarHeadHeight": 15,
      "progressBorderRadius": 0,
      "toolTipShadowSpread": 0,
      "paddingBottom": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBorderColor": "#000000",
      "transitionDuration": 500,
      "toolTipFontWeight": "normal",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipPaddingTop": 4,
      "toolTipOpacity": 1,
      "playbackBarHeadOpacity": 1,
      "toolTipTextShadowVerticalLength": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "progressBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "playbackBarBottom": 0,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "transitionMode": "blending",
      "minHeight": 1,
      "toolTipTextShadowOpacity": 0.39,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipBorderRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarHeight": 10,
      "playbackBarHeadWidth": 6,
      "paddingLeft": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "toolTipTextShadowBlurRadius": 3,
      "minWidth": 1,
      "playbackBarRight": 0,
      "progressBarBorderSize": 0,
      "playbackBarProgressBorderSize": 0,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderRadius": 0,
      "toolTipFontStyle": "normal",
      "playbackBarHeadShadowHorizontalLength": 0,
      "toolTipFontSize": 12,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadBorderRadius": 0,
      "playbackBarProgressBorderColor": "#000000",
      "toolTipShadowColor": "#333333",
      "propagateClick": false,
      "toolTipTextShadowColor": "#000000",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "paddingTop": 0,
      "progressLeft": 0,
      "class": "ViewerArea",
      "shadow": false,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarBorderSize": 0,
      "playbackBarBackgroundOpacity": 1,
      "progressBottom": 2,
      "playbackBarHeadShadowVerticalLength": 0,
      "progressHeight": 10,
      "toolTipPaddingBottom": 4,
      "top": "0%",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "borderRadius": 0,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "id": "MapViewer",
      "progressRight": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "bottom": "0%",
      "progressOpacity": 1,
      "toolTipBorderSize": 5,
      "toolTipPaddingLeft": 6,
      "playbackBarHeadShadow": true,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadowColor": "#000000",
      "toolTipDisplayTime": 600,
      "borderSize": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarOpacity": 1,
      "toolTipFontColor": "#606060",
      "right": "0%",
      "progressBarOpacity": 1,
      "toolTipFontFamily": "Arial",
      "left": "0%",
      "toolTipPaddingRight": 6
     },
     {
      "iconURL": "skin/IconButton_B0C17821_A688_238B_41CD_44D1BEEB90B0.png",
      "mode": "push",
      "paddingRight": 0,
      "height": 24,
      "verticalAlign": "middle",
      "width": 24,
      "propagateClick": false,
      "rollOverIconURL": "skin/IconButton_B0C17821_A688_238B_41CD_44D1BEEB90B0_rollover.png",
      "paddingBottom": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "maxHeight": 24,
      "maxWidth": 24,
      "click": "this.setComponentVisibility(this.Container_B18B0BF2_A688_648E_41D5_25CC213E30D8, false, 0, null, null, false)",
      "backgroundOpacity": 0,
      "shadow": false,
      "top": 0,
      "cursor": "hand",
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "IconButton_B0C17821_A688_238B_41CD_44D1BEEB90B0",
      "paddingLeft": 0,
      "borderSize": 0,
      "transparencyActive": true,
      "data": {
       "name": "X"
      },
      "minWidth": 1,
      "right": 0
     }
    ],
    "backgroundColorDirection": "vertical"
   }
  ],
  "backgroundColorDirection": "vertical"
 },
 {
  "paddingRight": 0,
  "verticalAlign": "middle",
  "propagateClick": false,
  "height": "20.455%",
  "url": "Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE.png",
  "paddingBottom": 0,
  "paddingTop": 0,
  "width": "59.105%",
  "class": "Image",
  "maxHeight": 144,
  "maxWidth": 753,
  "scaleMode": "fit_inside",
  "backgroundOpacity": 0,
  "shadow": false,
  "top": "1.96%",
  "horizontalAlign": "center",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Image_961ABDD5_98BA_8209_41E0_28AC8024B3EE",
  "borderSize": 0,
  "paddingLeft": 0,
  "data": {
   "name": "T\u00edtulo"
  },
  "minWidth": 1,
  "left": "0.05%"
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailList_CD3A365F_C284_BA7C_41C6_2F541D184CA9_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_572D056F_5CF4_872B_41B8_80B17D78415E].forEach(function(component) { component.set('visible', false); }) }",
 "overflow": "visible",
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "height": "100%",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "creationPolicy": "delayed",
 "scrollBarColor": "#000000",
 "class": "Player",
 "shadow": false,
 "scrollBarMargin": 2,
 "gap": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "buttonToggleFullscreen": "this.IconButton_572D056F_5CF4_872B_41B8_80B17D78415E",
 "desktopMipmappingEnabled": true,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "id": "rootPlayer",
 "borderSize": 0,
 "minHeight": 20,
 "paddingLeft": 0,
 "vrPolyfillScale": 1,
 "backgroundPreloadEnabled": true,
 "data": {
  "name": "Player20898"
 },
 "minWidth": 20,
 "buttonToggleMute": "this.IconButton_572E734F_5CF3_836C_41CC_7625AC2A5A7D",
 "mobileMipmappingEnabled": true,
 "layout": "absolute",
 "scripts": {
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "existsKey": function(key){  return key in window; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "registerKey": function(key, value){  window[key] = value; },
  "unregisterKey": function(key){  delete window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getKey": function(key){  return window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); }
 }
})