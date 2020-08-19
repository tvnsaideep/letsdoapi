define({
    "api": [{
            "group": "friends",
            "version": "1.0.0",
            "type": "get",
            "url": "/api/v1/friends/accept/friend/request",
            "title": "api for Accepting Friend Request.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "senderId",
                            "description": "<p>Id of the Sender. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "senderName",
                            "description": "<p>Name of the Sender. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "recieverId",
                            "description": "<p>Id of the Reciever(Login User). (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "recieverName",
                            "description": "<p>Name of the Reciever(Login User). (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Accepted Friend Request\",\n    \"status\": 200,\n    \"data\": null\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/friend.js",
            "groupTitle": "friends",
            "name": "GetApiV1FriendsAcceptFriendRequest"
        },
        {
            "group": "friends",
            "version": "1.0.0",
            "type": "get",
            "url": "/api/v1/friends/cancel/friend/request",
            "title": "api to Cancel Friend Request.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "senderId",
                            "description": "<p>Id of the Sender(Login User). (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "senderName",
                            "description": "<p>Name of the Sender(Login User). (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "recieverId",
                            "description": "<p>Id of the Reciever. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "recieverName",
                            "description": "<p>Name of the Reciever. (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Canceled Friend Request\",\n    \"status\": 200,\n    \"data\": null\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/friend.js",
            "groupTitle": "friends",
            "name": "GetApiV1FriendsCancelFriendRequest"
        },
        {
            "group": "friends",
            "version": "1.0.0",
            "type": "get",
            "url": "/api/v1/friends/reject/friend/request",
            "title": "api for Rejecting Friend Request.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "senderId",
                            "description": "<p>Id of the Sender. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "senderName",
                            "description": "<p>Name of the Sender. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "recieverId",
                            "description": "<p>Id of the Reciever(Login User). (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "recieverName",
                            "description": "<p>Name of the Reciever(Login User). (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Rejected Friend Request\",\n    \"status\": 200,\n    \"data\": null\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/friend.js",
            "groupTitle": "friends",
            "name": "GetApiV1FriendsRejectFriendRequest"
        },
        {
            "group": "friends",
            "version": "1.0.0",
            "type": "get",
            "url": "/api/v1/friends/send/friend/request",
            "title": "api for Sending Friend Request.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "senderId",
                            "description": "<p>Id of the Sender. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "senderName",
                            "description": "<p>Name of the Sender. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "recieverId",
                            "description": "<p>Id of the Reciever. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "recieverName",
                            "description": "<p>Name of the Reciever. (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Friend Request Sent\",\n    \"status\": 200,\n    \"data\": null\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/friend.js",
            "groupTitle": "friends",
            "name": "GetApiV1FriendsSendFriendRequest"
        },
        {
            "group": "friends",
            "version": "1.0.0",
            "type": "get",
            "url": "/api/v1/friends/unfriend/user",
            "title": "api to Unfriend user.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "senderId",
                            "description": "<p>Id of the Sender. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "senderName",
                            "description": "<p>Name of the Sender. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "recieverId",
                            "description": "<p>Id of the Reciever(Login User). (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "recieverName",
                            "description": "<p>Name of the Reciever(Login User). (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Canceled Friend Request\",\n    \"status\": 200,\n    \"data\": null\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/friend.js",
            "groupTitle": "friends",
            "name": "GetApiV1FriendsUnfriendUser"
        },
        {
            "group": "friends",
            "version": "1.0.0",
            "type": "get",
            "url": "/api/v1/friends/view/friend/request/recieved/:userId",
            "title": "api for Getting all friends request Recieved.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "UserId",
                            "description": "<p>Id of the user. (header params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"All Recieved Requsts Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5bb7952dfb58ea1178205904\",\n            \"friendRequestRecieved\": [\n                {\n                    \"friendId\": \"SJ70bQL97\",\n                    \"friendName\": \"Saiteja tesham \",\n                    \"_id\": \"5bb8a427bf63d9156cae71e7\"\n                }\n            ]\n        }\n    ]\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/friend.js",
            "groupTitle": "friends",
            "name": "GetApiV1FriendsViewFriendRequestRecievedUserid"
        },
        {
            "group": "friends",
            "version": "1.0.0",
            "type": "get",
            "url": "/api/v1/friends/view/friend/request/sent/:userId",
            "title": "api for Getting all friends request sent.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "userId",
                            "description": "<p>Id of the user. (header params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"All Sent Requsts Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"8bb8a1sd7e0dc6148cbf4bc5\",\n            \"friendRequestSent\": [\n                {\n                    \"friendId\": \"BEsKHfS97\",\n                    \"friendName\": \"Saideep Tanguturi\",\n                    \"_id\": \"8bb8a27b4f63d9156cae71e6\"\n                }\n            ]\n        }\n    ]\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/friend.js",
            "groupTitle": "friends",
            "name": "GetApiV1FriendsViewFriendRequestSentUserid"
        },
        {
            "group": "history",
            "version": "1.0.0",
            "type": "post",
            "url": "/api/v1/history/addHistory",
            "title": "api to Add history.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "listId",
                            "description": "<p>Id of the list. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "itemId",
                            "description": "<p>Id of the Item. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "subItemId",
                            "description": "<p>Id of the Sub Item. (body params) (Optional)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "key",
                            "description": "<p>Action of the history. (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"History Added\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5bc88c95ecfe471824759870\",\n            \"createdOn\": \"2018-10-18T13:37:25.000Z\",\n            \"itemValues\": null,\n            \"key\": \"Item Add\",\n            \"subItemId\": \"undefined\",\n            \"itemId\": \"S1RqhZ8jQ\",\n            \"listId\": \"SkHeBWUo7\",\n            \"historyId\": \"B1xCqnWIiX\",\n            \"__v\": 0\n        }\n    ]\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/history.js",
            "groupTitle": "history",
            "name": "PostApiV1HistoryAddhistory"
        },
        {
            "group": "history",
            "version": "1.0.0",
            "type": "post",
            "url": "/api/v1/history/deleteHistory",
            "title": "api to Delete history(Latest Object will be deleted).",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "listId",
                            "description": "<p>Id of the List. (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"History Deleted\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5bc88c95ecfe471824759870\",\n            \"createdOn\": \"2018-10-18T13:37:25.000Z\",\n            \"itemValues\": null,\n            \"key\": \"Item Add\",\n            \"subItemId\": \"undefined\",\n            \"itemId\": \"S1RqhZ8jQ\",\n            \"listId\": \"SkHeBWUo7\",\n            \"historyId\": \"B1xCqnWIiX\",\n            \"__v\": 0\n        }\n    ]\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/history.js",
            "groupTitle": "history",
            "name": "PostApiV1HistoryDeletehistory"
        },
        {
            "group": "items",
            "version": "1.0.0",
            "type": "get",
            "url": "/api/v1/items/:itemId/details",
            "title": "api for getting item details.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "itemId",
                            "description": "<p>itemId of the item. (header params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Item Found\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5bb8839db223e91708c6f19d\",\n        \"subItems\": [],\n        \"itemModifierName\": \"Saideep Tanguturi\",\n        \"itemModifierId\": \"SkBEHfS97\",\n        \"itemModifiedOn\": \"2018-10-06T09:44:54.000Z\",\n        \"itemCreatedOn\": \"2018-10-06T09:42:53.000Z\",\n        \"itemCreatorName\": \"Saideep Tanguturi\",\n        \"itemCreatorId\": \"SkBEHfS97\",\n        \"itemName\": \"Updated Test Item\",\n        \"itemId\": \"r1Bim-Lqm\",\n        \"listId\": \"SknkJ-UcX\",\n        \"__v\": 0\n    }\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/item.js",
            "groupTitle": "items",
            "name": "GetApiV1ItemsItemidDetails"
        },
        {
            "group": "items",
            "version": "1.0.0",
            "type": "get",
            "url": "/api/v1/items/subItems/:itemId/details",
            "title": "api for getting sub item details.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "itemId",
                            "description": "<p>Id of the Item. (header params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "subItemId",
                            "description": "<p>Id of the Sub Item. (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Item Found\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5bb8839db223e91708c6f19d\",\n        \"subItems\": [],\n        \"itemModifierName\": \"Saideep Tanguturi\",\n        \"itemModifierId\": \"SkBEHfS97\",\n        \"itemModifiedOn\": \"2018-10-06T09:44:54.000Z\",\n        \"itemCreatedOn\": \"2018-10-06T09:42:53.000Z\",\n        \"itemCreatorName\": \"Saideep Tanguturi\",\n        \"itemCreatorId\": \"SkBEHfS97\",\n        \"itemName\": \"Updated Test Item\",\n        \"itemId\": \"r1Bim-Lqm\",\n        \"listId\": \"SknkJ-UcX\",\n        \"__v\": 0\n    }\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/item.js",
            "groupTitle": "items",
            "name": "GetApiV1ItemsSubitemsItemidDetails"
        },
        {
            "group": "items",
            "version": "1.0.0",
            "type": "get",
            "url": "/api/v1/items/view/all/items/:userId",
            "title": "api for Getting all items of User.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "listId",
                            "description": "<p>userId of the user. (query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Items Found and Listed\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5bb8839db223e91708c6f19d\",\n            \"subItems\": [],\n            \"itemModifierName\": \"Saideep Tanguturi\",\n            \"itemModifierId\": \"SkBEHfS97\",\n            \"itemModifiedOn\": \"2018-10-06T09:44:54.000Z\",\n            \"itemCreatedOn\": \"2018-10-06T09:42:53.000Z\",\n            \"itemCreatorName\": \"Saideep Tanguturi\",\n            \"itemCreatorId\": \"SkBEHfS97\",\n            \"itemName\": \"Updated Test Item\",\n            \"itemId\": \"r1Bim-Lqm\",\n            \"listId\": \"SknkJ-UcX\",\n            \"__v\": 0\n        }\n    ]\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/item.js",
            "groupTitle": "items",
            "name": "GetApiV1ItemsViewAllItemsUserid"
        },
        {
            "group": "items",
            "version": "1.0.0",
            "type": "post",
            "url": "/api/v1/items/additem",
            "title": "api to Add item.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "listId",
                            "description": "<p>Id of the List. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "itemName",
                            "description": "<p>Name of the item. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "itemCreatorId",
                            "description": "<p>User Id of the user creating todo. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "itemCreatorName",
                            "description": "<p>User Name of the user creating todo. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "itemModifierId",
                            "description": "<p>User Id of the user modifying todo. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "itemModifierName",
                            "description": "<p>User Name of the user modifying todo. (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Item Created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5bb8839db223e91708c6f19d\",\n        \"subItems\": [],\n        \"itemModifierName\": \"Saideep Tanguturi\",\n        \"itemModifierId\": \"SkBEHfS97\",\n        \"itemModifiedOn\": \"2018-10-06T09:42:53.000Z\",\n        \"itemCreatedOn\": \"2018-10-06T09:42:53.000Z\",\n        \"itemCreatorName\": \"Saideep Tanguturi\",\n        \"itemCreatorId\": \"SkBEHfS97\",\n        \"itemName\": \"Test Item\",\n        \"itemId\": \"r1Bim-Lqm\",\n        \"listId\": \"SknkJ-UcX\"\n    }\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/item.js",
            "groupTitle": "items",
            "name": "PostApiV1ItemsAdditem"
        },
        {
            "group": "items",
            "version": "1.0.0",
            "type": "post",
            "url": "/api/v1/items/:itemId/delete",
            "title": "api to Delete item.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "itemId",
                            "description": "<p>Id of the item to be deleted. (query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the Item successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/item.js",
            "groupTitle": "items",
            "name": "PostApiV1ItemsItemidDelete"
        },
        {
            "group": "items",
            "version": "1.0.0",
            "type": "put",
            "url": "/api/v1/items/:itemId/addSubItem",
            "title": "api to Update item Details : Add Sub Item.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "itemId",
                            "description": "<p>Id of the Item. (header params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "subItemName",
                            "description": "<p>Name of the Sub item. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "subItemCreatorId",
                            "description": "<p>User Id of the user creating todo sub item. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "subItemCreatorName",
                            "description": "<p>User Name of the user creating todo sub item. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "subItemModifierId",
                            "description": "<p>User Id of the user modifying todo sub item. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "subItemModifierName",
                            "description": "<p>User Name of the user modifying todo sub item. (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Item details Updated : Sub Item Added\",\n    \"status\": 200,\n    \"data\": null\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/item.js",
            "groupTitle": "items",
            "name": "PutApiV1ItemsItemidAddsubitem"
        },
        {
            "group": "items",
            "version": "1.0.0",
            "type": "put",
            "url": "/api/v1/items/:itemId/deleteSubItem",
            "title": "api to Update item Details : Delete Sub Item.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "itemId",
                            "description": "<p>Id of the Item. (header params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "subItemId",
                            "description": "<p>Id of the Sub Item. (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Item details Updated : Sub Item Deleted\",\n    \"status\": 200,\n    \"data\": null\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/item.js",
            "groupTitle": "items",
            "name": "PutApiV1ItemsItemidDeletesubitem"
        },
        {
            "group": "items",
            "version": "1.0.0",
            "type": "put",
            "url": "/api/v1/items/:itemId/updateitem",
            "title": "api to Update item Details.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "itemName",
                            "description": "<p>Name of the item. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "itemModifierId",
                            "description": "<p>User Id of the user modifying todo. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "itemModifierName",
                            "description": "<p>User Name of the user modifying todo. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "itemDone",
                            "description": "<p>yes/no to make item done/undone. (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Item details Updated\",\n    \"status\": 200,\n    \"data\": null\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/item.js",
            "groupTitle": "items",
            "name": "PutApiV1ItemsItemidUpdateitem"
        },
        {
            "group": "items",
            "version": "1.0.0",
            "type": "put",
            "url": "/api/v1/items/:itemId/updateSubItem",
            "title": "api to Update item Details : Update Sub Item.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "itemId",
                            "description": "<p>Id of the Item. (header params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "subItemId",
                            "description": "<p>Id of the Sub Item. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "subItemName",
                            "description": "<p>Name of the Sub item. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "subItemModifierId",
                            "description": "<p>User Id of the user modifying todo sub item. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "subItemDone",
                            "description": "<p>yes/no yes while completing todo sub item and no to undone sub item. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "subItemModifierName",
                            "description": "<p>User Name of the user modifying todo sub item. (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Item details Updated : Sub Item Updated\",\n    \"status\": 200,\n    \"data\": null\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/item.js",
            "groupTitle": "items",
            "name": "PutApiV1ItemsItemidUpdatesubitem"
        },
        {
            "group": "lists",
            "version": "1.0.0",
            "type": "get",
            "url": "/api/v1/lists/:listId/details",
            "title": "api for getting List details.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "listId",
                            "description": "<p>listId of the List. (query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"List Found\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5bb87ee3625e5006d41f786d\",\n        \"listModifiedOn\": \"2018-10-06T09:26:55.000Z\",\n        \"listCreatedOn\": \"2018-10-06T09:22:43.000Z\",\n        \"listMode\": \"private\",\n        \"listModifierName\": \"Saideep Tanguturi\",\n        \"listModifierId\": \"SkBEHfS97\",\n        \"listCreatorName\": \"Saideep Tanguturi\",\n        \"listCreatorId\": \"SkBEHfS97\",\n        \"listName\": \"Updated Test List\",\n        \"listId\": \"SknkJ-UcX\",\n        \"__v\": 0\n    }\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/list.js",
            "groupTitle": "lists",
            "name": "GetApiV1ListsListidDetails"
        },
        {
            "group": "lists",
            "version": "1.0.0",
            "type": "get",
            "url": "/api/v1/lists/view/all/lists/:userId",
            "title": "api for Getting all Lists of User.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "userId",
                            "description": "<p>userId of the user. (query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Lists Found and Listed\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5bb87ee3625e5006d41f786d\",\n            \"listModifiedOn\": \"2018-10-06T09:26:55.000Z\",\n            \"listCreatedOn\": \"2018-10-06T09:22:43.000Z\",\n            \"listMode\": \"private\",\n            \"listModifierName\": \"Saideep Tanguturi\",\n            \"listModifierId\": \"SkBEHfS97\",\n            \"listCreatorName\": \"Saideep Tanguturi\",\n            \"listCreatorId\": \"SkBEHfS97\",\n            \"listName\": \"Updated Test List\",\n            \"listId\": \"SknkJ-UcX\",\n            \"__v\": 0\n        }\n    ]\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/list.js",
            "groupTitle": "lists",
            "name": "GetApiV1ListsViewAllListsUserid"
        },
        {
            "group": "lists",
            "version": "1.0.0",
            "type": "get",
            "url": "/api/v1/lists/view/all/lists/:userId",
            "title": "api for Getting all Lists of User.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "userIds",
                            "description": "<p>userId of the users. (Body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Lists Found and Listed\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5bb87ee3625e5006d41f786d\",\n            \"listModifiedOn\": \"2018-10-06T09:26:55.000Z\",\n            \"listCreatedOn\": \"2018-10-06T09:22:43.000Z\",\n            \"listMode\": \"public\",\n            \"listModifierName\": \"Saideep Tanguturi\",\n            \"listModifierId\": \"SkBEHfS97\",\n            \"listCreatorName\": \"Saideep Tanguturi\",\n            \"listCreatorId\": \"SkBEHfS97\",\n            \"listName\": \"Updated Test List\",\n            \"listId\": \"SknkJ-UcX\",\n            \"__v\": 0\n        }\n    ]\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/list.js",
            "groupTitle": "lists",
            "name": "GetApiV1ListsViewAllListsUserid"
        },
        {
            "group": "lists",
            "version": "1.0.0",
            "type": "post",
            "url": "/api/v1/lists/addList",
            "title": "api to Add List.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "listName",
                            "description": "<p>Name of the List. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "listCreatorId",
                            "description": "<p>User Id of the user creating todo. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "listCreatorName",
                            "description": "<p>User Name of the user creating todo. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "listModifierId",
                            "description": "<p>User Id of the user modifying todo. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "listModifierName",
                            "description": "<p>User Name of the user modifying todo. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "listMode",
                            "description": "<p>Mode of the Todo. (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{ \n    \"error\": false,\n    \"message\": \"List Created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5bb87ee3625e5006d41f786d\",\n        \"listModifiedOn\": \"2018-10-06T09:22:43.000Z\",\n        \"listCreatedOn\": \"2018-10-06T09:22:43.000Z\",\n        \"listMode\": \"private\",\n        \"listModifierName\": \"Saideep Tanguturi\",\n        \"listModifierId\": \"SkBEHfS97\",\n        \"listCreatorName\": \"Saideep Tanguturi\",\n        \"listCreatorId\": \"SkBEHfS97\",\n        \"listName\": \"Test List\",\n        \"listId\": \"SknkJ-UcX\"\n    }\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/list.js",
            "groupTitle": "lists",
            "name": "PostApiV1ListsAddlist"
        },
        {
            "group": "lists",
            "version": "1.0.0",
            "type": "post",
            "url": "/api/v1/lists/:ListId/delete",
            "title": "api to Delete List.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "ListId",
                            "description": "<p>ListId of the List to be deleted. (query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the List successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/list.js",
            "groupTitle": "lists",
            "name": "PostApiV1ListsListidDelete"
        },
        {
            "group": "lists",
            "version": "1.0.0",
            "type": "put",
            "url": "/api/v1/lists/:listId/updateList",
            "title": "api to Update List Details.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "listId",
                            "description": "<p>Id of the List. (query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "listName",
                            "description": "<p>Name of the List. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "listModifierId",
                            "description": "<p>User Id of the user modifying todo. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "listModifierName",
                            "description": "<p>User Name of the user modifying todo. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "listMode",
                            "description": "<p>Mode of the Todo. (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"List details Updated\",\n    \"status\": 200,\n    \"data\": null\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/list.js",
            "groupTitle": "lists",
            "name": "PutApiV1ListsListidUpdatelist"
        },
        {
            "group": "users",
            "version": "1.0.0",
            "type": "get",
            "url": "/api/v1/users/:userId/details",
            "title": "api for getting user details.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "userId",
                            "description": "<p>userId of the user. (query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"createdOn\": \"2018-09-12T13:42:58.000Z\",\n        \"emailVerified\": \"Yes\",\n        \"validationToken\": \"Null\",\n        \"email\": \"tvnsaaideep@gmail.com\",\n        \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa\",\n        \"mobileNumber\": \"91 7840962887\",\n        \"countryName\": \"India\",\n        \"lastName\": \"tvn\",\n        \"firstName\": \"saideep\",\n        \"userId\": \"B1cyuc8OX\"\n    }\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/user.js",
            "groupTitle": "users",
            "name": "GetApiV1UsersUseridDetails"
        },
        {
            "group": "users",
            "version": "1.0.0",
            "type": "get",
            "url": "/api/v1/users/view/all",
            "title": "api for Getting all users.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                        "group": "Parameter",
                        "type": "string",
                        "optional": false,
                        "field": "authToken",
                        "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
                    }]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"createdOn\": \"2018-09-12T13:42:58.000Z\",\n            \"emailVerified\": \"Yes\",\n            \"validationToken\": \"Null\",\n            \"email\": \"tvnsaaideep@gmail.com\",\n            \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa\",\n            \"mobileNumber\": \"91 7840962887\",\n            \"countryName\": \"India\",\n            \"lastName\": \"tvn\",\n            \"firstName\": \"saideep\",\n            \"userId\": \"B1cyuc8OX\"\n        }\n    ]\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/user.js",
            "groupTitle": "users",
            "name": "GetApiV1UsersViewAll"
        },
        {
            "group": "users",
            "version": "1.0.0",
            "type": "post",
            "url": "/api/v1/users/changePassword",
            "title": "api for Changing Password.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "userId",
                            "description": "<p>userId of the user. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "oldPassword",
                            "description": "<p>old Password of the user. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "newPassword",
                            "description": "<p>new Password of the user. (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Password Update Successfully\",\n    \"status\": 200,\n    \"data\": \"None\"\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/user.js",
            "groupTitle": "users",
            "name": "PostApiV1UsersChangepassword"
        },
        {
            "group": "users",
            "version": "1.0.0",
            "type": "post",
            "url": "/api/v1/users/login",
            "title": "api for Login.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "email",
                            "description": "<p>email of the user. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "password",
                            "description": "<p>password of the user. (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IkJKc0NubExxWCIsImlhdCI6MTUzODgxNzIzNDUzNCwiZXhwIjoxNTM4OTAzNjM0LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJsZXRzTWVldEFwcCIsImRhdGEiOnsiZnJpZW5kUmVxdWVzdFNlbnQiOltdLCJmcmllbmRSZXF1ZXN0UmVjaWV2ZWQiOltdLCJmcmllbmRzIjpbXSwiZW1haWxWZXJpZmllZCI6IlllcyIsInZhbGlkYXRpb25Ub2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpxZDNScFpDSTZJa0o1ZFdaTFRWTTFOeUlzSW1saGRDSTZNVFV6T0RjMU9Ea3lOemszTWl3aVpYaHdJam94TlRNNE9EUTFNekkzTENKemRXSWlPaUpoZFhSb1ZHOXJaVzRpTENKcGMzTWlPaUpzWlhSelRXVmxkRUZ3Y0NJc0ltUmhkR0VpT25zaVgybGtJam9pTldKaU56azFNbVJtWWpVNFpXRXhNVGM0TWpBMU9UQTBJaXdpWDE5Mklqb3dMQ0pqY21WaGRHVmtUMjRpT2lJeU1ERTRMVEV3TFRBMVZERTJPalExT2pNekxqQXdNRm9pTENKbGJXRnBiRlpsY21sbWFXVmtJam9pV1dWeklpd2lkbUZzYVdSaGRHbHZibFJ2YTJWdUlqb2lJaXdpWlcxaGFXd2lPaUp6YUdGb2NuVnJhSE5oZVhsbFpDNTBaV05vUUdkdFlXbHNMbU52YlNJc0luQmhjM04zYjNKa0lqb2lKREpoSkRFd0pGWXpZbXRLVjBKbFZHOXphelYwTlM0d2VreEVaQzVJZUhoaVMzY3djSGxTUTBkNE5rVTFjMlJpTDBZNWVXdEZMekJGVmtwbElpd2ljM1JoZEhWeklqb2liMlptYkdsdVpTSXNJbWx6UVdSdGFXNGlPaUoxYm1SbFptbHVaV1FpTENKdGIySnBiR1ZPZFcxaVpYSWlPaUk1TVNBM09EUXdPVFl5T0RnM0lpd2lZMjkxYm5SeWVVNWhiV1VpT2lKSlRpSXNJblZ6WlhKT1lXMWxJam9pZFc1a1pXWnBibVZrSWl3aWJHRnpkRTVoYldVaU9pSlRZWGw1WldRaUxDSm1hWEp6ZEU1aGJXVWlPaUpUYUdGb2NuVnJhQ0lzSW5WelpYSkpaQ0k2SWxOclFrVklabE01TnlKOWZRLm1ocWs0Y2JzX1gyX2dieWtvUExydlJTU2drOHF4elRLLVBtU2V4ZGZ4V3ciLCJlbWFpbCI6InNoYWhydWtoc2F5eWVkLnRlY2hAZ21haWwuY29tIiwic3RhdHVzIjoib2ZmbGluZSIsImlzQWRtaW4iOiJ1bmRlZmluZWQiLCJtb2JpbGVOdW1iZXIiOiI5MSA3ODQwOTYyODg3IiwiY291bnRyeU5hbWUiOiJJTiIsInVzZXJOYW1lIjoidW5kZWZpbmVkIiwibGFzdE5hbWUiOiJTYXl5ZWQiLCJmaXJzdE5hbWUiOiJTaGFocnVraCIsInVzZXJJZCI6IlNrQkVIZlM5NyJ9fQ.-du1nE9FDeCDVf7fA7JjGVIPcYY7hb9TxvGLH6fYxd0\",\n        \"userDetails\": {\n            \"friendRequestSent\": [],\n            \"friendRequestRecieved\": [],\n            \"friends\": [],\n            \"emailVerified\": \"Yes\",\n            \"validationToken\": \"\",\n            \"email\": \"tvnsaideep@gmail.com\",\n            \"mobileNumber\": \"9154706*72\",\n            \"countryName\": \"IN\",\n            \"lastName\": \"Saideep\",\n            \"firstName\": \"Tanguturi\",\n            \"userId\": \"SkBEHfS97\"\n    }\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/user.js",
            "groupTitle": "users",
            "name": "PostApiV1UsersLogin"
        },
        {
            "group": "users",
            "version": "1.0.0",
            "type": "post",
            "url": "/api/v1/users/resetPassword",
            "title": "api for Password Reset.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                        "group": "Parameter",
                        "type": "string",
                        "optional": false,
                        "field": "email",
                        "description": "<p>email of the user. (body params) (required)</p>"
                    }]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Password reset instructions sent successfully\",\n    \"status\": 200,\n    \"data\": None\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/user.js",
            "groupTitle": "users",
            "name": "PostApiV1UsersResetpassword"
        },
        {
            "group": "users",
            "version": "1.0.0",
            "type": "post",
            "url": "/api/v1/users/signup",
            "title": "api for Registering User.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "firstName",
                            "description": "<p>First Name of the user. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "lastname",
                            "description": "<p>Last Name of the user. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "countryName",
                            "description": "<p>country Name of the user. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "mobileNumber",
                            "description": "<p>Mobile Number of the user. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "email",
                            "description": "<p>email of the user. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "password",
                            "description": "<p>password of the user. (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n\"error\": false,\n\"message\": \"User Created\",\n\"status\": 200,\n\"data\": [\n    {\n        \"createdOn\": \"2018-09-12T13:42:58.000Z\",\n        \"emailVerified\": \"Yes\",\n        \"validationToken\": \"Null\",\n        \"email\": \"saiteja@gmail.com\",\n        \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa\",\n        \"mobileNumber\": \"91 7840962887\",\n        \"countryName\": \"India\",\n        \"lastName\": \"Sai\",\n        \"firstName\": \"teja\",\n        \"userId\": \"B1cyuc8OX\"\n    }\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/user.js",
            "groupTitle": "users",
            "name": "PostApiV1UsersSignup"
        },
        {
            "group": "users",
            "version": "1.0.0",
            "type": "post",
            "url": "/api/v1/users/:userId/delete",
            "title": "api to Delete User.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "userId",
                            "description": "<p>userId of the user. (query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the user successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"createdOn\": \"2018-09-12T13:42:58.000Z\",\n        \"emailVerified\": \"Yes\",\n        \"validationToken\": \"Null\",\n        \"email\": \"saideeptv@gmail.com\",\n        \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa\",\n        \"mobileNumber\": \"91 7840962887\",\n        \"countryName\": \"India\",\n        \"lastName\": \"Saideep\",\n        \"firstName\": \"tvn\",\n        \"userId\": \"B1cyuc8OX\"\n    }\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/user.js",
            "groupTitle": "users",
            "name": "PostApiV1UsersUseridDelete"
        },
        {
            "group": "users",
            "version": "1.0.0",
            "type": "post",
            "url": "/api/v1/users/:userId/logout",
            "title": "api to logout from application.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "userId",
                            "description": "<p>userId of the user. (query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/user.js",
            "groupTitle": "users",
            "name": "PostApiV1UsersUseridLogout"
        },
        {
            "group": "users",
            "version": "1.0.0",
            "type": "put",
            "url": "/api/v1/users/updatePassword",
            "title": "api for Updating Password after Reset.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "validationToken",
                            "description": "<p>validationToken of the user recieved on Email. (body params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "password",
                            "description": "<p>new password of the user . (body params) (required)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"Password Update Successfully\",\n    \"status\": 200,\n    \"data\": \"None\"\n    \n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/user.js",
            "groupTitle": "users",
            "name": "PutApiV1UsersUpdatepassword"
        },
        {
            "group": "users",
            "version": "1.0.0",
            "type": "put",
            "url": "/api/v1/users/:userId/edit",
            "title": "api for Updating User Details.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "authToken",
                            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "userId",
                            "description": "<p>userId of the user. (query params) (required)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "firstName",
                            "description": "<p>First Name of the user. (body params) (optional)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "lastname",
                            "description": "<p>Last Name of the user. (body params) (optional)</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "string",
                            "optional": false,
                            "field": "mobileNumber",
                            "description": "<p>Mobile Number of the user. (body params) (optional)</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"User details Updated\",\n    \"status\": 200,\n    \"data\": \"None\"\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/user.js",
            "groupTitle": "users",
            "name": "PutApiV1UsersUseridEdit"
        },
        {
            "group": "users",
            "version": "1.0.0",
            "type": "put",
            "url": "/api/v1/users/verifyEmail",
            "title": "api for Verifying User Email Id.",
            "parameter": {
                "fields": {
                    "Parameter": [{
                        "group": "Parameter",
                        "type": "string",
                        "optional": false,
                        "field": "userId",
                        "description": "<p>userId of the user. (body params) (required)</p>"
                    }]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "object",
                        "optional": false,
                        "field": "myResponse",
                        "description": "<p>shows error status, message, http status code, result.</p>"
                    }]
                },
                "examples": [{
                    "title": "Success-Response:",
                    "content": "{\n    \"error\": false,\n    \"message\": \"User email verified\",\n    \"status\": 200,\n    \"data\": \"None\"\n}",
                    "type": "object"
                }]
            },
            "filename": "app/routes/user.js",
            "groupTitle": "users",
            "name": "PutApiV1UsersVerifyemail"
        }
    ]
});