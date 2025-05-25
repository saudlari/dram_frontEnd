export const DRAM_SALE_METADATA = {
	"deploy": {
		"VM:-": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"main:1": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"ropsten:3": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"rinkeby:4": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"kovan:42": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"goerli:5": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"Custom": {
			"linkReferences": {},
			"autoDeployLib": true
		}
	},
	"data": {
		"bytecode": {
			"functionDebugData": {
				"@_3263": {
					"entryPoint": null,
					"id": 3263,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"@_50": {
					"entryPoint": null,
					"id": 50,
					"parameterSlots": 1,
					"returnSlots": 0
				},
				"@_7080": {
					"entryPoint": null,
					"id": 7080,
					"parameterSlots": 3,
					"returnSlots": 0
				},
				"@_transferOwnership_146": {
					"entryPoint": 328,
					"id": 146,
					"parameterSlots": 1,
					"returnSlots": 0
				},
				"abi_decode_t_contract$_Dram_$7015_fromMemory": {
					"entryPoint": 612,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_decode_t_contract$_IERC20_$1785_fromMemory": {
					"entryPoint": 671,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_decode_t_uint256_fromMemory": {
					"entryPoint": 722,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_decode_tuple_t_contract$_Dram_$7015t_contract$_IERC20_$1785t_uint256_fromMemory": {
					"entryPoint": 742,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 3
				},
				"abi_encode_t_address_to_t_address_fromStack": {
					"entryPoint": 822,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 0
				},
				"abi_encode_tuple_t_address__to_t_address__fromStack_reversed": {
					"entryPoint": 837,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"allocate_unbounded": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 0,
					"returnSlots": 1
				},
				"cleanup_t_address": {
					"entryPoint": 556,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"cleanup_t_contract$_Dram_$7015": {
					"entryPoint": 573,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"cleanup_t_contract$_IERC20_$1785": {
					"entryPoint": 632,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"cleanup_t_uint160": {
					"entryPoint": 525,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"cleanup_t_uint256": {
					"entryPoint": 691,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db": {
					"entryPoint": null,
					"id": null,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b": {
					"entryPoint": 521,
					"id": null,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"validator_revert_t_contract$_Dram_$7015": {
					"entryPoint": 590,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 0
				},
				"validator_revert_t_contract$_IERC20_$1785": {
					"entryPoint": 649,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 0
				},
				"validator_revert_t_uint256": {
					"entryPoint": 700,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 0
				}
			},
			"generatedSources": [
				{
					"ast": {
						"nativeSrc": "0:2900:26",
						"nodeType": "YulBlock",
						"src": "0:2900:26",
						"statements": [
							{
								"body": {
									"nativeSrc": "47:35:26",
									"nodeType": "YulBlock",
									"src": "47:35:26",
									"statements": [
										{
											"nativeSrc": "57:19:26",
											"nodeType": "YulAssignment",
											"src": "57:19:26",
											"value": {
												"arguments": [
													{
														"kind": "number",
														"nativeSrc": "73:2:26",
														"nodeType": "YulLiteral",
														"src": "73:2:26",
														"type": "",
														"value": "64"
													}
												],
												"functionName": {
													"name": "mload",
													"nativeSrc": "67:5:26",
													"nodeType": "YulIdentifier",
													"src": "67:5:26"
												},
												"nativeSrc": "67:9:26",
												"nodeType": "YulFunctionCall",
												"src": "67:9:26"
											},
											"variableNames": [
												{
													"name": "memPtr",
													"nativeSrc": "57:6:26",
													"nodeType": "YulIdentifier",
													"src": "57:6:26"
												}
											]
										}
									]
								},
								"name": "allocate_unbounded",
								"nativeSrc": "7:75:26",
								"nodeType": "YulFunctionDefinition",
								"returnVariables": [
									{
										"name": "memPtr",
										"nativeSrc": "40:6:26",
										"nodeType": "YulTypedName",
										"src": "40:6:26",
										"type": ""
									}
								],
								"src": "7:75:26"
							},
							{
								"body": {
									"nativeSrc": "177:28:26",
									"nodeType": "YulBlock",
									"src": "177:28:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nativeSrc": "194:1:26",
														"nodeType": "YulLiteral",
														"src": "194:1:26",
														"type": "",
														"value": "0"
													},
													{
														"kind": "number",
														"nativeSrc": "197:1:26",
														"nodeType": "YulLiteral",
														"src": "197:1:26",
														"type": "",
														"value": "0"
													}
												],
												"functionName": {
													"name": "revert",
													"nativeSrc": "187:6:26",
													"nodeType": "YulIdentifier",
													"src": "187:6:26"
												},
												"nativeSrc": "187:12:26",
												"nodeType": "YulFunctionCall",
												"src": "187:12:26"
											},
											"nativeSrc": "187:12:26",
											"nodeType": "YulExpressionStatement",
											"src": "187:12:26"
										}
									]
								},
								"name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
								"nativeSrc": "88:117:26",
								"nodeType": "YulFunctionDefinition",
								"src": "88:117:26"
							},
							{
								"body": {
									"nativeSrc": "300:28:26",
									"nodeType": "YulBlock",
									"src": "300:28:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nativeSrc": "317:1:26",
														"nodeType": "YulLiteral",
														"src": "317:1:26",
														"type": "",
														"value": "0"
													},
													{
														"kind": "number",
														"nativeSrc": "320:1:26",
														"nodeType": "YulLiteral",
														"src": "320:1:26",
														"type": "",
														"value": "0"
													}
												],
												"functionName": {
													"name": "revert",
													"nativeSrc": "310:6:26",
													"nodeType": "YulIdentifier",
													"src": "310:6:26"
												},
												"nativeSrc": "310:12:26",
												"nodeType": "YulFunctionCall",
												"src": "310:12:26"
											},
											"nativeSrc": "310:12:26",
											"nodeType": "YulExpressionStatement",
											"src": "310:12:26"
										}
									]
								},
								"name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
								"nativeSrc": "211:117:26",
								"nodeType": "YulFunctionDefinition",
								"src": "211:117:26"
							},
							{
								"body": {
									"nativeSrc": "379:81:26",
									"nodeType": "YulBlock",
									"src": "379:81:26",
									"statements": [
										{
											"nativeSrc": "389:65:26",
											"nodeType": "YulAssignment",
											"src": "389:65:26",
											"value": {
												"arguments": [
													{
														"name": "value",
														"nativeSrc": "404:5:26",
														"nodeType": "YulIdentifier",
														"src": "404:5:26"
													},
													{
														"kind": "number",
														"nativeSrc": "411:42:26",
														"nodeType": "YulLiteral",
														"src": "411:42:26",
														"type": "",
														"value": "0xffffffffffffffffffffffffffffffffffffffff"
													}
												],
												"functionName": {
													"name": "and",
													"nativeSrc": "400:3:26",
													"nodeType": "YulIdentifier",
													"src": "400:3:26"
												},
												"nativeSrc": "400:54:26",
												"nodeType": "YulFunctionCall",
												"src": "400:54:26"
											},
											"variableNames": [
												{
													"name": "cleaned",
													"nativeSrc": "389:7:26",
													"nodeType": "YulIdentifier",
													"src": "389:7:26"
												}
											]
										}
									]
								},
								"name": "cleanup_t_uint160",
								"nativeSrc": "334:126:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "361:5:26",
										"nodeType": "YulTypedName",
										"src": "361:5:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "cleaned",
										"nativeSrc": "371:7:26",
										"nodeType": "YulTypedName",
										"src": "371:7:26",
										"type": ""
									}
								],
								"src": "334:126:26"
							},
							{
								"body": {
									"nativeSrc": "511:51:26",
									"nodeType": "YulBlock",
									"src": "511:51:26",
									"statements": [
										{
											"nativeSrc": "521:35:26",
											"nodeType": "YulAssignment",
											"src": "521:35:26",
											"value": {
												"arguments": [
													{
														"name": "value",
														"nativeSrc": "550:5:26",
														"nodeType": "YulIdentifier",
														"src": "550:5:26"
													}
												],
												"functionName": {
													"name": "cleanup_t_uint160",
													"nativeSrc": "532:17:26",
													"nodeType": "YulIdentifier",
													"src": "532:17:26"
												},
												"nativeSrc": "532:24:26",
												"nodeType": "YulFunctionCall",
												"src": "532:24:26"
											},
											"variableNames": [
												{
													"name": "cleaned",
													"nativeSrc": "521:7:26",
													"nodeType": "YulIdentifier",
													"src": "521:7:26"
												}
											]
										}
									]
								},
								"name": "cleanup_t_address",
								"nativeSrc": "466:96:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "493:5:26",
										"nodeType": "YulTypedName",
										"src": "493:5:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "cleaned",
										"nativeSrc": "503:7:26",
										"nodeType": "YulTypedName",
										"src": "503:7:26",
										"type": ""
									}
								],
								"src": "466:96:26"
							},
							{
								"body": {
									"nativeSrc": "626:51:26",
									"nodeType": "YulBlock",
									"src": "626:51:26",
									"statements": [
										{
											"nativeSrc": "636:35:26",
											"nodeType": "YulAssignment",
											"src": "636:35:26",
											"value": {
												"arguments": [
													{
														"name": "value",
														"nativeSrc": "665:5:26",
														"nodeType": "YulIdentifier",
														"src": "665:5:26"
													}
												],
												"functionName": {
													"name": "cleanup_t_address",
													"nativeSrc": "647:17:26",
													"nodeType": "YulIdentifier",
													"src": "647:17:26"
												},
												"nativeSrc": "647:24:26",
												"nodeType": "YulFunctionCall",
												"src": "647:24:26"
											},
											"variableNames": [
												{
													"name": "cleaned",
													"nativeSrc": "636:7:26",
													"nodeType": "YulIdentifier",
													"src": "636:7:26"
												}
											]
										}
									]
								},
								"name": "cleanup_t_contract$_Dram_$7015",
								"nativeSrc": "568:109:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "608:5:26",
										"nodeType": "YulTypedName",
										"src": "608:5:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "cleaned",
										"nativeSrc": "618:7:26",
										"nodeType": "YulTypedName",
										"src": "618:7:26",
										"type": ""
									}
								],
								"src": "568:109:26"
							},
							{
								"body": {
									"nativeSrc": "739:92:26",
									"nodeType": "YulBlock",
									"src": "739:92:26",
									"statements": [
										{
											"body": {
												"nativeSrc": "809:16:26",
												"nodeType": "YulBlock",
												"src": "809:16:26",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nativeSrc": "818:1:26",
																	"nodeType": "YulLiteral",
																	"src": "818:1:26",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nativeSrc": "821:1:26",
																	"nodeType": "YulLiteral",
																	"src": "821:1:26",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nativeSrc": "811:6:26",
																"nodeType": "YulIdentifier",
																"src": "811:6:26"
															},
															"nativeSrc": "811:12:26",
															"nodeType": "YulFunctionCall",
															"src": "811:12:26"
														},
														"nativeSrc": "811:12:26",
														"nodeType": "YulExpressionStatement",
														"src": "811:12:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "value",
																"nativeSrc": "762:5:26",
																"nodeType": "YulIdentifier",
																"src": "762:5:26"
															},
															{
																"arguments": [
																	{
																		"name": "value",
																		"nativeSrc": "800:5:26",
																		"nodeType": "YulIdentifier",
																		"src": "800:5:26"
																	}
																],
																"functionName": {
																	"name": "cleanup_t_contract$_Dram_$7015",
																	"nativeSrc": "769:30:26",
																	"nodeType": "YulIdentifier",
																	"src": "769:30:26"
																},
																"nativeSrc": "769:37:26",
																"nodeType": "YulFunctionCall",
																"src": "769:37:26"
															}
														],
														"functionName": {
															"name": "eq",
															"nativeSrc": "759:2:26",
															"nodeType": "YulIdentifier",
															"src": "759:2:26"
														},
														"nativeSrc": "759:48:26",
														"nodeType": "YulFunctionCall",
														"src": "759:48:26"
													}
												],
												"functionName": {
													"name": "iszero",
													"nativeSrc": "752:6:26",
													"nodeType": "YulIdentifier",
													"src": "752:6:26"
												},
												"nativeSrc": "752:56:26",
												"nodeType": "YulFunctionCall",
												"src": "752:56:26"
											},
											"nativeSrc": "749:76:26",
											"nodeType": "YulIf",
											"src": "749:76:26"
										}
									]
								},
								"name": "validator_revert_t_contract$_Dram_$7015",
								"nativeSrc": "683:148:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "732:5:26",
										"nodeType": "YulTypedName",
										"src": "732:5:26",
										"type": ""
									}
								],
								"src": "683:148:26"
							},
							{
								"body": {
									"nativeSrc": "913:93:26",
									"nodeType": "YulBlock",
									"src": "913:93:26",
									"statements": [
										{
											"nativeSrc": "923:22:26",
											"nodeType": "YulAssignment",
											"src": "923:22:26",
											"value": {
												"arguments": [
													{
														"name": "offset",
														"nativeSrc": "938:6:26",
														"nodeType": "YulIdentifier",
														"src": "938:6:26"
													}
												],
												"functionName": {
													"name": "mload",
													"nativeSrc": "932:5:26",
													"nodeType": "YulIdentifier",
													"src": "932:5:26"
												},
												"nativeSrc": "932:13:26",
												"nodeType": "YulFunctionCall",
												"src": "932:13:26"
											},
											"variableNames": [
												{
													"name": "value",
													"nativeSrc": "923:5:26",
													"nodeType": "YulIdentifier",
													"src": "923:5:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value",
														"nativeSrc": "994:5:26",
														"nodeType": "YulIdentifier",
														"src": "994:5:26"
													}
												],
												"functionName": {
													"name": "validator_revert_t_contract$_Dram_$7015",
													"nativeSrc": "954:39:26",
													"nodeType": "YulIdentifier",
													"src": "954:39:26"
												},
												"nativeSrc": "954:46:26",
												"nodeType": "YulFunctionCall",
												"src": "954:46:26"
											},
											"nativeSrc": "954:46:26",
											"nodeType": "YulExpressionStatement",
											"src": "954:46:26"
										}
									]
								},
								"name": "abi_decode_t_contract$_Dram_$7015_fromMemory",
								"nativeSrc": "837:169:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "offset",
										"nativeSrc": "891:6:26",
										"nodeType": "YulTypedName",
										"src": "891:6:26",
										"type": ""
									},
									{
										"name": "end",
										"nativeSrc": "899:3:26",
										"nodeType": "YulTypedName",
										"src": "899:3:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value",
										"nativeSrc": "907:5:26",
										"nodeType": "YulTypedName",
										"src": "907:5:26",
										"type": ""
									}
								],
								"src": "837:169:26"
							},
							{
								"body": {
									"nativeSrc": "1072:51:26",
									"nodeType": "YulBlock",
									"src": "1072:51:26",
									"statements": [
										{
											"nativeSrc": "1082:35:26",
											"nodeType": "YulAssignment",
											"src": "1082:35:26",
											"value": {
												"arguments": [
													{
														"name": "value",
														"nativeSrc": "1111:5:26",
														"nodeType": "YulIdentifier",
														"src": "1111:5:26"
													}
												],
												"functionName": {
													"name": "cleanup_t_address",
													"nativeSrc": "1093:17:26",
													"nodeType": "YulIdentifier",
													"src": "1093:17:26"
												},
												"nativeSrc": "1093:24:26",
												"nodeType": "YulFunctionCall",
												"src": "1093:24:26"
											},
											"variableNames": [
												{
													"name": "cleaned",
													"nativeSrc": "1082:7:26",
													"nodeType": "YulIdentifier",
													"src": "1082:7:26"
												}
											]
										}
									]
								},
								"name": "cleanup_t_contract$_IERC20_$1785",
								"nativeSrc": "1012:111:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "1054:5:26",
										"nodeType": "YulTypedName",
										"src": "1054:5:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "cleaned",
										"nativeSrc": "1064:7:26",
										"nodeType": "YulTypedName",
										"src": "1064:7:26",
										"type": ""
									}
								],
								"src": "1012:111:26"
							},
							{
								"body": {
									"nativeSrc": "1187:94:26",
									"nodeType": "YulBlock",
									"src": "1187:94:26",
									"statements": [
										{
											"body": {
												"nativeSrc": "1259:16:26",
												"nodeType": "YulBlock",
												"src": "1259:16:26",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nativeSrc": "1268:1:26",
																	"nodeType": "YulLiteral",
																	"src": "1268:1:26",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nativeSrc": "1271:1:26",
																	"nodeType": "YulLiteral",
																	"src": "1271:1:26",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nativeSrc": "1261:6:26",
																"nodeType": "YulIdentifier",
																"src": "1261:6:26"
															},
															"nativeSrc": "1261:12:26",
															"nodeType": "YulFunctionCall",
															"src": "1261:12:26"
														},
														"nativeSrc": "1261:12:26",
														"nodeType": "YulExpressionStatement",
														"src": "1261:12:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "value",
																"nativeSrc": "1210:5:26",
																"nodeType": "YulIdentifier",
																"src": "1210:5:26"
															},
															{
																"arguments": [
																	{
																		"name": "value",
																		"nativeSrc": "1250:5:26",
																		"nodeType": "YulIdentifier",
																		"src": "1250:5:26"
																	}
																],
																"functionName": {
																	"name": "cleanup_t_contract$_IERC20_$1785",
																	"nativeSrc": "1217:32:26",
																	"nodeType": "YulIdentifier",
																	"src": "1217:32:26"
																},
																"nativeSrc": "1217:39:26",
																"nodeType": "YulFunctionCall",
																"src": "1217:39:26"
															}
														],
														"functionName": {
															"name": "eq",
															"nativeSrc": "1207:2:26",
															"nodeType": "YulIdentifier",
															"src": "1207:2:26"
														},
														"nativeSrc": "1207:50:26",
														"nodeType": "YulFunctionCall",
														"src": "1207:50:26"
													}
												],
												"functionName": {
													"name": "iszero",
													"nativeSrc": "1200:6:26",
													"nodeType": "YulIdentifier",
													"src": "1200:6:26"
												},
												"nativeSrc": "1200:58:26",
												"nodeType": "YulFunctionCall",
												"src": "1200:58:26"
											},
											"nativeSrc": "1197:78:26",
											"nodeType": "YulIf",
											"src": "1197:78:26"
										}
									]
								},
								"name": "validator_revert_t_contract$_IERC20_$1785",
								"nativeSrc": "1129:152:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "1180:5:26",
										"nodeType": "YulTypedName",
										"src": "1180:5:26",
										"type": ""
									}
								],
								"src": "1129:152:26"
							},
							{
								"body": {
									"nativeSrc": "1365:95:26",
									"nodeType": "YulBlock",
									"src": "1365:95:26",
									"statements": [
										{
											"nativeSrc": "1375:22:26",
											"nodeType": "YulAssignment",
											"src": "1375:22:26",
											"value": {
												"arguments": [
													{
														"name": "offset",
														"nativeSrc": "1390:6:26",
														"nodeType": "YulIdentifier",
														"src": "1390:6:26"
													}
												],
												"functionName": {
													"name": "mload",
													"nativeSrc": "1384:5:26",
													"nodeType": "YulIdentifier",
													"src": "1384:5:26"
												},
												"nativeSrc": "1384:13:26",
												"nodeType": "YulFunctionCall",
												"src": "1384:13:26"
											},
											"variableNames": [
												{
													"name": "value",
													"nativeSrc": "1375:5:26",
													"nodeType": "YulIdentifier",
													"src": "1375:5:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value",
														"nativeSrc": "1448:5:26",
														"nodeType": "YulIdentifier",
														"src": "1448:5:26"
													}
												],
												"functionName": {
													"name": "validator_revert_t_contract$_IERC20_$1785",
													"nativeSrc": "1406:41:26",
													"nodeType": "YulIdentifier",
													"src": "1406:41:26"
												},
												"nativeSrc": "1406:48:26",
												"nodeType": "YulFunctionCall",
												"src": "1406:48:26"
											},
											"nativeSrc": "1406:48:26",
											"nodeType": "YulExpressionStatement",
											"src": "1406:48:26"
										}
									]
								},
								"name": "abi_decode_t_contract$_IERC20_$1785_fromMemory",
								"nativeSrc": "1287:173:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "offset",
										"nativeSrc": "1343:6:26",
										"nodeType": "YulTypedName",
										"src": "1343:6:26",
										"type": ""
									},
									{
										"name": "end",
										"nativeSrc": "1351:3:26",
										"nodeType": "YulTypedName",
										"src": "1351:3:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value",
										"nativeSrc": "1359:5:26",
										"nodeType": "YulTypedName",
										"src": "1359:5:26",
										"type": ""
									}
								],
								"src": "1287:173:26"
							},
							{
								"body": {
									"nativeSrc": "1511:32:26",
									"nodeType": "YulBlock",
									"src": "1511:32:26",
									"statements": [
										{
											"nativeSrc": "1521:16:26",
											"nodeType": "YulAssignment",
											"src": "1521:16:26",
											"value": {
												"name": "value",
												"nativeSrc": "1532:5:26",
												"nodeType": "YulIdentifier",
												"src": "1532:5:26"
											},
											"variableNames": [
												{
													"name": "cleaned",
													"nativeSrc": "1521:7:26",
													"nodeType": "YulIdentifier",
													"src": "1521:7:26"
												}
											]
										}
									]
								},
								"name": "cleanup_t_uint256",
								"nativeSrc": "1466:77:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "1493:5:26",
										"nodeType": "YulTypedName",
										"src": "1493:5:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "cleaned",
										"nativeSrc": "1503:7:26",
										"nodeType": "YulTypedName",
										"src": "1503:7:26",
										"type": ""
									}
								],
								"src": "1466:77:26"
							},
							{
								"body": {
									"nativeSrc": "1592:79:26",
									"nodeType": "YulBlock",
									"src": "1592:79:26",
									"statements": [
										{
											"body": {
												"nativeSrc": "1649:16:26",
												"nodeType": "YulBlock",
												"src": "1649:16:26",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nativeSrc": "1658:1:26",
																	"nodeType": "YulLiteral",
																	"src": "1658:1:26",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nativeSrc": "1661:1:26",
																	"nodeType": "YulLiteral",
																	"src": "1661:1:26",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nativeSrc": "1651:6:26",
																"nodeType": "YulIdentifier",
																"src": "1651:6:26"
															},
															"nativeSrc": "1651:12:26",
															"nodeType": "YulFunctionCall",
															"src": "1651:12:26"
														},
														"nativeSrc": "1651:12:26",
														"nodeType": "YulExpressionStatement",
														"src": "1651:12:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "value",
																"nativeSrc": "1615:5:26",
																"nodeType": "YulIdentifier",
																"src": "1615:5:26"
															},
															{
																"arguments": [
																	{
																		"name": "value",
																		"nativeSrc": "1640:5:26",
																		"nodeType": "YulIdentifier",
																		"src": "1640:5:26"
																	}
																],
																"functionName": {
																	"name": "cleanup_t_uint256",
																	"nativeSrc": "1622:17:26",
																	"nodeType": "YulIdentifier",
																	"src": "1622:17:26"
																},
																"nativeSrc": "1622:24:26",
																"nodeType": "YulFunctionCall",
																"src": "1622:24:26"
															}
														],
														"functionName": {
															"name": "eq",
															"nativeSrc": "1612:2:26",
															"nodeType": "YulIdentifier",
															"src": "1612:2:26"
														},
														"nativeSrc": "1612:35:26",
														"nodeType": "YulFunctionCall",
														"src": "1612:35:26"
													}
												],
												"functionName": {
													"name": "iszero",
													"nativeSrc": "1605:6:26",
													"nodeType": "YulIdentifier",
													"src": "1605:6:26"
												},
												"nativeSrc": "1605:43:26",
												"nodeType": "YulFunctionCall",
												"src": "1605:43:26"
											},
											"nativeSrc": "1602:63:26",
											"nodeType": "YulIf",
											"src": "1602:63:26"
										}
									]
								},
								"name": "validator_revert_t_uint256",
								"nativeSrc": "1549:122:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "1585:5:26",
										"nodeType": "YulTypedName",
										"src": "1585:5:26",
										"type": ""
									}
								],
								"src": "1549:122:26"
							},
							{
								"body": {
									"nativeSrc": "1740:80:26",
									"nodeType": "YulBlock",
									"src": "1740:80:26",
									"statements": [
										{
											"nativeSrc": "1750:22:26",
											"nodeType": "YulAssignment",
											"src": "1750:22:26",
											"value": {
												"arguments": [
													{
														"name": "offset",
														"nativeSrc": "1765:6:26",
														"nodeType": "YulIdentifier",
														"src": "1765:6:26"
													}
												],
												"functionName": {
													"name": "mload",
													"nativeSrc": "1759:5:26",
													"nodeType": "YulIdentifier",
													"src": "1759:5:26"
												},
												"nativeSrc": "1759:13:26",
												"nodeType": "YulFunctionCall",
												"src": "1759:13:26"
											},
											"variableNames": [
												{
													"name": "value",
													"nativeSrc": "1750:5:26",
													"nodeType": "YulIdentifier",
													"src": "1750:5:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value",
														"nativeSrc": "1808:5:26",
														"nodeType": "YulIdentifier",
														"src": "1808:5:26"
													}
												],
												"functionName": {
													"name": "validator_revert_t_uint256",
													"nativeSrc": "1781:26:26",
													"nodeType": "YulIdentifier",
													"src": "1781:26:26"
												},
												"nativeSrc": "1781:33:26",
												"nodeType": "YulFunctionCall",
												"src": "1781:33:26"
											},
											"nativeSrc": "1781:33:26",
											"nodeType": "YulExpressionStatement",
											"src": "1781:33:26"
										}
									]
								},
								"name": "abi_decode_t_uint256_fromMemory",
								"nativeSrc": "1677:143:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "offset",
										"nativeSrc": "1718:6:26",
										"nodeType": "YulTypedName",
										"src": "1718:6:26",
										"type": ""
									},
									{
										"name": "end",
										"nativeSrc": "1726:3:26",
										"nodeType": "YulTypedName",
										"src": "1726:3:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value",
										"nativeSrc": "1734:5:26",
										"nodeType": "YulTypedName",
										"src": "1734:5:26",
										"type": ""
									}
								],
								"src": "1677:143:26"
							},
							{
								"body": {
									"nativeSrc": "1965:580:26",
									"nodeType": "YulBlock",
									"src": "1965:580:26",
									"statements": [
										{
											"body": {
												"nativeSrc": "2011:83:26",
												"nodeType": "YulBlock",
												"src": "2011:83:26",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
																"nativeSrc": "2013:77:26",
																"nodeType": "YulIdentifier",
																"src": "2013:77:26"
															},
															"nativeSrc": "2013:79:26",
															"nodeType": "YulFunctionCall",
															"src": "2013:79:26"
														},
														"nativeSrc": "2013:79:26",
														"nodeType": "YulExpressionStatement",
														"src": "2013:79:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "dataEnd",
																"nativeSrc": "1986:7:26",
																"nodeType": "YulIdentifier",
																"src": "1986:7:26"
															},
															{
																"name": "headStart",
																"nativeSrc": "1995:9:26",
																"nodeType": "YulIdentifier",
																"src": "1995:9:26"
															}
														],
														"functionName": {
															"name": "sub",
															"nativeSrc": "1982:3:26",
															"nodeType": "YulIdentifier",
															"src": "1982:3:26"
														},
														"nativeSrc": "1982:23:26",
														"nodeType": "YulFunctionCall",
														"src": "1982:23:26"
													},
													{
														"kind": "number",
														"nativeSrc": "2007:2:26",
														"nodeType": "YulLiteral",
														"src": "2007:2:26",
														"type": "",
														"value": "96"
													}
												],
												"functionName": {
													"name": "slt",
													"nativeSrc": "1978:3:26",
													"nodeType": "YulIdentifier",
													"src": "1978:3:26"
												},
												"nativeSrc": "1978:32:26",
												"nodeType": "YulFunctionCall",
												"src": "1978:32:26"
											},
											"nativeSrc": "1975:119:26",
											"nodeType": "YulIf",
											"src": "1975:119:26"
										},
										{
											"nativeSrc": "2104:141:26",
											"nodeType": "YulBlock",
											"src": "2104:141:26",
											"statements": [
												{
													"nativeSrc": "2119:15:26",
													"nodeType": "YulVariableDeclaration",
													"src": "2119:15:26",
													"value": {
														"kind": "number",
														"nativeSrc": "2133:1:26",
														"nodeType": "YulLiteral",
														"src": "2133:1:26",
														"type": "",
														"value": "0"
													},
													"variables": [
														{
															"name": "offset",
															"nativeSrc": "2123:6:26",
															"nodeType": "YulTypedName",
															"src": "2123:6:26",
															"type": ""
														}
													]
												},
												{
													"nativeSrc": "2148:87:26",
													"nodeType": "YulAssignment",
													"src": "2148:87:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "2207:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "2207:9:26"
																	},
																	{
																		"name": "offset",
																		"nativeSrc": "2218:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "2218:6:26"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "2203:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "2203:3:26"
																},
																"nativeSrc": "2203:22:26",
																"nodeType": "YulFunctionCall",
																"src": "2203:22:26"
															},
															{
																"name": "dataEnd",
																"nativeSrc": "2227:7:26",
																"nodeType": "YulIdentifier",
																"src": "2227:7:26"
															}
														],
														"functionName": {
															"name": "abi_decode_t_contract$_Dram_$7015_fromMemory",
															"nativeSrc": "2158:44:26",
															"nodeType": "YulIdentifier",
															"src": "2158:44:26"
														},
														"nativeSrc": "2158:77:26",
														"nodeType": "YulFunctionCall",
														"src": "2158:77:26"
													},
													"variableNames": [
														{
															"name": "value0",
															"nativeSrc": "2148:6:26",
															"nodeType": "YulIdentifier",
															"src": "2148:6:26"
														}
													]
												}
											]
										},
										{
											"nativeSrc": "2255:144:26",
											"nodeType": "YulBlock",
											"src": "2255:144:26",
											"statements": [
												{
													"nativeSrc": "2270:16:26",
													"nodeType": "YulVariableDeclaration",
													"src": "2270:16:26",
													"value": {
														"kind": "number",
														"nativeSrc": "2284:2:26",
														"nodeType": "YulLiteral",
														"src": "2284:2:26",
														"type": "",
														"value": "32"
													},
													"variables": [
														{
															"name": "offset",
															"nativeSrc": "2274:6:26",
															"nodeType": "YulTypedName",
															"src": "2274:6:26",
															"type": ""
														}
													]
												},
												{
													"nativeSrc": "2300:89:26",
													"nodeType": "YulAssignment",
													"src": "2300:89:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "2361:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "2361:9:26"
																	},
																	{
																		"name": "offset",
																		"nativeSrc": "2372:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "2372:6:26"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "2357:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "2357:3:26"
																},
																"nativeSrc": "2357:22:26",
																"nodeType": "YulFunctionCall",
																"src": "2357:22:26"
															},
															{
																"name": "dataEnd",
																"nativeSrc": "2381:7:26",
																"nodeType": "YulIdentifier",
																"src": "2381:7:26"
															}
														],
														"functionName": {
															"name": "abi_decode_t_contract$_IERC20_$1785_fromMemory",
															"nativeSrc": "2310:46:26",
															"nodeType": "YulIdentifier",
															"src": "2310:46:26"
														},
														"nativeSrc": "2310:79:26",
														"nodeType": "YulFunctionCall",
														"src": "2310:79:26"
													},
													"variableNames": [
														{
															"name": "value1",
															"nativeSrc": "2300:6:26",
															"nodeType": "YulIdentifier",
															"src": "2300:6:26"
														}
													]
												}
											]
										},
										{
											"nativeSrc": "2409:129:26",
											"nodeType": "YulBlock",
											"src": "2409:129:26",
											"statements": [
												{
													"nativeSrc": "2424:16:26",
													"nodeType": "YulVariableDeclaration",
													"src": "2424:16:26",
													"value": {
														"kind": "number",
														"nativeSrc": "2438:2:26",
														"nodeType": "YulLiteral",
														"src": "2438:2:26",
														"type": "",
														"value": "64"
													},
													"variables": [
														{
															"name": "offset",
															"nativeSrc": "2428:6:26",
															"nodeType": "YulTypedName",
															"src": "2428:6:26",
															"type": ""
														}
													]
												},
												{
													"nativeSrc": "2454:74:26",
													"nodeType": "YulAssignment",
													"src": "2454:74:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "2500:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "2500:9:26"
																	},
																	{
																		"name": "offset",
																		"nativeSrc": "2511:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "2511:6:26"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "2496:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "2496:3:26"
																},
																"nativeSrc": "2496:22:26",
																"nodeType": "YulFunctionCall",
																"src": "2496:22:26"
															},
															{
																"name": "dataEnd",
																"nativeSrc": "2520:7:26",
																"nodeType": "YulIdentifier",
																"src": "2520:7:26"
															}
														],
														"functionName": {
															"name": "abi_decode_t_uint256_fromMemory",
															"nativeSrc": "2464:31:26",
															"nodeType": "YulIdentifier",
															"src": "2464:31:26"
														},
														"nativeSrc": "2464:64:26",
														"nodeType": "YulFunctionCall",
														"src": "2464:64:26"
													},
													"variableNames": [
														{
															"name": "value2",
															"nativeSrc": "2454:6:26",
															"nodeType": "YulIdentifier",
															"src": "2454:6:26"
														}
													]
												}
											]
										}
									]
								},
								"name": "abi_decode_tuple_t_contract$_Dram_$7015t_contract$_IERC20_$1785t_uint256_fromMemory",
								"nativeSrc": "1826:719:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "1919:9:26",
										"nodeType": "YulTypedName",
										"src": "1919:9:26",
										"type": ""
									},
									{
										"name": "dataEnd",
										"nativeSrc": "1930:7:26",
										"nodeType": "YulTypedName",
										"src": "1930:7:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value0",
										"nativeSrc": "1942:6:26",
										"nodeType": "YulTypedName",
										"src": "1942:6:26",
										"type": ""
									},
									{
										"name": "value1",
										"nativeSrc": "1950:6:26",
										"nodeType": "YulTypedName",
										"src": "1950:6:26",
										"type": ""
									},
									{
										"name": "value2",
										"nativeSrc": "1958:6:26",
										"nodeType": "YulTypedName",
										"src": "1958:6:26",
										"type": ""
									}
								],
								"src": "1826:719:26"
							},
							{
								"body": {
									"nativeSrc": "2616:53:26",
									"nodeType": "YulBlock",
									"src": "2616:53:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "2633:3:26",
														"nodeType": "YulIdentifier",
														"src": "2633:3:26"
													},
													{
														"arguments": [
															{
																"name": "value",
																"nativeSrc": "2656:5:26",
																"nodeType": "YulIdentifier",
																"src": "2656:5:26"
															}
														],
														"functionName": {
															"name": "cleanup_t_address",
															"nativeSrc": "2638:17:26",
															"nodeType": "YulIdentifier",
															"src": "2638:17:26"
														},
														"nativeSrc": "2638:24:26",
														"nodeType": "YulFunctionCall",
														"src": "2638:24:26"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "2626:6:26",
													"nodeType": "YulIdentifier",
													"src": "2626:6:26"
												},
												"nativeSrc": "2626:37:26",
												"nodeType": "YulFunctionCall",
												"src": "2626:37:26"
											},
											"nativeSrc": "2626:37:26",
											"nodeType": "YulExpressionStatement",
											"src": "2626:37:26"
										}
									]
								},
								"name": "abi_encode_t_address_to_t_address_fromStack",
								"nativeSrc": "2551:118:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "2604:5:26",
										"nodeType": "YulTypedName",
										"src": "2604:5:26",
										"type": ""
									},
									{
										"name": "pos",
										"nativeSrc": "2611:3:26",
										"nodeType": "YulTypedName",
										"src": "2611:3:26",
										"type": ""
									}
								],
								"src": "2551:118:26"
							},
							{
								"body": {
									"nativeSrc": "2773:124:26",
									"nodeType": "YulBlock",
									"src": "2773:124:26",
									"statements": [
										{
											"nativeSrc": "2783:26:26",
											"nodeType": "YulAssignment",
											"src": "2783:26:26",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nativeSrc": "2795:9:26",
														"nodeType": "YulIdentifier",
														"src": "2795:9:26"
													},
													{
														"kind": "number",
														"nativeSrc": "2806:2:26",
														"nodeType": "YulLiteral",
														"src": "2806:2:26",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "2791:3:26",
													"nodeType": "YulIdentifier",
													"src": "2791:3:26"
												},
												"nativeSrc": "2791:18:26",
												"nodeType": "YulFunctionCall",
												"src": "2791:18:26"
											},
											"variableNames": [
												{
													"name": "tail",
													"nativeSrc": "2783:4:26",
													"nodeType": "YulIdentifier",
													"src": "2783:4:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value0",
														"nativeSrc": "2863:6:26",
														"nodeType": "YulIdentifier",
														"src": "2863:6:26"
													},
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "2876:9:26",
																"nodeType": "YulIdentifier",
																"src": "2876:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "2887:1:26",
																"nodeType": "YulLiteral",
																"src": "2887:1:26",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "2872:3:26",
															"nodeType": "YulIdentifier",
															"src": "2872:3:26"
														},
														"nativeSrc": "2872:17:26",
														"nodeType": "YulFunctionCall",
														"src": "2872:17:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_address_to_t_address_fromStack",
													"nativeSrc": "2819:43:26",
													"nodeType": "YulIdentifier",
													"src": "2819:43:26"
												},
												"nativeSrc": "2819:71:26",
												"nodeType": "YulFunctionCall",
												"src": "2819:71:26"
											},
											"nativeSrc": "2819:71:26",
											"nodeType": "YulExpressionStatement",
											"src": "2819:71:26"
										}
									]
								},
								"name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
								"nativeSrc": "2675:222:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "2745:9:26",
										"nodeType": "YulTypedName",
										"src": "2745:9:26",
										"type": ""
									},
									{
										"name": "value0",
										"nativeSrc": "2757:6:26",
										"nodeType": "YulTypedName",
										"src": "2757:6:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nativeSrc": "2768:4:26",
										"nodeType": "YulTypedName",
										"src": "2768:4:26",
										"type": ""
									}
								],
								"src": "2675:222:26"
							}
						]
					},
					"contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_contract$_Dram_$7015(value) -> cleaned {\n        cleaned := cleanup_t_address(value)\n    }\n\n    function validator_revert_t_contract$_Dram_$7015(value) {\n        if iszero(eq(value, cleanup_t_contract$_Dram_$7015(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_contract$_Dram_$7015_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_contract$_Dram_$7015(value)\n    }\n\n    function cleanup_t_contract$_IERC20_$1785(value) -> cleaned {\n        cleaned := cleanup_t_address(value)\n    }\n\n    function validator_revert_t_contract$_IERC20_$1785(value) {\n        if iszero(eq(value, cleanup_t_contract$_IERC20_$1785(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_contract$_IERC20_$1785_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_contract$_IERC20_$1785(value)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_contract$_Dram_$7015t_contract$_IERC20_$1785t_uint256_fromMemory(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_contract$_Dram_$7015_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_contract$_IERC20_$1785_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n}\n",
					"id": 26,
					"language": "Yul",
					"name": "#utility.yul"
				}
			],
			"linkReferences": {},
			"object": "608060405234801561000f575f5ffd5b5060405161187c38038061187c833981810160405281019061003191906102e6565b335f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a2575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100999190610345565b60405180910390fd5b6100b18161014860201b60201c565b50600180819055508260025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160035f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060048190555050505061035e565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6102368261020d565b9050919050565b5f6102478261022c565b9050919050565b6102578161023d565b8114610261575f5ffd5b50565b5f815190506102728161024e565b92915050565b5f6102828261022c565b9050919050565b61029281610278565b811461029c575f5ffd5b50565b5f815190506102ad81610289565b92915050565b5f819050919050565b6102c5816102b3565b81146102cf575f5ffd5b50565b5f815190506102e0816102bc565b92915050565b5f5f5f606084860312156102fd576102fc610209565b5b5f61030a86828701610264565b935050602061031b8682870161029f565b925050604061032c868287016102d2565b9150509250925092565b61033f8161022c565b82525050565b5f6020820190506103585f830184610336565b92915050565b6115118061036b5f395ff3fe608060405234801561000f575f5ffd5b50600436106100b2575f3560e01c80637ff9b5961161006f5780637ff9b596146101525780638da5cb5b14610170578063b69ef8a81461018e578063bc197c81146101ac578063f23a6e61146101dc578063f2fde38b1461020c576100b2565b806301ffc9a7146100b657806302778fc0146100e6578063057466ea146100f05780633013ce291461010c578063519ee19e1461012a578063715018a614610148575b5f5ffd5b6100d060048036038101906100cb9190610c03565b610228565b6040516100dd9190610c48565b60405180910390f35b6100ee6102a1565b005b61010a60048036038101906101059190610c94565b6103d6565b005b61011461060f565b6040516101219190610d4c565b60405180910390f35b610132610634565b60405161013f9190610d74565b60405180910390f35b61015061063a565b005b61015a61064d565b6040516101679190610d74565b60405180910390f35b610178610653565b6040516101859190610dad565b60405180910390f35b61019661067a565b6040516101a39190610d74565b60405180910390f35b6101c660048036038101906101c19190610ff0565b610720565b6040516101d391906110ca565b60405180910390f35b6101f660048036038101906101f191906110e3565b610734565b60405161020391906110ca565b60405180910390f35b61022660048036038101906102219190611176565b610748565b005b5f7f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061029a5750610299826107cc565b5b9050919050565b6102a9610835565b5f60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103049190610dad565b602060405180830381865afa15801561031f573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061034391906111b5565b90505f8111610387576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037e9061123a565b60405180910390fd5b6103d3338260035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108bc9092919063ffffffff16565b50565b6103de61093b565b8160025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662fdd58e3060016040518363ffffffff1660e01b815260040161043b929190611291565b602060405180830381865afa158015610456573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061047a91906111b5565b10156104bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b290611302565b60405180910390fd5b5f600454836104ca919061134d565b905061051a33308360035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610981909392919063ffffffff16565b5f5f61052860055486610a03565b915091508161056c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610563906113d8565b60405180910390fd5b8060058190555060025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f242432a303387896040518563ffffffff1660e01b81526004016105d39493929190611429565b5f604051808303815f87803b1580156105ea575f5ffd5b505af11580156105fc573d5f5f3e3d5ffd5b5050505050505061060b610a26565b5050565b60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60055481565b610642610835565b61064b5f610a2f565b565b60045481565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f5f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662fdd58e3060016040518363ffffffff1660e01b81526004016106d8929190611291565b602060405180830381865afa1580156106f3573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061071791906111b5565b90508091505090565b5f63bc197c8160e01b905095945050505050565b5f63f23a6e6160e01b905095945050505050565b610750610835565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107c0575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016107b79190610dad565b60405180910390fd5b6107c981610a2f565b50565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61083d610af0565b73ffffffffffffffffffffffffffffffffffffffff1661085b610653565b73ffffffffffffffffffffffffffffffffffffffff16146108ba5761087e610af0565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016108b19190610dad565b60405180910390fd5b565b610936838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85856040516024016108ef92919061147f565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610af7565b505050565b600260015403610977576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600181905550565b6109fd848573ffffffffffffffffffffffffffffffffffffffff166323b872dd8686866040516024016109b6939291906114a6565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610af7565b50505050565b5f5f5f8385019050848110159250610a1a83610b92565b81029150509250929050565b60018081905550565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f5f60205f8451602086015f885af180610b16576040513d5f823e3d81fd5b3d92505f519150505f8214610b2f576001811415610b4a565b5f8473ffffffffffffffffffffffffffffffffffffffff163b145b15610b8c57836040517f5274afe7000000000000000000000000000000000000000000000000000000008152600401610b839190610dad565b60405180910390fd5b50505050565b5f8115159050919050565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b610be281610bae565b8114610bec575f5ffd5b50565b5f81359050610bfd81610bd9565b92915050565b5f60208284031215610c1857610c17610ba6565b5b5f610c2584828501610bef565b91505092915050565b5f8115159050919050565b610c4281610c2e565b82525050565b5f602082019050610c5b5f830184610c39565b92915050565b5f819050919050565b610c7381610c61565b8114610c7d575f5ffd5b50565b5f81359050610c8e81610c6a565b92915050565b5f5f60408385031215610caa57610ca9610ba6565b5b5f610cb785828601610c80565b9250506020610cc885828601610c80565b9150509250929050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f819050919050565b5f610d14610d0f610d0a84610cd2565b610cf1565b610cd2565b9050919050565b5f610d2582610cfa565b9050919050565b5f610d3682610d1b565b9050919050565b610d4681610d2c565b82525050565b5f602082019050610d5f5f830184610d3d565b92915050565b610d6e81610c61565b82525050565b5f602082019050610d875f830184610d65565b92915050565b5f610d9782610cd2565b9050919050565b610da781610d8d565b82525050565b5f602082019050610dc05f830184610d9e565b92915050565b610dcf81610d8d565b8114610dd9575f5ffd5b50565b5f81359050610dea81610dc6565b92915050565b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610e3a82610df4565b810181811067ffffffffffffffff82111715610e5957610e58610e04565b5b80604052505050565b5f610e6b610b9d565b9050610e778282610e31565b919050565b5f67ffffffffffffffff821115610e9657610e95610e04565b5b602082029050602081019050919050565b5f5ffd5b5f610ebd610eb884610e7c565b610e62565b90508083825260208201905060208402830185811115610ee057610edf610ea7565b5b835b81811015610f095780610ef58882610c80565b845260208401935050602081019050610ee2565b5050509392505050565b5f82601f830112610f2757610f26610df0565b5b8135610f37848260208601610eab565b91505092915050565b5f5ffd5b5f67ffffffffffffffff821115610f5e57610f5d610e04565b5b610f6782610df4565b9050602081019050919050565b828183375f83830152505050565b5f610f94610f8f84610f44565b610e62565b905082815260208101848484011115610fb057610faf610f40565b5b610fbb848285610f74565b509392505050565b5f82601f830112610fd757610fd6610df0565b5b8135610fe7848260208601610f82565b91505092915050565b5f5f5f5f5f60a0868803121561100957611008610ba6565b5b5f61101688828901610ddc565b955050602061102788828901610ddc565b945050604086013567ffffffffffffffff81111561104857611047610baa565b5b61105488828901610f13565b935050606086013567ffffffffffffffff81111561107557611074610baa565b5b61108188828901610f13565b925050608086013567ffffffffffffffff8111156110a2576110a1610baa565b5b6110ae88828901610fc3565b9150509295509295909350565b6110c481610bae565b82525050565b5f6020820190506110dd5f8301846110bb565b92915050565b5f5f5f5f5f60a086880312156110fc576110fb610ba6565b5b5f61110988828901610ddc565b955050602061111a88828901610ddc565b945050604061112b88828901610c80565b935050606061113c88828901610c80565b925050608086013567ffffffffffffffff81111561115d5761115c610baa565b5b61116988828901610fc3565b9150509295509295909350565b5f6020828403121561118b5761118a610ba6565b5b5f61119884828501610ddc565b91505092915050565b5f815190506111af81610c6a565b92915050565b5f602082840312156111ca576111c9610ba6565b5b5f6111d7848285016111a1565b91505092915050565b5f82825260208201905092915050565b7f4e6f207061796d656e7420746f6b656e7320746f2077697468647261770000005f82015250565b5f611224601d836111e0565b915061122f826111f0565b602082019050919050565b5f6020820190508181035f83015261125181611218565b9050919050565b5f819050919050565b5f61127b61127661127184611258565b610cf1565b610c61565b9050919050565b61128b81611261565b82525050565b5f6040820190506112a45f830185610d9e565b6112b16020830184611282565b9392505050565b7f496e73756666696369656e7420746f6b656e2062616c616e63650000000000005f82015250565b5f6112ec601a836111e0565b91506112f7826112b8565b602082019050919050565b5f6020820190508181035f830152611319816112e0565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61135782610c61565b915061136283610c61565b925082820261137081610c61565b9150828204841483151761138757611386611320565b5b5092915050565b7f4572726f72207570646174696e6720746f6b656e7320736f6c640000000000005f82015250565b5f6113c2601a836111e0565b91506113cd8261138e565b602082019050919050565b5f6020820190508181035f8301526113ef816113b6565b9050919050565b5f82825260208201905092915050565b50565b5f6114145f836113f6565b915061141f82611406565b5f82019050919050565b5f60a08201905061143c5f830187610d9e565b6114496020830186610d9e565b6114566040830185610d65565b6114636060830184610d65565b818103608083015261147481611409565b905095945050505050565b5f6040820190506114925f830185610d9e565b61149f6020830184610d65565b9392505050565b5f6060820190506114b95f830186610d9e565b6114c66020830185610d9e565b6114d36040830184610d65565b94935050505056fea26469706673582212208f830904ae7961aa1cfc8ee9aeac1d5e4de8cfd8c45d6650a45428f5ab98b5d364736f6c634300081e0033",
			"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0x187C CODESIZE SUB DUP1 PUSH2 0x187C DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH2 0x31 SWAP2 SWAP1 PUSH2 0x2E6 JUMP JUMPDEST CALLER PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0xA2 JUMPI PUSH0 PUSH1 0x40 MLOAD PUSH32 0x1E4FBDF700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x99 SWAP2 SWAP1 PUSH2 0x345 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xB1 DUP2 PUSH2 0x148 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST POP PUSH1 0x1 DUP1 DUP2 SWAP1 SSTORE POP DUP3 PUSH1 0x2 PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH1 0x3 PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP1 PUSH1 0x4 DUP2 SWAP1 SSTORE POP POP POP POP PUSH2 0x35E JUMP JUMPDEST PUSH0 PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH0 PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x236 DUP3 PUSH2 0x20D JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x247 DUP3 PUSH2 0x22C JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x257 DUP2 PUSH2 0x23D JUMP JUMPDEST DUP2 EQ PUSH2 0x261 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP PUSH2 0x272 DUP2 PUSH2 0x24E JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH2 0x282 DUP3 PUSH2 0x22C JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x292 DUP2 PUSH2 0x278 JUMP JUMPDEST DUP2 EQ PUSH2 0x29C JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP PUSH2 0x2AD DUP2 PUSH2 0x289 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x2C5 DUP2 PUSH2 0x2B3 JUMP JUMPDEST DUP2 EQ PUSH2 0x2CF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP PUSH2 0x2E0 DUP2 PUSH2 0x2BC JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x2FD JUMPI PUSH2 0x2FC PUSH2 0x209 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x30A DUP7 DUP3 DUP8 ADD PUSH2 0x264 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0x31B DUP7 DUP3 DUP8 ADD PUSH2 0x29F JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 PUSH2 0x32C DUP7 DUP3 DUP8 ADD PUSH2 0x2D2 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH2 0x33F DUP2 PUSH2 0x22C JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x358 PUSH0 DUP4 ADD DUP5 PUSH2 0x336 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x1511 DUP1 PUSH2 0x36B PUSH0 CODECOPY PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0xB2 JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x7FF9B596 GT PUSH2 0x6F JUMPI DUP1 PUSH4 0x7FF9B596 EQ PUSH2 0x152 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x170 JUMPI DUP1 PUSH4 0xB69EF8A8 EQ PUSH2 0x18E JUMPI DUP1 PUSH4 0xBC197C81 EQ PUSH2 0x1AC JUMPI DUP1 PUSH4 0xF23A6E61 EQ PUSH2 0x1DC JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x20C JUMPI PUSH2 0xB2 JUMP JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0xB6 JUMPI DUP1 PUSH4 0x2778FC0 EQ PUSH2 0xE6 JUMPI DUP1 PUSH4 0x57466EA EQ PUSH2 0xF0 JUMPI DUP1 PUSH4 0x3013CE29 EQ PUSH2 0x10C JUMPI DUP1 PUSH4 0x519EE19E EQ PUSH2 0x12A JUMPI DUP1 PUSH4 0x715018A6 EQ PUSH2 0x148 JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0xD0 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xCB SWAP2 SWAP1 PUSH2 0xC03 JUMP JUMPDEST PUSH2 0x228 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xDD SWAP2 SWAP1 PUSH2 0xC48 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xEE PUSH2 0x2A1 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x10A PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x105 SWAP2 SWAP1 PUSH2 0xC94 JUMP JUMPDEST PUSH2 0x3D6 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x114 PUSH2 0x60F JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x121 SWAP2 SWAP1 PUSH2 0xD4C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x132 PUSH2 0x634 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x13F SWAP2 SWAP1 PUSH2 0xD74 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x150 PUSH2 0x63A JUMP JUMPDEST STOP JUMPDEST PUSH2 0x15A PUSH2 0x64D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x167 SWAP2 SWAP1 PUSH2 0xD74 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x178 PUSH2 0x653 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x185 SWAP2 SWAP1 PUSH2 0xDAD JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x196 PUSH2 0x67A JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1A3 SWAP2 SWAP1 PUSH2 0xD74 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1C6 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1C1 SWAP2 SWAP1 PUSH2 0xFF0 JUMP JUMPDEST PUSH2 0x720 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1D3 SWAP2 SWAP1 PUSH2 0x10CA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1F6 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1F1 SWAP2 SWAP1 PUSH2 0x10E3 JUMP JUMPDEST PUSH2 0x734 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x203 SWAP2 SWAP1 PUSH2 0x10CA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x226 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x221 SWAP2 SWAP1 PUSH2 0x1176 JUMP JUMPDEST PUSH2 0x748 JUMP JUMPDEST STOP JUMPDEST PUSH0 PUSH32 0x4E2312E000000000000000000000000000000000000000000000000000000000 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND DUP3 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ DUP1 PUSH2 0x29A JUMPI POP PUSH2 0x299 DUP3 PUSH2 0x7CC JUMP JUMPDEST JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x2A9 PUSH2 0x835 JUMP JUMPDEST PUSH0 PUSH1 0x3 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x70A08231 ADDRESS PUSH1 0x40 MLOAD DUP3 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x304 SWAP2 SWAP1 PUSH2 0xDAD JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL ISZERO DUP1 ISZERO PUSH2 0x31F JUMPI RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY RETURNDATASIZE PUSH0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x343 SWAP2 SWAP1 PUSH2 0x11B5 JUMP JUMPDEST SWAP1 POP PUSH0 DUP2 GT PUSH2 0x387 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x37E SWAP1 PUSH2 0x123A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x3D3 CALLER DUP3 PUSH1 0x3 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8BC SWAP1 SWAP3 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST POP JUMP JUMPDEST PUSH2 0x3DE PUSH2 0x93B JUMP JUMPDEST DUP2 PUSH1 0x2 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH3 0xFDD58E ADDRESS PUSH1 0x1 PUSH1 0x40 MLOAD DUP4 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x43B SWAP3 SWAP2 SWAP1 PUSH2 0x1291 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL ISZERO DUP1 ISZERO PUSH2 0x456 JUMPI RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY RETURNDATASIZE PUSH0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x47A SWAP2 SWAP1 PUSH2 0x11B5 JUMP JUMPDEST LT ISZERO PUSH2 0x4BB JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x4B2 SWAP1 PUSH2 0x1302 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH0 PUSH1 0x4 SLOAD DUP4 PUSH2 0x4CA SWAP2 SWAP1 PUSH2 0x134D JUMP JUMPDEST SWAP1 POP PUSH2 0x51A CALLER ADDRESS DUP4 PUSH1 0x3 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x981 SWAP1 SWAP4 SWAP3 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH0 PUSH0 PUSH2 0x528 PUSH1 0x5 SLOAD DUP7 PUSH2 0xA03 JUMP JUMPDEST SWAP2 POP SWAP2 POP DUP2 PUSH2 0x56C JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x563 SWAP1 PUSH2 0x13D8 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x5 DUP2 SWAP1 SSTORE POP PUSH1 0x2 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0xF242432A ADDRESS CALLER DUP8 DUP10 PUSH1 0x40 MLOAD DUP6 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x5D3 SWAP5 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x1429 JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x5EA JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x5FC JUMPI RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY RETURNDATASIZE PUSH0 REVERT JUMPDEST POP POP POP POP POP POP POP PUSH2 0x60B PUSH2 0xA26 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x3 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x5 SLOAD DUP2 JUMP JUMPDEST PUSH2 0x642 PUSH2 0x835 JUMP JUMPDEST PUSH2 0x64B PUSH0 PUSH2 0xA2F JUMP JUMPDEST JUMP JUMPDEST PUSH1 0x4 SLOAD DUP2 JUMP JUMPDEST PUSH0 PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x2 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH3 0xFDD58E ADDRESS PUSH1 0x1 PUSH1 0x40 MLOAD DUP4 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x6D8 SWAP3 SWAP2 SWAP1 PUSH2 0x1291 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL ISZERO DUP1 ISZERO PUSH2 0x6F3 JUMPI RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY RETURNDATASIZE PUSH0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x717 SWAP2 SWAP1 PUSH2 0x11B5 JUMP JUMPDEST SWAP1 POP DUP1 SWAP2 POP POP SWAP1 JUMP JUMPDEST PUSH0 PUSH4 0xBC197C81 PUSH1 0xE0 SHL SWAP1 POP SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH0 PUSH4 0xF23A6E61 PUSH1 0xE0 SHL SWAP1 POP SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH2 0x750 PUSH2 0x835 JUMP JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x7C0 JUMPI PUSH0 PUSH1 0x40 MLOAD PUSH32 0x1E4FBDF700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x7B7 SWAP2 SWAP1 PUSH2 0xDAD JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x7C9 DUP2 PUSH2 0xA2F JUMP JUMPDEST POP JUMP JUMPDEST PUSH0 PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND DUP3 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x83D PUSH2 0xAF0 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x85B PUSH2 0x653 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x8BA JUMPI PUSH2 0x87E PUSH2 0xAF0 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH32 0x118CDAA700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x8B1 SWAP2 SWAP1 PUSH2 0xDAD JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST JUMP JUMPDEST PUSH2 0x936 DUP4 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0xA9059CBB DUP6 DUP6 PUSH1 0x40 MLOAD PUSH1 0x24 ADD PUSH2 0x8EF SWAP3 SWAP2 SWAP1 PUSH2 0x147F JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE SWAP2 POP PUSH1 0xE0 SHL PUSH1 0x20 DUP3 ADD DUP1 MLOAD PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP4 DUP2 DUP4 AND OR DUP4 MSTORE POP POP POP POP PUSH2 0xAF7 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x2 PUSH1 0x1 SLOAD SUB PUSH2 0x977 JUMPI PUSH1 0x40 MLOAD PUSH32 0x3EE5AEB500000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x2 PUSH1 0x1 DUP2 SWAP1 SSTORE POP JUMP JUMPDEST PUSH2 0x9FD DUP5 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x23B872DD DUP7 DUP7 DUP7 PUSH1 0x40 MLOAD PUSH1 0x24 ADD PUSH2 0x9B6 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x14A6 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE SWAP2 POP PUSH1 0xE0 SHL PUSH1 0x20 DUP3 ADD DUP1 MLOAD PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP4 DUP2 DUP4 AND OR DUP4 MSTORE POP POP POP POP PUSH2 0xAF7 JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 DUP4 DUP6 ADD SWAP1 POP DUP5 DUP2 LT ISZERO SWAP3 POP PUSH2 0xA1A DUP4 PUSH2 0xB92 JUMP JUMPDEST DUP2 MUL SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x1 DUP1 DUP2 SWAP1 SSTORE POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH0 PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x20 PUSH0 DUP5 MLOAD PUSH1 0x20 DUP7 ADD PUSH0 DUP9 GAS CALL DUP1 PUSH2 0xB16 JUMPI PUSH1 0x40 MLOAD RETURNDATASIZE PUSH0 DUP3 RETURNDATACOPY RETURNDATASIZE DUP2 REVERT JUMPDEST RETURNDATASIZE SWAP3 POP PUSH0 MLOAD SWAP2 POP POP PUSH0 DUP3 EQ PUSH2 0xB2F JUMPI PUSH1 0x1 DUP2 EQ ISZERO PUSH2 0xB4A JUMP JUMPDEST PUSH0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EXTCODESIZE EQ JUMPDEST ISZERO PUSH2 0xB8C JUMPI DUP4 PUSH1 0x40 MLOAD PUSH32 0x5274AFE700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xB83 SWAP2 SWAP1 PUSH2 0xDAD JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xBE2 DUP2 PUSH2 0xBAE JUMP JUMPDEST DUP2 EQ PUSH2 0xBEC JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0xBFD DUP2 PUSH2 0xBD9 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xC18 JUMPI PUSH2 0xC17 PUSH2 0xBA6 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0xC25 DUP5 DUP3 DUP6 ADD PUSH2 0xBEF JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xC42 DUP2 PUSH2 0xC2E JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xC5B PUSH0 DUP4 ADD DUP5 PUSH2 0xC39 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xC73 DUP2 PUSH2 0xC61 JUMP JUMPDEST DUP2 EQ PUSH2 0xC7D JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0xC8E DUP2 PUSH2 0xC6A JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xCAA JUMPI PUSH2 0xCA9 PUSH2 0xBA6 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0xCB7 DUP6 DUP3 DUP7 ADD PUSH2 0xC80 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0xCC8 DUP6 DUP3 DUP7 ADD PUSH2 0xC80 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0xD14 PUSH2 0xD0F PUSH2 0xD0A DUP5 PUSH2 0xCD2 JUMP JUMPDEST PUSH2 0xCF1 JUMP JUMPDEST PUSH2 0xCD2 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0xD25 DUP3 PUSH2 0xCFA JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0xD36 DUP3 PUSH2 0xD1B JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xD46 DUP2 PUSH2 0xD2C JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xD5F PUSH0 DUP4 ADD DUP5 PUSH2 0xD3D JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0xD6E DUP2 PUSH2 0xC61 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xD87 PUSH0 DUP4 ADD DUP5 PUSH2 0xD65 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH2 0xD97 DUP3 PUSH2 0xCD2 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xDA7 DUP2 PUSH2 0xD8D JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xDC0 PUSH0 DUP4 ADD DUP5 PUSH2 0xD9E JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0xDCF DUP2 PUSH2 0xD8D JUMP JUMPDEST DUP2 EQ PUSH2 0xDD9 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0xDEA DUP2 PUSH2 0xDC6 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH2 0xE3A DUP3 PUSH2 0xDF4 JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH2 0xE59 JUMPI PUSH2 0xE58 PUSH2 0xE04 JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0xE6B PUSH2 0xB9D JUMP JUMPDEST SWAP1 POP PUSH2 0xE77 DUP3 DUP3 PUSH2 0xE31 JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0xE96 JUMPI PUSH2 0xE95 PUSH2 0xE04 JUMP JUMPDEST JUMPDEST PUSH1 0x20 DUP3 MUL SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0xEBD PUSH2 0xEB8 DUP5 PUSH2 0xE7C JUMP JUMPDEST PUSH2 0xE62 JUMP JUMPDEST SWAP1 POP DUP1 DUP4 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH1 0x20 DUP5 MUL DUP4 ADD DUP6 DUP2 GT ISZERO PUSH2 0xEE0 JUMPI PUSH2 0xEDF PUSH2 0xEA7 JUMP JUMPDEST JUMPDEST DUP4 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0xF09 JUMPI DUP1 PUSH2 0xEF5 DUP9 DUP3 PUSH2 0xC80 JUMP JUMPDEST DUP5 MSTORE PUSH1 0x20 DUP5 ADD SWAP4 POP POP PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0xEE2 JUMP JUMPDEST POP POP POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0xF27 JUMPI PUSH2 0xF26 PUSH2 0xDF0 JUMP JUMPDEST JUMPDEST DUP2 CALLDATALOAD PUSH2 0xF37 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH2 0xEAB JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0xF5E JUMPI PUSH2 0xF5D PUSH2 0xE04 JUMP JUMPDEST JUMPDEST PUSH2 0xF67 DUP3 PUSH2 0xDF4 JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST DUP3 DUP2 DUP4 CALLDATACOPY PUSH0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0xF94 PUSH2 0xF8F DUP5 PUSH2 0xF44 JUMP JUMPDEST PUSH2 0xE62 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH2 0xFB0 JUMPI PUSH2 0xFAF PUSH2 0xF40 JUMP JUMPDEST JUMPDEST PUSH2 0xFBB DUP5 DUP3 DUP6 PUSH2 0xF74 JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0xFD7 JUMPI PUSH2 0xFD6 PUSH2 0xDF0 JUMP JUMPDEST JUMPDEST DUP2 CALLDATALOAD PUSH2 0xFE7 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH2 0xF82 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH0 PUSH0 PUSH1 0xA0 DUP7 DUP9 SUB SLT ISZERO PUSH2 0x1009 JUMPI PUSH2 0x1008 PUSH2 0xBA6 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x1016 DUP9 DUP3 DUP10 ADD PUSH2 0xDDC JUMP JUMPDEST SWAP6 POP POP PUSH1 0x20 PUSH2 0x1027 DUP9 DUP3 DUP10 ADD PUSH2 0xDDC JUMP JUMPDEST SWAP5 POP POP PUSH1 0x40 DUP7 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x1048 JUMPI PUSH2 0x1047 PUSH2 0xBAA JUMP JUMPDEST JUMPDEST PUSH2 0x1054 DUP9 DUP3 DUP10 ADD PUSH2 0xF13 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x60 DUP7 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x1075 JUMPI PUSH2 0x1074 PUSH2 0xBAA JUMP JUMPDEST JUMPDEST PUSH2 0x1081 DUP9 DUP3 DUP10 ADD PUSH2 0xF13 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x80 DUP7 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x10A2 JUMPI PUSH2 0x10A1 PUSH2 0xBAA JUMP JUMPDEST JUMPDEST PUSH2 0x10AE DUP9 DUP3 DUP10 ADD PUSH2 0xFC3 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP6 POP SWAP3 SWAP6 SWAP1 SWAP4 POP JUMP JUMPDEST PUSH2 0x10C4 DUP2 PUSH2 0xBAE JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x10DD PUSH0 DUP4 ADD DUP5 PUSH2 0x10BB JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH0 PUSH0 PUSH1 0xA0 DUP7 DUP9 SUB SLT ISZERO PUSH2 0x10FC JUMPI PUSH2 0x10FB PUSH2 0xBA6 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x1109 DUP9 DUP3 DUP10 ADD PUSH2 0xDDC JUMP JUMPDEST SWAP6 POP POP PUSH1 0x20 PUSH2 0x111A DUP9 DUP3 DUP10 ADD PUSH2 0xDDC JUMP JUMPDEST SWAP5 POP POP PUSH1 0x40 PUSH2 0x112B DUP9 DUP3 DUP10 ADD PUSH2 0xC80 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x60 PUSH2 0x113C DUP9 DUP3 DUP10 ADD PUSH2 0xC80 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x80 DUP7 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x115D JUMPI PUSH2 0x115C PUSH2 0xBAA JUMP JUMPDEST JUMPDEST PUSH2 0x1169 DUP9 DUP3 DUP10 ADD PUSH2 0xFC3 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP6 POP SWAP3 SWAP6 SWAP1 SWAP4 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x118B JUMPI PUSH2 0x118A PUSH2 0xBA6 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x1198 DUP5 DUP3 DUP6 ADD PUSH2 0xDDC JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP PUSH2 0x11AF DUP2 PUSH2 0xC6A JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x11CA JUMPI PUSH2 0x11C9 PUSH2 0xBA6 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x11D7 DUP5 DUP3 DUP6 ADD PUSH2 0x11A1 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4E6F207061796D656E7420746F6B656E7320746F207769746864726177000000 PUSH0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH0 PUSH2 0x1224 PUSH1 0x1D DUP4 PUSH2 0x11E0 JUMP JUMPDEST SWAP2 POP PUSH2 0x122F DUP3 PUSH2 0x11F0 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0x1251 DUP2 PUSH2 0x1218 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x127B PUSH2 0x1276 PUSH2 0x1271 DUP5 PUSH2 0x1258 JUMP JUMPDEST PUSH2 0xCF1 JUMP JUMPDEST PUSH2 0xC61 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x128B DUP2 PUSH2 0x1261 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0x12A4 PUSH0 DUP4 ADD DUP6 PUSH2 0xD9E JUMP JUMPDEST PUSH2 0x12B1 PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0x1282 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH32 0x496E73756666696369656E7420746F6B656E2062616C616E6365000000000000 PUSH0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH0 PUSH2 0x12EC PUSH1 0x1A DUP4 PUSH2 0x11E0 JUMP JUMPDEST SWAP2 POP PUSH2 0x12F7 DUP3 PUSH2 0x12B8 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0x1319 DUP2 PUSH2 0x12E0 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0x1357 DUP3 PUSH2 0xC61 JUMP JUMPDEST SWAP2 POP PUSH2 0x1362 DUP4 PUSH2 0xC61 JUMP JUMPDEST SWAP3 POP DUP3 DUP3 MUL PUSH2 0x1370 DUP2 PUSH2 0xC61 JUMP JUMPDEST SWAP2 POP DUP3 DUP3 DIV DUP5 EQ DUP4 ISZERO OR PUSH2 0x1387 JUMPI PUSH2 0x1386 PUSH2 0x1320 JUMP JUMPDEST JUMPDEST POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4572726F72207570646174696E6720746F6B656E7320736F6C64000000000000 PUSH0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH0 PUSH2 0x13C2 PUSH1 0x1A DUP4 PUSH2 0x11E0 JUMP JUMPDEST SWAP2 POP PUSH2 0x13CD DUP3 PUSH2 0x138E JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0x13EF DUP2 PUSH2 0x13B6 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST POP JUMP JUMPDEST PUSH0 PUSH2 0x1414 PUSH0 DUP4 PUSH2 0x13F6 JUMP JUMPDEST SWAP2 POP PUSH2 0x141F DUP3 PUSH2 0x1406 JUMP JUMPDEST PUSH0 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0xA0 DUP3 ADD SWAP1 POP PUSH2 0x143C PUSH0 DUP4 ADD DUP8 PUSH2 0xD9E JUMP JUMPDEST PUSH2 0x1449 PUSH1 0x20 DUP4 ADD DUP7 PUSH2 0xD9E JUMP JUMPDEST PUSH2 0x1456 PUSH1 0x40 DUP4 ADD DUP6 PUSH2 0xD65 JUMP JUMPDEST PUSH2 0x1463 PUSH1 0x60 DUP4 ADD DUP5 PUSH2 0xD65 JUMP JUMPDEST DUP2 DUP2 SUB PUSH1 0x80 DUP4 ADD MSTORE PUSH2 0x1474 DUP2 PUSH2 0x1409 JUMP JUMPDEST SWAP1 POP SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0x1492 PUSH0 DUP4 ADD DUP6 PUSH2 0xD9E JUMP JUMPDEST PUSH2 0x149F PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0xD65 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 PUSH1 0x60 DUP3 ADD SWAP1 POP PUSH2 0x14B9 PUSH0 DUP4 ADD DUP7 PUSH2 0xD9E JUMP JUMPDEST PUSH2 0x14C6 PUSH1 0x20 DUP4 ADD DUP6 PUSH2 0xD9E JUMP JUMPDEST PUSH2 0x14D3 PUSH1 0x40 DUP4 ADD DUP5 PUSH2 0xD65 JUMP JUMPDEST SWAP5 SWAP4 POP POP POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 DUP16 DUP4 MULMOD DIV 0xAE PUSH26 0x61AA1CFC8EE9AEAC1D5E4DE8CFD8C45D6650A45428F5AB98B5D3 PUSH5 0x736F6C6343 STOP ADDMOD 0x1E STOP CALLER ",
			"sourceMap": "465:1823:25:-:0;;;777:186;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;847:10;1297:1:0;1273:26;;:12;:26;;;1269:95;;1350:1;1322:31;;;;;;;;;;;:::i;:::-;;;;;;;;1269:95;1373:32;1392:12;1373:18;;;:32;;:::i;:::-;1225:187;1857:1:17;2061:7;:21;;;;878:8:25::1;870:5;;:16;;;;;;;;;;;;;;;;;;912:13;897:12;;:28;;;;;;;;;;;;;;;;;;949:6;936:10;:19;;;;777:186:::0;;;465:1823;;2912:187:0;2985:16;3004:6;;;;;;;;;;;2985:25;;3029:8;3020:6;;:17;;;;;;;;;;;;;;;;;;3083:8;3052:40;;3073:8;3052:40;;;;;;;;;;;;2975:124;2912:187;:::o;88:117:26:-;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:109::-;618:7;647:24;665:5;647:24;:::i;:::-;636:35;;568:109;;;:::o;683:148::-;769:37;800:5;769:37;:::i;:::-;762:5;759:48;749:76;;821:1;818;811:12;749:76;683:148;:::o;837:169::-;907:5;938:6;932:13;923:22;;954:46;994:5;954:46;:::i;:::-;837:169;;;;:::o;1012:111::-;1064:7;1093:24;1111:5;1093:24;:::i;:::-;1082:35;;1012:111;;;:::o;1129:152::-;1217:39;1250:5;1217:39;:::i;:::-;1210:5;1207:50;1197:78;;1271:1;1268;1261:12;1197:78;1129:152;:::o;1287:173::-;1359:5;1390:6;1384:13;1375:22;;1406:48;1448:5;1406:48;:::i;:::-;1287:173;;;;:::o;1466:77::-;1503:7;1532:5;1521:16;;1466:77;;;:::o;1549:122::-;1622:24;1640:5;1622:24;:::i;:::-;1615:5;1612:35;1602:63;;1661:1;1658;1651:12;1602:63;1549:122;:::o;1677:143::-;1734:5;1765:6;1759:13;1750:22;;1781:33;1808:5;1781:33;:::i;:::-;1677:143;;;;:::o;1826:719::-;1942:6;1950;1958;2007:2;1995:9;1986:7;1982:23;1978:32;1975:119;;;2013:79;;:::i;:::-;1975:119;2133:1;2158:77;2227:7;2218:6;2207:9;2203:22;2158:77;:::i;:::-;2148:87;;2104:141;2284:2;2310:79;2381:7;2372:6;2361:9;2357:22;2310:79;:::i;:::-;2300:89;;2255:144;2438:2;2464:64;2520:7;2511:6;2500:9;2496:22;2464:64;:::i;:::-;2454:74;;2409:129;1826:719;;;;;:::o;2551:118::-;2638:24;2656:5;2638:24;:::i;:::-;2633:3;2626:37;2551:118;;:::o;2675:222::-;2768:4;2806:2;2795:9;2791:18;2783:26;;2819:71;2887:1;2876:9;2872:17;2863:6;2819:71;:::i;:::-;2675:222;;;;:::o;465:1823:25:-;;;;;;;"
		},
		"deployedBytecode": {
			"functionDebugData": {
				"@_callOptionalReturn_2207": {
					"entryPoint": 2807,
					"id": 2207,
					"parameterSlots": 2,
					"returnSlots": 0
				},
				"@_checkOwner_84": {
					"entryPoint": 2101,
					"id": 84,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"@_msgSender_3171": {
					"entryPoint": 2800,
					"id": 3171,
					"parameterSlots": 0,
					"returnSlots": 1
				},
				"@_nonReentrantAfter_3298": {
					"entryPoint": 2598,
					"id": 3298,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"@_nonReentrantBefore_3290": {
					"entryPoint": 2363,
					"id": 3290,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"@_transferOwnership_146": {
					"entryPoint": 2607,
					"id": 146,
					"parameterSlots": 1,
					"returnSlots": 0
				},
				"@balance_7174": {
					"entryPoint": 1658,
					"id": 7174,
					"parameterSlots": 0,
					"returnSlots": 1
				},
				"@buyToken_7155": {
					"entryPoint": 982,
					"id": 7155,
					"parameterSlots": 2,
					"returnSlots": 0
				},
				"@onERC1155BatchReceived_1552": {
					"entryPoint": 1824,
					"id": 1552,
					"parameterSlots": 5,
					"returnSlots": 1
				},
				"@onERC1155Received_1529": {
					"entryPoint": 1844,
					"id": 1529,
					"parameterSlots": 5,
					"returnSlots": 1
				},
				"@owner_67": {
					"entryPoint": 1619,
					"id": 67,
					"parameterSlots": 0,
					"returnSlots": 1
				},
				"@paymentToken_7048": {
					"entryPoint": 1551,
					"id": 7048,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"@renounceOwnership_98": {
					"entryPoint": 1594,
					"id": 98,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"@safeTransferFrom_1857": {
					"entryPoint": 2433,
					"id": 1857,
					"parameterSlots": 4,
					"returnSlots": 0
				},
				"@safeTransfer_1830": {
					"entryPoint": 2236,
					"id": 1830,
					"parameterSlots": 3,
					"returnSlots": 0
				},
				"@supportsInterface_1508": {
					"entryPoint": 552,
					"id": 1508,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"@supportsInterface_3587": {
					"entryPoint": 1996,
					"id": 3587,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"@toUint_6985": {
					"entryPoint": 2962,
					"id": 6985,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"@tokenPrice_7050": {
					"entryPoint": 1613,
					"id": 7050,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"@tokenSold_7052": {
					"entryPoint": 1588,
					"id": 7052,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"@transferOwnership_126": {
					"entryPoint": 1864,
					"id": 126,
					"parameterSlots": 1,
					"returnSlots": 0
				},
				"@tryAdd_3675": {
					"entryPoint": 2563,
					"id": 3675,
					"parameterSlots": 2,
					"returnSlots": 2
				},
				"@withdrawPaymentTokens_7205": {
					"entryPoint": 673,
					"id": 7205,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"abi_decode_available_length_t_array$_t_uint256_$dyn_memory_ptr": {
					"entryPoint": 3755,
					"id": null,
					"parameterSlots": 3,
					"returnSlots": 1
				},
				"abi_decode_available_length_t_bytes_memory_ptr": {
					"entryPoint": 3970,
					"id": null,
					"parameterSlots": 3,
					"returnSlots": 1
				},
				"abi_decode_t_address": {
					"entryPoint": 3548,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_decode_t_array$_t_uint256_$dyn_memory_ptr": {
					"entryPoint": 3859,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_decode_t_bytes4": {
					"entryPoint": 3055,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_decode_t_bytes_memory_ptr": {
					"entryPoint": 4035,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_decode_t_uint256": {
					"entryPoint": 3200,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_decode_t_uint256_fromMemory": {
					"entryPoint": 4513,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_decode_tuple_t_address": {
					"entryPoint": 4470,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_decode_tuple_t_addresst_addresst_array$_t_uint256_$dyn_memory_ptrt_array$_t_uint256_$dyn_memory_ptrt_bytes_memory_ptr": {
					"entryPoint": 4080,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 5
				},
				"abi_decode_tuple_t_addresst_addresst_uint256t_uint256t_bytes_memory_ptr": {
					"entryPoint": 4323,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 5
				},
				"abi_decode_tuple_t_bytes4": {
					"entryPoint": 3075,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_decode_tuple_t_uint256_fromMemory": {
					"entryPoint": 4533,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_decode_tuple_t_uint256t_uint256": {
					"entryPoint": 3220,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 2
				},
				"abi_encode_t_address_to_t_address_fromStack": {
					"entryPoint": 3486,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 0
				},
				"abi_encode_t_bool_to_t_bool_fromStack": {
					"entryPoint": 3129,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 0
				},
				"abi_encode_t_bytes4_to_t_bytes4_fromStack": {
					"entryPoint": 4283,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 0
				},
				"abi_encode_t_contract$_IERC20_$1785_to_t_address_fromStack": {
					"entryPoint": 3389,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 0
				},
				"abi_encode_t_rational_1_by_1_to_t_uint256_fromStack": {
					"entryPoint": 4738,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 0
				},
				"abi_encode_t_stringliteral_401a543cc0af2324882d3b84b4e67a67bc85d263f8e099548a0affdc67d04bc0_to_t_string_memory_ptr_fromStack": {
					"entryPoint": 5046,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"abi_encode_t_stringliteral_a7e5e4d46ea524835ea36125140e247d59a2bce707f2094f88605dba8157d192_to_t_string_memory_ptr_fromStack": {
					"entryPoint": 4832,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"abi_encode_t_stringliteral_bdc84b596d1584baca462ea0883d91180d5d58efdc428f4038e51fd7334f8990_to_t_string_memory_ptr_fromStack": {
					"entryPoint": 4632,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"abi_encode_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470_to_t_bytes_memory_ptr_fromStack": {
					"entryPoint": 5129,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"abi_encode_t_uint256_to_t_uint256_fromStack": {
					"entryPoint": 3429,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 0
				},
				"abi_encode_tuple_t_address__to_t_address__fromStack_reversed": {
					"entryPoint": 3501,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed": {
					"entryPoint": 5286,
					"id": null,
					"parameterSlots": 4,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_address_t_address_t_uint256_t_uint256_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470__to_t_address_t_address_t_uint256_t_uint256_t_bytes_memory_ptr__fromStack_reversed": {
					"entryPoint": 5161,
					"id": null,
					"parameterSlots": 5,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_address_t_rational_1_by_1__to_t_address_t_uint256__fromStack_reversed": {
					"entryPoint": 4753,
					"id": null,
					"parameterSlots": 3,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed": {
					"entryPoint": 5247,
					"id": null,
					"parameterSlots": 3,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed": {
					"entryPoint": 3144,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed": {
					"entryPoint": 4298,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_contract$_IERC20_$1785__to_t_address__fromStack_reversed": {
					"entryPoint": 3404,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_stringliteral_401a543cc0af2324882d3b84b4e67a67bc85d263f8e099548a0affdc67d04bc0__to_t_string_memory_ptr__fromStack_reversed": {
					"entryPoint": 5080,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_stringliteral_a7e5e4d46ea524835ea36125140e247d59a2bce707f2094f88605dba8157d192__to_t_string_memory_ptr__fromStack_reversed": {
					"entryPoint": 4866,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_stringliteral_bdc84b596d1584baca462ea0883d91180d5d58efdc428f4038e51fd7334f8990__to_t_string_memory_ptr__fromStack_reversed": {
					"entryPoint": 4666,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed": {
					"entryPoint": 3444,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"allocate_memory": {
					"entryPoint": 3682,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"allocate_unbounded": {
					"entryPoint": 2973,
					"id": null,
					"parameterSlots": 0,
					"returnSlots": 1
				},
				"array_allocation_size_t_array$_t_uint256_$dyn_memory_ptr": {
					"entryPoint": 3708,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"array_allocation_size_t_bytes_memory_ptr": {
					"entryPoint": 3908,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack": {
					"entryPoint": 5110,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"array_storeLengthForEncoding_t_string_memory_ptr_fromStack": {
					"entryPoint": 4576,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"checked_mul_t_uint256": {
					"entryPoint": 4941,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 1
				},
				"cleanup_t_address": {
					"entryPoint": 3469,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"cleanup_t_bool": {
					"entryPoint": 3118,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"cleanup_t_bytes4": {
					"entryPoint": 2990,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"cleanup_t_rational_1_by_1": {
					"entryPoint": 4696,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"cleanup_t_uint160": {
					"entryPoint": 3282,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"cleanup_t_uint256": {
					"entryPoint": 3169,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"convert_t_contract$_IERC20_$1785_to_t_address": {
					"entryPoint": 3372,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"convert_t_rational_1_by_1_to_t_uint256": {
					"entryPoint": 4705,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"convert_t_uint160_to_t_address": {
					"entryPoint": 3355,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"convert_t_uint160_to_t_uint160": {
					"entryPoint": 3322,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"copy_calldata_to_memory_with_cleanup": {
					"entryPoint": 3956,
					"id": null,
					"parameterSlots": 3,
					"returnSlots": 0
				},
				"finalize_allocation": {
					"entryPoint": 3633,
					"id": null,
					"parameterSlots": 2,
					"returnSlots": 0
				},
				"identity": {
					"entryPoint": 3313,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"panic_error_0x11": {
					"entryPoint": 4896,
					"id": null,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"panic_error_0x41": {
					"entryPoint": 3588,
					"id": null,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d": {
					"entryPoint": 3568,
					"id": null,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef": {
					"entryPoint": 3751,
					"id": null,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae": {
					"entryPoint": 3904,
					"id": null,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db": {
					"entryPoint": 2986,
					"id": null,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b": {
					"entryPoint": 2982,
					"id": null,
					"parameterSlots": 0,
					"returnSlots": 0
				},
				"round_up_to_mul_of_32": {
					"entryPoint": 3572,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 1
				},
				"store_literal_in_memory_401a543cc0af2324882d3b84b4e67a67bc85d263f8e099548a0affdc67d04bc0": {
					"entryPoint": 5006,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 0
				},
				"store_literal_in_memory_a7e5e4d46ea524835ea36125140e247d59a2bce707f2094f88605dba8157d192": {
					"entryPoint": 4792,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 0
				},
				"store_literal_in_memory_bdc84b596d1584baca462ea0883d91180d5d58efdc428f4038e51fd7334f8990": {
					"entryPoint": 4592,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 0
				},
				"store_literal_in_memory_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470": {
					"entryPoint": 5126,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 0
				},
				"validator_revert_t_address": {
					"entryPoint": 3526,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 0
				},
				"validator_revert_t_bytes4": {
					"entryPoint": 3033,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 0
				},
				"validator_revert_t_uint256": {
					"entryPoint": 3178,
					"id": null,
					"parameterSlots": 1,
					"returnSlots": 0
				}
			},
			"generatedSources": [
				{
					"ast": {
						"nativeSrc": "0:18849:26",
						"nodeType": "YulBlock",
						"src": "0:18849:26",
						"statements": [
							{
								"body": {
									"nativeSrc": "47:35:26",
									"nodeType": "YulBlock",
									"src": "47:35:26",
									"statements": [
										{
											"nativeSrc": "57:19:26",
											"nodeType": "YulAssignment",
											"src": "57:19:26",
											"value": {
												"arguments": [
													{
														"kind": "number",
														"nativeSrc": "73:2:26",
														"nodeType": "YulLiteral",
														"src": "73:2:26",
														"type": "",
														"value": "64"
													}
												],
												"functionName": {
													"name": "mload",
													"nativeSrc": "67:5:26",
													"nodeType": "YulIdentifier",
													"src": "67:5:26"
												},
												"nativeSrc": "67:9:26",
												"nodeType": "YulFunctionCall",
												"src": "67:9:26"
											},
											"variableNames": [
												{
													"name": "memPtr",
													"nativeSrc": "57:6:26",
													"nodeType": "YulIdentifier",
													"src": "57:6:26"
												}
											]
										}
									]
								},
								"name": "allocate_unbounded",
								"nativeSrc": "7:75:26",
								"nodeType": "YulFunctionDefinition",
								"returnVariables": [
									{
										"name": "memPtr",
										"nativeSrc": "40:6:26",
										"nodeType": "YulTypedName",
										"src": "40:6:26",
										"type": ""
									}
								],
								"src": "7:75:26"
							},
							{
								"body": {
									"nativeSrc": "177:28:26",
									"nodeType": "YulBlock",
									"src": "177:28:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nativeSrc": "194:1:26",
														"nodeType": "YulLiteral",
														"src": "194:1:26",
														"type": "",
														"value": "0"
													},
													{
														"kind": "number",
														"nativeSrc": "197:1:26",
														"nodeType": "YulLiteral",
														"src": "197:1:26",
														"type": "",
														"value": "0"
													}
												],
												"functionName": {
													"name": "revert",
													"nativeSrc": "187:6:26",
													"nodeType": "YulIdentifier",
													"src": "187:6:26"
												},
												"nativeSrc": "187:12:26",
												"nodeType": "YulFunctionCall",
												"src": "187:12:26"
											},
											"nativeSrc": "187:12:26",
											"nodeType": "YulExpressionStatement",
											"src": "187:12:26"
										}
									]
								},
								"name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
								"nativeSrc": "88:117:26",
								"nodeType": "YulFunctionDefinition",
								"src": "88:117:26"
							},
							{
								"body": {
									"nativeSrc": "300:28:26",
									"nodeType": "YulBlock",
									"src": "300:28:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nativeSrc": "317:1:26",
														"nodeType": "YulLiteral",
														"src": "317:1:26",
														"type": "",
														"value": "0"
													},
													{
														"kind": "number",
														"nativeSrc": "320:1:26",
														"nodeType": "YulLiteral",
														"src": "320:1:26",
														"type": "",
														"value": "0"
													}
												],
												"functionName": {
													"name": "revert",
													"nativeSrc": "310:6:26",
													"nodeType": "YulIdentifier",
													"src": "310:6:26"
												},
												"nativeSrc": "310:12:26",
												"nodeType": "YulFunctionCall",
												"src": "310:12:26"
											},
											"nativeSrc": "310:12:26",
											"nodeType": "YulExpressionStatement",
											"src": "310:12:26"
										}
									]
								},
								"name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
								"nativeSrc": "211:117:26",
								"nodeType": "YulFunctionDefinition",
								"src": "211:117:26"
							},
							{
								"body": {
									"nativeSrc": "378:105:26",
									"nodeType": "YulBlock",
									"src": "378:105:26",
									"statements": [
										{
											"nativeSrc": "388:89:26",
											"nodeType": "YulAssignment",
											"src": "388:89:26",
											"value": {
												"arguments": [
													{
														"name": "value",
														"nativeSrc": "403:5:26",
														"nodeType": "YulIdentifier",
														"src": "403:5:26"
													},
													{
														"kind": "number",
														"nativeSrc": "410:66:26",
														"nodeType": "YulLiteral",
														"src": "410:66:26",
														"type": "",
														"value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
													}
												],
												"functionName": {
													"name": "and",
													"nativeSrc": "399:3:26",
													"nodeType": "YulIdentifier",
													"src": "399:3:26"
												},
												"nativeSrc": "399:78:26",
												"nodeType": "YulFunctionCall",
												"src": "399:78:26"
											},
											"variableNames": [
												{
													"name": "cleaned",
													"nativeSrc": "388:7:26",
													"nodeType": "YulIdentifier",
													"src": "388:7:26"
												}
											]
										}
									]
								},
								"name": "cleanup_t_bytes4",
								"nativeSrc": "334:149:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "360:5:26",
										"nodeType": "YulTypedName",
										"src": "360:5:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "cleaned",
										"nativeSrc": "370:7:26",
										"nodeType": "YulTypedName",
										"src": "370:7:26",
										"type": ""
									}
								],
								"src": "334:149:26"
							},
							{
								"body": {
									"nativeSrc": "531:78:26",
									"nodeType": "YulBlock",
									"src": "531:78:26",
									"statements": [
										{
											"body": {
												"nativeSrc": "587:16:26",
												"nodeType": "YulBlock",
												"src": "587:16:26",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nativeSrc": "596:1:26",
																	"nodeType": "YulLiteral",
																	"src": "596:1:26",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nativeSrc": "599:1:26",
																	"nodeType": "YulLiteral",
																	"src": "599:1:26",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nativeSrc": "589:6:26",
																"nodeType": "YulIdentifier",
																"src": "589:6:26"
															},
															"nativeSrc": "589:12:26",
															"nodeType": "YulFunctionCall",
															"src": "589:12:26"
														},
														"nativeSrc": "589:12:26",
														"nodeType": "YulExpressionStatement",
														"src": "589:12:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "value",
																"nativeSrc": "554:5:26",
																"nodeType": "YulIdentifier",
																"src": "554:5:26"
															},
															{
																"arguments": [
																	{
																		"name": "value",
																		"nativeSrc": "578:5:26",
																		"nodeType": "YulIdentifier",
																		"src": "578:5:26"
																	}
																],
																"functionName": {
																	"name": "cleanup_t_bytes4",
																	"nativeSrc": "561:16:26",
																	"nodeType": "YulIdentifier",
																	"src": "561:16:26"
																},
																"nativeSrc": "561:23:26",
																"nodeType": "YulFunctionCall",
																"src": "561:23:26"
															}
														],
														"functionName": {
															"name": "eq",
															"nativeSrc": "551:2:26",
															"nodeType": "YulIdentifier",
															"src": "551:2:26"
														},
														"nativeSrc": "551:34:26",
														"nodeType": "YulFunctionCall",
														"src": "551:34:26"
													}
												],
												"functionName": {
													"name": "iszero",
													"nativeSrc": "544:6:26",
													"nodeType": "YulIdentifier",
													"src": "544:6:26"
												},
												"nativeSrc": "544:42:26",
												"nodeType": "YulFunctionCall",
												"src": "544:42:26"
											},
											"nativeSrc": "541:62:26",
											"nodeType": "YulIf",
											"src": "541:62:26"
										}
									]
								},
								"name": "validator_revert_t_bytes4",
								"nativeSrc": "489:120:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "524:5:26",
										"nodeType": "YulTypedName",
										"src": "524:5:26",
										"type": ""
									}
								],
								"src": "489:120:26"
							},
							{
								"body": {
									"nativeSrc": "666:86:26",
									"nodeType": "YulBlock",
									"src": "666:86:26",
									"statements": [
										{
											"nativeSrc": "676:29:26",
											"nodeType": "YulAssignment",
											"src": "676:29:26",
											"value": {
												"arguments": [
													{
														"name": "offset",
														"nativeSrc": "698:6:26",
														"nodeType": "YulIdentifier",
														"src": "698:6:26"
													}
												],
												"functionName": {
													"name": "calldataload",
													"nativeSrc": "685:12:26",
													"nodeType": "YulIdentifier",
													"src": "685:12:26"
												},
												"nativeSrc": "685:20:26",
												"nodeType": "YulFunctionCall",
												"src": "685:20:26"
											},
											"variableNames": [
												{
													"name": "value",
													"nativeSrc": "676:5:26",
													"nodeType": "YulIdentifier",
													"src": "676:5:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value",
														"nativeSrc": "740:5:26",
														"nodeType": "YulIdentifier",
														"src": "740:5:26"
													}
												],
												"functionName": {
													"name": "validator_revert_t_bytes4",
													"nativeSrc": "714:25:26",
													"nodeType": "YulIdentifier",
													"src": "714:25:26"
												},
												"nativeSrc": "714:32:26",
												"nodeType": "YulFunctionCall",
												"src": "714:32:26"
											},
											"nativeSrc": "714:32:26",
											"nodeType": "YulExpressionStatement",
											"src": "714:32:26"
										}
									]
								},
								"name": "abi_decode_t_bytes4",
								"nativeSrc": "615:137:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "offset",
										"nativeSrc": "644:6:26",
										"nodeType": "YulTypedName",
										"src": "644:6:26",
										"type": ""
									},
									{
										"name": "end",
										"nativeSrc": "652:3:26",
										"nodeType": "YulTypedName",
										"src": "652:3:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value",
										"nativeSrc": "660:5:26",
										"nodeType": "YulTypedName",
										"src": "660:5:26",
										"type": ""
									}
								],
								"src": "615:137:26"
							},
							{
								"body": {
									"nativeSrc": "823:262:26",
									"nodeType": "YulBlock",
									"src": "823:262:26",
									"statements": [
										{
											"body": {
												"nativeSrc": "869:83:26",
												"nodeType": "YulBlock",
												"src": "869:83:26",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
																"nativeSrc": "871:77:26",
																"nodeType": "YulIdentifier",
																"src": "871:77:26"
															},
															"nativeSrc": "871:79:26",
															"nodeType": "YulFunctionCall",
															"src": "871:79:26"
														},
														"nativeSrc": "871:79:26",
														"nodeType": "YulExpressionStatement",
														"src": "871:79:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "dataEnd",
																"nativeSrc": "844:7:26",
																"nodeType": "YulIdentifier",
																"src": "844:7:26"
															},
															{
																"name": "headStart",
																"nativeSrc": "853:9:26",
																"nodeType": "YulIdentifier",
																"src": "853:9:26"
															}
														],
														"functionName": {
															"name": "sub",
															"nativeSrc": "840:3:26",
															"nodeType": "YulIdentifier",
															"src": "840:3:26"
														},
														"nativeSrc": "840:23:26",
														"nodeType": "YulFunctionCall",
														"src": "840:23:26"
													},
													{
														"kind": "number",
														"nativeSrc": "865:2:26",
														"nodeType": "YulLiteral",
														"src": "865:2:26",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "slt",
													"nativeSrc": "836:3:26",
													"nodeType": "YulIdentifier",
													"src": "836:3:26"
												},
												"nativeSrc": "836:32:26",
												"nodeType": "YulFunctionCall",
												"src": "836:32:26"
											},
											"nativeSrc": "833:119:26",
											"nodeType": "YulIf",
											"src": "833:119:26"
										},
										{
											"nativeSrc": "962:116:26",
											"nodeType": "YulBlock",
											"src": "962:116:26",
											"statements": [
												{
													"nativeSrc": "977:15:26",
													"nodeType": "YulVariableDeclaration",
													"src": "977:15:26",
													"value": {
														"kind": "number",
														"nativeSrc": "991:1:26",
														"nodeType": "YulLiteral",
														"src": "991:1:26",
														"type": "",
														"value": "0"
													},
													"variables": [
														{
															"name": "offset",
															"nativeSrc": "981:6:26",
															"nodeType": "YulTypedName",
															"src": "981:6:26",
															"type": ""
														}
													]
												},
												{
													"nativeSrc": "1006:62:26",
													"nodeType": "YulAssignment",
													"src": "1006:62:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "1040:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "1040:9:26"
																	},
																	{
																		"name": "offset",
																		"nativeSrc": "1051:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "1051:6:26"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "1036:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "1036:3:26"
																},
																"nativeSrc": "1036:22:26",
																"nodeType": "YulFunctionCall",
																"src": "1036:22:26"
															},
															{
																"name": "dataEnd",
																"nativeSrc": "1060:7:26",
																"nodeType": "YulIdentifier",
																"src": "1060:7:26"
															}
														],
														"functionName": {
															"name": "abi_decode_t_bytes4",
															"nativeSrc": "1016:19:26",
															"nodeType": "YulIdentifier",
															"src": "1016:19:26"
														},
														"nativeSrc": "1016:52:26",
														"nodeType": "YulFunctionCall",
														"src": "1016:52:26"
													},
													"variableNames": [
														{
															"name": "value0",
															"nativeSrc": "1006:6:26",
															"nodeType": "YulIdentifier",
															"src": "1006:6:26"
														}
													]
												}
											]
										}
									]
								},
								"name": "abi_decode_tuple_t_bytes4",
								"nativeSrc": "758:327:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "793:9:26",
										"nodeType": "YulTypedName",
										"src": "793:9:26",
										"type": ""
									},
									{
										"name": "dataEnd",
										"nativeSrc": "804:7:26",
										"nodeType": "YulTypedName",
										"src": "804:7:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value0",
										"nativeSrc": "816:6:26",
										"nodeType": "YulTypedName",
										"src": "816:6:26",
										"type": ""
									}
								],
								"src": "758:327:26"
							},
							{
								"body": {
									"nativeSrc": "1133:48:26",
									"nodeType": "YulBlock",
									"src": "1133:48:26",
									"statements": [
										{
											"nativeSrc": "1143:32:26",
											"nodeType": "YulAssignment",
											"src": "1143:32:26",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "value",
																"nativeSrc": "1168:5:26",
																"nodeType": "YulIdentifier",
																"src": "1168:5:26"
															}
														],
														"functionName": {
															"name": "iszero",
															"nativeSrc": "1161:6:26",
															"nodeType": "YulIdentifier",
															"src": "1161:6:26"
														},
														"nativeSrc": "1161:13:26",
														"nodeType": "YulFunctionCall",
														"src": "1161:13:26"
													}
												],
												"functionName": {
													"name": "iszero",
													"nativeSrc": "1154:6:26",
													"nodeType": "YulIdentifier",
													"src": "1154:6:26"
												},
												"nativeSrc": "1154:21:26",
												"nodeType": "YulFunctionCall",
												"src": "1154:21:26"
											},
											"variableNames": [
												{
													"name": "cleaned",
													"nativeSrc": "1143:7:26",
													"nodeType": "YulIdentifier",
													"src": "1143:7:26"
												}
											]
										}
									]
								},
								"name": "cleanup_t_bool",
								"nativeSrc": "1091:90:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "1115:5:26",
										"nodeType": "YulTypedName",
										"src": "1115:5:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "cleaned",
										"nativeSrc": "1125:7:26",
										"nodeType": "YulTypedName",
										"src": "1125:7:26",
										"type": ""
									}
								],
								"src": "1091:90:26"
							},
							{
								"body": {
									"nativeSrc": "1246:50:26",
									"nodeType": "YulBlock",
									"src": "1246:50:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "1263:3:26",
														"nodeType": "YulIdentifier",
														"src": "1263:3:26"
													},
													{
														"arguments": [
															{
																"name": "value",
																"nativeSrc": "1283:5:26",
																"nodeType": "YulIdentifier",
																"src": "1283:5:26"
															}
														],
														"functionName": {
															"name": "cleanup_t_bool",
															"nativeSrc": "1268:14:26",
															"nodeType": "YulIdentifier",
															"src": "1268:14:26"
														},
														"nativeSrc": "1268:21:26",
														"nodeType": "YulFunctionCall",
														"src": "1268:21:26"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "1256:6:26",
													"nodeType": "YulIdentifier",
													"src": "1256:6:26"
												},
												"nativeSrc": "1256:34:26",
												"nodeType": "YulFunctionCall",
												"src": "1256:34:26"
											},
											"nativeSrc": "1256:34:26",
											"nodeType": "YulExpressionStatement",
											"src": "1256:34:26"
										}
									]
								},
								"name": "abi_encode_t_bool_to_t_bool_fromStack",
								"nativeSrc": "1187:109:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "1234:5:26",
										"nodeType": "YulTypedName",
										"src": "1234:5:26",
										"type": ""
									},
									{
										"name": "pos",
										"nativeSrc": "1241:3:26",
										"nodeType": "YulTypedName",
										"src": "1241:3:26",
										"type": ""
									}
								],
								"src": "1187:109:26"
							},
							{
								"body": {
									"nativeSrc": "1394:118:26",
									"nodeType": "YulBlock",
									"src": "1394:118:26",
									"statements": [
										{
											"nativeSrc": "1404:26:26",
											"nodeType": "YulAssignment",
											"src": "1404:26:26",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nativeSrc": "1416:9:26",
														"nodeType": "YulIdentifier",
														"src": "1416:9:26"
													},
													{
														"kind": "number",
														"nativeSrc": "1427:2:26",
														"nodeType": "YulLiteral",
														"src": "1427:2:26",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "1412:3:26",
													"nodeType": "YulIdentifier",
													"src": "1412:3:26"
												},
												"nativeSrc": "1412:18:26",
												"nodeType": "YulFunctionCall",
												"src": "1412:18:26"
											},
											"variableNames": [
												{
													"name": "tail",
													"nativeSrc": "1404:4:26",
													"nodeType": "YulIdentifier",
													"src": "1404:4:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value0",
														"nativeSrc": "1478:6:26",
														"nodeType": "YulIdentifier",
														"src": "1478:6:26"
													},
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "1491:9:26",
																"nodeType": "YulIdentifier",
																"src": "1491:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "1502:1:26",
																"nodeType": "YulLiteral",
																"src": "1502:1:26",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "1487:3:26",
															"nodeType": "YulIdentifier",
															"src": "1487:3:26"
														},
														"nativeSrc": "1487:17:26",
														"nodeType": "YulFunctionCall",
														"src": "1487:17:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_bool_to_t_bool_fromStack",
													"nativeSrc": "1440:37:26",
													"nodeType": "YulIdentifier",
													"src": "1440:37:26"
												},
												"nativeSrc": "1440:65:26",
												"nodeType": "YulFunctionCall",
												"src": "1440:65:26"
											},
											"nativeSrc": "1440:65:26",
											"nodeType": "YulExpressionStatement",
											"src": "1440:65:26"
										}
									]
								},
								"name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
								"nativeSrc": "1302:210:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "1366:9:26",
										"nodeType": "YulTypedName",
										"src": "1366:9:26",
										"type": ""
									},
									{
										"name": "value0",
										"nativeSrc": "1378:6:26",
										"nodeType": "YulTypedName",
										"src": "1378:6:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nativeSrc": "1389:4:26",
										"nodeType": "YulTypedName",
										"src": "1389:4:26",
										"type": ""
									}
								],
								"src": "1302:210:26"
							},
							{
								"body": {
									"nativeSrc": "1563:32:26",
									"nodeType": "YulBlock",
									"src": "1563:32:26",
									"statements": [
										{
											"nativeSrc": "1573:16:26",
											"nodeType": "YulAssignment",
											"src": "1573:16:26",
											"value": {
												"name": "value",
												"nativeSrc": "1584:5:26",
												"nodeType": "YulIdentifier",
												"src": "1584:5:26"
											},
											"variableNames": [
												{
													"name": "cleaned",
													"nativeSrc": "1573:7:26",
													"nodeType": "YulIdentifier",
													"src": "1573:7:26"
												}
											]
										}
									]
								},
								"name": "cleanup_t_uint256",
								"nativeSrc": "1518:77:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "1545:5:26",
										"nodeType": "YulTypedName",
										"src": "1545:5:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "cleaned",
										"nativeSrc": "1555:7:26",
										"nodeType": "YulTypedName",
										"src": "1555:7:26",
										"type": ""
									}
								],
								"src": "1518:77:26"
							},
							{
								"body": {
									"nativeSrc": "1644:79:26",
									"nodeType": "YulBlock",
									"src": "1644:79:26",
									"statements": [
										{
											"body": {
												"nativeSrc": "1701:16:26",
												"nodeType": "YulBlock",
												"src": "1701:16:26",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nativeSrc": "1710:1:26",
																	"nodeType": "YulLiteral",
																	"src": "1710:1:26",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nativeSrc": "1713:1:26",
																	"nodeType": "YulLiteral",
																	"src": "1713:1:26",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nativeSrc": "1703:6:26",
																"nodeType": "YulIdentifier",
																"src": "1703:6:26"
															},
															"nativeSrc": "1703:12:26",
															"nodeType": "YulFunctionCall",
															"src": "1703:12:26"
														},
														"nativeSrc": "1703:12:26",
														"nodeType": "YulExpressionStatement",
														"src": "1703:12:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "value",
																"nativeSrc": "1667:5:26",
																"nodeType": "YulIdentifier",
																"src": "1667:5:26"
															},
															{
																"arguments": [
																	{
																		"name": "value",
																		"nativeSrc": "1692:5:26",
																		"nodeType": "YulIdentifier",
																		"src": "1692:5:26"
																	}
																],
																"functionName": {
																	"name": "cleanup_t_uint256",
																	"nativeSrc": "1674:17:26",
																	"nodeType": "YulIdentifier",
																	"src": "1674:17:26"
																},
																"nativeSrc": "1674:24:26",
																"nodeType": "YulFunctionCall",
																"src": "1674:24:26"
															}
														],
														"functionName": {
															"name": "eq",
															"nativeSrc": "1664:2:26",
															"nodeType": "YulIdentifier",
															"src": "1664:2:26"
														},
														"nativeSrc": "1664:35:26",
														"nodeType": "YulFunctionCall",
														"src": "1664:35:26"
													}
												],
												"functionName": {
													"name": "iszero",
													"nativeSrc": "1657:6:26",
													"nodeType": "YulIdentifier",
													"src": "1657:6:26"
												},
												"nativeSrc": "1657:43:26",
												"nodeType": "YulFunctionCall",
												"src": "1657:43:26"
											},
											"nativeSrc": "1654:63:26",
											"nodeType": "YulIf",
											"src": "1654:63:26"
										}
									]
								},
								"name": "validator_revert_t_uint256",
								"nativeSrc": "1601:122:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "1637:5:26",
										"nodeType": "YulTypedName",
										"src": "1637:5:26",
										"type": ""
									}
								],
								"src": "1601:122:26"
							},
							{
								"body": {
									"nativeSrc": "1781:87:26",
									"nodeType": "YulBlock",
									"src": "1781:87:26",
									"statements": [
										{
											"nativeSrc": "1791:29:26",
											"nodeType": "YulAssignment",
											"src": "1791:29:26",
											"value": {
												"arguments": [
													{
														"name": "offset",
														"nativeSrc": "1813:6:26",
														"nodeType": "YulIdentifier",
														"src": "1813:6:26"
													}
												],
												"functionName": {
													"name": "calldataload",
													"nativeSrc": "1800:12:26",
													"nodeType": "YulIdentifier",
													"src": "1800:12:26"
												},
												"nativeSrc": "1800:20:26",
												"nodeType": "YulFunctionCall",
												"src": "1800:20:26"
											},
											"variableNames": [
												{
													"name": "value",
													"nativeSrc": "1791:5:26",
													"nodeType": "YulIdentifier",
													"src": "1791:5:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value",
														"nativeSrc": "1856:5:26",
														"nodeType": "YulIdentifier",
														"src": "1856:5:26"
													}
												],
												"functionName": {
													"name": "validator_revert_t_uint256",
													"nativeSrc": "1829:26:26",
													"nodeType": "YulIdentifier",
													"src": "1829:26:26"
												},
												"nativeSrc": "1829:33:26",
												"nodeType": "YulFunctionCall",
												"src": "1829:33:26"
											},
											"nativeSrc": "1829:33:26",
											"nodeType": "YulExpressionStatement",
											"src": "1829:33:26"
										}
									]
								},
								"name": "abi_decode_t_uint256",
								"nativeSrc": "1729:139:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "offset",
										"nativeSrc": "1759:6:26",
										"nodeType": "YulTypedName",
										"src": "1759:6:26",
										"type": ""
									},
									{
										"name": "end",
										"nativeSrc": "1767:3:26",
										"nodeType": "YulTypedName",
										"src": "1767:3:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value",
										"nativeSrc": "1775:5:26",
										"nodeType": "YulTypedName",
										"src": "1775:5:26",
										"type": ""
									}
								],
								"src": "1729:139:26"
							},
							{
								"body": {
									"nativeSrc": "1957:391:26",
									"nodeType": "YulBlock",
									"src": "1957:391:26",
									"statements": [
										{
											"body": {
												"nativeSrc": "2003:83:26",
												"nodeType": "YulBlock",
												"src": "2003:83:26",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
																"nativeSrc": "2005:77:26",
																"nodeType": "YulIdentifier",
																"src": "2005:77:26"
															},
															"nativeSrc": "2005:79:26",
															"nodeType": "YulFunctionCall",
															"src": "2005:79:26"
														},
														"nativeSrc": "2005:79:26",
														"nodeType": "YulExpressionStatement",
														"src": "2005:79:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "dataEnd",
																"nativeSrc": "1978:7:26",
																"nodeType": "YulIdentifier",
																"src": "1978:7:26"
															},
															{
																"name": "headStart",
																"nativeSrc": "1987:9:26",
																"nodeType": "YulIdentifier",
																"src": "1987:9:26"
															}
														],
														"functionName": {
															"name": "sub",
															"nativeSrc": "1974:3:26",
															"nodeType": "YulIdentifier",
															"src": "1974:3:26"
														},
														"nativeSrc": "1974:23:26",
														"nodeType": "YulFunctionCall",
														"src": "1974:23:26"
													},
													{
														"kind": "number",
														"nativeSrc": "1999:2:26",
														"nodeType": "YulLiteral",
														"src": "1999:2:26",
														"type": "",
														"value": "64"
													}
												],
												"functionName": {
													"name": "slt",
													"nativeSrc": "1970:3:26",
													"nodeType": "YulIdentifier",
													"src": "1970:3:26"
												},
												"nativeSrc": "1970:32:26",
												"nodeType": "YulFunctionCall",
												"src": "1970:32:26"
											},
											"nativeSrc": "1967:119:26",
											"nodeType": "YulIf",
											"src": "1967:119:26"
										},
										{
											"nativeSrc": "2096:117:26",
											"nodeType": "YulBlock",
											"src": "2096:117:26",
											"statements": [
												{
													"nativeSrc": "2111:15:26",
													"nodeType": "YulVariableDeclaration",
													"src": "2111:15:26",
													"value": {
														"kind": "number",
														"nativeSrc": "2125:1:26",
														"nodeType": "YulLiteral",
														"src": "2125:1:26",
														"type": "",
														"value": "0"
													},
													"variables": [
														{
															"name": "offset",
															"nativeSrc": "2115:6:26",
															"nodeType": "YulTypedName",
															"src": "2115:6:26",
															"type": ""
														}
													]
												},
												{
													"nativeSrc": "2140:63:26",
													"nodeType": "YulAssignment",
													"src": "2140:63:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "2175:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "2175:9:26"
																	},
																	{
																		"name": "offset",
																		"nativeSrc": "2186:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "2186:6:26"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "2171:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "2171:3:26"
																},
																"nativeSrc": "2171:22:26",
																"nodeType": "YulFunctionCall",
																"src": "2171:22:26"
															},
															{
																"name": "dataEnd",
																"nativeSrc": "2195:7:26",
																"nodeType": "YulIdentifier",
																"src": "2195:7:26"
															}
														],
														"functionName": {
															"name": "abi_decode_t_uint256",
															"nativeSrc": "2150:20:26",
															"nodeType": "YulIdentifier",
															"src": "2150:20:26"
														},
														"nativeSrc": "2150:53:26",
														"nodeType": "YulFunctionCall",
														"src": "2150:53:26"
													},
													"variableNames": [
														{
															"name": "value0",
															"nativeSrc": "2140:6:26",
															"nodeType": "YulIdentifier",
															"src": "2140:6:26"
														}
													]
												}
											]
										},
										{
											"nativeSrc": "2223:118:26",
											"nodeType": "YulBlock",
											"src": "2223:118:26",
											"statements": [
												{
													"nativeSrc": "2238:16:26",
													"nodeType": "YulVariableDeclaration",
													"src": "2238:16:26",
													"value": {
														"kind": "number",
														"nativeSrc": "2252:2:26",
														"nodeType": "YulLiteral",
														"src": "2252:2:26",
														"type": "",
														"value": "32"
													},
													"variables": [
														{
															"name": "offset",
															"nativeSrc": "2242:6:26",
															"nodeType": "YulTypedName",
															"src": "2242:6:26",
															"type": ""
														}
													]
												},
												{
													"nativeSrc": "2268:63:26",
													"nodeType": "YulAssignment",
													"src": "2268:63:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "2303:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "2303:9:26"
																	},
																	{
																		"name": "offset",
																		"nativeSrc": "2314:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "2314:6:26"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "2299:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "2299:3:26"
																},
																"nativeSrc": "2299:22:26",
																"nodeType": "YulFunctionCall",
																"src": "2299:22:26"
															},
															{
																"name": "dataEnd",
																"nativeSrc": "2323:7:26",
																"nodeType": "YulIdentifier",
																"src": "2323:7:26"
															}
														],
														"functionName": {
															"name": "abi_decode_t_uint256",
															"nativeSrc": "2278:20:26",
															"nodeType": "YulIdentifier",
															"src": "2278:20:26"
														},
														"nativeSrc": "2278:53:26",
														"nodeType": "YulFunctionCall",
														"src": "2278:53:26"
													},
													"variableNames": [
														{
															"name": "value1",
															"nativeSrc": "2268:6:26",
															"nodeType": "YulIdentifier",
															"src": "2268:6:26"
														}
													]
												}
											]
										}
									]
								},
								"name": "abi_decode_tuple_t_uint256t_uint256",
								"nativeSrc": "1874:474:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "1919:9:26",
										"nodeType": "YulTypedName",
										"src": "1919:9:26",
										"type": ""
									},
									{
										"name": "dataEnd",
										"nativeSrc": "1930:7:26",
										"nodeType": "YulTypedName",
										"src": "1930:7:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value0",
										"nativeSrc": "1942:6:26",
										"nodeType": "YulTypedName",
										"src": "1942:6:26",
										"type": ""
									},
									{
										"name": "value1",
										"nativeSrc": "1950:6:26",
										"nodeType": "YulTypedName",
										"src": "1950:6:26",
										"type": ""
									}
								],
								"src": "1874:474:26"
							},
							{
								"body": {
									"nativeSrc": "2399:81:26",
									"nodeType": "YulBlock",
									"src": "2399:81:26",
									"statements": [
										{
											"nativeSrc": "2409:65:26",
											"nodeType": "YulAssignment",
											"src": "2409:65:26",
											"value": {
												"arguments": [
													{
														"name": "value",
														"nativeSrc": "2424:5:26",
														"nodeType": "YulIdentifier",
														"src": "2424:5:26"
													},
													{
														"kind": "number",
														"nativeSrc": "2431:42:26",
														"nodeType": "YulLiteral",
														"src": "2431:42:26",
														"type": "",
														"value": "0xffffffffffffffffffffffffffffffffffffffff"
													}
												],
												"functionName": {
													"name": "and",
													"nativeSrc": "2420:3:26",
													"nodeType": "YulIdentifier",
													"src": "2420:3:26"
												},
												"nativeSrc": "2420:54:26",
												"nodeType": "YulFunctionCall",
												"src": "2420:54:26"
											},
											"variableNames": [
												{
													"name": "cleaned",
													"nativeSrc": "2409:7:26",
													"nodeType": "YulIdentifier",
													"src": "2409:7:26"
												}
											]
										}
									]
								},
								"name": "cleanup_t_uint160",
								"nativeSrc": "2354:126:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "2381:5:26",
										"nodeType": "YulTypedName",
										"src": "2381:5:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "cleaned",
										"nativeSrc": "2391:7:26",
										"nodeType": "YulTypedName",
										"src": "2391:7:26",
										"type": ""
									}
								],
								"src": "2354:126:26"
							},
							{
								"body": {
									"nativeSrc": "2518:28:26",
									"nodeType": "YulBlock",
									"src": "2518:28:26",
									"statements": [
										{
											"nativeSrc": "2528:12:26",
											"nodeType": "YulAssignment",
											"src": "2528:12:26",
											"value": {
												"name": "value",
												"nativeSrc": "2535:5:26",
												"nodeType": "YulIdentifier",
												"src": "2535:5:26"
											},
											"variableNames": [
												{
													"name": "ret",
													"nativeSrc": "2528:3:26",
													"nodeType": "YulIdentifier",
													"src": "2528:3:26"
												}
											]
										}
									]
								},
								"name": "identity",
								"nativeSrc": "2486:60:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "2504:5:26",
										"nodeType": "YulTypedName",
										"src": "2504:5:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "ret",
										"nativeSrc": "2514:3:26",
										"nodeType": "YulTypedName",
										"src": "2514:3:26",
										"type": ""
									}
								],
								"src": "2486:60:26"
							},
							{
								"body": {
									"nativeSrc": "2612:82:26",
									"nodeType": "YulBlock",
									"src": "2612:82:26",
									"statements": [
										{
											"nativeSrc": "2622:66:26",
											"nodeType": "YulAssignment",
											"src": "2622:66:26",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "value",
																		"nativeSrc": "2680:5:26",
																		"nodeType": "YulIdentifier",
																		"src": "2680:5:26"
																	}
																],
																"functionName": {
																	"name": "cleanup_t_uint160",
																	"nativeSrc": "2662:17:26",
																	"nodeType": "YulIdentifier",
																	"src": "2662:17:26"
																},
																"nativeSrc": "2662:24:26",
																"nodeType": "YulFunctionCall",
																"src": "2662:24:26"
															}
														],
														"functionName": {
															"name": "identity",
															"nativeSrc": "2653:8:26",
															"nodeType": "YulIdentifier",
															"src": "2653:8:26"
														},
														"nativeSrc": "2653:34:26",
														"nodeType": "YulFunctionCall",
														"src": "2653:34:26"
													}
												],
												"functionName": {
													"name": "cleanup_t_uint160",
													"nativeSrc": "2635:17:26",
													"nodeType": "YulIdentifier",
													"src": "2635:17:26"
												},
												"nativeSrc": "2635:53:26",
												"nodeType": "YulFunctionCall",
												"src": "2635:53:26"
											},
											"variableNames": [
												{
													"name": "converted",
													"nativeSrc": "2622:9:26",
													"nodeType": "YulIdentifier",
													"src": "2622:9:26"
												}
											]
										}
									]
								},
								"name": "convert_t_uint160_to_t_uint160",
								"nativeSrc": "2552:142:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "2592:5:26",
										"nodeType": "YulTypedName",
										"src": "2592:5:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "converted",
										"nativeSrc": "2602:9:26",
										"nodeType": "YulTypedName",
										"src": "2602:9:26",
										"type": ""
									}
								],
								"src": "2552:142:26"
							},
							{
								"body": {
									"nativeSrc": "2760:66:26",
									"nodeType": "YulBlock",
									"src": "2760:66:26",
									"statements": [
										{
											"nativeSrc": "2770:50:26",
											"nodeType": "YulAssignment",
											"src": "2770:50:26",
											"value": {
												"arguments": [
													{
														"name": "value",
														"nativeSrc": "2814:5:26",
														"nodeType": "YulIdentifier",
														"src": "2814:5:26"
													}
												],
												"functionName": {
													"name": "convert_t_uint160_to_t_uint160",
													"nativeSrc": "2783:30:26",
													"nodeType": "YulIdentifier",
													"src": "2783:30:26"
												},
												"nativeSrc": "2783:37:26",
												"nodeType": "YulFunctionCall",
												"src": "2783:37:26"
											},
											"variableNames": [
												{
													"name": "converted",
													"nativeSrc": "2770:9:26",
													"nodeType": "YulIdentifier",
													"src": "2770:9:26"
												}
											]
										}
									]
								},
								"name": "convert_t_uint160_to_t_address",
								"nativeSrc": "2700:126:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "2740:5:26",
										"nodeType": "YulTypedName",
										"src": "2740:5:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "converted",
										"nativeSrc": "2750:9:26",
										"nodeType": "YulTypedName",
										"src": "2750:9:26",
										"type": ""
									}
								],
								"src": "2700:126:26"
							},
							{
								"body": {
									"nativeSrc": "2907:66:26",
									"nodeType": "YulBlock",
									"src": "2907:66:26",
									"statements": [
										{
											"nativeSrc": "2917:50:26",
											"nodeType": "YulAssignment",
											"src": "2917:50:26",
											"value": {
												"arguments": [
													{
														"name": "value",
														"nativeSrc": "2961:5:26",
														"nodeType": "YulIdentifier",
														"src": "2961:5:26"
													}
												],
												"functionName": {
													"name": "convert_t_uint160_to_t_address",
													"nativeSrc": "2930:30:26",
													"nodeType": "YulIdentifier",
													"src": "2930:30:26"
												},
												"nativeSrc": "2930:37:26",
												"nodeType": "YulFunctionCall",
												"src": "2930:37:26"
											},
											"variableNames": [
												{
													"name": "converted",
													"nativeSrc": "2917:9:26",
													"nodeType": "YulIdentifier",
													"src": "2917:9:26"
												}
											]
										}
									]
								},
								"name": "convert_t_contract$_IERC20_$1785_to_t_address",
								"nativeSrc": "2832:141:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "2887:5:26",
										"nodeType": "YulTypedName",
										"src": "2887:5:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "converted",
										"nativeSrc": "2897:9:26",
										"nodeType": "YulTypedName",
										"src": "2897:9:26",
										"type": ""
									}
								],
								"src": "2832:141:26"
							},
							{
								"body": {
									"nativeSrc": "3059:81:26",
									"nodeType": "YulBlock",
									"src": "3059:81:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "3076:3:26",
														"nodeType": "YulIdentifier",
														"src": "3076:3:26"
													},
													{
														"arguments": [
															{
																"name": "value",
																"nativeSrc": "3127:5:26",
																"nodeType": "YulIdentifier",
																"src": "3127:5:26"
															}
														],
														"functionName": {
															"name": "convert_t_contract$_IERC20_$1785_to_t_address",
															"nativeSrc": "3081:45:26",
															"nodeType": "YulIdentifier",
															"src": "3081:45:26"
														},
														"nativeSrc": "3081:52:26",
														"nodeType": "YulFunctionCall",
														"src": "3081:52:26"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "3069:6:26",
													"nodeType": "YulIdentifier",
													"src": "3069:6:26"
												},
												"nativeSrc": "3069:65:26",
												"nodeType": "YulFunctionCall",
												"src": "3069:65:26"
											},
											"nativeSrc": "3069:65:26",
											"nodeType": "YulExpressionStatement",
											"src": "3069:65:26"
										}
									]
								},
								"name": "abi_encode_t_contract$_IERC20_$1785_to_t_address_fromStack",
								"nativeSrc": "2979:161:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "3047:5:26",
										"nodeType": "YulTypedName",
										"src": "3047:5:26",
										"type": ""
									},
									{
										"name": "pos",
										"nativeSrc": "3054:3:26",
										"nodeType": "YulTypedName",
										"src": "3054:3:26",
										"type": ""
									}
								],
								"src": "2979:161:26"
							},
							{
								"body": {
									"nativeSrc": "3259:139:26",
									"nodeType": "YulBlock",
									"src": "3259:139:26",
									"statements": [
										{
											"nativeSrc": "3269:26:26",
											"nodeType": "YulAssignment",
											"src": "3269:26:26",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nativeSrc": "3281:9:26",
														"nodeType": "YulIdentifier",
														"src": "3281:9:26"
													},
													{
														"kind": "number",
														"nativeSrc": "3292:2:26",
														"nodeType": "YulLiteral",
														"src": "3292:2:26",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "3277:3:26",
													"nodeType": "YulIdentifier",
													"src": "3277:3:26"
												},
												"nativeSrc": "3277:18:26",
												"nodeType": "YulFunctionCall",
												"src": "3277:18:26"
											},
											"variableNames": [
												{
													"name": "tail",
													"nativeSrc": "3269:4:26",
													"nodeType": "YulIdentifier",
													"src": "3269:4:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value0",
														"nativeSrc": "3364:6:26",
														"nodeType": "YulIdentifier",
														"src": "3364:6:26"
													},
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "3377:9:26",
																"nodeType": "YulIdentifier",
																"src": "3377:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "3388:1:26",
																"nodeType": "YulLiteral",
																"src": "3388:1:26",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "3373:3:26",
															"nodeType": "YulIdentifier",
															"src": "3373:3:26"
														},
														"nativeSrc": "3373:17:26",
														"nodeType": "YulFunctionCall",
														"src": "3373:17:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_contract$_IERC20_$1785_to_t_address_fromStack",
													"nativeSrc": "3305:58:26",
													"nodeType": "YulIdentifier",
													"src": "3305:58:26"
												},
												"nativeSrc": "3305:86:26",
												"nodeType": "YulFunctionCall",
												"src": "3305:86:26"
											},
											"nativeSrc": "3305:86:26",
											"nodeType": "YulExpressionStatement",
											"src": "3305:86:26"
										}
									]
								},
								"name": "abi_encode_tuple_t_contract$_IERC20_$1785__to_t_address__fromStack_reversed",
								"nativeSrc": "3146:252:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "3231:9:26",
										"nodeType": "YulTypedName",
										"src": "3231:9:26",
										"type": ""
									},
									{
										"name": "value0",
										"nativeSrc": "3243:6:26",
										"nodeType": "YulTypedName",
										"src": "3243:6:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nativeSrc": "3254:4:26",
										"nodeType": "YulTypedName",
										"src": "3254:4:26",
										"type": ""
									}
								],
								"src": "3146:252:26"
							},
							{
								"body": {
									"nativeSrc": "3469:53:26",
									"nodeType": "YulBlock",
									"src": "3469:53:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "3486:3:26",
														"nodeType": "YulIdentifier",
														"src": "3486:3:26"
													},
													{
														"arguments": [
															{
																"name": "value",
																"nativeSrc": "3509:5:26",
																"nodeType": "YulIdentifier",
																"src": "3509:5:26"
															}
														],
														"functionName": {
															"name": "cleanup_t_uint256",
															"nativeSrc": "3491:17:26",
															"nodeType": "YulIdentifier",
															"src": "3491:17:26"
														},
														"nativeSrc": "3491:24:26",
														"nodeType": "YulFunctionCall",
														"src": "3491:24:26"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "3479:6:26",
													"nodeType": "YulIdentifier",
													"src": "3479:6:26"
												},
												"nativeSrc": "3479:37:26",
												"nodeType": "YulFunctionCall",
												"src": "3479:37:26"
											},
											"nativeSrc": "3479:37:26",
											"nodeType": "YulExpressionStatement",
											"src": "3479:37:26"
										}
									]
								},
								"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
								"nativeSrc": "3404:118:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "3457:5:26",
										"nodeType": "YulTypedName",
										"src": "3457:5:26",
										"type": ""
									},
									{
										"name": "pos",
										"nativeSrc": "3464:3:26",
										"nodeType": "YulTypedName",
										"src": "3464:3:26",
										"type": ""
									}
								],
								"src": "3404:118:26"
							},
							{
								"body": {
									"nativeSrc": "3626:124:26",
									"nodeType": "YulBlock",
									"src": "3626:124:26",
									"statements": [
										{
											"nativeSrc": "3636:26:26",
											"nodeType": "YulAssignment",
											"src": "3636:26:26",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nativeSrc": "3648:9:26",
														"nodeType": "YulIdentifier",
														"src": "3648:9:26"
													},
													{
														"kind": "number",
														"nativeSrc": "3659:2:26",
														"nodeType": "YulLiteral",
														"src": "3659:2:26",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "3644:3:26",
													"nodeType": "YulIdentifier",
													"src": "3644:3:26"
												},
												"nativeSrc": "3644:18:26",
												"nodeType": "YulFunctionCall",
												"src": "3644:18:26"
											},
											"variableNames": [
												{
													"name": "tail",
													"nativeSrc": "3636:4:26",
													"nodeType": "YulIdentifier",
													"src": "3636:4:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value0",
														"nativeSrc": "3716:6:26",
														"nodeType": "YulIdentifier",
														"src": "3716:6:26"
													},
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "3729:9:26",
																"nodeType": "YulIdentifier",
																"src": "3729:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "3740:1:26",
																"nodeType": "YulLiteral",
																"src": "3740:1:26",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "3725:3:26",
															"nodeType": "YulIdentifier",
															"src": "3725:3:26"
														},
														"nativeSrc": "3725:17:26",
														"nodeType": "YulFunctionCall",
														"src": "3725:17:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
													"nativeSrc": "3672:43:26",
													"nodeType": "YulIdentifier",
													"src": "3672:43:26"
												},
												"nativeSrc": "3672:71:26",
												"nodeType": "YulFunctionCall",
												"src": "3672:71:26"
											},
											"nativeSrc": "3672:71:26",
											"nodeType": "YulExpressionStatement",
											"src": "3672:71:26"
										}
									]
								},
								"name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
								"nativeSrc": "3528:222:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "3598:9:26",
										"nodeType": "YulTypedName",
										"src": "3598:9:26",
										"type": ""
									},
									{
										"name": "value0",
										"nativeSrc": "3610:6:26",
										"nodeType": "YulTypedName",
										"src": "3610:6:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nativeSrc": "3621:4:26",
										"nodeType": "YulTypedName",
										"src": "3621:4:26",
										"type": ""
									}
								],
								"src": "3528:222:26"
							},
							{
								"body": {
									"nativeSrc": "3801:51:26",
									"nodeType": "YulBlock",
									"src": "3801:51:26",
									"statements": [
										{
											"nativeSrc": "3811:35:26",
											"nodeType": "YulAssignment",
											"src": "3811:35:26",
											"value": {
												"arguments": [
													{
														"name": "value",
														"nativeSrc": "3840:5:26",
														"nodeType": "YulIdentifier",
														"src": "3840:5:26"
													}
												],
												"functionName": {
													"name": "cleanup_t_uint160",
													"nativeSrc": "3822:17:26",
													"nodeType": "YulIdentifier",
													"src": "3822:17:26"
												},
												"nativeSrc": "3822:24:26",
												"nodeType": "YulFunctionCall",
												"src": "3822:24:26"
											},
											"variableNames": [
												{
													"name": "cleaned",
													"nativeSrc": "3811:7:26",
													"nodeType": "YulIdentifier",
													"src": "3811:7:26"
												}
											]
										}
									]
								},
								"name": "cleanup_t_address",
								"nativeSrc": "3756:96:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "3783:5:26",
										"nodeType": "YulTypedName",
										"src": "3783:5:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "cleaned",
										"nativeSrc": "3793:7:26",
										"nodeType": "YulTypedName",
										"src": "3793:7:26",
										"type": ""
									}
								],
								"src": "3756:96:26"
							},
							{
								"body": {
									"nativeSrc": "3923:53:26",
									"nodeType": "YulBlock",
									"src": "3923:53:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "3940:3:26",
														"nodeType": "YulIdentifier",
														"src": "3940:3:26"
													},
													{
														"arguments": [
															{
																"name": "value",
																"nativeSrc": "3963:5:26",
																"nodeType": "YulIdentifier",
																"src": "3963:5:26"
															}
														],
														"functionName": {
															"name": "cleanup_t_address",
															"nativeSrc": "3945:17:26",
															"nodeType": "YulIdentifier",
															"src": "3945:17:26"
														},
														"nativeSrc": "3945:24:26",
														"nodeType": "YulFunctionCall",
														"src": "3945:24:26"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "3933:6:26",
													"nodeType": "YulIdentifier",
													"src": "3933:6:26"
												},
												"nativeSrc": "3933:37:26",
												"nodeType": "YulFunctionCall",
												"src": "3933:37:26"
											},
											"nativeSrc": "3933:37:26",
											"nodeType": "YulExpressionStatement",
											"src": "3933:37:26"
										}
									]
								},
								"name": "abi_encode_t_address_to_t_address_fromStack",
								"nativeSrc": "3858:118:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "3911:5:26",
										"nodeType": "YulTypedName",
										"src": "3911:5:26",
										"type": ""
									},
									{
										"name": "pos",
										"nativeSrc": "3918:3:26",
										"nodeType": "YulTypedName",
										"src": "3918:3:26",
										"type": ""
									}
								],
								"src": "3858:118:26"
							},
							{
								"body": {
									"nativeSrc": "4080:124:26",
									"nodeType": "YulBlock",
									"src": "4080:124:26",
									"statements": [
										{
											"nativeSrc": "4090:26:26",
											"nodeType": "YulAssignment",
											"src": "4090:26:26",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nativeSrc": "4102:9:26",
														"nodeType": "YulIdentifier",
														"src": "4102:9:26"
													},
													{
														"kind": "number",
														"nativeSrc": "4113:2:26",
														"nodeType": "YulLiteral",
														"src": "4113:2:26",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "4098:3:26",
													"nodeType": "YulIdentifier",
													"src": "4098:3:26"
												},
												"nativeSrc": "4098:18:26",
												"nodeType": "YulFunctionCall",
												"src": "4098:18:26"
											},
											"variableNames": [
												{
													"name": "tail",
													"nativeSrc": "4090:4:26",
													"nodeType": "YulIdentifier",
													"src": "4090:4:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value0",
														"nativeSrc": "4170:6:26",
														"nodeType": "YulIdentifier",
														"src": "4170:6:26"
													},
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "4183:9:26",
																"nodeType": "YulIdentifier",
																"src": "4183:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "4194:1:26",
																"nodeType": "YulLiteral",
																"src": "4194:1:26",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "4179:3:26",
															"nodeType": "YulIdentifier",
															"src": "4179:3:26"
														},
														"nativeSrc": "4179:17:26",
														"nodeType": "YulFunctionCall",
														"src": "4179:17:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_address_to_t_address_fromStack",
													"nativeSrc": "4126:43:26",
													"nodeType": "YulIdentifier",
													"src": "4126:43:26"
												},
												"nativeSrc": "4126:71:26",
												"nodeType": "YulFunctionCall",
												"src": "4126:71:26"
											},
											"nativeSrc": "4126:71:26",
											"nodeType": "YulExpressionStatement",
											"src": "4126:71:26"
										}
									]
								},
								"name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
								"nativeSrc": "3982:222:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "4052:9:26",
										"nodeType": "YulTypedName",
										"src": "4052:9:26",
										"type": ""
									},
									{
										"name": "value0",
										"nativeSrc": "4064:6:26",
										"nodeType": "YulTypedName",
										"src": "4064:6:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nativeSrc": "4075:4:26",
										"nodeType": "YulTypedName",
										"src": "4075:4:26",
										"type": ""
									}
								],
								"src": "3982:222:26"
							},
							{
								"body": {
									"nativeSrc": "4253:79:26",
									"nodeType": "YulBlock",
									"src": "4253:79:26",
									"statements": [
										{
											"body": {
												"nativeSrc": "4310:16:26",
												"nodeType": "YulBlock",
												"src": "4310:16:26",
												"statements": [
													{
														"expression": {
															"arguments": [
																{
																	"kind": "number",
																	"nativeSrc": "4319:1:26",
																	"nodeType": "YulLiteral",
																	"src": "4319:1:26",
																	"type": "",
																	"value": "0"
																},
																{
																	"kind": "number",
																	"nativeSrc": "4322:1:26",
																	"nodeType": "YulLiteral",
																	"src": "4322:1:26",
																	"type": "",
																	"value": "0"
																}
															],
															"functionName": {
																"name": "revert",
																"nativeSrc": "4312:6:26",
																"nodeType": "YulIdentifier",
																"src": "4312:6:26"
															},
															"nativeSrc": "4312:12:26",
															"nodeType": "YulFunctionCall",
															"src": "4312:12:26"
														},
														"nativeSrc": "4312:12:26",
														"nodeType": "YulExpressionStatement",
														"src": "4312:12:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "value",
																"nativeSrc": "4276:5:26",
																"nodeType": "YulIdentifier",
																"src": "4276:5:26"
															},
															{
																"arguments": [
																	{
																		"name": "value",
																		"nativeSrc": "4301:5:26",
																		"nodeType": "YulIdentifier",
																		"src": "4301:5:26"
																	}
																],
																"functionName": {
																	"name": "cleanup_t_address",
																	"nativeSrc": "4283:17:26",
																	"nodeType": "YulIdentifier",
																	"src": "4283:17:26"
																},
																"nativeSrc": "4283:24:26",
																"nodeType": "YulFunctionCall",
																"src": "4283:24:26"
															}
														],
														"functionName": {
															"name": "eq",
															"nativeSrc": "4273:2:26",
															"nodeType": "YulIdentifier",
															"src": "4273:2:26"
														},
														"nativeSrc": "4273:35:26",
														"nodeType": "YulFunctionCall",
														"src": "4273:35:26"
													}
												],
												"functionName": {
													"name": "iszero",
													"nativeSrc": "4266:6:26",
													"nodeType": "YulIdentifier",
													"src": "4266:6:26"
												},
												"nativeSrc": "4266:43:26",
												"nodeType": "YulFunctionCall",
												"src": "4266:43:26"
											},
											"nativeSrc": "4263:63:26",
											"nodeType": "YulIf",
											"src": "4263:63:26"
										}
									]
								},
								"name": "validator_revert_t_address",
								"nativeSrc": "4210:122:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "4246:5:26",
										"nodeType": "YulTypedName",
										"src": "4246:5:26",
										"type": ""
									}
								],
								"src": "4210:122:26"
							},
							{
								"body": {
									"nativeSrc": "4390:87:26",
									"nodeType": "YulBlock",
									"src": "4390:87:26",
									"statements": [
										{
											"nativeSrc": "4400:29:26",
											"nodeType": "YulAssignment",
											"src": "4400:29:26",
											"value": {
												"arguments": [
													{
														"name": "offset",
														"nativeSrc": "4422:6:26",
														"nodeType": "YulIdentifier",
														"src": "4422:6:26"
													}
												],
												"functionName": {
													"name": "calldataload",
													"nativeSrc": "4409:12:26",
													"nodeType": "YulIdentifier",
													"src": "4409:12:26"
												},
												"nativeSrc": "4409:20:26",
												"nodeType": "YulFunctionCall",
												"src": "4409:20:26"
											},
											"variableNames": [
												{
													"name": "value",
													"nativeSrc": "4400:5:26",
													"nodeType": "YulIdentifier",
													"src": "4400:5:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value",
														"nativeSrc": "4465:5:26",
														"nodeType": "YulIdentifier",
														"src": "4465:5:26"
													}
												],
												"functionName": {
													"name": "validator_revert_t_address",
													"nativeSrc": "4438:26:26",
													"nodeType": "YulIdentifier",
													"src": "4438:26:26"
												},
												"nativeSrc": "4438:33:26",
												"nodeType": "YulFunctionCall",
												"src": "4438:33:26"
											},
											"nativeSrc": "4438:33:26",
											"nodeType": "YulExpressionStatement",
											"src": "4438:33:26"
										}
									]
								},
								"name": "abi_decode_t_address",
								"nativeSrc": "4338:139:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "offset",
										"nativeSrc": "4368:6:26",
										"nodeType": "YulTypedName",
										"src": "4368:6:26",
										"type": ""
									},
									{
										"name": "end",
										"nativeSrc": "4376:3:26",
										"nodeType": "YulTypedName",
										"src": "4376:3:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value",
										"nativeSrc": "4384:5:26",
										"nodeType": "YulTypedName",
										"src": "4384:5:26",
										"type": ""
									}
								],
								"src": "4338:139:26"
							},
							{
								"body": {
									"nativeSrc": "4572:28:26",
									"nodeType": "YulBlock",
									"src": "4572:28:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nativeSrc": "4589:1:26",
														"nodeType": "YulLiteral",
														"src": "4589:1:26",
														"type": "",
														"value": "0"
													},
													{
														"kind": "number",
														"nativeSrc": "4592:1:26",
														"nodeType": "YulLiteral",
														"src": "4592:1:26",
														"type": "",
														"value": "0"
													}
												],
												"functionName": {
													"name": "revert",
													"nativeSrc": "4582:6:26",
													"nodeType": "YulIdentifier",
													"src": "4582:6:26"
												},
												"nativeSrc": "4582:12:26",
												"nodeType": "YulFunctionCall",
												"src": "4582:12:26"
											},
											"nativeSrc": "4582:12:26",
											"nodeType": "YulExpressionStatement",
											"src": "4582:12:26"
										}
									]
								},
								"name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
								"nativeSrc": "4483:117:26",
								"nodeType": "YulFunctionDefinition",
								"src": "4483:117:26"
							},
							{
								"body": {
									"nativeSrc": "4654:54:26",
									"nodeType": "YulBlock",
									"src": "4654:54:26",
									"statements": [
										{
											"nativeSrc": "4664:38:26",
											"nodeType": "YulAssignment",
											"src": "4664:38:26",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "value",
																"nativeSrc": "4682:5:26",
																"nodeType": "YulIdentifier",
																"src": "4682:5:26"
															},
															{
																"kind": "number",
																"nativeSrc": "4689:2:26",
																"nodeType": "YulLiteral",
																"src": "4689:2:26",
																"type": "",
																"value": "31"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "4678:3:26",
															"nodeType": "YulIdentifier",
															"src": "4678:3:26"
														},
														"nativeSrc": "4678:14:26",
														"nodeType": "YulFunctionCall",
														"src": "4678:14:26"
													},
													{
														"arguments": [
															{
																"kind": "number",
																"nativeSrc": "4698:2:26",
																"nodeType": "YulLiteral",
																"src": "4698:2:26",
																"type": "",
																"value": "31"
															}
														],
														"functionName": {
															"name": "not",
															"nativeSrc": "4694:3:26",
															"nodeType": "YulIdentifier",
															"src": "4694:3:26"
														},
														"nativeSrc": "4694:7:26",
														"nodeType": "YulFunctionCall",
														"src": "4694:7:26"
													}
												],
												"functionName": {
													"name": "and",
													"nativeSrc": "4674:3:26",
													"nodeType": "YulIdentifier",
													"src": "4674:3:26"
												},
												"nativeSrc": "4674:28:26",
												"nodeType": "YulFunctionCall",
												"src": "4674:28:26"
											},
											"variableNames": [
												{
													"name": "result",
													"nativeSrc": "4664:6:26",
													"nodeType": "YulIdentifier",
													"src": "4664:6:26"
												}
											]
										}
									]
								},
								"name": "round_up_to_mul_of_32",
								"nativeSrc": "4606:102:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "4637:5:26",
										"nodeType": "YulTypedName",
										"src": "4637:5:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "result",
										"nativeSrc": "4647:6:26",
										"nodeType": "YulTypedName",
										"src": "4647:6:26",
										"type": ""
									}
								],
								"src": "4606:102:26"
							},
							{
								"body": {
									"nativeSrc": "4742:152:26",
									"nodeType": "YulBlock",
									"src": "4742:152:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nativeSrc": "4759:1:26",
														"nodeType": "YulLiteral",
														"src": "4759:1:26",
														"type": "",
														"value": "0"
													},
													{
														"kind": "number",
														"nativeSrc": "4762:77:26",
														"nodeType": "YulLiteral",
														"src": "4762:77:26",
														"type": "",
														"value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "4752:6:26",
													"nodeType": "YulIdentifier",
													"src": "4752:6:26"
												},
												"nativeSrc": "4752:88:26",
												"nodeType": "YulFunctionCall",
												"src": "4752:88:26"
											},
											"nativeSrc": "4752:88:26",
											"nodeType": "YulExpressionStatement",
											"src": "4752:88:26"
										},
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nativeSrc": "4856:1:26",
														"nodeType": "YulLiteral",
														"src": "4856:1:26",
														"type": "",
														"value": "4"
													},
													{
														"kind": "number",
														"nativeSrc": "4859:4:26",
														"nodeType": "YulLiteral",
														"src": "4859:4:26",
														"type": "",
														"value": "0x41"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "4849:6:26",
													"nodeType": "YulIdentifier",
													"src": "4849:6:26"
												},
												"nativeSrc": "4849:15:26",
												"nodeType": "YulFunctionCall",
												"src": "4849:15:26"
											},
											"nativeSrc": "4849:15:26",
											"nodeType": "YulExpressionStatement",
											"src": "4849:15:26"
										},
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nativeSrc": "4880:1:26",
														"nodeType": "YulLiteral",
														"src": "4880:1:26",
														"type": "",
														"value": "0"
													},
													{
														"kind": "number",
														"nativeSrc": "4883:4:26",
														"nodeType": "YulLiteral",
														"src": "4883:4:26",
														"type": "",
														"value": "0x24"
													}
												],
												"functionName": {
													"name": "revert",
													"nativeSrc": "4873:6:26",
													"nodeType": "YulIdentifier",
													"src": "4873:6:26"
												},
												"nativeSrc": "4873:15:26",
												"nodeType": "YulFunctionCall",
												"src": "4873:15:26"
											},
											"nativeSrc": "4873:15:26",
											"nodeType": "YulExpressionStatement",
											"src": "4873:15:26"
										}
									]
								},
								"name": "panic_error_0x41",
								"nativeSrc": "4714:180:26",
								"nodeType": "YulFunctionDefinition",
								"src": "4714:180:26"
							},
							{
								"body": {
									"nativeSrc": "4943:238:26",
									"nodeType": "YulBlock",
									"src": "4943:238:26",
									"statements": [
										{
											"nativeSrc": "4953:58:26",
											"nodeType": "YulVariableDeclaration",
											"src": "4953:58:26",
											"value": {
												"arguments": [
													{
														"name": "memPtr",
														"nativeSrc": "4975:6:26",
														"nodeType": "YulIdentifier",
														"src": "4975:6:26"
													},
													{
														"arguments": [
															{
																"name": "size",
																"nativeSrc": "5005:4:26",
																"nodeType": "YulIdentifier",
																"src": "5005:4:26"
															}
														],
														"functionName": {
															"name": "round_up_to_mul_of_32",
															"nativeSrc": "4983:21:26",
															"nodeType": "YulIdentifier",
															"src": "4983:21:26"
														},
														"nativeSrc": "4983:27:26",
														"nodeType": "YulFunctionCall",
														"src": "4983:27:26"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "4971:3:26",
													"nodeType": "YulIdentifier",
													"src": "4971:3:26"
												},
												"nativeSrc": "4971:40:26",
												"nodeType": "YulFunctionCall",
												"src": "4971:40:26"
											},
											"variables": [
												{
													"name": "newFreePtr",
													"nativeSrc": "4957:10:26",
													"nodeType": "YulTypedName",
													"src": "4957:10:26",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nativeSrc": "5122:22:26",
												"nodeType": "YulBlock",
												"src": "5122:22:26",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "panic_error_0x41",
																"nativeSrc": "5124:16:26",
																"nodeType": "YulIdentifier",
																"src": "5124:16:26"
															},
															"nativeSrc": "5124:18:26",
															"nodeType": "YulFunctionCall",
															"src": "5124:18:26"
														},
														"nativeSrc": "5124:18:26",
														"nodeType": "YulExpressionStatement",
														"src": "5124:18:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "newFreePtr",
																"nativeSrc": "5065:10:26",
																"nodeType": "YulIdentifier",
																"src": "5065:10:26"
															},
															{
																"kind": "number",
																"nativeSrc": "5077:18:26",
																"nodeType": "YulLiteral",
																"src": "5077:18:26",
																"type": "",
																"value": "0xffffffffffffffff"
															}
														],
														"functionName": {
															"name": "gt",
															"nativeSrc": "5062:2:26",
															"nodeType": "YulIdentifier",
															"src": "5062:2:26"
														},
														"nativeSrc": "5062:34:26",
														"nodeType": "YulFunctionCall",
														"src": "5062:34:26"
													},
													{
														"arguments": [
															{
																"name": "newFreePtr",
																"nativeSrc": "5101:10:26",
																"nodeType": "YulIdentifier",
																"src": "5101:10:26"
															},
															{
																"name": "memPtr",
																"nativeSrc": "5113:6:26",
																"nodeType": "YulIdentifier",
																"src": "5113:6:26"
															}
														],
														"functionName": {
															"name": "lt",
															"nativeSrc": "5098:2:26",
															"nodeType": "YulIdentifier",
															"src": "5098:2:26"
														},
														"nativeSrc": "5098:22:26",
														"nodeType": "YulFunctionCall",
														"src": "5098:22:26"
													}
												],
												"functionName": {
													"name": "or",
													"nativeSrc": "5059:2:26",
													"nodeType": "YulIdentifier",
													"src": "5059:2:26"
												},
												"nativeSrc": "5059:62:26",
												"nodeType": "YulFunctionCall",
												"src": "5059:62:26"
											},
											"nativeSrc": "5056:88:26",
											"nodeType": "YulIf",
											"src": "5056:88:26"
										},
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nativeSrc": "5160:2:26",
														"nodeType": "YulLiteral",
														"src": "5160:2:26",
														"type": "",
														"value": "64"
													},
													{
														"name": "newFreePtr",
														"nativeSrc": "5164:10:26",
														"nodeType": "YulIdentifier",
														"src": "5164:10:26"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "5153:6:26",
													"nodeType": "YulIdentifier",
													"src": "5153:6:26"
												},
												"nativeSrc": "5153:22:26",
												"nodeType": "YulFunctionCall",
												"src": "5153:22:26"
											},
											"nativeSrc": "5153:22:26",
											"nodeType": "YulExpressionStatement",
											"src": "5153:22:26"
										}
									]
								},
								"name": "finalize_allocation",
								"nativeSrc": "4900:281:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "memPtr",
										"nativeSrc": "4929:6:26",
										"nodeType": "YulTypedName",
										"src": "4929:6:26",
										"type": ""
									},
									{
										"name": "size",
										"nativeSrc": "4937:4:26",
										"nodeType": "YulTypedName",
										"src": "4937:4:26",
										"type": ""
									}
								],
								"src": "4900:281:26"
							},
							{
								"body": {
									"nativeSrc": "5228:88:26",
									"nodeType": "YulBlock",
									"src": "5228:88:26",
									"statements": [
										{
											"nativeSrc": "5238:30:26",
											"nodeType": "YulAssignment",
											"src": "5238:30:26",
											"value": {
												"arguments": [],
												"functionName": {
													"name": "allocate_unbounded",
													"nativeSrc": "5248:18:26",
													"nodeType": "YulIdentifier",
													"src": "5248:18:26"
												},
												"nativeSrc": "5248:20:26",
												"nodeType": "YulFunctionCall",
												"src": "5248:20:26"
											},
											"variableNames": [
												{
													"name": "memPtr",
													"nativeSrc": "5238:6:26",
													"nodeType": "YulIdentifier",
													"src": "5238:6:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "memPtr",
														"nativeSrc": "5297:6:26",
														"nodeType": "YulIdentifier",
														"src": "5297:6:26"
													},
													{
														"name": "size",
														"nativeSrc": "5305:4:26",
														"nodeType": "YulIdentifier",
														"src": "5305:4:26"
													}
												],
												"functionName": {
													"name": "finalize_allocation",
													"nativeSrc": "5277:19:26",
													"nodeType": "YulIdentifier",
													"src": "5277:19:26"
												},
												"nativeSrc": "5277:33:26",
												"nodeType": "YulFunctionCall",
												"src": "5277:33:26"
											},
											"nativeSrc": "5277:33:26",
											"nodeType": "YulExpressionStatement",
											"src": "5277:33:26"
										}
									]
								},
								"name": "allocate_memory",
								"nativeSrc": "5187:129:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "size",
										"nativeSrc": "5212:4:26",
										"nodeType": "YulTypedName",
										"src": "5212:4:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "memPtr",
										"nativeSrc": "5221:6:26",
										"nodeType": "YulTypedName",
										"src": "5221:6:26",
										"type": ""
									}
								],
								"src": "5187:129:26"
							},
							{
								"body": {
									"nativeSrc": "5404:229:26",
									"nodeType": "YulBlock",
									"src": "5404:229:26",
									"statements": [
										{
											"body": {
												"nativeSrc": "5509:22:26",
												"nodeType": "YulBlock",
												"src": "5509:22:26",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "panic_error_0x41",
																"nativeSrc": "5511:16:26",
																"nodeType": "YulIdentifier",
																"src": "5511:16:26"
															},
															"nativeSrc": "5511:18:26",
															"nodeType": "YulFunctionCall",
															"src": "5511:18:26"
														},
														"nativeSrc": "5511:18:26",
														"nodeType": "YulExpressionStatement",
														"src": "5511:18:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "length",
														"nativeSrc": "5481:6:26",
														"nodeType": "YulIdentifier",
														"src": "5481:6:26"
													},
													{
														"kind": "number",
														"nativeSrc": "5489:18:26",
														"nodeType": "YulLiteral",
														"src": "5489:18:26",
														"type": "",
														"value": "0xffffffffffffffff"
													}
												],
												"functionName": {
													"name": "gt",
													"nativeSrc": "5478:2:26",
													"nodeType": "YulIdentifier",
													"src": "5478:2:26"
												},
												"nativeSrc": "5478:30:26",
												"nodeType": "YulFunctionCall",
												"src": "5478:30:26"
											},
											"nativeSrc": "5475:56:26",
											"nodeType": "YulIf",
											"src": "5475:56:26"
										},
										{
											"nativeSrc": "5541:25:26",
											"nodeType": "YulAssignment",
											"src": "5541:25:26",
											"value": {
												"arguments": [
													{
														"name": "length",
														"nativeSrc": "5553:6:26",
														"nodeType": "YulIdentifier",
														"src": "5553:6:26"
													},
													{
														"kind": "number",
														"nativeSrc": "5561:4:26",
														"nodeType": "YulLiteral",
														"src": "5561:4:26",
														"type": "",
														"value": "0x20"
													}
												],
												"functionName": {
													"name": "mul",
													"nativeSrc": "5549:3:26",
													"nodeType": "YulIdentifier",
													"src": "5549:3:26"
												},
												"nativeSrc": "5549:17:26",
												"nodeType": "YulFunctionCall",
												"src": "5549:17:26"
											},
											"variableNames": [
												{
													"name": "size",
													"nativeSrc": "5541:4:26",
													"nodeType": "YulIdentifier",
													"src": "5541:4:26"
												}
											]
										},
										{
											"nativeSrc": "5603:23:26",
											"nodeType": "YulAssignment",
											"src": "5603:23:26",
											"value": {
												"arguments": [
													{
														"name": "size",
														"nativeSrc": "5615:4:26",
														"nodeType": "YulIdentifier",
														"src": "5615:4:26"
													},
													{
														"kind": "number",
														"nativeSrc": "5621:4:26",
														"nodeType": "YulLiteral",
														"src": "5621:4:26",
														"type": "",
														"value": "0x20"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "5611:3:26",
													"nodeType": "YulIdentifier",
													"src": "5611:3:26"
												},
												"nativeSrc": "5611:15:26",
												"nodeType": "YulFunctionCall",
												"src": "5611:15:26"
											},
											"variableNames": [
												{
													"name": "size",
													"nativeSrc": "5603:4:26",
													"nodeType": "YulIdentifier",
													"src": "5603:4:26"
												}
											]
										}
									]
								},
								"name": "array_allocation_size_t_array$_t_uint256_$dyn_memory_ptr",
								"nativeSrc": "5322:311:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "length",
										"nativeSrc": "5388:6:26",
										"nodeType": "YulTypedName",
										"src": "5388:6:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "size",
										"nativeSrc": "5399:4:26",
										"nodeType": "YulTypedName",
										"src": "5399:4:26",
										"type": ""
									}
								],
								"src": "5322:311:26"
							},
							{
								"body": {
									"nativeSrc": "5728:28:26",
									"nodeType": "YulBlock",
									"src": "5728:28:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nativeSrc": "5745:1:26",
														"nodeType": "YulLiteral",
														"src": "5745:1:26",
														"type": "",
														"value": "0"
													},
													{
														"kind": "number",
														"nativeSrc": "5748:1:26",
														"nodeType": "YulLiteral",
														"src": "5748:1:26",
														"type": "",
														"value": "0"
													}
												],
												"functionName": {
													"name": "revert",
													"nativeSrc": "5738:6:26",
													"nodeType": "YulIdentifier",
													"src": "5738:6:26"
												},
												"nativeSrc": "5738:12:26",
												"nodeType": "YulFunctionCall",
												"src": "5738:12:26"
											},
											"nativeSrc": "5738:12:26",
											"nodeType": "YulExpressionStatement",
											"src": "5738:12:26"
										}
									]
								},
								"name": "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
								"nativeSrc": "5639:117:26",
								"nodeType": "YulFunctionDefinition",
								"src": "5639:117:26"
							},
							{
								"body": {
									"nativeSrc": "5881:608:26",
									"nodeType": "YulBlock",
									"src": "5881:608:26",
									"statements": [
										{
											"nativeSrc": "5891:90:26",
											"nodeType": "YulAssignment",
											"src": "5891:90:26",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "length",
																"nativeSrc": "5973:6:26",
																"nodeType": "YulIdentifier",
																"src": "5973:6:26"
															}
														],
														"functionName": {
															"name": "array_allocation_size_t_array$_t_uint256_$dyn_memory_ptr",
															"nativeSrc": "5916:56:26",
															"nodeType": "YulIdentifier",
															"src": "5916:56:26"
														},
														"nativeSrc": "5916:64:26",
														"nodeType": "YulFunctionCall",
														"src": "5916:64:26"
													}
												],
												"functionName": {
													"name": "allocate_memory",
													"nativeSrc": "5900:15:26",
													"nodeType": "YulIdentifier",
													"src": "5900:15:26"
												},
												"nativeSrc": "5900:81:26",
												"nodeType": "YulFunctionCall",
												"src": "5900:81:26"
											},
											"variableNames": [
												{
													"name": "array",
													"nativeSrc": "5891:5:26",
													"nodeType": "YulIdentifier",
													"src": "5891:5:26"
												}
											]
										},
										{
											"nativeSrc": "5990:16:26",
											"nodeType": "YulVariableDeclaration",
											"src": "5990:16:26",
											"value": {
												"name": "array",
												"nativeSrc": "6001:5:26",
												"nodeType": "YulIdentifier",
												"src": "6001:5:26"
											},
											"variables": [
												{
													"name": "dst",
													"nativeSrc": "5994:3:26",
													"nodeType": "YulTypedName",
													"src": "5994:3:26",
													"type": ""
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "array",
														"nativeSrc": "6023:5:26",
														"nodeType": "YulIdentifier",
														"src": "6023:5:26"
													},
													{
														"name": "length",
														"nativeSrc": "6030:6:26",
														"nodeType": "YulIdentifier",
														"src": "6030:6:26"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "6016:6:26",
													"nodeType": "YulIdentifier",
													"src": "6016:6:26"
												},
												"nativeSrc": "6016:21:26",
												"nodeType": "YulFunctionCall",
												"src": "6016:21:26"
											},
											"nativeSrc": "6016:21:26",
											"nodeType": "YulExpressionStatement",
											"src": "6016:21:26"
										},
										{
											"nativeSrc": "6046:23:26",
											"nodeType": "YulAssignment",
											"src": "6046:23:26",
											"value": {
												"arguments": [
													{
														"name": "array",
														"nativeSrc": "6057:5:26",
														"nodeType": "YulIdentifier",
														"src": "6057:5:26"
													},
													{
														"kind": "number",
														"nativeSrc": "6064:4:26",
														"nodeType": "YulLiteral",
														"src": "6064:4:26",
														"type": "",
														"value": "0x20"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "6053:3:26",
													"nodeType": "YulIdentifier",
													"src": "6053:3:26"
												},
												"nativeSrc": "6053:16:26",
												"nodeType": "YulFunctionCall",
												"src": "6053:16:26"
											},
											"variableNames": [
												{
													"name": "dst",
													"nativeSrc": "6046:3:26",
													"nodeType": "YulIdentifier",
													"src": "6046:3:26"
												}
											]
										},
										{
											"nativeSrc": "6079:44:26",
											"nodeType": "YulVariableDeclaration",
											"src": "6079:44:26",
											"value": {
												"arguments": [
													{
														"name": "offset",
														"nativeSrc": "6097:6:26",
														"nodeType": "YulIdentifier",
														"src": "6097:6:26"
													},
													{
														"arguments": [
															{
																"name": "length",
																"nativeSrc": "6109:6:26",
																"nodeType": "YulIdentifier",
																"src": "6109:6:26"
															},
															{
																"kind": "number",
																"nativeSrc": "6117:4:26",
																"nodeType": "YulLiteral",
																"src": "6117:4:26",
																"type": "",
																"value": "0x20"
															}
														],
														"functionName": {
															"name": "mul",
															"nativeSrc": "6105:3:26",
															"nodeType": "YulIdentifier",
															"src": "6105:3:26"
														},
														"nativeSrc": "6105:17:26",
														"nodeType": "YulFunctionCall",
														"src": "6105:17:26"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "6093:3:26",
													"nodeType": "YulIdentifier",
													"src": "6093:3:26"
												},
												"nativeSrc": "6093:30:26",
												"nodeType": "YulFunctionCall",
												"src": "6093:30:26"
											},
											"variables": [
												{
													"name": "srcEnd",
													"nativeSrc": "6083:6:26",
													"nodeType": "YulTypedName",
													"src": "6083:6:26",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nativeSrc": "6151:103:26",
												"nodeType": "YulBlock",
												"src": "6151:103:26",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
																"nativeSrc": "6165:77:26",
																"nodeType": "YulIdentifier",
																"src": "6165:77:26"
															},
															"nativeSrc": "6165:79:26",
															"nodeType": "YulFunctionCall",
															"src": "6165:79:26"
														},
														"nativeSrc": "6165:79:26",
														"nodeType": "YulExpressionStatement",
														"src": "6165:79:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "srcEnd",
														"nativeSrc": "6138:6:26",
														"nodeType": "YulIdentifier",
														"src": "6138:6:26"
													},
													{
														"name": "end",
														"nativeSrc": "6146:3:26",
														"nodeType": "YulIdentifier",
														"src": "6146:3:26"
													}
												],
												"functionName": {
													"name": "gt",
													"nativeSrc": "6135:2:26",
													"nodeType": "YulIdentifier",
													"src": "6135:2:26"
												},
												"nativeSrc": "6135:15:26",
												"nodeType": "YulFunctionCall",
												"src": "6135:15:26"
											},
											"nativeSrc": "6132:122:26",
											"nodeType": "YulIf",
											"src": "6132:122:26"
										},
										{
											"body": {
												"nativeSrc": "6339:144:26",
												"nodeType": "YulBlock",
												"src": "6339:144:26",
												"statements": [
													{
														"nativeSrc": "6354:21:26",
														"nodeType": "YulVariableDeclaration",
														"src": "6354:21:26",
														"value": {
															"name": "src",
															"nativeSrc": "6372:3:26",
															"nodeType": "YulIdentifier",
															"src": "6372:3:26"
														},
														"variables": [
															{
																"name": "elementPos",
																"nativeSrc": "6358:10:26",
																"nodeType": "YulTypedName",
																"src": "6358:10:26",
																"type": ""
															}
														]
													},
													{
														"expression": {
															"arguments": [
																{
																	"name": "dst",
																	"nativeSrc": "6396:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "6396:3:26"
																},
																{
																	"arguments": [
																		{
																			"name": "elementPos",
																			"nativeSrc": "6422:10:26",
																			"nodeType": "YulIdentifier",
																			"src": "6422:10:26"
																		},
																		{
																			"name": "end",
																			"nativeSrc": "6434:3:26",
																			"nodeType": "YulIdentifier",
																			"src": "6434:3:26"
																		}
																	],
																	"functionName": {
																		"name": "abi_decode_t_uint256",
																		"nativeSrc": "6401:20:26",
																		"nodeType": "YulIdentifier",
																		"src": "6401:20:26"
																	},
																	"nativeSrc": "6401:37:26",
																	"nodeType": "YulFunctionCall",
																	"src": "6401:37:26"
																}
															],
															"functionName": {
																"name": "mstore",
																"nativeSrc": "6389:6:26",
																"nodeType": "YulIdentifier",
																"src": "6389:6:26"
															},
															"nativeSrc": "6389:50:26",
															"nodeType": "YulFunctionCall",
															"src": "6389:50:26"
														},
														"nativeSrc": "6389:50:26",
														"nodeType": "YulExpressionStatement",
														"src": "6389:50:26"
													},
													{
														"nativeSrc": "6452:21:26",
														"nodeType": "YulAssignment",
														"src": "6452:21:26",
														"value": {
															"arguments": [
																{
																	"name": "dst",
																	"nativeSrc": "6463:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "6463:3:26"
																},
																{
																	"kind": "number",
																	"nativeSrc": "6468:4:26",
																	"nodeType": "YulLiteral",
																	"src": "6468:4:26",
																	"type": "",
																	"value": "0x20"
																}
															],
															"functionName": {
																"name": "add",
																"nativeSrc": "6459:3:26",
																"nodeType": "YulIdentifier",
																"src": "6459:3:26"
															},
															"nativeSrc": "6459:14:26",
															"nodeType": "YulFunctionCall",
															"src": "6459:14:26"
														},
														"variableNames": [
															{
																"name": "dst",
																"nativeSrc": "6452:3:26",
																"nodeType": "YulIdentifier",
																"src": "6452:3:26"
															}
														]
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "src",
														"nativeSrc": "6292:3:26",
														"nodeType": "YulIdentifier",
														"src": "6292:3:26"
													},
													{
														"name": "srcEnd",
														"nativeSrc": "6297:6:26",
														"nodeType": "YulIdentifier",
														"src": "6297:6:26"
													}
												],
												"functionName": {
													"name": "lt",
													"nativeSrc": "6289:2:26",
													"nodeType": "YulIdentifier",
													"src": "6289:2:26"
												},
												"nativeSrc": "6289:15:26",
												"nodeType": "YulFunctionCall",
												"src": "6289:15:26"
											},
											"nativeSrc": "6263:220:26",
											"nodeType": "YulForLoop",
											"post": {
												"nativeSrc": "6305:25:26",
												"nodeType": "YulBlock",
												"src": "6305:25:26",
												"statements": [
													{
														"nativeSrc": "6307:21:26",
														"nodeType": "YulAssignment",
														"src": "6307:21:26",
														"value": {
															"arguments": [
																{
																	"name": "src",
																	"nativeSrc": "6318:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "6318:3:26"
																},
																{
																	"kind": "number",
																	"nativeSrc": "6323:4:26",
																	"nodeType": "YulLiteral",
																	"src": "6323:4:26",
																	"type": "",
																	"value": "0x20"
																}
															],
															"functionName": {
																"name": "add",
																"nativeSrc": "6314:3:26",
																"nodeType": "YulIdentifier",
																"src": "6314:3:26"
															},
															"nativeSrc": "6314:14:26",
															"nodeType": "YulFunctionCall",
															"src": "6314:14:26"
														},
														"variableNames": [
															{
																"name": "src",
																"nativeSrc": "6307:3:26",
																"nodeType": "YulIdentifier",
																"src": "6307:3:26"
															}
														]
													}
												]
											},
											"pre": {
												"nativeSrc": "6267:21:26",
												"nodeType": "YulBlock",
												"src": "6267:21:26",
												"statements": [
													{
														"nativeSrc": "6269:17:26",
														"nodeType": "YulVariableDeclaration",
														"src": "6269:17:26",
														"value": {
															"name": "offset",
															"nativeSrc": "6280:6:26",
															"nodeType": "YulIdentifier",
															"src": "6280:6:26"
														},
														"variables": [
															{
																"name": "src",
																"nativeSrc": "6273:3:26",
																"nodeType": "YulTypedName",
																"src": "6273:3:26",
																"type": ""
															}
														]
													}
												]
											},
											"src": "6263:220:26"
										}
									]
								},
								"name": "abi_decode_available_length_t_array$_t_uint256_$dyn_memory_ptr",
								"nativeSrc": "5779:710:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "offset",
										"nativeSrc": "5851:6:26",
										"nodeType": "YulTypedName",
										"src": "5851:6:26",
										"type": ""
									},
									{
										"name": "length",
										"nativeSrc": "5859:6:26",
										"nodeType": "YulTypedName",
										"src": "5859:6:26",
										"type": ""
									},
									{
										"name": "end",
										"nativeSrc": "5867:3:26",
										"nodeType": "YulTypedName",
										"src": "5867:3:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "array",
										"nativeSrc": "5875:5:26",
										"nodeType": "YulTypedName",
										"src": "5875:5:26",
										"type": ""
									}
								],
								"src": "5779:710:26"
							},
							{
								"body": {
									"nativeSrc": "6589:293:26",
									"nodeType": "YulBlock",
									"src": "6589:293:26",
									"statements": [
										{
											"body": {
												"nativeSrc": "6638:83:26",
												"nodeType": "YulBlock",
												"src": "6638:83:26",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
																"nativeSrc": "6640:77:26",
																"nodeType": "YulIdentifier",
																"src": "6640:77:26"
															},
															"nativeSrc": "6640:79:26",
															"nodeType": "YulFunctionCall",
															"src": "6640:79:26"
														},
														"nativeSrc": "6640:79:26",
														"nodeType": "YulExpressionStatement",
														"src": "6640:79:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "offset",
																		"nativeSrc": "6617:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "6617:6:26"
																	},
																	{
																		"kind": "number",
																		"nativeSrc": "6625:4:26",
																		"nodeType": "YulLiteral",
																		"src": "6625:4:26",
																		"type": "",
																		"value": "0x1f"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "6613:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "6613:3:26"
																},
																"nativeSrc": "6613:17:26",
																"nodeType": "YulFunctionCall",
																"src": "6613:17:26"
															},
															{
																"name": "end",
																"nativeSrc": "6632:3:26",
																"nodeType": "YulIdentifier",
																"src": "6632:3:26"
															}
														],
														"functionName": {
															"name": "slt",
															"nativeSrc": "6609:3:26",
															"nodeType": "YulIdentifier",
															"src": "6609:3:26"
														},
														"nativeSrc": "6609:27:26",
														"nodeType": "YulFunctionCall",
														"src": "6609:27:26"
													}
												],
												"functionName": {
													"name": "iszero",
													"nativeSrc": "6602:6:26",
													"nodeType": "YulIdentifier",
													"src": "6602:6:26"
												},
												"nativeSrc": "6602:35:26",
												"nodeType": "YulFunctionCall",
												"src": "6602:35:26"
											},
											"nativeSrc": "6599:122:26",
											"nodeType": "YulIf",
											"src": "6599:122:26"
										},
										{
											"nativeSrc": "6730:34:26",
											"nodeType": "YulVariableDeclaration",
											"src": "6730:34:26",
											"value": {
												"arguments": [
													{
														"name": "offset",
														"nativeSrc": "6757:6:26",
														"nodeType": "YulIdentifier",
														"src": "6757:6:26"
													}
												],
												"functionName": {
													"name": "calldataload",
													"nativeSrc": "6744:12:26",
													"nodeType": "YulIdentifier",
													"src": "6744:12:26"
												},
												"nativeSrc": "6744:20:26",
												"nodeType": "YulFunctionCall",
												"src": "6744:20:26"
											},
											"variables": [
												{
													"name": "length",
													"nativeSrc": "6734:6:26",
													"nodeType": "YulTypedName",
													"src": "6734:6:26",
													"type": ""
												}
											]
										},
										{
											"nativeSrc": "6773:103:26",
											"nodeType": "YulAssignment",
											"src": "6773:103:26",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "offset",
																"nativeSrc": "6849:6:26",
																"nodeType": "YulIdentifier",
																"src": "6849:6:26"
															},
															{
																"kind": "number",
																"nativeSrc": "6857:4:26",
																"nodeType": "YulLiteral",
																"src": "6857:4:26",
																"type": "",
																"value": "0x20"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "6845:3:26",
															"nodeType": "YulIdentifier",
															"src": "6845:3:26"
														},
														"nativeSrc": "6845:17:26",
														"nodeType": "YulFunctionCall",
														"src": "6845:17:26"
													},
													{
														"name": "length",
														"nativeSrc": "6864:6:26",
														"nodeType": "YulIdentifier",
														"src": "6864:6:26"
													},
													{
														"name": "end",
														"nativeSrc": "6872:3:26",
														"nodeType": "YulIdentifier",
														"src": "6872:3:26"
													}
												],
												"functionName": {
													"name": "abi_decode_available_length_t_array$_t_uint256_$dyn_memory_ptr",
													"nativeSrc": "6782:62:26",
													"nodeType": "YulIdentifier",
													"src": "6782:62:26"
												},
												"nativeSrc": "6782:94:26",
												"nodeType": "YulFunctionCall",
												"src": "6782:94:26"
											},
											"variableNames": [
												{
													"name": "array",
													"nativeSrc": "6773:5:26",
													"nodeType": "YulIdentifier",
													"src": "6773:5:26"
												}
											]
										}
									]
								},
								"name": "abi_decode_t_array$_t_uint256_$dyn_memory_ptr",
								"nativeSrc": "6512:370:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "offset",
										"nativeSrc": "6567:6:26",
										"nodeType": "YulTypedName",
										"src": "6567:6:26",
										"type": ""
									},
									{
										"name": "end",
										"nativeSrc": "6575:3:26",
										"nodeType": "YulTypedName",
										"src": "6575:3:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "array",
										"nativeSrc": "6583:5:26",
										"nodeType": "YulTypedName",
										"src": "6583:5:26",
										"type": ""
									}
								],
								"src": "6512:370:26"
							},
							{
								"body": {
									"nativeSrc": "6977:28:26",
									"nodeType": "YulBlock",
									"src": "6977:28:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nativeSrc": "6994:1:26",
														"nodeType": "YulLiteral",
														"src": "6994:1:26",
														"type": "",
														"value": "0"
													},
													{
														"kind": "number",
														"nativeSrc": "6997:1:26",
														"nodeType": "YulLiteral",
														"src": "6997:1:26",
														"type": "",
														"value": "0"
													}
												],
												"functionName": {
													"name": "revert",
													"nativeSrc": "6987:6:26",
													"nodeType": "YulIdentifier",
													"src": "6987:6:26"
												},
												"nativeSrc": "6987:12:26",
												"nodeType": "YulFunctionCall",
												"src": "6987:12:26"
											},
											"nativeSrc": "6987:12:26",
											"nodeType": "YulExpressionStatement",
											"src": "6987:12:26"
										}
									]
								},
								"name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
								"nativeSrc": "6888:117:26",
								"nodeType": "YulFunctionDefinition",
								"src": "6888:117:26"
							},
							{
								"body": {
									"nativeSrc": "7077:241:26",
									"nodeType": "YulBlock",
									"src": "7077:241:26",
									"statements": [
										{
											"body": {
												"nativeSrc": "7182:22:26",
												"nodeType": "YulBlock",
												"src": "7182:22:26",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "panic_error_0x41",
																"nativeSrc": "7184:16:26",
																"nodeType": "YulIdentifier",
																"src": "7184:16:26"
															},
															"nativeSrc": "7184:18:26",
															"nodeType": "YulFunctionCall",
															"src": "7184:18:26"
														},
														"nativeSrc": "7184:18:26",
														"nodeType": "YulExpressionStatement",
														"src": "7184:18:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "length",
														"nativeSrc": "7154:6:26",
														"nodeType": "YulIdentifier",
														"src": "7154:6:26"
													},
													{
														"kind": "number",
														"nativeSrc": "7162:18:26",
														"nodeType": "YulLiteral",
														"src": "7162:18:26",
														"type": "",
														"value": "0xffffffffffffffff"
													}
												],
												"functionName": {
													"name": "gt",
													"nativeSrc": "7151:2:26",
													"nodeType": "YulIdentifier",
													"src": "7151:2:26"
												},
												"nativeSrc": "7151:30:26",
												"nodeType": "YulFunctionCall",
												"src": "7151:30:26"
											},
											"nativeSrc": "7148:56:26",
											"nodeType": "YulIf",
											"src": "7148:56:26"
										},
										{
											"nativeSrc": "7214:37:26",
											"nodeType": "YulAssignment",
											"src": "7214:37:26",
											"value": {
												"arguments": [
													{
														"name": "length",
														"nativeSrc": "7244:6:26",
														"nodeType": "YulIdentifier",
														"src": "7244:6:26"
													}
												],
												"functionName": {
													"name": "round_up_to_mul_of_32",
													"nativeSrc": "7222:21:26",
													"nodeType": "YulIdentifier",
													"src": "7222:21:26"
												},
												"nativeSrc": "7222:29:26",
												"nodeType": "YulFunctionCall",
												"src": "7222:29:26"
											},
											"variableNames": [
												{
													"name": "size",
													"nativeSrc": "7214:4:26",
													"nodeType": "YulIdentifier",
													"src": "7214:4:26"
												}
											]
										},
										{
											"nativeSrc": "7288:23:26",
											"nodeType": "YulAssignment",
											"src": "7288:23:26",
											"value": {
												"arguments": [
													{
														"name": "size",
														"nativeSrc": "7300:4:26",
														"nodeType": "YulIdentifier",
														"src": "7300:4:26"
													},
													{
														"kind": "number",
														"nativeSrc": "7306:4:26",
														"nodeType": "YulLiteral",
														"src": "7306:4:26",
														"type": "",
														"value": "0x20"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "7296:3:26",
													"nodeType": "YulIdentifier",
													"src": "7296:3:26"
												},
												"nativeSrc": "7296:15:26",
												"nodeType": "YulFunctionCall",
												"src": "7296:15:26"
											},
											"variableNames": [
												{
													"name": "size",
													"nativeSrc": "7288:4:26",
													"nodeType": "YulIdentifier",
													"src": "7288:4:26"
												}
											]
										}
									]
								},
								"name": "array_allocation_size_t_bytes_memory_ptr",
								"nativeSrc": "7011:307:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "length",
										"nativeSrc": "7061:6:26",
										"nodeType": "YulTypedName",
										"src": "7061:6:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "size",
										"nativeSrc": "7072:4:26",
										"nodeType": "YulTypedName",
										"src": "7072:4:26",
										"type": ""
									}
								],
								"src": "7011:307:26"
							},
							{
								"body": {
									"nativeSrc": "7388:84:26",
									"nodeType": "YulBlock",
									"src": "7388:84:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "dst",
														"nativeSrc": "7412:3:26",
														"nodeType": "YulIdentifier",
														"src": "7412:3:26"
													},
													{
														"name": "src",
														"nativeSrc": "7417:3:26",
														"nodeType": "YulIdentifier",
														"src": "7417:3:26"
													},
													{
														"name": "length",
														"nativeSrc": "7422:6:26",
														"nodeType": "YulIdentifier",
														"src": "7422:6:26"
													}
												],
												"functionName": {
													"name": "calldatacopy",
													"nativeSrc": "7399:12:26",
													"nodeType": "YulIdentifier",
													"src": "7399:12:26"
												},
												"nativeSrc": "7399:30:26",
												"nodeType": "YulFunctionCall",
												"src": "7399:30:26"
											},
											"nativeSrc": "7399:30:26",
											"nodeType": "YulExpressionStatement",
											"src": "7399:30:26"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "dst",
																"nativeSrc": "7449:3:26",
																"nodeType": "YulIdentifier",
																"src": "7449:3:26"
															},
															{
																"name": "length",
																"nativeSrc": "7454:6:26",
																"nodeType": "YulIdentifier",
																"src": "7454:6:26"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "7445:3:26",
															"nodeType": "YulIdentifier",
															"src": "7445:3:26"
														},
														"nativeSrc": "7445:16:26",
														"nodeType": "YulFunctionCall",
														"src": "7445:16:26"
													},
													{
														"kind": "number",
														"nativeSrc": "7463:1:26",
														"nodeType": "YulLiteral",
														"src": "7463:1:26",
														"type": "",
														"value": "0"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "7438:6:26",
													"nodeType": "YulIdentifier",
													"src": "7438:6:26"
												},
												"nativeSrc": "7438:27:26",
												"nodeType": "YulFunctionCall",
												"src": "7438:27:26"
											},
											"nativeSrc": "7438:27:26",
											"nodeType": "YulExpressionStatement",
											"src": "7438:27:26"
										}
									]
								},
								"name": "copy_calldata_to_memory_with_cleanup",
								"nativeSrc": "7324:148:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "src",
										"nativeSrc": "7370:3:26",
										"nodeType": "YulTypedName",
										"src": "7370:3:26",
										"type": ""
									},
									{
										"name": "dst",
										"nativeSrc": "7375:3:26",
										"nodeType": "YulTypedName",
										"src": "7375:3:26",
										"type": ""
									},
									{
										"name": "length",
										"nativeSrc": "7380:6:26",
										"nodeType": "YulTypedName",
										"src": "7380:6:26",
										"type": ""
									}
								],
								"src": "7324:148:26"
							},
							{
								"body": {
									"nativeSrc": "7561:340:26",
									"nodeType": "YulBlock",
									"src": "7561:340:26",
									"statements": [
										{
											"nativeSrc": "7571:74:26",
											"nodeType": "YulAssignment",
											"src": "7571:74:26",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "length",
																"nativeSrc": "7637:6:26",
																"nodeType": "YulIdentifier",
																"src": "7637:6:26"
															}
														],
														"functionName": {
															"name": "array_allocation_size_t_bytes_memory_ptr",
															"nativeSrc": "7596:40:26",
															"nodeType": "YulIdentifier",
															"src": "7596:40:26"
														},
														"nativeSrc": "7596:48:26",
														"nodeType": "YulFunctionCall",
														"src": "7596:48:26"
													}
												],
												"functionName": {
													"name": "allocate_memory",
													"nativeSrc": "7580:15:26",
													"nodeType": "YulIdentifier",
													"src": "7580:15:26"
												},
												"nativeSrc": "7580:65:26",
												"nodeType": "YulFunctionCall",
												"src": "7580:65:26"
											},
											"variableNames": [
												{
													"name": "array",
													"nativeSrc": "7571:5:26",
													"nodeType": "YulIdentifier",
													"src": "7571:5:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "array",
														"nativeSrc": "7661:5:26",
														"nodeType": "YulIdentifier",
														"src": "7661:5:26"
													},
													{
														"name": "length",
														"nativeSrc": "7668:6:26",
														"nodeType": "YulIdentifier",
														"src": "7668:6:26"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "7654:6:26",
													"nodeType": "YulIdentifier",
													"src": "7654:6:26"
												},
												"nativeSrc": "7654:21:26",
												"nodeType": "YulFunctionCall",
												"src": "7654:21:26"
											},
											"nativeSrc": "7654:21:26",
											"nodeType": "YulExpressionStatement",
											"src": "7654:21:26"
										},
										{
											"nativeSrc": "7684:27:26",
											"nodeType": "YulVariableDeclaration",
											"src": "7684:27:26",
											"value": {
												"arguments": [
													{
														"name": "array",
														"nativeSrc": "7699:5:26",
														"nodeType": "YulIdentifier",
														"src": "7699:5:26"
													},
													{
														"kind": "number",
														"nativeSrc": "7706:4:26",
														"nodeType": "YulLiteral",
														"src": "7706:4:26",
														"type": "",
														"value": "0x20"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "7695:3:26",
													"nodeType": "YulIdentifier",
													"src": "7695:3:26"
												},
												"nativeSrc": "7695:16:26",
												"nodeType": "YulFunctionCall",
												"src": "7695:16:26"
											},
											"variables": [
												{
													"name": "dst",
													"nativeSrc": "7688:3:26",
													"nodeType": "YulTypedName",
													"src": "7688:3:26",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nativeSrc": "7749:83:26",
												"nodeType": "YulBlock",
												"src": "7749:83:26",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
																"nativeSrc": "7751:77:26",
																"nodeType": "YulIdentifier",
																"src": "7751:77:26"
															},
															"nativeSrc": "7751:79:26",
															"nodeType": "YulFunctionCall",
															"src": "7751:79:26"
														},
														"nativeSrc": "7751:79:26",
														"nodeType": "YulExpressionStatement",
														"src": "7751:79:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "src",
																"nativeSrc": "7730:3:26",
																"nodeType": "YulIdentifier",
																"src": "7730:3:26"
															},
															{
																"name": "length",
																"nativeSrc": "7735:6:26",
																"nodeType": "YulIdentifier",
																"src": "7735:6:26"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "7726:3:26",
															"nodeType": "YulIdentifier",
															"src": "7726:3:26"
														},
														"nativeSrc": "7726:16:26",
														"nodeType": "YulFunctionCall",
														"src": "7726:16:26"
													},
													{
														"name": "end",
														"nativeSrc": "7744:3:26",
														"nodeType": "YulIdentifier",
														"src": "7744:3:26"
													}
												],
												"functionName": {
													"name": "gt",
													"nativeSrc": "7723:2:26",
													"nodeType": "YulIdentifier",
													"src": "7723:2:26"
												},
												"nativeSrc": "7723:25:26",
												"nodeType": "YulFunctionCall",
												"src": "7723:25:26"
											},
											"nativeSrc": "7720:112:26",
											"nodeType": "YulIf",
											"src": "7720:112:26"
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "src",
														"nativeSrc": "7878:3:26",
														"nodeType": "YulIdentifier",
														"src": "7878:3:26"
													},
													{
														"name": "dst",
														"nativeSrc": "7883:3:26",
														"nodeType": "YulIdentifier",
														"src": "7883:3:26"
													},
													{
														"name": "length",
														"nativeSrc": "7888:6:26",
														"nodeType": "YulIdentifier",
														"src": "7888:6:26"
													}
												],
												"functionName": {
													"name": "copy_calldata_to_memory_with_cleanup",
													"nativeSrc": "7841:36:26",
													"nodeType": "YulIdentifier",
													"src": "7841:36:26"
												},
												"nativeSrc": "7841:54:26",
												"nodeType": "YulFunctionCall",
												"src": "7841:54:26"
											},
											"nativeSrc": "7841:54:26",
											"nodeType": "YulExpressionStatement",
											"src": "7841:54:26"
										}
									]
								},
								"name": "abi_decode_available_length_t_bytes_memory_ptr",
								"nativeSrc": "7478:423:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "src",
										"nativeSrc": "7534:3:26",
										"nodeType": "YulTypedName",
										"src": "7534:3:26",
										"type": ""
									},
									{
										"name": "length",
										"nativeSrc": "7539:6:26",
										"nodeType": "YulTypedName",
										"src": "7539:6:26",
										"type": ""
									},
									{
										"name": "end",
										"nativeSrc": "7547:3:26",
										"nodeType": "YulTypedName",
										"src": "7547:3:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "array",
										"nativeSrc": "7555:5:26",
										"nodeType": "YulTypedName",
										"src": "7555:5:26",
										"type": ""
									}
								],
								"src": "7478:423:26"
							},
							{
								"body": {
									"nativeSrc": "7981:277:26",
									"nodeType": "YulBlock",
									"src": "7981:277:26",
									"statements": [
										{
											"body": {
												"nativeSrc": "8030:83:26",
												"nodeType": "YulBlock",
												"src": "8030:83:26",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
																"nativeSrc": "8032:77:26",
																"nodeType": "YulIdentifier",
																"src": "8032:77:26"
															},
															"nativeSrc": "8032:79:26",
															"nodeType": "YulFunctionCall",
															"src": "8032:79:26"
														},
														"nativeSrc": "8032:79:26",
														"nodeType": "YulExpressionStatement",
														"src": "8032:79:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "offset",
																		"nativeSrc": "8009:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "8009:6:26"
																	},
																	{
																		"kind": "number",
																		"nativeSrc": "8017:4:26",
																		"nodeType": "YulLiteral",
																		"src": "8017:4:26",
																		"type": "",
																		"value": "0x1f"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "8005:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "8005:3:26"
																},
																"nativeSrc": "8005:17:26",
																"nodeType": "YulFunctionCall",
																"src": "8005:17:26"
															},
															{
																"name": "end",
																"nativeSrc": "8024:3:26",
																"nodeType": "YulIdentifier",
																"src": "8024:3:26"
															}
														],
														"functionName": {
															"name": "slt",
															"nativeSrc": "8001:3:26",
															"nodeType": "YulIdentifier",
															"src": "8001:3:26"
														},
														"nativeSrc": "8001:27:26",
														"nodeType": "YulFunctionCall",
														"src": "8001:27:26"
													}
												],
												"functionName": {
													"name": "iszero",
													"nativeSrc": "7994:6:26",
													"nodeType": "YulIdentifier",
													"src": "7994:6:26"
												},
												"nativeSrc": "7994:35:26",
												"nodeType": "YulFunctionCall",
												"src": "7994:35:26"
											},
											"nativeSrc": "7991:122:26",
											"nodeType": "YulIf",
											"src": "7991:122:26"
										},
										{
											"nativeSrc": "8122:34:26",
											"nodeType": "YulVariableDeclaration",
											"src": "8122:34:26",
											"value": {
												"arguments": [
													{
														"name": "offset",
														"nativeSrc": "8149:6:26",
														"nodeType": "YulIdentifier",
														"src": "8149:6:26"
													}
												],
												"functionName": {
													"name": "calldataload",
													"nativeSrc": "8136:12:26",
													"nodeType": "YulIdentifier",
													"src": "8136:12:26"
												},
												"nativeSrc": "8136:20:26",
												"nodeType": "YulFunctionCall",
												"src": "8136:20:26"
											},
											"variables": [
												{
													"name": "length",
													"nativeSrc": "8126:6:26",
													"nodeType": "YulTypedName",
													"src": "8126:6:26",
													"type": ""
												}
											]
										},
										{
											"nativeSrc": "8165:87:26",
											"nodeType": "YulAssignment",
											"src": "8165:87:26",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "offset",
																"nativeSrc": "8225:6:26",
																"nodeType": "YulIdentifier",
																"src": "8225:6:26"
															},
															{
																"kind": "number",
																"nativeSrc": "8233:4:26",
																"nodeType": "YulLiteral",
																"src": "8233:4:26",
																"type": "",
																"value": "0x20"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "8221:3:26",
															"nodeType": "YulIdentifier",
															"src": "8221:3:26"
														},
														"nativeSrc": "8221:17:26",
														"nodeType": "YulFunctionCall",
														"src": "8221:17:26"
													},
													{
														"name": "length",
														"nativeSrc": "8240:6:26",
														"nodeType": "YulIdentifier",
														"src": "8240:6:26"
													},
													{
														"name": "end",
														"nativeSrc": "8248:3:26",
														"nodeType": "YulIdentifier",
														"src": "8248:3:26"
													}
												],
												"functionName": {
													"name": "abi_decode_available_length_t_bytes_memory_ptr",
													"nativeSrc": "8174:46:26",
													"nodeType": "YulIdentifier",
													"src": "8174:46:26"
												},
												"nativeSrc": "8174:78:26",
												"nodeType": "YulFunctionCall",
												"src": "8174:78:26"
											},
											"variableNames": [
												{
													"name": "array",
													"nativeSrc": "8165:5:26",
													"nodeType": "YulIdentifier",
													"src": "8165:5:26"
												}
											]
										}
									]
								},
								"name": "abi_decode_t_bytes_memory_ptr",
								"nativeSrc": "7920:338:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "offset",
										"nativeSrc": "7959:6:26",
										"nodeType": "YulTypedName",
										"src": "7959:6:26",
										"type": ""
									},
									{
										"name": "end",
										"nativeSrc": "7967:3:26",
										"nodeType": "YulTypedName",
										"src": "7967:3:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "array",
										"nativeSrc": "7975:5:26",
										"nodeType": "YulTypedName",
										"src": "7975:5:26",
										"type": ""
									}
								],
								"src": "7920:338:26"
							},
							{
								"body": {
									"nativeSrc": "8457:1316:26",
									"nodeType": "YulBlock",
									"src": "8457:1316:26",
									"statements": [
										{
											"body": {
												"nativeSrc": "8504:83:26",
												"nodeType": "YulBlock",
												"src": "8504:83:26",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
																"nativeSrc": "8506:77:26",
																"nodeType": "YulIdentifier",
																"src": "8506:77:26"
															},
															"nativeSrc": "8506:79:26",
															"nodeType": "YulFunctionCall",
															"src": "8506:79:26"
														},
														"nativeSrc": "8506:79:26",
														"nodeType": "YulExpressionStatement",
														"src": "8506:79:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "dataEnd",
																"nativeSrc": "8478:7:26",
																"nodeType": "YulIdentifier",
																"src": "8478:7:26"
															},
															{
																"name": "headStart",
																"nativeSrc": "8487:9:26",
																"nodeType": "YulIdentifier",
																"src": "8487:9:26"
															}
														],
														"functionName": {
															"name": "sub",
															"nativeSrc": "8474:3:26",
															"nodeType": "YulIdentifier",
															"src": "8474:3:26"
														},
														"nativeSrc": "8474:23:26",
														"nodeType": "YulFunctionCall",
														"src": "8474:23:26"
													},
													{
														"kind": "number",
														"nativeSrc": "8499:3:26",
														"nodeType": "YulLiteral",
														"src": "8499:3:26",
														"type": "",
														"value": "160"
													}
												],
												"functionName": {
													"name": "slt",
													"nativeSrc": "8470:3:26",
													"nodeType": "YulIdentifier",
													"src": "8470:3:26"
												},
												"nativeSrc": "8470:33:26",
												"nodeType": "YulFunctionCall",
												"src": "8470:33:26"
											},
											"nativeSrc": "8467:120:26",
											"nodeType": "YulIf",
											"src": "8467:120:26"
										},
										{
											"nativeSrc": "8597:117:26",
											"nodeType": "YulBlock",
											"src": "8597:117:26",
											"statements": [
												{
													"nativeSrc": "8612:15:26",
													"nodeType": "YulVariableDeclaration",
													"src": "8612:15:26",
													"value": {
														"kind": "number",
														"nativeSrc": "8626:1:26",
														"nodeType": "YulLiteral",
														"src": "8626:1:26",
														"type": "",
														"value": "0"
													},
													"variables": [
														{
															"name": "offset",
															"nativeSrc": "8616:6:26",
															"nodeType": "YulTypedName",
															"src": "8616:6:26",
															"type": ""
														}
													]
												},
												{
													"nativeSrc": "8641:63:26",
													"nodeType": "YulAssignment",
													"src": "8641:63:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "8676:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "8676:9:26"
																	},
																	{
																		"name": "offset",
																		"nativeSrc": "8687:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "8687:6:26"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "8672:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "8672:3:26"
																},
																"nativeSrc": "8672:22:26",
																"nodeType": "YulFunctionCall",
																"src": "8672:22:26"
															},
															{
																"name": "dataEnd",
																"nativeSrc": "8696:7:26",
																"nodeType": "YulIdentifier",
																"src": "8696:7:26"
															}
														],
														"functionName": {
															"name": "abi_decode_t_address",
															"nativeSrc": "8651:20:26",
															"nodeType": "YulIdentifier",
															"src": "8651:20:26"
														},
														"nativeSrc": "8651:53:26",
														"nodeType": "YulFunctionCall",
														"src": "8651:53:26"
													},
													"variableNames": [
														{
															"name": "value0",
															"nativeSrc": "8641:6:26",
															"nodeType": "YulIdentifier",
															"src": "8641:6:26"
														}
													]
												}
											]
										},
										{
											"nativeSrc": "8724:118:26",
											"nodeType": "YulBlock",
											"src": "8724:118:26",
											"statements": [
												{
													"nativeSrc": "8739:16:26",
													"nodeType": "YulVariableDeclaration",
													"src": "8739:16:26",
													"value": {
														"kind": "number",
														"nativeSrc": "8753:2:26",
														"nodeType": "YulLiteral",
														"src": "8753:2:26",
														"type": "",
														"value": "32"
													},
													"variables": [
														{
															"name": "offset",
															"nativeSrc": "8743:6:26",
															"nodeType": "YulTypedName",
															"src": "8743:6:26",
															"type": ""
														}
													]
												},
												{
													"nativeSrc": "8769:63:26",
													"nodeType": "YulAssignment",
													"src": "8769:63:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "8804:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "8804:9:26"
																	},
																	{
																		"name": "offset",
																		"nativeSrc": "8815:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "8815:6:26"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "8800:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "8800:3:26"
																},
																"nativeSrc": "8800:22:26",
																"nodeType": "YulFunctionCall",
																"src": "8800:22:26"
															},
															{
																"name": "dataEnd",
																"nativeSrc": "8824:7:26",
																"nodeType": "YulIdentifier",
																"src": "8824:7:26"
															}
														],
														"functionName": {
															"name": "abi_decode_t_address",
															"nativeSrc": "8779:20:26",
															"nodeType": "YulIdentifier",
															"src": "8779:20:26"
														},
														"nativeSrc": "8779:53:26",
														"nodeType": "YulFunctionCall",
														"src": "8779:53:26"
													},
													"variableNames": [
														{
															"name": "value1",
															"nativeSrc": "8769:6:26",
															"nodeType": "YulIdentifier",
															"src": "8769:6:26"
														}
													]
												}
											]
										},
										{
											"nativeSrc": "8852:303:26",
											"nodeType": "YulBlock",
											"src": "8852:303:26",
											"statements": [
												{
													"nativeSrc": "8867:46:26",
													"nodeType": "YulVariableDeclaration",
													"src": "8867:46:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "8898:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "8898:9:26"
																	},
																	{
																		"kind": "number",
																		"nativeSrc": "8909:2:26",
																		"nodeType": "YulLiteral",
																		"src": "8909:2:26",
																		"type": "",
																		"value": "64"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "8894:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "8894:3:26"
																},
																"nativeSrc": "8894:18:26",
																"nodeType": "YulFunctionCall",
																"src": "8894:18:26"
															}
														],
														"functionName": {
															"name": "calldataload",
															"nativeSrc": "8881:12:26",
															"nodeType": "YulIdentifier",
															"src": "8881:12:26"
														},
														"nativeSrc": "8881:32:26",
														"nodeType": "YulFunctionCall",
														"src": "8881:32:26"
													},
													"variables": [
														{
															"name": "offset",
															"nativeSrc": "8871:6:26",
															"nodeType": "YulTypedName",
															"src": "8871:6:26",
															"type": ""
														}
													]
												},
												{
													"body": {
														"nativeSrc": "8960:83:26",
														"nodeType": "YulBlock",
														"src": "8960:83:26",
														"statements": [
															{
																"expression": {
																	"arguments": [],
																	"functionName": {
																		"name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
																		"nativeSrc": "8962:77:26",
																		"nodeType": "YulIdentifier",
																		"src": "8962:77:26"
																	},
																	"nativeSrc": "8962:79:26",
																	"nodeType": "YulFunctionCall",
																	"src": "8962:79:26"
																},
																"nativeSrc": "8962:79:26",
																"nodeType": "YulExpressionStatement",
																"src": "8962:79:26"
															}
														]
													},
													"condition": {
														"arguments": [
															{
																"name": "offset",
																"nativeSrc": "8932:6:26",
																"nodeType": "YulIdentifier",
																"src": "8932:6:26"
															},
															{
																"kind": "number",
																"nativeSrc": "8940:18:26",
																"nodeType": "YulLiteral",
																"src": "8940:18:26",
																"type": "",
																"value": "0xffffffffffffffff"
															}
														],
														"functionName": {
															"name": "gt",
															"nativeSrc": "8929:2:26",
															"nodeType": "YulIdentifier",
															"src": "8929:2:26"
														},
														"nativeSrc": "8929:30:26",
														"nodeType": "YulFunctionCall",
														"src": "8929:30:26"
													},
													"nativeSrc": "8926:117:26",
													"nodeType": "YulIf",
													"src": "8926:117:26"
												},
												{
													"nativeSrc": "9057:88:26",
													"nodeType": "YulAssignment",
													"src": "9057:88:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "9117:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "9117:9:26"
																	},
																	{
																		"name": "offset",
																		"nativeSrc": "9128:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "9128:6:26"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "9113:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "9113:3:26"
																},
																"nativeSrc": "9113:22:26",
																"nodeType": "YulFunctionCall",
																"src": "9113:22:26"
															},
															{
																"name": "dataEnd",
																"nativeSrc": "9137:7:26",
																"nodeType": "YulIdentifier",
																"src": "9137:7:26"
															}
														],
														"functionName": {
															"name": "abi_decode_t_array$_t_uint256_$dyn_memory_ptr",
															"nativeSrc": "9067:45:26",
															"nodeType": "YulIdentifier",
															"src": "9067:45:26"
														},
														"nativeSrc": "9067:78:26",
														"nodeType": "YulFunctionCall",
														"src": "9067:78:26"
													},
													"variableNames": [
														{
															"name": "value2",
															"nativeSrc": "9057:6:26",
															"nodeType": "YulIdentifier",
															"src": "9057:6:26"
														}
													]
												}
											]
										},
										{
											"nativeSrc": "9165:303:26",
											"nodeType": "YulBlock",
											"src": "9165:303:26",
											"statements": [
												{
													"nativeSrc": "9180:46:26",
													"nodeType": "YulVariableDeclaration",
													"src": "9180:46:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "9211:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "9211:9:26"
																	},
																	{
																		"kind": "number",
																		"nativeSrc": "9222:2:26",
																		"nodeType": "YulLiteral",
																		"src": "9222:2:26",
																		"type": "",
																		"value": "96"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "9207:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "9207:3:26"
																},
																"nativeSrc": "9207:18:26",
																"nodeType": "YulFunctionCall",
																"src": "9207:18:26"
															}
														],
														"functionName": {
															"name": "calldataload",
															"nativeSrc": "9194:12:26",
															"nodeType": "YulIdentifier",
															"src": "9194:12:26"
														},
														"nativeSrc": "9194:32:26",
														"nodeType": "YulFunctionCall",
														"src": "9194:32:26"
													},
													"variables": [
														{
															"name": "offset",
															"nativeSrc": "9184:6:26",
															"nodeType": "YulTypedName",
															"src": "9184:6:26",
															"type": ""
														}
													]
												},
												{
													"body": {
														"nativeSrc": "9273:83:26",
														"nodeType": "YulBlock",
														"src": "9273:83:26",
														"statements": [
															{
																"expression": {
																	"arguments": [],
																	"functionName": {
																		"name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
																		"nativeSrc": "9275:77:26",
																		"nodeType": "YulIdentifier",
																		"src": "9275:77:26"
																	},
																	"nativeSrc": "9275:79:26",
																	"nodeType": "YulFunctionCall",
																	"src": "9275:79:26"
																},
																"nativeSrc": "9275:79:26",
																"nodeType": "YulExpressionStatement",
																"src": "9275:79:26"
															}
														]
													},
													"condition": {
														"arguments": [
															{
																"name": "offset",
																"nativeSrc": "9245:6:26",
																"nodeType": "YulIdentifier",
																"src": "9245:6:26"
															},
															{
																"kind": "number",
																"nativeSrc": "9253:18:26",
																"nodeType": "YulLiteral",
																"src": "9253:18:26",
																"type": "",
																"value": "0xffffffffffffffff"
															}
														],
														"functionName": {
															"name": "gt",
															"nativeSrc": "9242:2:26",
															"nodeType": "YulIdentifier",
															"src": "9242:2:26"
														},
														"nativeSrc": "9242:30:26",
														"nodeType": "YulFunctionCall",
														"src": "9242:30:26"
													},
													"nativeSrc": "9239:117:26",
													"nodeType": "YulIf",
													"src": "9239:117:26"
												},
												{
													"nativeSrc": "9370:88:26",
													"nodeType": "YulAssignment",
													"src": "9370:88:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "9430:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "9430:9:26"
																	},
																	{
																		"name": "offset",
																		"nativeSrc": "9441:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "9441:6:26"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "9426:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "9426:3:26"
																},
																"nativeSrc": "9426:22:26",
																"nodeType": "YulFunctionCall",
																"src": "9426:22:26"
															},
															{
																"name": "dataEnd",
																"nativeSrc": "9450:7:26",
																"nodeType": "YulIdentifier",
																"src": "9450:7:26"
															}
														],
														"functionName": {
															"name": "abi_decode_t_array$_t_uint256_$dyn_memory_ptr",
															"nativeSrc": "9380:45:26",
															"nodeType": "YulIdentifier",
															"src": "9380:45:26"
														},
														"nativeSrc": "9380:78:26",
														"nodeType": "YulFunctionCall",
														"src": "9380:78:26"
													},
													"variableNames": [
														{
															"name": "value3",
															"nativeSrc": "9370:6:26",
															"nodeType": "YulIdentifier",
															"src": "9370:6:26"
														}
													]
												}
											]
										},
										{
											"nativeSrc": "9478:288:26",
											"nodeType": "YulBlock",
											"src": "9478:288:26",
											"statements": [
												{
													"nativeSrc": "9493:47:26",
													"nodeType": "YulVariableDeclaration",
													"src": "9493:47:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "9524:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "9524:9:26"
																	},
																	{
																		"kind": "number",
																		"nativeSrc": "9535:3:26",
																		"nodeType": "YulLiteral",
																		"src": "9535:3:26",
																		"type": "",
																		"value": "128"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "9520:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "9520:3:26"
																},
																"nativeSrc": "9520:19:26",
																"nodeType": "YulFunctionCall",
																"src": "9520:19:26"
															}
														],
														"functionName": {
															"name": "calldataload",
															"nativeSrc": "9507:12:26",
															"nodeType": "YulIdentifier",
															"src": "9507:12:26"
														},
														"nativeSrc": "9507:33:26",
														"nodeType": "YulFunctionCall",
														"src": "9507:33:26"
													},
													"variables": [
														{
															"name": "offset",
															"nativeSrc": "9497:6:26",
															"nodeType": "YulTypedName",
															"src": "9497:6:26",
															"type": ""
														}
													]
												},
												{
													"body": {
														"nativeSrc": "9587:83:26",
														"nodeType": "YulBlock",
														"src": "9587:83:26",
														"statements": [
															{
																"expression": {
																	"arguments": [],
																	"functionName": {
																		"name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
																		"nativeSrc": "9589:77:26",
																		"nodeType": "YulIdentifier",
																		"src": "9589:77:26"
																	},
																	"nativeSrc": "9589:79:26",
																	"nodeType": "YulFunctionCall",
																	"src": "9589:79:26"
																},
																"nativeSrc": "9589:79:26",
																"nodeType": "YulExpressionStatement",
																"src": "9589:79:26"
															}
														]
													},
													"condition": {
														"arguments": [
															{
																"name": "offset",
																"nativeSrc": "9559:6:26",
																"nodeType": "YulIdentifier",
																"src": "9559:6:26"
															},
															{
																"kind": "number",
																"nativeSrc": "9567:18:26",
																"nodeType": "YulLiteral",
																"src": "9567:18:26",
																"type": "",
																"value": "0xffffffffffffffff"
															}
														],
														"functionName": {
															"name": "gt",
															"nativeSrc": "9556:2:26",
															"nodeType": "YulIdentifier",
															"src": "9556:2:26"
														},
														"nativeSrc": "9556:30:26",
														"nodeType": "YulFunctionCall",
														"src": "9556:30:26"
													},
													"nativeSrc": "9553:117:26",
													"nodeType": "YulIf",
													"src": "9553:117:26"
												},
												{
													"nativeSrc": "9684:72:26",
													"nodeType": "YulAssignment",
													"src": "9684:72:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "9728:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "9728:9:26"
																	},
																	{
																		"name": "offset",
																		"nativeSrc": "9739:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "9739:6:26"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "9724:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "9724:3:26"
																},
																"nativeSrc": "9724:22:26",
																"nodeType": "YulFunctionCall",
																"src": "9724:22:26"
															},
															{
																"name": "dataEnd",
																"nativeSrc": "9748:7:26",
																"nodeType": "YulIdentifier",
																"src": "9748:7:26"
															}
														],
														"functionName": {
															"name": "abi_decode_t_bytes_memory_ptr",
															"nativeSrc": "9694:29:26",
															"nodeType": "YulIdentifier",
															"src": "9694:29:26"
														},
														"nativeSrc": "9694:62:26",
														"nodeType": "YulFunctionCall",
														"src": "9694:62:26"
													},
													"variableNames": [
														{
															"name": "value4",
															"nativeSrc": "9684:6:26",
															"nodeType": "YulIdentifier",
															"src": "9684:6:26"
														}
													]
												}
											]
										}
									]
								},
								"name": "abi_decode_tuple_t_addresst_addresst_array$_t_uint256_$dyn_memory_ptrt_array$_t_uint256_$dyn_memory_ptrt_bytes_memory_ptr",
								"nativeSrc": "8264:1509:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "8395:9:26",
										"nodeType": "YulTypedName",
										"src": "8395:9:26",
										"type": ""
									},
									{
										"name": "dataEnd",
										"nativeSrc": "8406:7:26",
										"nodeType": "YulTypedName",
										"src": "8406:7:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value0",
										"nativeSrc": "8418:6:26",
										"nodeType": "YulTypedName",
										"src": "8418:6:26",
										"type": ""
									},
									{
										"name": "value1",
										"nativeSrc": "8426:6:26",
										"nodeType": "YulTypedName",
										"src": "8426:6:26",
										"type": ""
									},
									{
										"name": "value2",
										"nativeSrc": "8434:6:26",
										"nodeType": "YulTypedName",
										"src": "8434:6:26",
										"type": ""
									},
									{
										"name": "value3",
										"nativeSrc": "8442:6:26",
										"nodeType": "YulTypedName",
										"src": "8442:6:26",
										"type": ""
									},
									{
										"name": "value4",
										"nativeSrc": "8450:6:26",
										"nodeType": "YulTypedName",
										"src": "8450:6:26",
										"type": ""
									}
								],
								"src": "8264:1509:26"
							},
							{
								"body": {
									"nativeSrc": "9842:52:26",
									"nodeType": "YulBlock",
									"src": "9842:52:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "9859:3:26",
														"nodeType": "YulIdentifier",
														"src": "9859:3:26"
													},
													{
														"arguments": [
															{
																"name": "value",
																"nativeSrc": "9881:5:26",
																"nodeType": "YulIdentifier",
																"src": "9881:5:26"
															}
														],
														"functionName": {
															"name": "cleanup_t_bytes4",
															"nativeSrc": "9864:16:26",
															"nodeType": "YulIdentifier",
															"src": "9864:16:26"
														},
														"nativeSrc": "9864:23:26",
														"nodeType": "YulFunctionCall",
														"src": "9864:23:26"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "9852:6:26",
													"nodeType": "YulIdentifier",
													"src": "9852:6:26"
												},
												"nativeSrc": "9852:36:26",
												"nodeType": "YulFunctionCall",
												"src": "9852:36:26"
											},
											"nativeSrc": "9852:36:26",
											"nodeType": "YulExpressionStatement",
											"src": "9852:36:26"
										}
									]
								},
								"name": "abi_encode_t_bytes4_to_t_bytes4_fromStack",
								"nativeSrc": "9779:115:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "9830:5:26",
										"nodeType": "YulTypedName",
										"src": "9830:5:26",
										"type": ""
									},
									{
										"name": "pos",
										"nativeSrc": "9837:3:26",
										"nodeType": "YulTypedName",
										"src": "9837:3:26",
										"type": ""
									}
								],
								"src": "9779:115:26"
							},
							{
								"body": {
									"nativeSrc": "9996:122:26",
									"nodeType": "YulBlock",
									"src": "9996:122:26",
									"statements": [
										{
											"nativeSrc": "10006:26:26",
											"nodeType": "YulAssignment",
											"src": "10006:26:26",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nativeSrc": "10018:9:26",
														"nodeType": "YulIdentifier",
														"src": "10018:9:26"
													},
													{
														"kind": "number",
														"nativeSrc": "10029:2:26",
														"nodeType": "YulLiteral",
														"src": "10029:2:26",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "10014:3:26",
													"nodeType": "YulIdentifier",
													"src": "10014:3:26"
												},
												"nativeSrc": "10014:18:26",
												"nodeType": "YulFunctionCall",
												"src": "10014:18:26"
											},
											"variableNames": [
												{
													"name": "tail",
													"nativeSrc": "10006:4:26",
													"nodeType": "YulIdentifier",
													"src": "10006:4:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value0",
														"nativeSrc": "10084:6:26",
														"nodeType": "YulIdentifier",
														"src": "10084:6:26"
													},
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "10097:9:26",
																"nodeType": "YulIdentifier",
																"src": "10097:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "10108:1:26",
																"nodeType": "YulLiteral",
																"src": "10108:1:26",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "10093:3:26",
															"nodeType": "YulIdentifier",
															"src": "10093:3:26"
														},
														"nativeSrc": "10093:17:26",
														"nodeType": "YulFunctionCall",
														"src": "10093:17:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_bytes4_to_t_bytes4_fromStack",
													"nativeSrc": "10042:41:26",
													"nodeType": "YulIdentifier",
													"src": "10042:41:26"
												},
												"nativeSrc": "10042:69:26",
												"nodeType": "YulFunctionCall",
												"src": "10042:69:26"
											},
											"nativeSrc": "10042:69:26",
											"nodeType": "YulExpressionStatement",
											"src": "10042:69:26"
										}
									]
								},
								"name": "abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed",
								"nativeSrc": "9900:218:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "9968:9:26",
										"nodeType": "YulTypedName",
										"src": "9968:9:26",
										"type": ""
									},
									{
										"name": "value0",
										"nativeSrc": "9980:6:26",
										"nodeType": "YulTypedName",
										"src": "9980:6:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nativeSrc": "9991:4:26",
										"nodeType": "YulTypedName",
										"src": "9991:4:26",
										"type": ""
									}
								],
								"src": "9900:218:26"
							},
							{
								"body": {
									"nativeSrc": "10267:946:26",
									"nodeType": "YulBlock",
									"src": "10267:946:26",
									"statements": [
										{
											"body": {
												"nativeSrc": "10314:83:26",
												"nodeType": "YulBlock",
												"src": "10314:83:26",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
																"nativeSrc": "10316:77:26",
																"nodeType": "YulIdentifier",
																"src": "10316:77:26"
															},
															"nativeSrc": "10316:79:26",
															"nodeType": "YulFunctionCall",
															"src": "10316:79:26"
														},
														"nativeSrc": "10316:79:26",
														"nodeType": "YulExpressionStatement",
														"src": "10316:79:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "dataEnd",
																"nativeSrc": "10288:7:26",
																"nodeType": "YulIdentifier",
																"src": "10288:7:26"
															},
															{
																"name": "headStart",
																"nativeSrc": "10297:9:26",
																"nodeType": "YulIdentifier",
																"src": "10297:9:26"
															}
														],
														"functionName": {
															"name": "sub",
															"nativeSrc": "10284:3:26",
															"nodeType": "YulIdentifier",
															"src": "10284:3:26"
														},
														"nativeSrc": "10284:23:26",
														"nodeType": "YulFunctionCall",
														"src": "10284:23:26"
													},
													{
														"kind": "number",
														"nativeSrc": "10309:3:26",
														"nodeType": "YulLiteral",
														"src": "10309:3:26",
														"type": "",
														"value": "160"
													}
												],
												"functionName": {
													"name": "slt",
													"nativeSrc": "10280:3:26",
													"nodeType": "YulIdentifier",
													"src": "10280:3:26"
												},
												"nativeSrc": "10280:33:26",
												"nodeType": "YulFunctionCall",
												"src": "10280:33:26"
											},
											"nativeSrc": "10277:120:26",
											"nodeType": "YulIf",
											"src": "10277:120:26"
										},
										{
											"nativeSrc": "10407:117:26",
											"nodeType": "YulBlock",
											"src": "10407:117:26",
											"statements": [
												{
													"nativeSrc": "10422:15:26",
													"nodeType": "YulVariableDeclaration",
													"src": "10422:15:26",
													"value": {
														"kind": "number",
														"nativeSrc": "10436:1:26",
														"nodeType": "YulLiteral",
														"src": "10436:1:26",
														"type": "",
														"value": "0"
													},
													"variables": [
														{
															"name": "offset",
															"nativeSrc": "10426:6:26",
															"nodeType": "YulTypedName",
															"src": "10426:6:26",
															"type": ""
														}
													]
												},
												{
													"nativeSrc": "10451:63:26",
													"nodeType": "YulAssignment",
													"src": "10451:63:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "10486:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "10486:9:26"
																	},
																	{
																		"name": "offset",
																		"nativeSrc": "10497:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "10497:6:26"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "10482:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "10482:3:26"
																},
																"nativeSrc": "10482:22:26",
																"nodeType": "YulFunctionCall",
																"src": "10482:22:26"
															},
															{
																"name": "dataEnd",
																"nativeSrc": "10506:7:26",
																"nodeType": "YulIdentifier",
																"src": "10506:7:26"
															}
														],
														"functionName": {
															"name": "abi_decode_t_address",
															"nativeSrc": "10461:20:26",
															"nodeType": "YulIdentifier",
															"src": "10461:20:26"
														},
														"nativeSrc": "10461:53:26",
														"nodeType": "YulFunctionCall",
														"src": "10461:53:26"
													},
													"variableNames": [
														{
															"name": "value0",
															"nativeSrc": "10451:6:26",
															"nodeType": "YulIdentifier",
															"src": "10451:6:26"
														}
													]
												}
											]
										},
										{
											"nativeSrc": "10534:118:26",
											"nodeType": "YulBlock",
											"src": "10534:118:26",
											"statements": [
												{
													"nativeSrc": "10549:16:26",
													"nodeType": "YulVariableDeclaration",
													"src": "10549:16:26",
													"value": {
														"kind": "number",
														"nativeSrc": "10563:2:26",
														"nodeType": "YulLiteral",
														"src": "10563:2:26",
														"type": "",
														"value": "32"
													},
													"variables": [
														{
															"name": "offset",
															"nativeSrc": "10553:6:26",
															"nodeType": "YulTypedName",
															"src": "10553:6:26",
															"type": ""
														}
													]
												},
												{
													"nativeSrc": "10579:63:26",
													"nodeType": "YulAssignment",
													"src": "10579:63:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "10614:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "10614:9:26"
																	},
																	{
																		"name": "offset",
																		"nativeSrc": "10625:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "10625:6:26"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "10610:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "10610:3:26"
																},
																"nativeSrc": "10610:22:26",
																"nodeType": "YulFunctionCall",
																"src": "10610:22:26"
															},
															{
																"name": "dataEnd",
																"nativeSrc": "10634:7:26",
																"nodeType": "YulIdentifier",
																"src": "10634:7:26"
															}
														],
														"functionName": {
															"name": "abi_decode_t_address",
															"nativeSrc": "10589:20:26",
															"nodeType": "YulIdentifier",
															"src": "10589:20:26"
														},
														"nativeSrc": "10589:53:26",
														"nodeType": "YulFunctionCall",
														"src": "10589:53:26"
													},
													"variableNames": [
														{
															"name": "value1",
															"nativeSrc": "10579:6:26",
															"nodeType": "YulIdentifier",
															"src": "10579:6:26"
														}
													]
												}
											]
										},
										{
											"nativeSrc": "10662:118:26",
											"nodeType": "YulBlock",
											"src": "10662:118:26",
											"statements": [
												{
													"nativeSrc": "10677:16:26",
													"nodeType": "YulVariableDeclaration",
													"src": "10677:16:26",
													"value": {
														"kind": "number",
														"nativeSrc": "10691:2:26",
														"nodeType": "YulLiteral",
														"src": "10691:2:26",
														"type": "",
														"value": "64"
													},
													"variables": [
														{
															"name": "offset",
															"nativeSrc": "10681:6:26",
															"nodeType": "YulTypedName",
															"src": "10681:6:26",
															"type": ""
														}
													]
												},
												{
													"nativeSrc": "10707:63:26",
													"nodeType": "YulAssignment",
													"src": "10707:63:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "10742:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "10742:9:26"
																	},
																	{
																		"name": "offset",
																		"nativeSrc": "10753:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "10753:6:26"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "10738:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "10738:3:26"
																},
																"nativeSrc": "10738:22:26",
																"nodeType": "YulFunctionCall",
																"src": "10738:22:26"
															},
															{
																"name": "dataEnd",
																"nativeSrc": "10762:7:26",
																"nodeType": "YulIdentifier",
																"src": "10762:7:26"
															}
														],
														"functionName": {
															"name": "abi_decode_t_uint256",
															"nativeSrc": "10717:20:26",
															"nodeType": "YulIdentifier",
															"src": "10717:20:26"
														},
														"nativeSrc": "10717:53:26",
														"nodeType": "YulFunctionCall",
														"src": "10717:53:26"
													},
													"variableNames": [
														{
															"name": "value2",
															"nativeSrc": "10707:6:26",
															"nodeType": "YulIdentifier",
															"src": "10707:6:26"
														}
													]
												}
											]
										},
										{
											"nativeSrc": "10790:118:26",
											"nodeType": "YulBlock",
											"src": "10790:118:26",
											"statements": [
												{
													"nativeSrc": "10805:16:26",
													"nodeType": "YulVariableDeclaration",
													"src": "10805:16:26",
													"value": {
														"kind": "number",
														"nativeSrc": "10819:2:26",
														"nodeType": "YulLiteral",
														"src": "10819:2:26",
														"type": "",
														"value": "96"
													},
													"variables": [
														{
															"name": "offset",
															"nativeSrc": "10809:6:26",
															"nodeType": "YulTypedName",
															"src": "10809:6:26",
															"type": ""
														}
													]
												},
												{
													"nativeSrc": "10835:63:26",
													"nodeType": "YulAssignment",
													"src": "10835:63:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "10870:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "10870:9:26"
																	},
																	{
																		"name": "offset",
																		"nativeSrc": "10881:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "10881:6:26"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "10866:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "10866:3:26"
																},
																"nativeSrc": "10866:22:26",
																"nodeType": "YulFunctionCall",
																"src": "10866:22:26"
															},
															{
																"name": "dataEnd",
																"nativeSrc": "10890:7:26",
																"nodeType": "YulIdentifier",
																"src": "10890:7:26"
															}
														],
														"functionName": {
															"name": "abi_decode_t_uint256",
															"nativeSrc": "10845:20:26",
															"nodeType": "YulIdentifier",
															"src": "10845:20:26"
														},
														"nativeSrc": "10845:53:26",
														"nodeType": "YulFunctionCall",
														"src": "10845:53:26"
													},
													"variableNames": [
														{
															"name": "value3",
															"nativeSrc": "10835:6:26",
															"nodeType": "YulIdentifier",
															"src": "10835:6:26"
														}
													]
												}
											]
										},
										{
											"nativeSrc": "10918:288:26",
											"nodeType": "YulBlock",
											"src": "10918:288:26",
											"statements": [
												{
													"nativeSrc": "10933:47:26",
													"nodeType": "YulVariableDeclaration",
													"src": "10933:47:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "10964:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "10964:9:26"
																	},
																	{
																		"kind": "number",
																		"nativeSrc": "10975:3:26",
																		"nodeType": "YulLiteral",
																		"src": "10975:3:26",
																		"type": "",
																		"value": "128"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "10960:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "10960:3:26"
																},
																"nativeSrc": "10960:19:26",
																"nodeType": "YulFunctionCall",
																"src": "10960:19:26"
															}
														],
														"functionName": {
															"name": "calldataload",
															"nativeSrc": "10947:12:26",
															"nodeType": "YulIdentifier",
															"src": "10947:12:26"
														},
														"nativeSrc": "10947:33:26",
														"nodeType": "YulFunctionCall",
														"src": "10947:33:26"
													},
													"variables": [
														{
															"name": "offset",
															"nativeSrc": "10937:6:26",
															"nodeType": "YulTypedName",
															"src": "10937:6:26",
															"type": ""
														}
													]
												},
												{
													"body": {
														"nativeSrc": "11027:83:26",
														"nodeType": "YulBlock",
														"src": "11027:83:26",
														"statements": [
															{
																"expression": {
																	"arguments": [],
																	"functionName": {
																		"name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
																		"nativeSrc": "11029:77:26",
																		"nodeType": "YulIdentifier",
																		"src": "11029:77:26"
																	},
																	"nativeSrc": "11029:79:26",
																	"nodeType": "YulFunctionCall",
																	"src": "11029:79:26"
																},
																"nativeSrc": "11029:79:26",
																"nodeType": "YulExpressionStatement",
																"src": "11029:79:26"
															}
														]
													},
													"condition": {
														"arguments": [
															{
																"name": "offset",
																"nativeSrc": "10999:6:26",
																"nodeType": "YulIdentifier",
																"src": "10999:6:26"
															},
															{
																"kind": "number",
																"nativeSrc": "11007:18:26",
																"nodeType": "YulLiteral",
																"src": "11007:18:26",
																"type": "",
																"value": "0xffffffffffffffff"
															}
														],
														"functionName": {
															"name": "gt",
															"nativeSrc": "10996:2:26",
															"nodeType": "YulIdentifier",
															"src": "10996:2:26"
														},
														"nativeSrc": "10996:30:26",
														"nodeType": "YulFunctionCall",
														"src": "10996:30:26"
													},
													"nativeSrc": "10993:117:26",
													"nodeType": "YulIf",
													"src": "10993:117:26"
												},
												{
													"nativeSrc": "11124:72:26",
													"nodeType": "YulAssignment",
													"src": "11124:72:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "11168:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "11168:9:26"
																	},
																	{
																		"name": "offset",
																		"nativeSrc": "11179:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "11179:6:26"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "11164:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "11164:3:26"
																},
																"nativeSrc": "11164:22:26",
																"nodeType": "YulFunctionCall",
																"src": "11164:22:26"
															},
															{
																"name": "dataEnd",
																"nativeSrc": "11188:7:26",
																"nodeType": "YulIdentifier",
																"src": "11188:7:26"
															}
														],
														"functionName": {
															"name": "abi_decode_t_bytes_memory_ptr",
															"nativeSrc": "11134:29:26",
															"nodeType": "YulIdentifier",
															"src": "11134:29:26"
														},
														"nativeSrc": "11134:62:26",
														"nodeType": "YulFunctionCall",
														"src": "11134:62:26"
													},
													"variableNames": [
														{
															"name": "value4",
															"nativeSrc": "11124:6:26",
															"nodeType": "YulIdentifier",
															"src": "11124:6:26"
														}
													]
												}
											]
										}
									]
								},
								"name": "abi_decode_tuple_t_addresst_addresst_uint256t_uint256t_bytes_memory_ptr",
								"nativeSrc": "10124:1089:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "10205:9:26",
										"nodeType": "YulTypedName",
										"src": "10205:9:26",
										"type": ""
									},
									{
										"name": "dataEnd",
										"nativeSrc": "10216:7:26",
										"nodeType": "YulTypedName",
										"src": "10216:7:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value0",
										"nativeSrc": "10228:6:26",
										"nodeType": "YulTypedName",
										"src": "10228:6:26",
										"type": ""
									},
									{
										"name": "value1",
										"nativeSrc": "10236:6:26",
										"nodeType": "YulTypedName",
										"src": "10236:6:26",
										"type": ""
									},
									{
										"name": "value2",
										"nativeSrc": "10244:6:26",
										"nodeType": "YulTypedName",
										"src": "10244:6:26",
										"type": ""
									},
									{
										"name": "value3",
										"nativeSrc": "10252:6:26",
										"nodeType": "YulTypedName",
										"src": "10252:6:26",
										"type": ""
									},
									{
										"name": "value4",
										"nativeSrc": "10260:6:26",
										"nodeType": "YulTypedName",
										"src": "10260:6:26",
										"type": ""
									}
								],
								"src": "10124:1089:26"
							},
							{
								"body": {
									"nativeSrc": "11285:263:26",
									"nodeType": "YulBlock",
									"src": "11285:263:26",
									"statements": [
										{
											"body": {
												"nativeSrc": "11331:83:26",
												"nodeType": "YulBlock",
												"src": "11331:83:26",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
																"nativeSrc": "11333:77:26",
																"nodeType": "YulIdentifier",
																"src": "11333:77:26"
															},
															"nativeSrc": "11333:79:26",
															"nodeType": "YulFunctionCall",
															"src": "11333:79:26"
														},
														"nativeSrc": "11333:79:26",
														"nodeType": "YulExpressionStatement",
														"src": "11333:79:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "dataEnd",
																"nativeSrc": "11306:7:26",
																"nodeType": "YulIdentifier",
																"src": "11306:7:26"
															},
															{
																"name": "headStart",
																"nativeSrc": "11315:9:26",
																"nodeType": "YulIdentifier",
																"src": "11315:9:26"
															}
														],
														"functionName": {
															"name": "sub",
															"nativeSrc": "11302:3:26",
															"nodeType": "YulIdentifier",
															"src": "11302:3:26"
														},
														"nativeSrc": "11302:23:26",
														"nodeType": "YulFunctionCall",
														"src": "11302:23:26"
													},
													{
														"kind": "number",
														"nativeSrc": "11327:2:26",
														"nodeType": "YulLiteral",
														"src": "11327:2:26",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "slt",
													"nativeSrc": "11298:3:26",
													"nodeType": "YulIdentifier",
													"src": "11298:3:26"
												},
												"nativeSrc": "11298:32:26",
												"nodeType": "YulFunctionCall",
												"src": "11298:32:26"
											},
											"nativeSrc": "11295:119:26",
											"nodeType": "YulIf",
											"src": "11295:119:26"
										},
										{
											"nativeSrc": "11424:117:26",
											"nodeType": "YulBlock",
											"src": "11424:117:26",
											"statements": [
												{
													"nativeSrc": "11439:15:26",
													"nodeType": "YulVariableDeclaration",
													"src": "11439:15:26",
													"value": {
														"kind": "number",
														"nativeSrc": "11453:1:26",
														"nodeType": "YulLiteral",
														"src": "11453:1:26",
														"type": "",
														"value": "0"
													},
													"variables": [
														{
															"name": "offset",
															"nativeSrc": "11443:6:26",
															"nodeType": "YulTypedName",
															"src": "11443:6:26",
															"type": ""
														}
													]
												},
												{
													"nativeSrc": "11468:63:26",
													"nodeType": "YulAssignment",
													"src": "11468:63:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "11503:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "11503:9:26"
																	},
																	{
																		"name": "offset",
																		"nativeSrc": "11514:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "11514:6:26"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "11499:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "11499:3:26"
																},
																"nativeSrc": "11499:22:26",
																"nodeType": "YulFunctionCall",
																"src": "11499:22:26"
															},
															{
																"name": "dataEnd",
																"nativeSrc": "11523:7:26",
																"nodeType": "YulIdentifier",
																"src": "11523:7:26"
															}
														],
														"functionName": {
															"name": "abi_decode_t_address",
															"nativeSrc": "11478:20:26",
															"nodeType": "YulIdentifier",
															"src": "11478:20:26"
														},
														"nativeSrc": "11478:53:26",
														"nodeType": "YulFunctionCall",
														"src": "11478:53:26"
													},
													"variableNames": [
														{
															"name": "value0",
															"nativeSrc": "11468:6:26",
															"nodeType": "YulIdentifier",
															"src": "11468:6:26"
														}
													]
												}
											]
										}
									]
								},
								"name": "abi_decode_tuple_t_address",
								"nativeSrc": "11219:329:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "11255:9:26",
										"nodeType": "YulTypedName",
										"src": "11255:9:26",
										"type": ""
									},
									{
										"name": "dataEnd",
										"nativeSrc": "11266:7:26",
										"nodeType": "YulTypedName",
										"src": "11266:7:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value0",
										"nativeSrc": "11278:6:26",
										"nodeType": "YulTypedName",
										"src": "11278:6:26",
										"type": ""
									}
								],
								"src": "11219:329:26"
							},
							{
								"body": {
									"nativeSrc": "11617:80:26",
									"nodeType": "YulBlock",
									"src": "11617:80:26",
									"statements": [
										{
											"nativeSrc": "11627:22:26",
											"nodeType": "YulAssignment",
											"src": "11627:22:26",
											"value": {
												"arguments": [
													{
														"name": "offset",
														"nativeSrc": "11642:6:26",
														"nodeType": "YulIdentifier",
														"src": "11642:6:26"
													}
												],
												"functionName": {
													"name": "mload",
													"nativeSrc": "11636:5:26",
													"nodeType": "YulIdentifier",
													"src": "11636:5:26"
												},
												"nativeSrc": "11636:13:26",
												"nodeType": "YulFunctionCall",
												"src": "11636:13:26"
											},
											"variableNames": [
												{
													"name": "value",
													"nativeSrc": "11627:5:26",
													"nodeType": "YulIdentifier",
													"src": "11627:5:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value",
														"nativeSrc": "11685:5:26",
														"nodeType": "YulIdentifier",
														"src": "11685:5:26"
													}
												],
												"functionName": {
													"name": "validator_revert_t_uint256",
													"nativeSrc": "11658:26:26",
													"nodeType": "YulIdentifier",
													"src": "11658:26:26"
												},
												"nativeSrc": "11658:33:26",
												"nodeType": "YulFunctionCall",
												"src": "11658:33:26"
											},
											"nativeSrc": "11658:33:26",
											"nodeType": "YulExpressionStatement",
											"src": "11658:33:26"
										}
									]
								},
								"name": "abi_decode_t_uint256_fromMemory",
								"nativeSrc": "11554:143:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "offset",
										"nativeSrc": "11595:6:26",
										"nodeType": "YulTypedName",
										"src": "11595:6:26",
										"type": ""
									},
									{
										"name": "end",
										"nativeSrc": "11603:3:26",
										"nodeType": "YulTypedName",
										"src": "11603:3:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value",
										"nativeSrc": "11611:5:26",
										"nodeType": "YulTypedName",
										"src": "11611:5:26",
										"type": ""
									}
								],
								"src": "11554:143:26"
							},
							{
								"body": {
									"nativeSrc": "11780:274:26",
									"nodeType": "YulBlock",
									"src": "11780:274:26",
									"statements": [
										{
											"body": {
												"nativeSrc": "11826:83:26",
												"nodeType": "YulBlock",
												"src": "11826:83:26",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
																"nativeSrc": "11828:77:26",
																"nodeType": "YulIdentifier",
																"src": "11828:77:26"
															},
															"nativeSrc": "11828:79:26",
															"nodeType": "YulFunctionCall",
															"src": "11828:79:26"
														},
														"nativeSrc": "11828:79:26",
														"nodeType": "YulExpressionStatement",
														"src": "11828:79:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "dataEnd",
																"nativeSrc": "11801:7:26",
																"nodeType": "YulIdentifier",
																"src": "11801:7:26"
															},
															{
																"name": "headStart",
																"nativeSrc": "11810:9:26",
																"nodeType": "YulIdentifier",
																"src": "11810:9:26"
															}
														],
														"functionName": {
															"name": "sub",
															"nativeSrc": "11797:3:26",
															"nodeType": "YulIdentifier",
															"src": "11797:3:26"
														},
														"nativeSrc": "11797:23:26",
														"nodeType": "YulFunctionCall",
														"src": "11797:23:26"
													},
													{
														"kind": "number",
														"nativeSrc": "11822:2:26",
														"nodeType": "YulLiteral",
														"src": "11822:2:26",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "slt",
													"nativeSrc": "11793:3:26",
													"nodeType": "YulIdentifier",
													"src": "11793:3:26"
												},
												"nativeSrc": "11793:32:26",
												"nodeType": "YulFunctionCall",
												"src": "11793:32:26"
											},
											"nativeSrc": "11790:119:26",
											"nodeType": "YulIf",
											"src": "11790:119:26"
										},
										{
											"nativeSrc": "11919:128:26",
											"nodeType": "YulBlock",
											"src": "11919:128:26",
											"statements": [
												{
													"nativeSrc": "11934:15:26",
													"nodeType": "YulVariableDeclaration",
													"src": "11934:15:26",
													"value": {
														"kind": "number",
														"nativeSrc": "11948:1:26",
														"nodeType": "YulLiteral",
														"src": "11948:1:26",
														"type": "",
														"value": "0"
													},
													"variables": [
														{
															"name": "offset",
															"nativeSrc": "11938:6:26",
															"nodeType": "YulTypedName",
															"src": "11938:6:26",
															"type": ""
														}
													]
												},
												{
													"nativeSrc": "11963:74:26",
													"nodeType": "YulAssignment",
													"src": "11963:74:26",
													"value": {
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "headStart",
																		"nativeSrc": "12009:9:26",
																		"nodeType": "YulIdentifier",
																		"src": "12009:9:26"
																	},
																	{
																		"name": "offset",
																		"nativeSrc": "12020:6:26",
																		"nodeType": "YulIdentifier",
																		"src": "12020:6:26"
																	}
																],
																"functionName": {
																	"name": "add",
																	"nativeSrc": "12005:3:26",
																	"nodeType": "YulIdentifier",
																	"src": "12005:3:26"
																},
																"nativeSrc": "12005:22:26",
																"nodeType": "YulFunctionCall",
																"src": "12005:22:26"
															},
															{
																"name": "dataEnd",
																"nativeSrc": "12029:7:26",
																"nodeType": "YulIdentifier",
																"src": "12029:7:26"
															}
														],
														"functionName": {
															"name": "abi_decode_t_uint256_fromMemory",
															"nativeSrc": "11973:31:26",
															"nodeType": "YulIdentifier",
															"src": "11973:31:26"
														},
														"nativeSrc": "11973:64:26",
														"nodeType": "YulFunctionCall",
														"src": "11973:64:26"
													},
													"variableNames": [
														{
															"name": "value0",
															"nativeSrc": "11963:6:26",
															"nodeType": "YulIdentifier",
															"src": "11963:6:26"
														}
													]
												}
											]
										}
									]
								},
								"name": "abi_decode_tuple_t_uint256_fromMemory",
								"nativeSrc": "11703:351:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "11750:9:26",
										"nodeType": "YulTypedName",
										"src": "11750:9:26",
										"type": ""
									},
									{
										"name": "dataEnd",
										"nativeSrc": "11761:7:26",
										"nodeType": "YulTypedName",
										"src": "11761:7:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "value0",
										"nativeSrc": "11773:6:26",
										"nodeType": "YulTypedName",
										"src": "11773:6:26",
										"type": ""
									}
								],
								"src": "11703:351:26"
							},
							{
								"body": {
									"nativeSrc": "12156:73:26",
									"nodeType": "YulBlock",
									"src": "12156:73:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "12173:3:26",
														"nodeType": "YulIdentifier",
														"src": "12173:3:26"
													},
													{
														"name": "length",
														"nativeSrc": "12178:6:26",
														"nodeType": "YulIdentifier",
														"src": "12178:6:26"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "12166:6:26",
													"nodeType": "YulIdentifier",
													"src": "12166:6:26"
												},
												"nativeSrc": "12166:19:26",
												"nodeType": "YulFunctionCall",
												"src": "12166:19:26"
											},
											"nativeSrc": "12166:19:26",
											"nodeType": "YulExpressionStatement",
											"src": "12166:19:26"
										},
										{
											"nativeSrc": "12194:29:26",
											"nodeType": "YulAssignment",
											"src": "12194:29:26",
											"value": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "12213:3:26",
														"nodeType": "YulIdentifier",
														"src": "12213:3:26"
													},
													{
														"kind": "number",
														"nativeSrc": "12218:4:26",
														"nodeType": "YulLiteral",
														"src": "12218:4:26",
														"type": "",
														"value": "0x20"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "12209:3:26",
													"nodeType": "YulIdentifier",
													"src": "12209:3:26"
												},
												"nativeSrc": "12209:14:26",
												"nodeType": "YulFunctionCall",
												"src": "12209:14:26"
											},
											"variableNames": [
												{
													"name": "updated_pos",
													"nativeSrc": "12194:11:26",
													"nodeType": "YulIdentifier",
													"src": "12194:11:26"
												}
											]
										}
									]
								},
								"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
								"nativeSrc": "12060:169:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "pos",
										"nativeSrc": "12128:3:26",
										"nodeType": "YulTypedName",
										"src": "12128:3:26",
										"type": ""
									},
									{
										"name": "length",
										"nativeSrc": "12133:6:26",
										"nodeType": "YulTypedName",
										"src": "12133:6:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "updated_pos",
										"nativeSrc": "12144:11:26",
										"nodeType": "YulTypedName",
										"src": "12144:11:26",
										"type": ""
									}
								],
								"src": "12060:169:26"
							},
							{
								"body": {
									"nativeSrc": "12341:73:26",
									"nodeType": "YulBlock",
									"src": "12341:73:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "memPtr",
																"nativeSrc": "12363:6:26",
																"nodeType": "YulIdentifier",
																"src": "12363:6:26"
															},
															{
																"kind": "number",
																"nativeSrc": "12371:1:26",
																"nodeType": "YulLiteral",
																"src": "12371:1:26",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "12359:3:26",
															"nodeType": "YulIdentifier",
															"src": "12359:3:26"
														},
														"nativeSrc": "12359:14:26",
														"nodeType": "YulFunctionCall",
														"src": "12359:14:26"
													},
													{
														"hexValue": "4e6f207061796d656e7420746f6b656e7320746f207769746864726177",
														"kind": "string",
														"nativeSrc": "12375:31:26",
														"nodeType": "YulLiteral",
														"src": "12375:31:26",
														"type": "",
														"value": "No payment tokens to withdraw"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "12352:6:26",
													"nodeType": "YulIdentifier",
													"src": "12352:6:26"
												},
												"nativeSrc": "12352:55:26",
												"nodeType": "YulFunctionCall",
												"src": "12352:55:26"
											},
											"nativeSrc": "12352:55:26",
											"nodeType": "YulExpressionStatement",
											"src": "12352:55:26"
										}
									]
								},
								"name": "store_literal_in_memory_bdc84b596d1584baca462ea0883d91180d5d58efdc428f4038e51fd7334f8990",
								"nativeSrc": "12235:179:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "memPtr",
										"nativeSrc": "12333:6:26",
										"nodeType": "YulTypedName",
										"src": "12333:6:26",
										"type": ""
									}
								],
								"src": "12235:179:26"
							},
							{
								"body": {
									"nativeSrc": "12566:220:26",
									"nodeType": "YulBlock",
									"src": "12566:220:26",
									"statements": [
										{
											"nativeSrc": "12576:74:26",
											"nodeType": "YulAssignment",
											"src": "12576:74:26",
											"value": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "12642:3:26",
														"nodeType": "YulIdentifier",
														"src": "12642:3:26"
													},
													{
														"kind": "number",
														"nativeSrc": "12647:2:26",
														"nodeType": "YulLiteral",
														"src": "12647:2:26",
														"type": "",
														"value": "29"
													}
												],
												"functionName": {
													"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
													"nativeSrc": "12583:58:26",
													"nodeType": "YulIdentifier",
													"src": "12583:58:26"
												},
												"nativeSrc": "12583:67:26",
												"nodeType": "YulFunctionCall",
												"src": "12583:67:26"
											},
											"variableNames": [
												{
													"name": "pos",
													"nativeSrc": "12576:3:26",
													"nodeType": "YulIdentifier",
													"src": "12576:3:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "12748:3:26",
														"nodeType": "YulIdentifier",
														"src": "12748:3:26"
													}
												],
												"functionName": {
													"name": "store_literal_in_memory_bdc84b596d1584baca462ea0883d91180d5d58efdc428f4038e51fd7334f8990",
													"nativeSrc": "12659:88:26",
													"nodeType": "YulIdentifier",
													"src": "12659:88:26"
												},
												"nativeSrc": "12659:93:26",
												"nodeType": "YulFunctionCall",
												"src": "12659:93:26"
											},
											"nativeSrc": "12659:93:26",
											"nodeType": "YulExpressionStatement",
											"src": "12659:93:26"
										},
										{
											"nativeSrc": "12761:19:26",
											"nodeType": "YulAssignment",
											"src": "12761:19:26",
											"value": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "12772:3:26",
														"nodeType": "YulIdentifier",
														"src": "12772:3:26"
													},
													{
														"kind": "number",
														"nativeSrc": "12777:2:26",
														"nodeType": "YulLiteral",
														"src": "12777:2:26",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "12768:3:26",
													"nodeType": "YulIdentifier",
													"src": "12768:3:26"
												},
												"nativeSrc": "12768:12:26",
												"nodeType": "YulFunctionCall",
												"src": "12768:12:26"
											},
											"variableNames": [
												{
													"name": "end",
													"nativeSrc": "12761:3:26",
													"nodeType": "YulIdentifier",
													"src": "12761:3:26"
												}
											]
										}
									]
								},
								"name": "abi_encode_t_stringliteral_bdc84b596d1584baca462ea0883d91180d5d58efdc428f4038e51fd7334f8990_to_t_string_memory_ptr_fromStack",
								"nativeSrc": "12420:366:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "pos",
										"nativeSrc": "12554:3:26",
										"nodeType": "YulTypedName",
										"src": "12554:3:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "end",
										"nativeSrc": "12562:3:26",
										"nodeType": "YulTypedName",
										"src": "12562:3:26",
										"type": ""
									}
								],
								"src": "12420:366:26"
							},
							{
								"body": {
									"nativeSrc": "12963:248:26",
									"nodeType": "YulBlock",
									"src": "12963:248:26",
									"statements": [
										{
											"nativeSrc": "12973:26:26",
											"nodeType": "YulAssignment",
											"src": "12973:26:26",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nativeSrc": "12985:9:26",
														"nodeType": "YulIdentifier",
														"src": "12985:9:26"
													},
													{
														"kind": "number",
														"nativeSrc": "12996:2:26",
														"nodeType": "YulLiteral",
														"src": "12996:2:26",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "12981:3:26",
													"nodeType": "YulIdentifier",
													"src": "12981:3:26"
												},
												"nativeSrc": "12981:18:26",
												"nodeType": "YulFunctionCall",
												"src": "12981:18:26"
											},
											"variableNames": [
												{
													"name": "tail",
													"nativeSrc": "12973:4:26",
													"nodeType": "YulIdentifier",
													"src": "12973:4:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "13020:9:26",
																"nodeType": "YulIdentifier",
																"src": "13020:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "13031:1:26",
																"nodeType": "YulLiteral",
																"src": "13031:1:26",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "13016:3:26",
															"nodeType": "YulIdentifier",
															"src": "13016:3:26"
														},
														"nativeSrc": "13016:17:26",
														"nodeType": "YulFunctionCall",
														"src": "13016:17:26"
													},
													{
														"arguments": [
															{
																"name": "tail",
																"nativeSrc": "13039:4:26",
																"nodeType": "YulIdentifier",
																"src": "13039:4:26"
															},
															{
																"name": "headStart",
																"nativeSrc": "13045:9:26",
																"nodeType": "YulIdentifier",
																"src": "13045:9:26"
															}
														],
														"functionName": {
															"name": "sub",
															"nativeSrc": "13035:3:26",
															"nodeType": "YulIdentifier",
															"src": "13035:3:26"
														},
														"nativeSrc": "13035:20:26",
														"nodeType": "YulFunctionCall",
														"src": "13035:20:26"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "13009:6:26",
													"nodeType": "YulIdentifier",
													"src": "13009:6:26"
												},
												"nativeSrc": "13009:47:26",
												"nodeType": "YulFunctionCall",
												"src": "13009:47:26"
											},
											"nativeSrc": "13009:47:26",
											"nodeType": "YulExpressionStatement",
											"src": "13009:47:26"
										},
										{
											"nativeSrc": "13065:139:26",
											"nodeType": "YulAssignment",
											"src": "13065:139:26",
											"value": {
												"arguments": [
													{
														"name": "tail",
														"nativeSrc": "13199:4:26",
														"nodeType": "YulIdentifier",
														"src": "13199:4:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_stringliteral_bdc84b596d1584baca462ea0883d91180d5d58efdc428f4038e51fd7334f8990_to_t_string_memory_ptr_fromStack",
													"nativeSrc": "13073:124:26",
													"nodeType": "YulIdentifier",
													"src": "13073:124:26"
												},
												"nativeSrc": "13073:131:26",
												"nodeType": "YulFunctionCall",
												"src": "13073:131:26"
											},
											"variableNames": [
												{
													"name": "tail",
													"nativeSrc": "13065:4:26",
													"nodeType": "YulIdentifier",
													"src": "13065:4:26"
												}
											]
										}
									]
								},
								"name": "abi_encode_tuple_t_stringliteral_bdc84b596d1584baca462ea0883d91180d5d58efdc428f4038e51fd7334f8990__to_t_string_memory_ptr__fromStack_reversed",
								"nativeSrc": "12792:419:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "12943:9:26",
										"nodeType": "YulTypedName",
										"src": "12943:9:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nativeSrc": "12958:4:26",
										"nodeType": "YulTypedName",
										"src": "12958:4:26",
										"type": ""
									}
								],
								"src": "12792:419:26"
							},
							{
								"body": {
									"nativeSrc": "13270:32:26",
									"nodeType": "YulBlock",
									"src": "13270:32:26",
									"statements": [
										{
											"nativeSrc": "13280:16:26",
											"nodeType": "YulAssignment",
											"src": "13280:16:26",
											"value": {
												"name": "value",
												"nativeSrc": "13291:5:26",
												"nodeType": "YulIdentifier",
												"src": "13291:5:26"
											},
											"variableNames": [
												{
													"name": "cleaned",
													"nativeSrc": "13280:7:26",
													"nodeType": "YulIdentifier",
													"src": "13280:7:26"
												}
											]
										}
									]
								},
								"name": "cleanup_t_rational_1_by_1",
								"nativeSrc": "13217:85:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "13252:5:26",
										"nodeType": "YulTypedName",
										"src": "13252:5:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "cleaned",
										"nativeSrc": "13262:7:26",
										"nodeType": "YulTypedName",
										"src": "13262:7:26",
										"type": ""
									}
								],
								"src": "13217:85:26"
							},
							{
								"body": {
									"nativeSrc": "13376:90:26",
									"nodeType": "YulBlock",
									"src": "13376:90:26",
									"statements": [
										{
											"nativeSrc": "13386:74:26",
											"nodeType": "YulAssignment",
											"src": "13386:74:26",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "value",
																		"nativeSrc": "13452:5:26",
																		"nodeType": "YulIdentifier",
																		"src": "13452:5:26"
																	}
																],
																"functionName": {
																	"name": "cleanup_t_rational_1_by_1",
																	"nativeSrc": "13426:25:26",
																	"nodeType": "YulIdentifier",
																	"src": "13426:25:26"
																},
																"nativeSrc": "13426:32:26",
																"nodeType": "YulFunctionCall",
																"src": "13426:32:26"
															}
														],
														"functionName": {
															"name": "identity",
															"nativeSrc": "13417:8:26",
															"nodeType": "YulIdentifier",
															"src": "13417:8:26"
														},
														"nativeSrc": "13417:42:26",
														"nodeType": "YulFunctionCall",
														"src": "13417:42:26"
													}
												],
												"functionName": {
													"name": "cleanup_t_uint256",
													"nativeSrc": "13399:17:26",
													"nodeType": "YulIdentifier",
													"src": "13399:17:26"
												},
												"nativeSrc": "13399:61:26",
												"nodeType": "YulFunctionCall",
												"src": "13399:61:26"
											},
											"variableNames": [
												{
													"name": "converted",
													"nativeSrc": "13386:9:26",
													"nodeType": "YulIdentifier",
													"src": "13386:9:26"
												}
											]
										}
									]
								},
								"name": "convert_t_rational_1_by_1_to_t_uint256",
								"nativeSrc": "13308:158:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "13356:5:26",
										"nodeType": "YulTypedName",
										"src": "13356:5:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "converted",
										"nativeSrc": "13366:9:26",
										"nodeType": "YulTypedName",
										"src": "13366:9:26",
										"type": ""
									}
								],
								"src": "13308:158:26"
							},
							{
								"body": {
									"nativeSrc": "13545:74:26",
									"nodeType": "YulBlock",
									"src": "13545:74:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "13562:3:26",
														"nodeType": "YulIdentifier",
														"src": "13562:3:26"
													},
													{
														"arguments": [
															{
																"name": "value",
																"nativeSrc": "13606:5:26",
																"nodeType": "YulIdentifier",
																"src": "13606:5:26"
															}
														],
														"functionName": {
															"name": "convert_t_rational_1_by_1_to_t_uint256",
															"nativeSrc": "13567:38:26",
															"nodeType": "YulIdentifier",
															"src": "13567:38:26"
														},
														"nativeSrc": "13567:45:26",
														"nodeType": "YulFunctionCall",
														"src": "13567:45:26"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "13555:6:26",
													"nodeType": "YulIdentifier",
													"src": "13555:6:26"
												},
												"nativeSrc": "13555:58:26",
												"nodeType": "YulFunctionCall",
												"src": "13555:58:26"
											},
											"nativeSrc": "13555:58:26",
											"nodeType": "YulExpressionStatement",
											"src": "13555:58:26"
										}
									]
								},
								"name": "abi_encode_t_rational_1_by_1_to_t_uint256_fromStack",
								"nativeSrc": "13472:147:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "value",
										"nativeSrc": "13533:5:26",
										"nodeType": "YulTypedName",
										"src": "13533:5:26",
										"type": ""
									},
									{
										"name": "pos",
										"nativeSrc": "13540:3:26",
										"nodeType": "YulTypedName",
										"src": "13540:3:26",
										"type": ""
									}
								],
								"src": "13472:147:26"
							},
							{
								"body": {
									"nativeSrc": "13759:214:26",
									"nodeType": "YulBlock",
									"src": "13759:214:26",
									"statements": [
										{
											"nativeSrc": "13769:26:26",
											"nodeType": "YulAssignment",
											"src": "13769:26:26",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nativeSrc": "13781:9:26",
														"nodeType": "YulIdentifier",
														"src": "13781:9:26"
													},
													{
														"kind": "number",
														"nativeSrc": "13792:2:26",
														"nodeType": "YulLiteral",
														"src": "13792:2:26",
														"type": "",
														"value": "64"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "13777:3:26",
													"nodeType": "YulIdentifier",
													"src": "13777:3:26"
												},
												"nativeSrc": "13777:18:26",
												"nodeType": "YulFunctionCall",
												"src": "13777:18:26"
											},
											"variableNames": [
												{
													"name": "tail",
													"nativeSrc": "13769:4:26",
													"nodeType": "YulIdentifier",
													"src": "13769:4:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value0",
														"nativeSrc": "13849:6:26",
														"nodeType": "YulIdentifier",
														"src": "13849:6:26"
													},
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "13862:9:26",
																"nodeType": "YulIdentifier",
																"src": "13862:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "13873:1:26",
																"nodeType": "YulLiteral",
																"src": "13873:1:26",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "13858:3:26",
															"nodeType": "YulIdentifier",
															"src": "13858:3:26"
														},
														"nativeSrc": "13858:17:26",
														"nodeType": "YulFunctionCall",
														"src": "13858:17:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_address_to_t_address_fromStack",
													"nativeSrc": "13805:43:26",
													"nodeType": "YulIdentifier",
													"src": "13805:43:26"
												},
												"nativeSrc": "13805:71:26",
												"nodeType": "YulFunctionCall",
												"src": "13805:71:26"
											},
											"nativeSrc": "13805:71:26",
											"nodeType": "YulExpressionStatement",
											"src": "13805:71:26"
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value1",
														"nativeSrc": "13938:6:26",
														"nodeType": "YulIdentifier",
														"src": "13938:6:26"
													},
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "13951:9:26",
																"nodeType": "YulIdentifier",
																"src": "13951:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "13962:2:26",
																"nodeType": "YulLiteral",
																"src": "13962:2:26",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "13947:3:26",
															"nodeType": "YulIdentifier",
															"src": "13947:3:26"
														},
														"nativeSrc": "13947:18:26",
														"nodeType": "YulFunctionCall",
														"src": "13947:18:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_rational_1_by_1_to_t_uint256_fromStack",
													"nativeSrc": "13886:51:26",
													"nodeType": "YulIdentifier",
													"src": "13886:51:26"
												},
												"nativeSrc": "13886:80:26",
												"nodeType": "YulFunctionCall",
												"src": "13886:80:26"
											},
											"nativeSrc": "13886:80:26",
											"nodeType": "YulExpressionStatement",
											"src": "13886:80:26"
										}
									]
								},
								"name": "abi_encode_tuple_t_address_t_rational_1_by_1__to_t_address_t_uint256__fromStack_reversed",
								"nativeSrc": "13625:348:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "13723:9:26",
										"nodeType": "YulTypedName",
										"src": "13723:9:26",
										"type": ""
									},
									{
										"name": "value1",
										"nativeSrc": "13735:6:26",
										"nodeType": "YulTypedName",
										"src": "13735:6:26",
										"type": ""
									},
									{
										"name": "value0",
										"nativeSrc": "13743:6:26",
										"nodeType": "YulTypedName",
										"src": "13743:6:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nativeSrc": "13754:4:26",
										"nodeType": "YulTypedName",
										"src": "13754:4:26",
										"type": ""
									}
								],
								"src": "13625:348:26"
							},
							{
								"body": {
									"nativeSrc": "14085:70:26",
									"nodeType": "YulBlock",
									"src": "14085:70:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "memPtr",
																"nativeSrc": "14107:6:26",
																"nodeType": "YulIdentifier",
																"src": "14107:6:26"
															},
															{
																"kind": "number",
																"nativeSrc": "14115:1:26",
																"nodeType": "YulLiteral",
																"src": "14115:1:26",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "14103:3:26",
															"nodeType": "YulIdentifier",
															"src": "14103:3:26"
														},
														"nativeSrc": "14103:14:26",
														"nodeType": "YulFunctionCall",
														"src": "14103:14:26"
													},
													{
														"hexValue": "496e73756666696369656e7420746f6b656e2062616c616e6365",
														"kind": "string",
														"nativeSrc": "14119:28:26",
														"nodeType": "YulLiteral",
														"src": "14119:28:26",
														"type": "",
														"value": "Insufficient token balance"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "14096:6:26",
													"nodeType": "YulIdentifier",
													"src": "14096:6:26"
												},
												"nativeSrc": "14096:52:26",
												"nodeType": "YulFunctionCall",
												"src": "14096:52:26"
											},
											"nativeSrc": "14096:52:26",
											"nodeType": "YulExpressionStatement",
											"src": "14096:52:26"
										}
									]
								},
								"name": "store_literal_in_memory_a7e5e4d46ea524835ea36125140e247d59a2bce707f2094f88605dba8157d192",
								"nativeSrc": "13979:176:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "memPtr",
										"nativeSrc": "14077:6:26",
										"nodeType": "YulTypedName",
										"src": "14077:6:26",
										"type": ""
									}
								],
								"src": "13979:176:26"
							},
							{
								"body": {
									"nativeSrc": "14307:220:26",
									"nodeType": "YulBlock",
									"src": "14307:220:26",
									"statements": [
										{
											"nativeSrc": "14317:74:26",
											"nodeType": "YulAssignment",
											"src": "14317:74:26",
											"value": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "14383:3:26",
														"nodeType": "YulIdentifier",
														"src": "14383:3:26"
													},
													{
														"kind": "number",
														"nativeSrc": "14388:2:26",
														"nodeType": "YulLiteral",
														"src": "14388:2:26",
														"type": "",
														"value": "26"
													}
												],
												"functionName": {
													"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
													"nativeSrc": "14324:58:26",
													"nodeType": "YulIdentifier",
													"src": "14324:58:26"
												},
												"nativeSrc": "14324:67:26",
												"nodeType": "YulFunctionCall",
												"src": "14324:67:26"
											},
											"variableNames": [
												{
													"name": "pos",
													"nativeSrc": "14317:3:26",
													"nodeType": "YulIdentifier",
													"src": "14317:3:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "14489:3:26",
														"nodeType": "YulIdentifier",
														"src": "14489:3:26"
													}
												],
												"functionName": {
													"name": "store_literal_in_memory_a7e5e4d46ea524835ea36125140e247d59a2bce707f2094f88605dba8157d192",
													"nativeSrc": "14400:88:26",
													"nodeType": "YulIdentifier",
													"src": "14400:88:26"
												},
												"nativeSrc": "14400:93:26",
												"nodeType": "YulFunctionCall",
												"src": "14400:93:26"
											},
											"nativeSrc": "14400:93:26",
											"nodeType": "YulExpressionStatement",
											"src": "14400:93:26"
										},
										{
											"nativeSrc": "14502:19:26",
											"nodeType": "YulAssignment",
											"src": "14502:19:26",
											"value": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "14513:3:26",
														"nodeType": "YulIdentifier",
														"src": "14513:3:26"
													},
													{
														"kind": "number",
														"nativeSrc": "14518:2:26",
														"nodeType": "YulLiteral",
														"src": "14518:2:26",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "14509:3:26",
													"nodeType": "YulIdentifier",
													"src": "14509:3:26"
												},
												"nativeSrc": "14509:12:26",
												"nodeType": "YulFunctionCall",
												"src": "14509:12:26"
											},
											"variableNames": [
												{
													"name": "end",
													"nativeSrc": "14502:3:26",
													"nodeType": "YulIdentifier",
													"src": "14502:3:26"
												}
											]
										}
									]
								},
								"name": "abi_encode_t_stringliteral_a7e5e4d46ea524835ea36125140e247d59a2bce707f2094f88605dba8157d192_to_t_string_memory_ptr_fromStack",
								"nativeSrc": "14161:366:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "pos",
										"nativeSrc": "14295:3:26",
										"nodeType": "YulTypedName",
										"src": "14295:3:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "end",
										"nativeSrc": "14303:3:26",
										"nodeType": "YulTypedName",
										"src": "14303:3:26",
										"type": ""
									}
								],
								"src": "14161:366:26"
							},
							{
								"body": {
									"nativeSrc": "14704:248:26",
									"nodeType": "YulBlock",
									"src": "14704:248:26",
									"statements": [
										{
											"nativeSrc": "14714:26:26",
											"nodeType": "YulAssignment",
											"src": "14714:26:26",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nativeSrc": "14726:9:26",
														"nodeType": "YulIdentifier",
														"src": "14726:9:26"
													},
													{
														"kind": "number",
														"nativeSrc": "14737:2:26",
														"nodeType": "YulLiteral",
														"src": "14737:2:26",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "14722:3:26",
													"nodeType": "YulIdentifier",
													"src": "14722:3:26"
												},
												"nativeSrc": "14722:18:26",
												"nodeType": "YulFunctionCall",
												"src": "14722:18:26"
											},
											"variableNames": [
												{
													"name": "tail",
													"nativeSrc": "14714:4:26",
													"nodeType": "YulIdentifier",
													"src": "14714:4:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "14761:9:26",
																"nodeType": "YulIdentifier",
																"src": "14761:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "14772:1:26",
																"nodeType": "YulLiteral",
																"src": "14772:1:26",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "14757:3:26",
															"nodeType": "YulIdentifier",
															"src": "14757:3:26"
														},
														"nativeSrc": "14757:17:26",
														"nodeType": "YulFunctionCall",
														"src": "14757:17:26"
													},
													{
														"arguments": [
															{
																"name": "tail",
																"nativeSrc": "14780:4:26",
																"nodeType": "YulIdentifier",
																"src": "14780:4:26"
															},
															{
																"name": "headStart",
																"nativeSrc": "14786:9:26",
																"nodeType": "YulIdentifier",
																"src": "14786:9:26"
															}
														],
														"functionName": {
															"name": "sub",
															"nativeSrc": "14776:3:26",
															"nodeType": "YulIdentifier",
															"src": "14776:3:26"
														},
														"nativeSrc": "14776:20:26",
														"nodeType": "YulFunctionCall",
														"src": "14776:20:26"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "14750:6:26",
													"nodeType": "YulIdentifier",
													"src": "14750:6:26"
												},
												"nativeSrc": "14750:47:26",
												"nodeType": "YulFunctionCall",
												"src": "14750:47:26"
											},
											"nativeSrc": "14750:47:26",
											"nodeType": "YulExpressionStatement",
											"src": "14750:47:26"
										},
										{
											"nativeSrc": "14806:139:26",
											"nodeType": "YulAssignment",
											"src": "14806:139:26",
											"value": {
												"arguments": [
													{
														"name": "tail",
														"nativeSrc": "14940:4:26",
														"nodeType": "YulIdentifier",
														"src": "14940:4:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_stringliteral_a7e5e4d46ea524835ea36125140e247d59a2bce707f2094f88605dba8157d192_to_t_string_memory_ptr_fromStack",
													"nativeSrc": "14814:124:26",
													"nodeType": "YulIdentifier",
													"src": "14814:124:26"
												},
												"nativeSrc": "14814:131:26",
												"nodeType": "YulFunctionCall",
												"src": "14814:131:26"
											},
											"variableNames": [
												{
													"name": "tail",
													"nativeSrc": "14806:4:26",
													"nodeType": "YulIdentifier",
													"src": "14806:4:26"
												}
											]
										}
									]
								},
								"name": "abi_encode_tuple_t_stringliteral_a7e5e4d46ea524835ea36125140e247d59a2bce707f2094f88605dba8157d192__to_t_string_memory_ptr__fromStack_reversed",
								"nativeSrc": "14533:419:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "14684:9:26",
										"nodeType": "YulTypedName",
										"src": "14684:9:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nativeSrc": "14699:4:26",
										"nodeType": "YulTypedName",
										"src": "14699:4:26",
										"type": ""
									}
								],
								"src": "14533:419:26"
							},
							{
								"body": {
									"nativeSrc": "14986:152:26",
									"nodeType": "YulBlock",
									"src": "14986:152:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nativeSrc": "15003:1:26",
														"nodeType": "YulLiteral",
														"src": "15003:1:26",
														"type": "",
														"value": "0"
													},
													{
														"kind": "number",
														"nativeSrc": "15006:77:26",
														"nodeType": "YulLiteral",
														"src": "15006:77:26",
														"type": "",
														"value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "14996:6:26",
													"nodeType": "YulIdentifier",
													"src": "14996:6:26"
												},
												"nativeSrc": "14996:88:26",
												"nodeType": "YulFunctionCall",
												"src": "14996:88:26"
											},
											"nativeSrc": "14996:88:26",
											"nodeType": "YulExpressionStatement",
											"src": "14996:88:26"
										},
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nativeSrc": "15100:1:26",
														"nodeType": "YulLiteral",
														"src": "15100:1:26",
														"type": "",
														"value": "4"
													},
													{
														"kind": "number",
														"nativeSrc": "15103:4:26",
														"nodeType": "YulLiteral",
														"src": "15103:4:26",
														"type": "",
														"value": "0x11"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "15093:6:26",
													"nodeType": "YulIdentifier",
													"src": "15093:6:26"
												},
												"nativeSrc": "15093:15:26",
												"nodeType": "YulFunctionCall",
												"src": "15093:15:26"
											},
											"nativeSrc": "15093:15:26",
											"nodeType": "YulExpressionStatement",
											"src": "15093:15:26"
										},
										{
											"expression": {
												"arguments": [
													{
														"kind": "number",
														"nativeSrc": "15124:1:26",
														"nodeType": "YulLiteral",
														"src": "15124:1:26",
														"type": "",
														"value": "0"
													},
													{
														"kind": "number",
														"nativeSrc": "15127:4:26",
														"nodeType": "YulLiteral",
														"src": "15127:4:26",
														"type": "",
														"value": "0x24"
													}
												],
												"functionName": {
													"name": "revert",
													"nativeSrc": "15117:6:26",
													"nodeType": "YulIdentifier",
													"src": "15117:6:26"
												},
												"nativeSrc": "15117:15:26",
												"nodeType": "YulFunctionCall",
												"src": "15117:15:26"
											},
											"nativeSrc": "15117:15:26",
											"nodeType": "YulExpressionStatement",
											"src": "15117:15:26"
										}
									]
								},
								"name": "panic_error_0x11",
								"nativeSrc": "14958:180:26",
								"nodeType": "YulFunctionDefinition",
								"src": "14958:180:26"
							},
							{
								"body": {
									"nativeSrc": "15192:362:26",
									"nodeType": "YulBlock",
									"src": "15192:362:26",
									"statements": [
										{
											"nativeSrc": "15202:25:26",
											"nodeType": "YulAssignment",
											"src": "15202:25:26",
											"value": {
												"arguments": [
													{
														"name": "x",
														"nativeSrc": "15225:1:26",
														"nodeType": "YulIdentifier",
														"src": "15225:1:26"
													}
												],
												"functionName": {
													"name": "cleanup_t_uint256",
													"nativeSrc": "15207:17:26",
													"nodeType": "YulIdentifier",
													"src": "15207:17:26"
												},
												"nativeSrc": "15207:20:26",
												"nodeType": "YulFunctionCall",
												"src": "15207:20:26"
											},
											"variableNames": [
												{
													"name": "x",
													"nativeSrc": "15202:1:26",
													"nodeType": "YulIdentifier",
													"src": "15202:1:26"
												}
											]
										},
										{
											"nativeSrc": "15236:25:26",
											"nodeType": "YulAssignment",
											"src": "15236:25:26",
											"value": {
												"arguments": [
													{
														"name": "y",
														"nativeSrc": "15259:1:26",
														"nodeType": "YulIdentifier",
														"src": "15259:1:26"
													}
												],
												"functionName": {
													"name": "cleanup_t_uint256",
													"nativeSrc": "15241:17:26",
													"nodeType": "YulIdentifier",
													"src": "15241:17:26"
												},
												"nativeSrc": "15241:20:26",
												"nodeType": "YulFunctionCall",
												"src": "15241:20:26"
											},
											"variableNames": [
												{
													"name": "y",
													"nativeSrc": "15236:1:26",
													"nodeType": "YulIdentifier",
													"src": "15236:1:26"
												}
											]
										},
										{
											"nativeSrc": "15270:28:26",
											"nodeType": "YulVariableDeclaration",
											"src": "15270:28:26",
											"value": {
												"arguments": [
													{
														"name": "x",
														"nativeSrc": "15293:1:26",
														"nodeType": "YulIdentifier",
														"src": "15293:1:26"
													},
													{
														"name": "y",
														"nativeSrc": "15296:1:26",
														"nodeType": "YulIdentifier",
														"src": "15296:1:26"
													}
												],
												"functionName": {
													"name": "mul",
													"nativeSrc": "15289:3:26",
													"nodeType": "YulIdentifier",
													"src": "15289:3:26"
												},
												"nativeSrc": "15289:9:26",
												"nodeType": "YulFunctionCall",
												"src": "15289:9:26"
											},
											"variables": [
												{
													"name": "product_raw",
													"nativeSrc": "15274:11:26",
													"nodeType": "YulTypedName",
													"src": "15274:11:26",
													"type": ""
												}
											]
										},
										{
											"nativeSrc": "15307:41:26",
											"nodeType": "YulAssignment",
											"src": "15307:41:26",
											"value": {
												"arguments": [
													{
														"name": "product_raw",
														"nativeSrc": "15336:11:26",
														"nodeType": "YulIdentifier",
														"src": "15336:11:26"
													}
												],
												"functionName": {
													"name": "cleanup_t_uint256",
													"nativeSrc": "15318:17:26",
													"nodeType": "YulIdentifier",
													"src": "15318:17:26"
												},
												"nativeSrc": "15318:30:26",
												"nodeType": "YulFunctionCall",
												"src": "15318:30:26"
											},
											"variableNames": [
												{
													"name": "product",
													"nativeSrc": "15307:7:26",
													"nodeType": "YulIdentifier",
													"src": "15307:7:26"
												}
											]
										},
										{
											"body": {
												"nativeSrc": "15525:22:26",
												"nodeType": "YulBlock",
												"src": "15525:22:26",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "panic_error_0x11",
																"nativeSrc": "15527:16:26",
																"nodeType": "YulIdentifier",
																"src": "15527:16:26"
															},
															"nativeSrc": "15527:18:26",
															"nodeType": "YulFunctionCall",
															"src": "15527:18:26"
														},
														"nativeSrc": "15527:18:26",
														"nodeType": "YulExpressionStatement",
														"src": "15527:18:26"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"arguments": [
															{
																"arguments": [
																	{
																		"name": "x",
																		"nativeSrc": "15458:1:26",
																		"nodeType": "YulIdentifier",
																		"src": "15458:1:26"
																	}
																],
																"functionName": {
																	"name": "iszero",
																	"nativeSrc": "15451:6:26",
																	"nodeType": "YulIdentifier",
																	"src": "15451:6:26"
																},
																"nativeSrc": "15451:9:26",
																"nodeType": "YulFunctionCall",
																"src": "15451:9:26"
															},
															{
																"arguments": [
																	{
																		"name": "y",
																		"nativeSrc": "15481:1:26",
																		"nodeType": "YulIdentifier",
																		"src": "15481:1:26"
																	},
																	{
																		"arguments": [
																			{
																				"name": "product",
																				"nativeSrc": "15488:7:26",
																				"nodeType": "YulIdentifier",
																				"src": "15488:7:26"
																			},
																			{
																				"name": "x",
																				"nativeSrc": "15497:1:26",
																				"nodeType": "YulIdentifier",
																				"src": "15497:1:26"
																			}
																		],
																		"functionName": {
																			"name": "div",
																			"nativeSrc": "15484:3:26",
																			"nodeType": "YulIdentifier",
																			"src": "15484:3:26"
																		},
																		"nativeSrc": "15484:15:26",
																		"nodeType": "YulFunctionCall",
																		"src": "15484:15:26"
																	}
																],
																"functionName": {
																	"name": "eq",
																	"nativeSrc": "15478:2:26",
																	"nodeType": "YulIdentifier",
																	"src": "15478:2:26"
																},
																"nativeSrc": "15478:22:26",
																"nodeType": "YulFunctionCall",
																"src": "15478:22:26"
															}
														],
														"functionName": {
															"name": "or",
															"nativeSrc": "15431:2:26",
															"nodeType": "YulIdentifier",
															"src": "15431:2:26"
														},
														"nativeSrc": "15431:83:26",
														"nodeType": "YulFunctionCall",
														"src": "15431:83:26"
													}
												],
												"functionName": {
													"name": "iszero",
													"nativeSrc": "15411:6:26",
													"nodeType": "YulIdentifier",
													"src": "15411:6:26"
												},
												"nativeSrc": "15411:113:26",
												"nodeType": "YulFunctionCall",
												"src": "15411:113:26"
											},
											"nativeSrc": "15408:139:26",
											"nodeType": "YulIf",
											"src": "15408:139:26"
										}
									]
								},
								"name": "checked_mul_t_uint256",
								"nativeSrc": "15144:410:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "x",
										"nativeSrc": "15175:1:26",
										"nodeType": "YulTypedName",
										"src": "15175:1:26",
										"type": ""
									},
									{
										"name": "y",
										"nativeSrc": "15178:1:26",
										"nodeType": "YulTypedName",
										"src": "15178:1:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "product",
										"nativeSrc": "15184:7:26",
										"nodeType": "YulTypedName",
										"src": "15184:7:26",
										"type": ""
									}
								],
								"src": "15144:410:26"
							},
							{
								"body": {
									"nativeSrc": "15666:70:26",
									"nodeType": "YulBlock",
									"src": "15666:70:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "memPtr",
																"nativeSrc": "15688:6:26",
																"nodeType": "YulIdentifier",
																"src": "15688:6:26"
															},
															{
																"kind": "number",
																"nativeSrc": "15696:1:26",
																"nodeType": "YulLiteral",
																"src": "15696:1:26",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "15684:3:26",
															"nodeType": "YulIdentifier",
															"src": "15684:3:26"
														},
														"nativeSrc": "15684:14:26",
														"nodeType": "YulFunctionCall",
														"src": "15684:14:26"
													},
													{
														"hexValue": "4572726f72207570646174696e6720746f6b656e7320736f6c64",
														"kind": "string",
														"nativeSrc": "15700:28:26",
														"nodeType": "YulLiteral",
														"src": "15700:28:26",
														"type": "",
														"value": "Error updating tokens sold"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "15677:6:26",
													"nodeType": "YulIdentifier",
													"src": "15677:6:26"
												},
												"nativeSrc": "15677:52:26",
												"nodeType": "YulFunctionCall",
												"src": "15677:52:26"
											},
											"nativeSrc": "15677:52:26",
											"nodeType": "YulExpressionStatement",
											"src": "15677:52:26"
										}
									]
								},
								"name": "store_literal_in_memory_401a543cc0af2324882d3b84b4e67a67bc85d263f8e099548a0affdc67d04bc0",
								"nativeSrc": "15560:176:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "memPtr",
										"nativeSrc": "15658:6:26",
										"nodeType": "YulTypedName",
										"src": "15658:6:26",
										"type": ""
									}
								],
								"src": "15560:176:26"
							},
							{
								"body": {
									"nativeSrc": "15888:220:26",
									"nodeType": "YulBlock",
									"src": "15888:220:26",
									"statements": [
										{
											"nativeSrc": "15898:74:26",
											"nodeType": "YulAssignment",
											"src": "15898:74:26",
											"value": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "15964:3:26",
														"nodeType": "YulIdentifier",
														"src": "15964:3:26"
													},
													{
														"kind": "number",
														"nativeSrc": "15969:2:26",
														"nodeType": "YulLiteral",
														"src": "15969:2:26",
														"type": "",
														"value": "26"
													}
												],
												"functionName": {
													"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
													"nativeSrc": "15905:58:26",
													"nodeType": "YulIdentifier",
													"src": "15905:58:26"
												},
												"nativeSrc": "15905:67:26",
												"nodeType": "YulFunctionCall",
												"src": "15905:67:26"
											},
											"variableNames": [
												{
													"name": "pos",
													"nativeSrc": "15898:3:26",
													"nodeType": "YulIdentifier",
													"src": "15898:3:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "16070:3:26",
														"nodeType": "YulIdentifier",
														"src": "16070:3:26"
													}
												],
												"functionName": {
													"name": "store_literal_in_memory_401a543cc0af2324882d3b84b4e67a67bc85d263f8e099548a0affdc67d04bc0",
													"nativeSrc": "15981:88:26",
													"nodeType": "YulIdentifier",
													"src": "15981:88:26"
												},
												"nativeSrc": "15981:93:26",
												"nodeType": "YulFunctionCall",
												"src": "15981:93:26"
											},
											"nativeSrc": "15981:93:26",
											"nodeType": "YulExpressionStatement",
											"src": "15981:93:26"
										},
										{
											"nativeSrc": "16083:19:26",
											"nodeType": "YulAssignment",
											"src": "16083:19:26",
											"value": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "16094:3:26",
														"nodeType": "YulIdentifier",
														"src": "16094:3:26"
													},
													{
														"kind": "number",
														"nativeSrc": "16099:2:26",
														"nodeType": "YulLiteral",
														"src": "16099:2:26",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "16090:3:26",
													"nodeType": "YulIdentifier",
													"src": "16090:3:26"
												},
												"nativeSrc": "16090:12:26",
												"nodeType": "YulFunctionCall",
												"src": "16090:12:26"
											},
											"variableNames": [
												{
													"name": "end",
													"nativeSrc": "16083:3:26",
													"nodeType": "YulIdentifier",
													"src": "16083:3:26"
												}
											]
										}
									]
								},
								"name": "abi_encode_t_stringliteral_401a543cc0af2324882d3b84b4e67a67bc85d263f8e099548a0affdc67d04bc0_to_t_string_memory_ptr_fromStack",
								"nativeSrc": "15742:366:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "pos",
										"nativeSrc": "15876:3:26",
										"nodeType": "YulTypedName",
										"src": "15876:3:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "end",
										"nativeSrc": "15884:3:26",
										"nodeType": "YulTypedName",
										"src": "15884:3:26",
										"type": ""
									}
								],
								"src": "15742:366:26"
							},
							{
								"body": {
									"nativeSrc": "16285:248:26",
									"nodeType": "YulBlock",
									"src": "16285:248:26",
									"statements": [
										{
											"nativeSrc": "16295:26:26",
											"nodeType": "YulAssignment",
											"src": "16295:26:26",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nativeSrc": "16307:9:26",
														"nodeType": "YulIdentifier",
														"src": "16307:9:26"
													},
													{
														"kind": "number",
														"nativeSrc": "16318:2:26",
														"nodeType": "YulLiteral",
														"src": "16318:2:26",
														"type": "",
														"value": "32"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "16303:3:26",
													"nodeType": "YulIdentifier",
													"src": "16303:3:26"
												},
												"nativeSrc": "16303:18:26",
												"nodeType": "YulFunctionCall",
												"src": "16303:18:26"
											},
											"variableNames": [
												{
													"name": "tail",
													"nativeSrc": "16295:4:26",
													"nodeType": "YulIdentifier",
													"src": "16295:4:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "16342:9:26",
																"nodeType": "YulIdentifier",
																"src": "16342:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "16353:1:26",
																"nodeType": "YulLiteral",
																"src": "16353:1:26",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "16338:3:26",
															"nodeType": "YulIdentifier",
															"src": "16338:3:26"
														},
														"nativeSrc": "16338:17:26",
														"nodeType": "YulFunctionCall",
														"src": "16338:17:26"
													},
													{
														"arguments": [
															{
																"name": "tail",
																"nativeSrc": "16361:4:26",
																"nodeType": "YulIdentifier",
																"src": "16361:4:26"
															},
															{
																"name": "headStart",
																"nativeSrc": "16367:9:26",
																"nodeType": "YulIdentifier",
																"src": "16367:9:26"
															}
														],
														"functionName": {
															"name": "sub",
															"nativeSrc": "16357:3:26",
															"nodeType": "YulIdentifier",
															"src": "16357:3:26"
														},
														"nativeSrc": "16357:20:26",
														"nodeType": "YulFunctionCall",
														"src": "16357:20:26"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "16331:6:26",
													"nodeType": "YulIdentifier",
													"src": "16331:6:26"
												},
												"nativeSrc": "16331:47:26",
												"nodeType": "YulFunctionCall",
												"src": "16331:47:26"
											},
											"nativeSrc": "16331:47:26",
											"nodeType": "YulExpressionStatement",
											"src": "16331:47:26"
										},
										{
											"nativeSrc": "16387:139:26",
											"nodeType": "YulAssignment",
											"src": "16387:139:26",
											"value": {
												"arguments": [
													{
														"name": "tail",
														"nativeSrc": "16521:4:26",
														"nodeType": "YulIdentifier",
														"src": "16521:4:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_stringliteral_401a543cc0af2324882d3b84b4e67a67bc85d263f8e099548a0affdc67d04bc0_to_t_string_memory_ptr_fromStack",
													"nativeSrc": "16395:124:26",
													"nodeType": "YulIdentifier",
													"src": "16395:124:26"
												},
												"nativeSrc": "16395:131:26",
												"nodeType": "YulFunctionCall",
												"src": "16395:131:26"
											},
											"variableNames": [
												{
													"name": "tail",
													"nativeSrc": "16387:4:26",
													"nodeType": "YulIdentifier",
													"src": "16387:4:26"
												}
											]
										}
									]
								},
								"name": "abi_encode_tuple_t_stringliteral_401a543cc0af2324882d3b84b4e67a67bc85d263f8e099548a0affdc67d04bc0__to_t_string_memory_ptr__fromStack_reversed",
								"nativeSrc": "16114:419:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "16265:9:26",
										"nodeType": "YulTypedName",
										"src": "16265:9:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nativeSrc": "16280:4:26",
										"nodeType": "YulTypedName",
										"src": "16280:4:26",
										"type": ""
									}
								],
								"src": "16114:419:26"
							},
							{
								"body": {
									"nativeSrc": "16634:73:26",
									"nodeType": "YulBlock",
									"src": "16634:73:26",
									"statements": [
										{
											"expression": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "16651:3:26",
														"nodeType": "YulIdentifier",
														"src": "16651:3:26"
													},
													{
														"name": "length",
														"nativeSrc": "16656:6:26",
														"nodeType": "YulIdentifier",
														"src": "16656:6:26"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "16644:6:26",
													"nodeType": "YulIdentifier",
													"src": "16644:6:26"
												},
												"nativeSrc": "16644:19:26",
												"nodeType": "YulFunctionCall",
												"src": "16644:19:26"
											},
											"nativeSrc": "16644:19:26",
											"nodeType": "YulExpressionStatement",
											"src": "16644:19:26"
										},
										{
											"nativeSrc": "16672:29:26",
											"nodeType": "YulAssignment",
											"src": "16672:29:26",
											"value": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "16691:3:26",
														"nodeType": "YulIdentifier",
														"src": "16691:3:26"
													},
													{
														"kind": "number",
														"nativeSrc": "16696:4:26",
														"nodeType": "YulLiteral",
														"src": "16696:4:26",
														"type": "",
														"value": "0x20"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "16687:3:26",
													"nodeType": "YulIdentifier",
													"src": "16687:3:26"
												},
												"nativeSrc": "16687:14:26",
												"nodeType": "YulFunctionCall",
												"src": "16687:14:26"
											},
											"variableNames": [
												{
													"name": "updated_pos",
													"nativeSrc": "16672:11:26",
													"nodeType": "YulIdentifier",
													"src": "16672:11:26"
												}
											]
										}
									]
								},
								"name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
								"nativeSrc": "16539:168:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "pos",
										"nativeSrc": "16606:3:26",
										"nodeType": "YulTypedName",
										"src": "16606:3:26",
										"type": ""
									},
									{
										"name": "length",
										"nativeSrc": "16611:6:26",
										"nodeType": "YulTypedName",
										"src": "16611:6:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "updated_pos",
										"nativeSrc": "16622:11:26",
										"nodeType": "YulTypedName",
										"src": "16622:11:26",
										"type": ""
									}
								],
								"src": "16539:168:26"
							},
							{
								"body": {
									"nativeSrc": "16819:8:26",
									"nodeType": "YulBlock",
									"src": "16819:8:26",
									"statements": []
								},
								"name": "store_literal_in_memory_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
								"nativeSrc": "16713:114:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "memPtr",
										"nativeSrc": "16811:6:26",
										"nodeType": "YulTypedName",
										"src": "16811:6:26",
										"type": ""
									}
								],
								"src": "16713:114:26"
							},
							{
								"body": {
									"nativeSrc": "16978:217:26",
									"nodeType": "YulBlock",
									"src": "16978:217:26",
									"statements": [
										{
											"nativeSrc": "16988:72:26",
											"nodeType": "YulAssignment",
											"src": "16988:72:26",
											"value": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "17053:3:26",
														"nodeType": "YulIdentifier",
														"src": "17053:3:26"
													},
													{
														"kind": "number",
														"nativeSrc": "17058:1:26",
														"nodeType": "YulLiteral",
														"src": "17058:1:26",
														"type": "",
														"value": "0"
													}
												],
												"functionName": {
													"name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
													"nativeSrc": "16995:57:26",
													"nodeType": "YulIdentifier",
													"src": "16995:57:26"
												},
												"nativeSrc": "16995:65:26",
												"nodeType": "YulFunctionCall",
												"src": "16995:65:26"
											},
											"variableNames": [
												{
													"name": "pos",
													"nativeSrc": "16988:3:26",
													"nodeType": "YulIdentifier",
													"src": "16988:3:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "17158:3:26",
														"nodeType": "YulIdentifier",
														"src": "17158:3:26"
													}
												],
												"functionName": {
													"name": "store_literal_in_memory_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
													"nativeSrc": "17069:88:26",
													"nodeType": "YulIdentifier",
													"src": "17069:88:26"
												},
												"nativeSrc": "17069:93:26",
												"nodeType": "YulFunctionCall",
												"src": "17069:93:26"
											},
											"nativeSrc": "17069:93:26",
											"nodeType": "YulExpressionStatement",
											"src": "17069:93:26"
										},
										{
											"nativeSrc": "17171:18:26",
											"nodeType": "YulAssignment",
											"src": "17171:18:26",
											"value": {
												"arguments": [
													{
														"name": "pos",
														"nativeSrc": "17182:3:26",
														"nodeType": "YulIdentifier",
														"src": "17182:3:26"
													},
													{
														"kind": "number",
														"nativeSrc": "17187:1:26",
														"nodeType": "YulLiteral",
														"src": "17187:1:26",
														"type": "",
														"value": "0"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "17178:3:26",
													"nodeType": "YulIdentifier",
													"src": "17178:3:26"
												},
												"nativeSrc": "17178:11:26",
												"nodeType": "YulFunctionCall",
												"src": "17178:11:26"
											},
											"variableNames": [
												{
													"name": "end",
													"nativeSrc": "17171:3:26",
													"nodeType": "YulIdentifier",
													"src": "17171:3:26"
												}
											]
										}
									]
								},
								"name": "abi_encode_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470_to_t_bytes_memory_ptr_fromStack",
								"nativeSrc": "16833:362:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "pos",
										"nativeSrc": "16966:3:26",
										"nodeType": "YulTypedName",
										"src": "16966:3:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "end",
										"nativeSrc": "16974:3:26",
										"nodeType": "YulTypedName",
										"src": "16974:3:26",
										"type": ""
									}
								],
								"src": "16833:362:26"
							},
							{
								"body": {
									"nativeSrc": "17483:577:26",
									"nodeType": "YulBlock",
									"src": "17483:577:26",
									"statements": [
										{
											"nativeSrc": "17493:27:26",
											"nodeType": "YulAssignment",
											"src": "17493:27:26",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nativeSrc": "17505:9:26",
														"nodeType": "YulIdentifier",
														"src": "17505:9:26"
													},
													{
														"kind": "number",
														"nativeSrc": "17516:3:26",
														"nodeType": "YulLiteral",
														"src": "17516:3:26",
														"type": "",
														"value": "160"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "17501:3:26",
													"nodeType": "YulIdentifier",
													"src": "17501:3:26"
												},
												"nativeSrc": "17501:19:26",
												"nodeType": "YulFunctionCall",
												"src": "17501:19:26"
											},
											"variableNames": [
												{
													"name": "tail",
													"nativeSrc": "17493:4:26",
													"nodeType": "YulIdentifier",
													"src": "17493:4:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value0",
														"nativeSrc": "17574:6:26",
														"nodeType": "YulIdentifier",
														"src": "17574:6:26"
													},
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "17587:9:26",
																"nodeType": "YulIdentifier",
																"src": "17587:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "17598:1:26",
																"nodeType": "YulLiteral",
																"src": "17598:1:26",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "17583:3:26",
															"nodeType": "YulIdentifier",
															"src": "17583:3:26"
														},
														"nativeSrc": "17583:17:26",
														"nodeType": "YulFunctionCall",
														"src": "17583:17:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_address_to_t_address_fromStack",
													"nativeSrc": "17530:43:26",
													"nodeType": "YulIdentifier",
													"src": "17530:43:26"
												},
												"nativeSrc": "17530:71:26",
												"nodeType": "YulFunctionCall",
												"src": "17530:71:26"
											},
											"nativeSrc": "17530:71:26",
											"nodeType": "YulExpressionStatement",
											"src": "17530:71:26"
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value1",
														"nativeSrc": "17655:6:26",
														"nodeType": "YulIdentifier",
														"src": "17655:6:26"
													},
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "17668:9:26",
																"nodeType": "YulIdentifier",
																"src": "17668:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "17679:2:26",
																"nodeType": "YulLiteral",
																"src": "17679:2:26",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "17664:3:26",
															"nodeType": "YulIdentifier",
															"src": "17664:3:26"
														},
														"nativeSrc": "17664:18:26",
														"nodeType": "YulFunctionCall",
														"src": "17664:18:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_address_to_t_address_fromStack",
													"nativeSrc": "17611:43:26",
													"nodeType": "YulIdentifier",
													"src": "17611:43:26"
												},
												"nativeSrc": "17611:72:26",
												"nodeType": "YulFunctionCall",
												"src": "17611:72:26"
											},
											"nativeSrc": "17611:72:26",
											"nodeType": "YulExpressionStatement",
											"src": "17611:72:26"
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value2",
														"nativeSrc": "17737:6:26",
														"nodeType": "YulIdentifier",
														"src": "17737:6:26"
													},
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "17750:9:26",
																"nodeType": "YulIdentifier",
																"src": "17750:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "17761:2:26",
																"nodeType": "YulLiteral",
																"src": "17761:2:26",
																"type": "",
																"value": "64"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "17746:3:26",
															"nodeType": "YulIdentifier",
															"src": "17746:3:26"
														},
														"nativeSrc": "17746:18:26",
														"nodeType": "YulFunctionCall",
														"src": "17746:18:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
													"nativeSrc": "17693:43:26",
													"nodeType": "YulIdentifier",
													"src": "17693:43:26"
												},
												"nativeSrc": "17693:72:26",
												"nodeType": "YulFunctionCall",
												"src": "17693:72:26"
											},
											"nativeSrc": "17693:72:26",
											"nodeType": "YulExpressionStatement",
											"src": "17693:72:26"
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value3",
														"nativeSrc": "17819:6:26",
														"nodeType": "YulIdentifier",
														"src": "17819:6:26"
													},
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "17832:9:26",
																"nodeType": "YulIdentifier",
																"src": "17832:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "17843:2:26",
																"nodeType": "YulLiteral",
																"src": "17843:2:26",
																"type": "",
																"value": "96"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "17828:3:26",
															"nodeType": "YulIdentifier",
															"src": "17828:3:26"
														},
														"nativeSrc": "17828:18:26",
														"nodeType": "YulFunctionCall",
														"src": "17828:18:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
													"nativeSrc": "17775:43:26",
													"nodeType": "YulIdentifier",
													"src": "17775:43:26"
												},
												"nativeSrc": "17775:72:26",
												"nodeType": "YulFunctionCall",
												"src": "17775:72:26"
											},
											"nativeSrc": "17775:72:26",
											"nodeType": "YulExpressionStatement",
											"src": "17775:72:26"
										},
										{
											"expression": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "17868:9:26",
																"nodeType": "YulIdentifier",
																"src": "17868:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "17879:3:26",
																"nodeType": "YulLiteral",
																"src": "17879:3:26",
																"type": "",
																"value": "128"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "17864:3:26",
															"nodeType": "YulIdentifier",
															"src": "17864:3:26"
														},
														"nativeSrc": "17864:19:26",
														"nodeType": "YulFunctionCall",
														"src": "17864:19:26"
													},
													{
														"arguments": [
															{
																"name": "tail",
																"nativeSrc": "17889:4:26",
																"nodeType": "YulIdentifier",
																"src": "17889:4:26"
															},
															{
																"name": "headStart",
																"nativeSrc": "17895:9:26",
																"nodeType": "YulIdentifier",
																"src": "17895:9:26"
															}
														],
														"functionName": {
															"name": "sub",
															"nativeSrc": "17885:3:26",
															"nodeType": "YulIdentifier",
															"src": "17885:3:26"
														},
														"nativeSrc": "17885:20:26",
														"nodeType": "YulFunctionCall",
														"src": "17885:20:26"
													}
												],
												"functionName": {
													"name": "mstore",
													"nativeSrc": "17857:6:26",
													"nodeType": "YulIdentifier",
													"src": "17857:6:26"
												},
												"nativeSrc": "17857:49:26",
												"nodeType": "YulFunctionCall",
												"src": "17857:49:26"
											},
											"nativeSrc": "17857:49:26",
											"nodeType": "YulExpressionStatement",
											"src": "17857:49:26"
										},
										{
											"nativeSrc": "17915:138:26",
											"nodeType": "YulAssignment",
											"src": "17915:138:26",
											"value": {
												"arguments": [
													{
														"name": "tail",
														"nativeSrc": "18048:4:26",
														"nodeType": "YulIdentifier",
														"src": "18048:4:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470_to_t_bytes_memory_ptr_fromStack",
													"nativeSrc": "17923:123:26",
													"nodeType": "YulIdentifier",
													"src": "17923:123:26"
												},
												"nativeSrc": "17923:130:26",
												"nodeType": "YulFunctionCall",
												"src": "17923:130:26"
											},
											"variableNames": [
												{
													"name": "tail",
													"nativeSrc": "17915:4:26",
													"nodeType": "YulIdentifier",
													"src": "17915:4:26"
												}
											]
										}
									]
								},
								"name": "abi_encode_tuple_t_address_t_address_t_uint256_t_uint256_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470__to_t_address_t_address_t_uint256_t_uint256_t_bytes_memory_ptr__fromStack_reversed",
								"nativeSrc": "17201:859:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "17431:9:26",
										"nodeType": "YulTypedName",
										"src": "17431:9:26",
										"type": ""
									},
									{
										"name": "value3",
										"nativeSrc": "17443:6:26",
										"nodeType": "YulTypedName",
										"src": "17443:6:26",
										"type": ""
									},
									{
										"name": "value2",
										"nativeSrc": "17451:6:26",
										"nodeType": "YulTypedName",
										"src": "17451:6:26",
										"type": ""
									},
									{
										"name": "value1",
										"nativeSrc": "17459:6:26",
										"nodeType": "YulTypedName",
										"src": "17459:6:26",
										"type": ""
									},
									{
										"name": "value0",
										"nativeSrc": "17467:6:26",
										"nodeType": "YulTypedName",
										"src": "17467:6:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nativeSrc": "17478:4:26",
										"nodeType": "YulTypedName",
										"src": "17478:4:26",
										"type": ""
									}
								],
								"src": "17201:859:26"
							},
							{
								"body": {
									"nativeSrc": "18192:206:26",
									"nodeType": "YulBlock",
									"src": "18192:206:26",
									"statements": [
										{
											"nativeSrc": "18202:26:26",
											"nodeType": "YulAssignment",
											"src": "18202:26:26",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nativeSrc": "18214:9:26",
														"nodeType": "YulIdentifier",
														"src": "18214:9:26"
													},
													{
														"kind": "number",
														"nativeSrc": "18225:2:26",
														"nodeType": "YulLiteral",
														"src": "18225:2:26",
														"type": "",
														"value": "64"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "18210:3:26",
													"nodeType": "YulIdentifier",
													"src": "18210:3:26"
												},
												"nativeSrc": "18210:18:26",
												"nodeType": "YulFunctionCall",
												"src": "18210:18:26"
											},
											"variableNames": [
												{
													"name": "tail",
													"nativeSrc": "18202:4:26",
													"nodeType": "YulIdentifier",
													"src": "18202:4:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value0",
														"nativeSrc": "18282:6:26",
														"nodeType": "YulIdentifier",
														"src": "18282:6:26"
													},
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "18295:9:26",
																"nodeType": "YulIdentifier",
																"src": "18295:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "18306:1:26",
																"nodeType": "YulLiteral",
																"src": "18306:1:26",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "18291:3:26",
															"nodeType": "YulIdentifier",
															"src": "18291:3:26"
														},
														"nativeSrc": "18291:17:26",
														"nodeType": "YulFunctionCall",
														"src": "18291:17:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_address_to_t_address_fromStack",
													"nativeSrc": "18238:43:26",
													"nodeType": "YulIdentifier",
													"src": "18238:43:26"
												},
												"nativeSrc": "18238:71:26",
												"nodeType": "YulFunctionCall",
												"src": "18238:71:26"
											},
											"nativeSrc": "18238:71:26",
											"nodeType": "YulExpressionStatement",
											"src": "18238:71:26"
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value1",
														"nativeSrc": "18363:6:26",
														"nodeType": "YulIdentifier",
														"src": "18363:6:26"
													},
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "18376:9:26",
																"nodeType": "YulIdentifier",
																"src": "18376:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "18387:2:26",
																"nodeType": "YulLiteral",
																"src": "18387:2:26",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "18372:3:26",
															"nodeType": "YulIdentifier",
															"src": "18372:3:26"
														},
														"nativeSrc": "18372:18:26",
														"nodeType": "YulFunctionCall",
														"src": "18372:18:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
													"nativeSrc": "18319:43:26",
													"nodeType": "YulIdentifier",
													"src": "18319:43:26"
												},
												"nativeSrc": "18319:72:26",
												"nodeType": "YulFunctionCall",
												"src": "18319:72:26"
											},
											"nativeSrc": "18319:72:26",
											"nodeType": "YulExpressionStatement",
											"src": "18319:72:26"
										}
									]
								},
								"name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
								"nativeSrc": "18066:332:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "18156:9:26",
										"nodeType": "YulTypedName",
										"src": "18156:9:26",
										"type": ""
									},
									{
										"name": "value1",
										"nativeSrc": "18168:6:26",
										"nodeType": "YulTypedName",
										"src": "18168:6:26",
										"type": ""
									},
									{
										"name": "value0",
										"nativeSrc": "18176:6:26",
										"nodeType": "YulTypedName",
										"src": "18176:6:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nativeSrc": "18187:4:26",
										"nodeType": "YulTypedName",
										"src": "18187:4:26",
										"type": ""
									}
								],
								"src": "18066:332:26"
							},
							{
								"body": {
									"nativeSrc": "18558:288:26",
									"nodeType": "YulBlock",
									"src": "18558:288:26",
									"statements": [
										{
											"nativeSrc": "18568:26:26",
											"nodeType": "YulAssignment",
											"src": "18568:26:26",
											"value": {
												"arguments": [
													{
														"name": "headStart",
														"nativeSrc": "18580:9:26",
														"nodeType": "YulIdentifier",
														"src": "18580:9:26"
													},
													{
														"kind": "number",
														"nativeSrc": "18591:2:26",
														"nodeType": "YulLiteral",
														"src": "18591:2:26",
														"type": "",
														"value": "96"
													}
												],
												"functionName": {
													"name": "add",
													"nativeSrc": "18576:3:26",
													"nodeType": "YulIdentifier",
													"src": "18576:3:26"
												},
												"nativeSrc": "18576:18:26",
												"nodeType": "YulFunctionCall",
												"src": "18576:18:26"
											},
											"variableNames": [
												{
													"name": "tail",
													"nativeSrc": "18568:4:26",
													"nodeType": "YulIdentifier",
													"src": "18568:4:26"
												}
											]
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value0",
														"nativeSrc": "18648:6:26",
														"nodeType": "YulIdentifier",
														"src": "18648:6:26"
													},
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "18661:9:26",
																"nodeType": "YulIdentifier",
																"src": "18661:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "18672:1:26",
																"nodeType": "YulLiteral",
																"src": "18672:1:26",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "18657:3:26",
															"nodeType": "YulIdentifier",
															"src": "18657:3:26"
														},
														"nativeSrc": "18657:17:26",
														"nodeType": "YulFunctionCall",
														"src": "18657:17:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_address_to_t_address_fromStack",
													"nativeSrc": "18604:43:26",
													"nodeType": "YulIdentifier",
													"src": "18604:43:26"
												},
												"nativeSrc": "18604:71:26",
												"nodeType": "YulFunctionCall",
												"src": "18604:71:26"
											},
											"nativeSrc": "18604:71:26",
											"nodeType": "YulExpressionStatement",
											"src": "18604:71:26"
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value1",
														"nativeSrc": "18729:6:26",
														"nodeType": "YulIdentifier",
														"src": "18729:6:26"
													},
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "18742:9:26",
																"nodeType": "YulIdentifier",
																"src": "18742:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "18753:2:26",
																"nodeType": "YulLiteral",
																"src": "18753:2:26",
																"type": "",
																"value": "32"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "18738:3:26",
															"nodeType": "YulIdentifier",
															"src": "18738:3:26"
														},
														"nativeSrc": "18738:18:26",
														"nodeType": "YulFunctionCall",
														"src": "18738:18:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_address_to_t_address_fromStack",
													"nativeSrc": "18685:43:26",
													"nodeType": "YulIdentifier",
													"src": "18685:43:26"
												},
												"nativeSrc": "18685:72:26",
												"nodeType": "YulFunctionCall",
												"src": "18685:72:26"
											},
											"nativeSrc": "18685:72:26",
											"nodeType": "YulExpressionStatement",
											"src": "18685:72:26"
										},
										{
											"expression": {
												"arguments": [
													{
														"name": "value2",
														"nativeSrc": "18811:6:26",
														"nodeType": "YulIdentifier",
														"src": "18811:6:26"
													},
													{
														"arguments": [
															{
																"name": "headStart",
																"nativeSrc": "18824:9:26",
																"nodeType": "YulIdentifier",
																"src": "18824:9:26"
															},
															{
																"kind": "number",
																"nativeSrc": "18835:2:26",
																"nodeType": "YulLiteral",
																"src": "18835:2:26",
																"type": "",
																"value": "64"
															}
														],
														"functionName": {
															"name": "add",
															"nativeSrc": "18820:3:26",
															"nodeType": "YulIdentifier",
															"src": "18820:3:26"
														},
														"nativeSrc": "18820:18:26",
														"nodeType": "YulFunctionCall",
														"src": "18820:18:26"
													}
												],
												"functionName": {
													"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
													"nativeSrc": "18767:43:26",
													"nodeType": "YulIdentifier",
													"src": "18767:43:26"
												},
												"nativeSrc": "18767:72:26",
												"nodeType": "YulFunctionCall",
												"src": "18767:72:26"
											},
											"nativeSrc": "18767:72:26",
											"nodeType": "YulExpressionStatement",
											"src": "18767:72:26"
										}
									]
								},
								"name": "abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed",
								"nativeSrc": "18404:442:26",
								"nodeType": "YulFunctionDefinition",
								"parameters": [
									{
										"name": "headStart",
										"nativeSrc": "18514:9:26",
										"nodeType": "YulTypedName",
										"src": "18514:9:26",
										"type": ""
									},
									{
										"name": "value2",
										"nativeSrc": "18526:6:26",
										"nodeType": "YulTypedName",
										"src": "18526:6:26",
										"type": ""
									},
									{
										"name": "value1",
										"nativeSrc": "18534:6:26",
										"nodeType": "YulTypedName",
										"src": "18534:6:26",
										"type": ""
									},
									{
										"name": "value0",
										"nativeSrc": "18542:6:26",
										"nodeType": "YulTypedName",
										"src": "18542:6:26",
										"type": ""
									}
								],
								"returnVariables": [
									{
										"name": "tail",
										"nativeSrc": "18553:4:26",
										"nodeType": "YulTypedName",
										"src": "18553:4:26",
										"type": ""
									}
								],
								"src": "18404:442:26"
							}
						]
					},
					"contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_bytes4(value) -> cleaned {\n        cleaned := and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000)\n    }\n\n    function validator_revert_t_bytes4(value) {\n        if iszero(eq(value, cleanup_t_bytes4(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bytes4(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256t_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint160_to_t_uint160(value) -> converted {\n        converted := cleanup_t_uint160(identity(cleanup_t_uint160(value)))\n    }\n\n    function convert_t_uint160_to_t_address(value) -> converted {\n        converted := convert_t_uint160_to_t_uint160(value)\n    }\n\n    function convert_t_contract$_IERC20_$1785_to_t_address(value) -> converted {\n        converted := convert_t_uint160_to_t_address(value)\n    }\n\n    function abi_encode_t_contract$_IERC20_$1785_to_t_address_fromStack(value, pos) {\n        mstore(pos, convert_t_contract$_IERC20_$1785_to_t_address(value))\n    }\n\n    function abi_encode_tuple_t_contract$_IERC20_$1785__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_contract$_IERC20_$1785_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_array$_t_uint256_$dyn_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := mul(length, 0x20)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef() {\n        revert(0, 0)\n    }\n\n    // uint256[]\n    function abi_decode_available_length_t_array$_t_uint256_$dyn_memory_ptr(offset, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_array$_t_uint256_$dyn_memory_ptr(length))\n        let dst := array\n\n        mstore(array, length)\n        dst := add(array, 0x20)\n\n        let srcEnd := add(offset, mul(length, 0x20))\n        if gt(srcEnd, end) {\n            revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef()\n        }\n        for { let src := offset } lt(src, srcEnd) { src := add(src, 0x20) }\n        {\n\n            let elementPos := src\n\n            mstore(dst, abi_decode_t_uint256(elementPos, end))\n            dst := add(dst, 0x20)\n        }\n    }\n\n    // uint256[]\n    function abi_decode_t_array$_t_uint256_$dyn_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_array$_t_uint256_$dyn_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function array_allocation_size_t_bytes_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory_with_cleanup(src, dst, length) {\n\n        calldatacopy(dst, src, length)\n        mstore(add(dst, length), 0)\n\n    }\n\n    function abi_decode_available_length_t_bytes_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_bytes_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory_with_cleanup(src, dst, length)\n    }\n\n    // bytes\n    function abi_decode_t_bytes_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_bytes_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_array$_t_uint256_$dyn_memory_ptrt_array$_t_uint256_$dyn_memory_ptrt_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3, value4 {\n        if slt(sub(dataEnd, headStart), 160) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 64))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value2 := abi_decode_t_array$_t_uint256_$dyn_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 96))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value3 := abi_decode_t_array$_t_uint256_$dyn_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 128))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value4 := abi_decode_t_bytes_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_bytes4_to_t_bytes4_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bytes4(value))\n    }\n\n    function abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bytes4_to_t_bytes4_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256t_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3, value4 {\n        if slt(sub(dataEnd, headStart), 160) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 96\n\n            value3 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 128))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value4 := abi_decode_t_bytes_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_bdc84b596d1584baca462ea0883d91180d5d58efdc428f4038e51fd7334f8990(memPtr) {\n\n        mstore(add(memPtr, 0), \"No payment tokens to withdraw\")\n\n    }\n\n    function abi_encode_t_stringliteral_bdc84b596d1584baca462ea0883d91180d5d58efdc428f4038e51fd7334f8990_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 29)\n        store_literal_in_memory_bdc84b596d1584baca462ea0883d91180d5d58efdc428f4038e51fd7334f8990(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_bdc84b596d1584baca462ea0883d91180d5d58efdc428f4038e51fd7334f8990__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_bdc84b596d1584baca462ea0883d91180d5d58efdc428f4038e51fd7334f8990_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function cleanup_t_rational_1_by_1(value) -> cleaned {\n        cleaned := value\n    }\n\n    function convert_t_rational_1_by_1_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_rational_1_by_1(value)))\n    }\n\n    function abi_encode_t_rational_1_by_1_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, convert_t_rational_1_by_1_to_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_address_t_rational_1_by_1__to_t_address_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_rational_1_by_1_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function store_literal_in_memory_a7e5e4d46ea524835ea36125140e247d59a2bce707f2094f88605dba8157d192(memPtr) {\n\n        mstore(add(memPtr, 0), \"Insufficient token balance\")\n\n    }\n\n    function abi_encode_t_stringliteral_a7e5e4d46ea524835ea36125140e247d59a2bce707f2094f88605dba8157d192_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 26)\n        store_literal_in_memory_a7e5e4d46ea524835ea36125140e247d59a2bce707f2094f88605dba8157d192(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_a7e5e4d46ea524835ea36125140e247d59a2bce707f2094f88605dba8157d192__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_a7e5e4d46ea524835ea36125140e247d59a2bce707f2094f88605dba8157d192_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        let product_raw := mul(x, y)\n        product := cleanup_t_uint256(product_raw)\n\n        // overflow, if x != 0 and y != product/x\n        if iszero(\n            or(\n                iszero(x),\n                eq(y, div(product, x))\n            )\n        ) { panic_error_0x11() }\n\n    }\n\n    function store_literal_in_memory_401a543cc0af2324882d3b84b4e67a67bc85d263f8e099548a0affdc67d04bc0(memPtr) {\n\n        mstore(add(memPtr, 0), \"Error updating tokens sold\")\n\n    }\n\n    function abi_encode_t_stringliteral_401a543cc0af2324882d3b84b4e67a67bc85d263f8e099548a0affdc67d04bc0_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 26)\n        store_literal_in_memory_401a543cc0af2324882d3b84b4e67a67bc85d263f8e099548a0affdc67d04bc0(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_401a543cc0af2324882d3b84b4e67a67bc85d263f8e099548a0affdc67d04bc0__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_401a543cc0af2324882d3b84b4e67a67bc85d263f8e099548a0affdc67d04bc0_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470(memPtr) {\n\n    }\n\n    function abi_encode_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470_to_t_bytes_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, 0)\n        store_literal_in_memory_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470(pos)\n        end := add(pos, 0)\n    }\n\n    function abi_encode_tuple_t_address_t_address_t_uint256_t_uint256_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470__to_t_address_t_address_t_uint256_t_uint256_t_bytes_memory_ptr__fromStack_reversed(headStart , value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 160)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value3,  add(headStart, 96))\n\n        mstore(add(headStart, 128), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470_to_t_bytes_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n    }\n\n}\n",
					"id": 26,
					"language": "Yul",
					"name": "#utility.yul"
				}
			],
			"immutableReferences": {},
			"linkReferences": {},
			"object": "608060405234801561000f575f5ffd5b50600436106100b2575f3560e01c80637ff9b5961161006f5780637ff9b596146101525780638da5cb5b14610170578063b69ef8a81461018e578063bc197c81146101ac578063f23a6e61146101dc578063f2fde38b1461020c576100b2565b806301ffc9a7146100b657806302778fc0146100e6578063057466ea146100f05780633013ce291461010c578063519ee19e1461012a578063715018a614610148575b5f5ffd5b6100d060048036038101906100cb9190610c03565b610228565b6040516100dd9190610c48565b60405180910390f35b6100ee6102a1565b005b61010a60048036038101906101059190610c94565b6103d6565b005b61011461060f565b6040516101219190610d4c565b60405180910390f35b610132610634565b60405161013f9190610d74565b60405180910390f35b61015061063a565b005b61015a61064d565b6040516101679190610d74565b60405180910390f35b610178610653565b6040516101859190610dad565b60405180910390f35b61019661067a565b6040516101a39190610d74565b60405180910390f35b6101c660048036038101906101c19190610ff0565b610720565b6040516101d391906110ca565b60405180910390f35b6101f660048036038101906101f191906110e3565b610734565b60405161020391906110ca565b60405180910390f35b61022660048036038101906102219190611176565b610748565b005b5f7f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061029a5750610299826107cc565b5b9050919050565b6102a9610835565b5f60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103049190610dad565b602060405180830381865afa15801561031f573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061034391906111b5565b90505f8111610387576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037e9061123a565b60405180910390fd5b6103d3338260035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108bc9092919063ffffffff16565b50565b6103de61093b565b8160025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662fdd58e3060016040518363ffffffff1660e01b815260040161043b929190611291565b602060405180830381865afa158015610456573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061047a91906111b5565b10156104bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b290611302565b60405180910390fd5b5f600454836104ca919061134d565b905061051a33308360035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610981909392919063ffffffff16565b5f5f61052860055486610a03565b915091508161056c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610563906113d8565b60405180910390fd5b8060058190555060025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f242432a303387896040518563ffffffff1660e01b81526004016105d39493929190611429565b5f604051808303815f87803b1580156105ea575f5ffd5b505af11580156105fc573d5f5f3e3d5ffd5b5050505050505061060b610a26565b5050565b60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60055481565b610642610835565b61064b5f610a2f565b565b60045481565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f5f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662fdd58e3060016040518363ffffffff1660e01b81526004016106d8929190611291565b602060405180830381865afa1580156106f3573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061071791906111b5565b90508091505090565b5f63bc197c8160e01b905095945050505050565b5f63f23a6e6160e01b905095945050505050565b610750610835565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107c0575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016107b79190610dad565b60405180910390fd5b6107c981610a2f565b50565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61083d610af0565b73ffffffffffffffffffffffffffffffffffffffff1661085b610653565b73ffffffffffffffffffffffffffffffffffffffff16146108ba5761087e610af0565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016108b19190610dad565b60405180910390fd5b565b610936838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85856040516024016108ef92919061147f565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610af7565b505050565b600260015403610977576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600181905550565b6109fd848573ffffffffffffffffffffffffffffffffffffffff166323b872dd8686866040516024016109b6939291906114a6565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610af7565b50505050565b5f5f5f8385019050848110159250610a1a83610b92565b81029150509250929050565b60018081905550565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f5f60205f8451602086015f885af180610b16576040513d5f823e3d81fd5b3d92505f519150505f8214610b2f576001811415610b4a565b5f8473ffffffffffffffffffffffffffffffffffffffff163b145b15610b8c57836040517f5274afe7000000000000000000000000000000000000000000000000000000008152600401610b839190610dad565b60405180910390fd5b50505050565b5f8115159050919050565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b610be281610bae565b8114610bec575f5ffd5b50565b5f81359050610bfd81610bd9565b92915050565b5f60208284031215610c1857610c17610ba6565b5b5f610c2584828501610bef565b91505092915050565b5f8115159050919050565b610c4281610c2e565b82525050565b5f602082019050610c5b5f830184610c39565b92915050565b5f819050919050565b610c7381610c61565b8114610c7d575f5ffd5b50565b5f81359050610c8e81610c6a565b92915050565b5f5f60408385031215610caa57610ca9610ba6565b5b5f610cb785828601610c80565b9250506020610cc885828601610c80565b9150509250929050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f819050919050565b5f610d14610d0f610d0a84610cd2565b610cf1565b610cd2565b9050919050565b5f610d2582610cfa565b9050919050565b5f610d3682610d1b565b9050919050565b610d4681610d2c565b82525050565b5f602082019050610d5f5f830184610d3d565b92915050565b610d6e81610c61565b82525050565b5f602082019050610d875f830184610d65565b92915050565b5f610d9782610cd2565b9050919050565b610da781610d8d565b82525050565b5f602082019050610dc05f830184610d9e565b92915050565b610dcf81610d8d565b8114610dd9575f5ffd5b50565b5f81359050610dea81610dc6565b92915050565b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610e3a82610df4565b810181811067ffffffffffffffff82111715610e5957610e58610e04565b5b80604052505050565b5f610e6b610b9d565b9050610e778282610e31565b919050565b5f67ffffffffffffffff821115610e9657610e95610e04565b5b602082029050602081019050919050565b5f5ffd5b5f610ebd610eb884610e7c565b610e62565b90508083825260208201905060208402830185811115610ee057610edf610ea7565b5b835b81811015610f095780610ef58882610c80565b845260208401935050602081019050610ee2565b5050509392505050565b5f82601f830112610f2757610f26610df0565b5b8135610f37848260208601610eab565b91505092915050565b5f5ffd5b5f67ffffffffffffffff821115610f5e57610f5d610e04565b5b610f6782610df4565b9050602081019050919050565b828183375f83830152505050565b5f610f94610f8f84610f44565b610e62565b905082815260208101848484011115610fb057610faf610f40565b5b610fbb848285610f74565b509392505050565b5f82601f830112610fd757610fd6610df0565b5b8135610fe7848260208601610f82565b91505092915050565b5f5f5f5f5f60a0868803121561100957611008610ba6565b5b5f61101688828901610ddc565b955050602061102788828901610ddc565b945050604086013567ffffffffffffffff81111561104857611047610baa565b5b61105488828901610f13565b935050606086013567ffffffffffffffff81111561107557611074610baa565b5b61108188828901610f13565b925050608086013567ffffffffffffffff8111156110a2576110a1610baa565b5b6110ae88828901610fc3565b9150509295509295909350565b6110c481610bae565b82525050565b5f6020820190506110dd5f8301846110bb565b92915050565b5f5f5f5f5f60a086880312156110fc576110fb610ba6565b5b5f61110988828901610ddc565b955050602061111a88828901610ddc565b945050604061112b88828901610c80565b935050606061113c88828901610c80565b925050608086013567ffffffffffffffff81111561115d5761115c610baa565b5b61116988828901610fc3565b9150509295509295909350565b5f6020828403121561118b5761118a610ba6565b5b5f61119884828501610ddc565b91505092915050565b5f815190506111af81610c6a565b92915050565b5f602082840312156111ca576111c9610ba6565b5b5f6111d7848285016111a1565b91505092915050565b5f82825260208201905092915050565b7f4e6f207061796d656e7420746f6b656e7320746f2077697468647261770000005f82015250565b5f611224601d836111e0565b915061122f826111f0565b602082019050919050565b5f6020820190508181035f83015261125181611218565b9050919050565b5f819050919050565b5f61127b61127661127184611258565b610cf1565b610c61565b9050919050565b61128b81611261565b82525050565b5f6040820190506112a45f830185610d9e565b6112b16020830184611282565b9392505050565b7f496e73756666696369656e7420746f6b656e2062616c616e63650000000000005f82015250565b5f6112ec601a836111e0565b91506112f7826112b8565b602082019050919050565b5f6020820190508181035f830152611319816112e0565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61135782610c61565b915061136283610c61565b925082820261137081610c61565b9150828204841483151761138757611386611320565b5b5092915050565b7f4572726f72207570646174696e6720746f6b656e7320736f6c640000000000005f82015250565b5f6113c2601a836111e0565b91506113cd8261138e565b602082019050919050565b5f6020820190508181035f8301526113ef816113b6565b9050919050565b5f82825260208201905092915050565b50565b5f6114145f836113f6565b915061141f82611406565b5f82019050919050565b5f60a08201905061143c5f830187610d9e565b6114496020830186610d9e565b6114566040830185610d65565b6114636060830184610d65565b818103608083015261147481611409565b905095945050505050565b5f6040820190506114925f830185610d9e565b61149f6020830184610d65565b9392505050565b5f6060820190506114b95f830186610d9e565b6114c66020830185610d9e565b6114d36040830184610d65565b94935050505056fea26469706673582212208f830904ae7961aa1cfc8ee9aeac1d5e4de8cfd8c45d6650a45428f5ab98b5d364736f6c634300081e0033",
			"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0xB2 JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x7FF9B596 GT PUSH2 0x6F JUMPI DUP1 PUSH4 0x7FF9B596 EQ PUSH2 0x152 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x170 JUMPI DUP1 PUSH4 0xB69EF8A8 EQ PUSH2 0x18E JUMPI DUP1 PUSH4 0xBC197C81 EQ PUSH2 0x1AC JUMPI DUP1 PUSH4 0xF23A6E61 EQ PUSH2 0x1DC JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x20C JUMPI PUSH2 0xB2 JUMP JUMPDEST DUP1 PUSH4 0x1FFC9A7 EQ PUSH2 0xB6 JUMPI DUP1 PUSH4 0x2778FC0 EQ PUSH2 0xE6 JUMPI DUP1 PUSH4 0x57466EA EQ PUSH2 0xF0 JUMPI DUP1 PUSH4 0x3013CE29 EQ PUSH2 0x10C JUMPI DUP1 PUSH4 0x519EE19E EQ PUSH2 0x12A JUMPI DUP1 PUSH4 0x715018A6 EQ PUSH2 0x148 JUMPI JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH2 0xD0 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xCB SWAP2 SWAP1 PUSH2 0xC03 JUMP JUMPDEST PUSH2 0x228 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xDD SWAP2 SWAP1 PUSH2 0xC48 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xEE PUSH2 0x2A1 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x10A PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x105 SWAP2 SWAP1 PUSH2 0xC94 JUMP JUMPDEST PUSH2 0x3D6 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x114 PUSH2 0x60F JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x121 SWAP2 SWAP1 PUSH2 0xD4C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x132 PUSH2 0x634 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x13F SWAP2 SWAP1 PUSH2 0xD74 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x150 PUSH2 0x63A JUMP JUMPDEST STOP JUMPDEST PUSH2 0x15A PUSH2 0x64D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x167 SWAP2 SWAP1 PUSH2 0xD74 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x178 PUSH2 0x653 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x185 SWAP2 SWAP1 PUSH2 0xDAD JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x196 PUSH2 0x67A JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1A3 SWAP2 SWAP1 PUSH2 0xD74 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1C6 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1C1 SWAP2 SWAP1 PUSH2 0xFF0 JUMP JUMPDEST PUSH2 0x720 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1D3 SWAP2 SWAP1 PUSH2 0x10CA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1F6 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1F1 SWAP2 SWAP1 PUSH2 0x10E3 JUMP JUMPDEST PUSH2 0x734 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x203 SWAP2 SWAP1 PUSH2 0x10CA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x226 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x221 SWAP2 SWAP1 PUSH2 0x1176 JUMP JUMPDEST PUSH2 0x748 JUMP JUMPDEST STOP JUMPDEST PUSH0 PUSH32 0x4E2312E000000000000000000000000000000000000000000000000000000000 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND DUP3 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ DUP1 PUSH2 0x29A JUMPI POP PUSH2 0x299 DUP3 PUSH2 0x7CC JUMP JUMPDEST JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x2A9 PUSH2 0x835 JUMP JUMPDEST PUSH0 PUSH1 0x3 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x70A08231 ADDRESS PUSH1 0x40 MLOAD DUP3 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x304 SWAP2 SWAP1 PUSH2 0xDAD JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL ISZERO DUP1 ISZERO PUSH2 0x31F JUMPI RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY RETURNDATASIZE PUSH0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x343 SWAP2 SWAP1 PUSH2 0x11B5 JUMP JUMPDEST SWAP1 POP PUSH0 DUP2 GT PUSH2 0x387 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x37E SWAP1 PUSH2 0x123A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x3D3 CALLER DUP3 PUSH1 0x3 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8BC SWAP1 SWAP3 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST POP JUMP JUMPDEST PUSH2 0x3DE PUSH2 0x93B JUMP JUMPDEST DUP2 PUSH1 0x2 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH3 0xFDD58E ADDRESS PUSH1 0x1 PUSH1 0x40 MLOAD DUP4 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x43B SWAP3 SWAP2 SWAP1 PUSH2 0x1291 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL ISZERO DUP1 ISZERO PUSH2 0x456 JUMPI RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY RETURNDATASIZE PUSH0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x47A SWAP2 SWAP1 PUSH2 0x11B5 JUMP JUMPDEST LT ISZERO PUSH2 0x4BB JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x4B2 SWAP1 PUSH2 0x1302 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH0 PUSH1 0x4 SLOAD DUP4 PUSH2 0x4CA SWAP2 SWAP1 PUSH2 0x134D JUMP JUMPDEST SWAP1 POP PUSH2 0x51A CALLER ADDRESS DUP4 PUSH1 0x3 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x981 SWAP1 SWAP4 SWAP3 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH0 PUSH0 PUSH2 0x528 PUSH1 0x5 SLOAD DUP7 PUSH2 0xA03 JUMP JUMPDEST SWAP2 POP SWAP2 POP DUP2 PUSH2 0x56C JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x563 SWAP1 PUSH2 0x13D8 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x5 DUP2 SWAP1 SSTORE POP PUSH1 0x2 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0xF242432A ADDRESS CALLER DUP8 DUP10 PUSH1 0x40 MLOAD DUP6 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x5D3 SWAP5 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x1429 JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x5EA JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x5FC JUMPI RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY RETURNDATASIZE PUSH0 REVERT JUMPDEST POP POP POP POP POP POP POP PUSH2 0x60B PUSH2 0xA26 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x3 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x5 SLOAD DUP2 JUMP JUMPDEST PUSH2 0x642 PUSH2 0x835 JUMP JUMPDEST PUSH2 0x64B PUSH0 PUSH2 0xA2F JUMP JUMPDEST JUMP JUMPDEST PUSH1 0x4 SLOAD DUP2 JUMP JUMPDEST PUSH0 PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x2 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH3 0xFDD58E ADDRESS PUSH1 0x1 PUSH1 0x40 MLOAD DUP4 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x6D8 SWAP3 SWAP2 SWAP1 PUSH2 0x1291 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL ISZERO DUP1 ISZERO PUSH2 0x6F3 JUMPI RETURNDATASIZE PUSH0 PUSH0 RETURNDATACOPY RETURNDATASIZE PUSH0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x717 SWAP2 SWAP1 PUSH2 0x11B5 JUMP JUMPDEST SWAP1 POP DUP1 SWAP2 POP POP SWAP1 JUMP JUMPDEST PUSH0 PUSH4 0xBC197C81 PUSH1 0xE0 SHL SWAP1 POP SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH0 PUSH4 0xF23A6E61 PUSH1 0xE0 SHL SWAP1 POP SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH2 0x750 PUSH2 0x835 JUMP JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x7C0 JUMPI PUSH0 PUSH1 0x40 MLOAD PUSH32 0x1E4FBDF700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x7B7 SWAP2 SWAP1 PUSH2 0xDAD JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x7C9 DUP2 PUSH2 0xA2F JUMP JUMPDEST POP JUMP JUMPDEST PUSH0 PUSH32 0x1FFC9A700000000000000000000000000000000000000000000000000000000 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND DUP3 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND EQ SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x83D PUSH2 0xAF0 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x85B PUSH2 0x653 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x8BA JUMPI PUSH2 0x87E PUSH2 0xAF0 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH32 0x118CDAA700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x8B1 SWAP2 SWAP1 PUSH2 0xDAD JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST JUMP JUMPDEST PUSH2 0x936 DUP4 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0xA9059CBB DUP6 DUP6 PUSH1 0x40 MLOAD PUSH1 0x24 ADD PUSH2 0x8EF SWAP3 SWAP2 SWAP1 PUSH2 0x147F JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE SWAP2 POP PUSH1 0xE0 SHL PUSH1 0x20 DUP3 ADD DUP1 MLOAD PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP4 DUP2 DUP4 AND OR DUP4 MSTORE POP POP POP POP PUSH2 0xAF7 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x2 PUSH1 0x1 SLOAD SUB PUSH2 0x977 JUMPI PUSH1 0x40 MLOAD PUSH32 0x3EE5AEB500000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x2 PUSH1 0x1 DUP2 SWAP1 SSTORE POP JUMP JUMPDEST PUSH2 0x9FD DUP5 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x23B872DD DUP7 DUP7 DUP7 PUSH1 0x40 MLOAD PUSH1 0x24 ADD PUSH2 0x9B6 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x14A6 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE SWAP2 POP PUSH1 0xE0 SHL PUSH1 0x20 DUP3 ADD DUP1 MLOAD PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP4 DUP2 DUP4 AND OR DUP4 MSTORE POP POP POP POP PUSH2 0xAF7 JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 DUP4 DUP6 ADD SWAP1 POP DUP5 DUP2 LT ISZERO SWAP3 POP PUSH2 0xA1A DUP4 PUSH2 0xB92 JUMP JUMPDEST DUP2 MUL SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x1 DUP1 DUP2 SWAP1 SSTORE POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH0 PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x20 PUSH0 DUP5 MLOAD PUSH1 0x20 DUP7 ADD PUSH0 DUP9 GAS CALL DUP1 PUSH2 0xB16 JUMPI PUSH1 0x40 MLOAD RETURNDATASIZE PUSH0 DUP3 RETURNDATACOPY RETURNDATASIZE DUP2 REVERT JUMPDEST RETURNDATASIZE SWAP3 POP PUSH0 MLOAD SWAP2 POP POP PUSH0 DUP3 EQ PUSH2 0xB2F JUMPI PUSH1 0x1 DUP2 EQ ISZERO PUSH2 0xB4A JUMP JUMPDEST PUSH0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EXTCODESIZE EQ JUMPDEST ISZERO PUSH2 0xB8C JUMPI DUP4 PUSH1 0x40 MLOAD PUSH32 0x5274AFE700000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xB83 SWAP2 SWAP1 PUSH2 0xDAD JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH32 0xFFFFFFFF00000000000000000000000000000000000000000000000000000000 DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xBE2 DUP2 PUSH2 0xBAE JUMP JUMPDEST DUP2 EQ PUSH2 0xBEC JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0xBFD DUP2 PUSH2 0xBD9 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xC18 JUMPI PUSH2 0xC17 PUSH2 0xBA6 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0xC25 DUP5 DUP3 DUP6 ADD PUSH2 0xBEF JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xC42 DUP2 PUSH2 0xC2E JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xC5B PUSH0 DUP4 ADD DUP5 PUSH2 0xC39 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xC73 DUP2 PUSH2 0xC61 JUMP JUMPDEST DUP2 EQ PUSH2 0xC7D JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0xC8E DUP2 PUSH2 0xC6A JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xCAA JUMPI PUSH2 0xCA9 PUSH2 0xBA6 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0xCB7 DUP6 DUP3 DUP7 ADD PUSH2 0xC80 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0xCC8 DUP6 DUP3 DUP7 ADD PUSH2 0xC80 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0xD14 PUSH2 0xD0F PUSH2 0xD0A DUP5 PUSH2 0xCD2 JUMP JUMPDEST PUSH2 0xCF1 JUMP JUMPDEST PUSH2 0xCD2 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0xD25 DUP3 PUSH2 0xCFA JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0xD36 DUP3 PUSH2 0xD1B JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xD46 DUP2 PUSH2 0xD2C JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xD5F PUSH0 DUP4 ADD DUP5 PUSH2 0xD3D JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0xD6E DUP2 PUSH2 0xC61 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xD87 PUSH0 DUP4 ADD DUP5 PUSH2 0xD65 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH2 0xD97 DUP3 PUSH2 0xCD2 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xDA7 DUP2 PUSH2 0xD8D JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xDC0 PUSH0 DUP4 ADD DUP5 PUSH2 0xD9E JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0xDCF DUP2 PUSH2 0xD8D JUMP JUMPDEST DUP2 EQ PUSH2 0xDD9 JUMPI PUSH0 PUSH0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0xDEA DUP2 PUSH2 0xDC6 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH2 0xE3A DUP3 PUSH2 0xDF4 JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH2 0xE59 JUMPI PUSH2 0xE58 PUSH2 0xE04 JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0xE6B PUSH2 0xB9D JUMP JUMPDEST SWAP1 POP PUSH2 0xE77 DUP3 DUP3 PUSH2 0xE31 JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0xE96 JUMPI PUSH2 0xE95 PUSH2 0xE04 JUMP JUMPDEST JUMPDEST PUSH1 0x20 DUP3 MUL SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0xEBD PUSH2 0xEB8 DUP5 PUSH2 0xE7C JUMP JUMPDEST PUSH2 0xE62 JUMP JUMPDEST SWAP1 POP DUP1 DUP4 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH1 0x20 DUP5 MUL DUP4 ADD DUP6 DUP2 GT ISZERO PUSH2 0xEE0 JUMPI PUSH2 0xEDF PUSH2 0xEA7 JUMP JUMPDEST JUMPDEST DUP4 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0xF09 JUMPI DUP1 PUSH2 0xEF5 DUP9 DUP3 PUSH2 0xC80 JUMP JUMPDEST DUP5 MSTORE PUSH1 0x20 DUP5 ADD SWAP4 POP POP PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0xEE2 JUMP JUMPDEST POP POP POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0xF27 JUMPI PUSH2 0xF26 PUSH2 0xDF0 JUMP JUMPDEST JUMPDEST DUP2 CALLDATALOAD PUSH2 0xF37 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH2 0xEAB JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 REVERT JUMPDEST PUSH0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0xF5E JUMPI PUSH2 0xF5D PUSH2 0xE04 JUMP JUMPDEST JUMPDEST PUSH2 0xF67 DUP3 PUSH2 0xDF4 JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST DUP3 DUP2 DUP4 CALLDATACOPY PUSH0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0xF94 PUSH2 0xF8F DUP5 PUSH2 0xF44 JUMP JUMPDEST PUSH2 0xE62 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH2 0xFB0 JUMPI PUSH2 0xFAF PUSH2 0xF40 JUMP JUMPDEST JUMPDEST PUSH2 0xFBB DUP5 DUP3 DUP6 PUSH2 0xF74 JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0xFD7 JUMPI PUSH2 0xFD6 PUSH2 0xDF0 JUMP JUMPDEST JUMPDEST DUP2 CALLDATALOAD PUSH2 0xFE7 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH2 0xF82 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH0 PUSH0 PUSH1 0xA0 DUP7 DUP9 SUB SLT ISZERO PUSH2 0x1009 JUMPI PUSH2 0x1008 PUSH2 0xBA6 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x1016 DUP9 DUP3 DUP10 ADD PUSH2 0xDDC JUMP JUMPDEST SWAP6 POP POP PUSH1 0x20 PUSH2 0x1027 DUP9 DUP3 DUP10 ADD PUSH2 0xDDC JUMP JUMPDEST SWAP5 POP POP PUSH1 0x40 DUP7 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x1048 JUMPI PUSH2 0x1047 PUSH2 0xBAA JUMP JUMPDEST JUMPDEST PUSH2 0x1054 DUP9 DUP3 DUP10 ADD PUSH2 0xF13 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x60 DUP7 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x1075 JUMPI PUSH2 0x1074 PUSH2 0xBAA JUMP JUMPDEST JUMPDEST PUSH2 0x1081 DUP9 DUP3 DUP10 ADD PUSH2 0xF13 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x80 DUP7 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x10A2 JUMPI PUSH2 0x10A1 PUSH2 0xBAA JUMP JUMPDEST JUMPDEST PUSH2 0x10AE DUP9 DUP3 DUP10 ADD PUSH2 0xFC3 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP6 POP SWAP3 SWAP6 SWAP1 SWAP4 POP JUMP JUMPDEST PUSH2 0x10C4 DUP2 PUSH2 0xBAE JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x10DD PUSH0 DUP4 ADD DUP5 PUSH2 0x10BB JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH0 PUSH0 PUSH0 PUSH0 PUSH1 0xA0 DUP7 DUP9 SUB SLT ISZERO PUSH2 0x10FC JUMPI PUSH2 0x10FB PUSH2 0xBA6 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x1109 DUP9 DUP3 DUP10 ADD PUSH2 0xDDC JUMP JUMPDEST SWAP6 POP POP PUSH1 0x20 PUSH2 0x111A DUP9 DUP3 DUP10 ADD PUSH2 0xDDC JUMP JUMPDEST SWAP5 POP POP PUSH1 0x40 PUSH2 0x112B DUP9 DUP3 DUP10 ADD PUSH2 0xC80 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x60 PUSH2 0x113C DUP9 DUP3 DUP10 ADD PUSH2 0xC80 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x80 DUP7 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x115D JUMPI PUSH2 0x115C PUSH2 0xBAA JUMP JUMPDEST JUMPDEST PUSH2 0x1169 DUP9 DUP3 DUP10 ADD PUSH2 0xFC3 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP6 POP SWAP3 SWAP6 SWAP1 SWAP4 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x118B JUMPI PUSH2 0x118A PUSH2 0xBA6 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x1198 DUP5 DUP3 DUP6 ADD PUSH2 0xDDC JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP PUSH2 0x11AF DUP2 PUSH2 0xC6A JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x11CA JUMPI PUSH2 0x11C9 PUSH2 0xBA6 JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x11D7 DUP5 DUP3 DUP6 ADD PUSH2 0x11A1 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4E6F207061796D656E7420746F6B656E7320746F207769746864726177000000 PUSH0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH0 PUSH2 0x1224 PUSH1 0x1D DUP4 PUSH2 0x11E0 JUMP JUMPDEST SWAP2 POP PUSH2 0x122F DUP3 PUSH2 0x11F0 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0x1251 DUP2 PUSH2 0x1218 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x127B PUSH2 0x1276 PUSH2 0x1271 DUP5 PUSH2 0x1258 JUMP JUMPDEST PUSH2 0xCF1 JUMP JUMPDEST PUSH2 0xC61 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x128B DUP2 PUSH2 0x1261 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0x12A4 PUSH0 DUP4 ADD DUP6 PUSH2 0xD9E JUMP JUMPDEST PUSH2 0x12B1 PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0x1282 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH32 0x496E73756666696369656E7420746F6B656E2062616C616E6365000000000000 PUSH0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH0 PUSH2 0x12EC PUSH1 0x1A DUP4 PUSH2 0x11E0 JUMP JUMPDEST SWAP2 POP PUSH2 0x12F7 DUP3 PUSH2 0x12B8 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0x1319 DUP2 PUSH2 0x12E0 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0x1357 DUP3 PUSH2 0xC61 JUMP JUMPDEST SWAP2 POP PUSH2 0x1362 DUP4 PUSH2 0xC61 JUMP JUMPDEST SWAP3 POP DUP3 DUP3 MUL PUSH2 0x1370 DUP2 PUSH2 0xC61 JUMP JUMPDEST SWAP2 POP DUP3 DUP3 DIV DUP5 EQ DUP4 ISZERO OR PUSH2 0x1387 JUMPI PUSH2 0x1386 PUSH2 0x1320 JUMP JUMPDEST JUMPDEST POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4572726F72207570646174696E6720746F6B656E7320736F6C64000000000000 PUSH0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH0 PUSH2 0x13C2 PUSH1 0x1A DUP4 PUSH2 0x11E0 JUMP JUMPDEST SWAP2 POP PUSH2 0x13CD DUP3 PUSH2 0x138E JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0x13EF DUP2 PUSH2 0x13B6 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST POP JUMP JUMPDEST PUSH0 PUSH2 0x1414 PUSH0 DUP4 PUSH2 0x13F6 JUMP JUMPDEST SWAP2 POP PUSH2 0x141F DUP3 PUSH2 0x1406 JUMP JUMPDEST PUSH0 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0xA0 DUP3 ADD SWAP1 POP PUSH2 0x143C PUSH0 DUP4 ADD DUP8 PUSH2 0xD9E JUMP JUMPDEST PUSH2 0x1449 PUSH1 0x20 DUP4 ADD DUP7 PUSH2 0xD9E JUMP JUMPDEST PUSH2 0x1456 PUSH1 0x40 DUP4 ADD DUP6 PUSH2 0xD65 JUMP JUMPDEST PUSH2 0x1463 PUSH1 0x60 DUP4 ADD DUP5 PUSH2 0xD65 JUMP JUMPDEST DUP2 DUP2 SUB PUSH1 0x80 DUP4 ADD MSTORE PUSH2 0x1474 DUP2 PUSH2 0x1409 JUMP JUMPDEST SWAP1 POP SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0x1492 PUSH0 DUP4 ADD DUP6 PUSH2 0xD9E JUMP JUMPDEST PUSH2 0x149F PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0xD65 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH0 PUSH1 0x60 DUP3 ADD SWAP1 POP PUSH2 0x14B9 PUSH0 DUP4 ADD DUP7 PUSH2 0xD9E JUMP JUMPDEST PUSH2 0x14C6 PUSH1 0x20 DUP4 ADD DUP6 PUSH2 0xD9E JUMP JUMPDEST PUSH2 0x14D3 PUSH1 0x40 DUP4 ADD DUP5 PUSH2 0xD65 JUMP JUMPDEST SWAP5 SWAP4 POP POP POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 DUP16 DUP4 MULMOD DIV 0xAE PUSH26 0x61AA1CFC8EE9AEAC1D5E4DE8CFD8C45D6650A45428F5AB98B5D3 PUSH5 0x736F6C6343 STOP ADDMOD 0x1E STOP CALLER ",
			"sourceMap": "465:1823:25:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;650:221:9;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2043:242:25;;;:::i;:::-;;971:806;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;649:26;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;747:21;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2293:101:0;;;:::i;:::-;;718:22:25;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1638:85:0;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1785:196:25;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1102:247:9;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;877:219;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2543:215:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;650:221:9;752:4;790:34;775:49;;;:11;:49;;;;:89;;;;828:36;852:11;828:23;:36::i;:::-;775:89;768:96;;650:221;;;:::o;2043:242:25:-;1531:13:0;:11;:13::i;:::-;2104:12:25::1;2119;;;;;;;;;;;:22;;;2150:4;2119:37;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2104:52;;2185:1;2175:7;:11;2167:53;;;;;;;;;;;;:::i;:::-;;;;;;;;;2231:46;2257:10;2269:7;2231:12;;;;;;;;;;;:25;;;;:46;;;;;:::i;:::-;2093:192;2043:242::o:0;971:806::-;2500:21:17;:19;:21::i;:::-;1088:7:25::1;1051:5;;;;;;;;;;;:15;;;1075:4;1082:1;1051:33;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:44;;1043:83;;;;;;;;;;;;:::i;:::-;;;;;;;;;1184:18;1215:10;;1205:7;:20;;;;:::i;:::-;1184:41;;1305:71;1335:10;1355:4;1362:13;1305:12;;;;;;;;;;;:29;;;;:71;;;;;;:::i;:::-;1429:12;1443:17;1464:31;1476:9;;1487:7;1464:11;:31::i;:::-;1428:67;;;;1514:7;1506:46;;;;;;;;;;;;:::i;:::-;;;;;;;;;1575:12;1563:9;:24;;;;1650:5;;;;;;;;;;;:22;;;1681:4;1688:10;1700:2;1704:7;1650:66;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1032:745;;;2542:20:17::0;:18;:20::i;:::-;971:806:25;;:::o;649:26::-;;;;;;;;;;;;;:::o;747:21::-;;;;:::o;2293:101:0:-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;:::-;2293:101::o:0;718:22:25:-;;;;:::o;1638:85:0:-;1684:7;1710:6;;;;;;;;;;;1703:13;;1638:85;:::o;1785:196:25:-;1825:4;1841:16;1860:5;;;;;;;;;;;:15;;;1884:4;1890:1;1860:32;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1841:51;;1962:11;1955:18;;;1785:196;:::o;1102:247:9:-;1281:6;1306:36;;;1299:43;;1102:247;;;;;;;:::o;877:219::-;1033:6;1058:31;;;1051:38;;877:219;;;;;;;:::o;2543:215:0:-;1531:13;:11;:13::i;:::-;2647:1:::1;2627:22;;:8;:22;;::::0;2623:91:::1;;2700:1;2672:31;;;;;;;;;;;:::i;:::-;;;;;;;;2623:91;2723:28;2742:8;2723:18;:28::i;:::-;2543:215:::0;:::o;763:146:20:-;839:4;877:25;862:40;;;:11;:40;;;;855:47;;763:146;;;:::o;1796:162:0:-;1866:12;:10;:12::i;:::-;1855:23;;:7;:5;:7::i;:::-;:23;;;1851:101;;1928:12;:10;:12::i;:::-;1901:40;;;;;;;;;;;:::i;:::-;;;;;;;;1851:101;1796:162::o;1219:160:12:-;1301:71;1321:5;1343;:14;;;1360:2;1364:5;1328:43;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1301:19;:71::i;:::-;1219:160;;;:::o;2575:307:17:-;1899:1;2702:7;;:18;2698:86;;2743:30;;;;;;;;;;;;;;2698:86;1899:1;2858:7;:17;;;;2575:307::o;1618:188:12:-;1718:81;1738:5;1760;:18;;;1781:4;1787:2;1791:5;1745:53;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1718:19;:81::i;:::-;1618:188;;;;:::o;1693:240:22:-;1754:12;1768:14;1818:9;1834:1;1830;:5;1818:17;;1864:1;1859;:6;;1849:16;;1892:24;1908:7;1892:15;:24::i;:::-;1888:1;:28;1879:37;;1794:133;1693:240;;;;;:::o;2888:208:17:-;1857:1;3068:7;:21;;;;2888:208::o;2912:187:0:-;2985:16;3004:6;;;;;;;;;;;2985:25;;3029:8;3020:6;;:17;;;;;;;;;;;;;;;;;;3083:8;3052:40;;3073:8;3052:40;;;;;;;;;;;;2975:124;2912:187;:::o;656:96:15:-;709:7;735:10;728:17;;656:96;:::o;8370:720:12:-;8450:18;8478:19;8616:4;8613:1;8606:4;8600:11;8593:4;8587;8583:15;8580:1;8573:5;8566;8561:60;8673:7;8663:176;;8717:4;8711:11;8762:16;8759:1;8754:3;8739:40;8808:16;8803:3;8796:29;8663:176;8866:16;8852:30;;8916:1;8910:8;8895:23;;8532:396;8956:1;8942:10;:15;:68;;9009:1;8994:11;:16;;8942:68;;;8990:1;8968:5;8960:26;;;:31;8942:68;8938:146;;;9066:5;9033:40;;;;;;;;;;;:::i;:::-;;;;;;;;8938:146;8440:650;;8370:720;;:::o;34795:145:23:-;34842:9;34921:1;34914:9;34907:17;34902:22;;34795:145;;;:::o;7:75:26:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:149;370:7;410:66;403:5;399:78;388:89;;334:149;;;:::o;489:120::-;561:23;578:5;561:23;:::i;:::-;554:5;551:34;541:62;;599:1;596;589:12;541:62;489:120;:::o;615:137::-;660:5;698:6;685:20;676:29;;714:32;740:5;714:32;:::i;:::-;615:137;;;;:::o;758:327::-;816:6;865:2;853:9;844:7;840:23;836:32;833:119;;;871:79;;:::i;:::-;833:119;991:1;1016:52;1060:7;1051:6;1040:9;1036:22;1016:52;:::i;:::-;1006:62;;962:116;758:327;;;;:::o;1091:90::-;1125:7;1168:5;1161:13;1154:21;1143:32;;1091:90;;;:::o;1187:109::-;1268:21;1283:5;1268:21;:::i;:::-;1263:3;1256:34;1187:109;;:::o;1302:210::-;1389:4;1427:2;1416:9;1412:18;1404:26;;1440:65;1502:1;1491:9;1487:17;1478:6;1440:65;:::i;:::-;1302:210;;;;:::o;1518:77::-;1555:7;1584:5;1573:16;;1518:77;;;:::o;1601:122::-;1674:24;1692:5;1674:24;:::i;:::-;1667:5;1664:35;1654:63;;1713:1;1710;1703:12;1654:63;1601:122;:::o;1729:139::-;1775:5;1813:6;1800:20;1791:29;;1829:33;1856:5;1829:33;:::i;:::-;1729:139;;;;:::o;1874:474::-;1942:6;1950;1999:2;1987:9;1978:7;1974:23;1970:32;1967:119;;;2005:79;;:::i;:::-;1967:119;2125:1;2150:53;2195:7;2186:6;2175:9;2171:22;2150:53;:::i;:::-;2140:63;;2096:117;2252:2;2278:53;2323:7;2314:6;2303:9;2299:22;2278:53;:::i;:::-;2268:63;;2223:118;1874:474;;;;;:::o;2354:126::-;2391:7;2431:42;2424:5;2420:54;2409:65;;2354:126;;;:::o;2486:60::-;2514:3;2535:5;2528:12;;2486:60;;;:::o;2552:142::-;2602:9;2635:53;2653:34;2662:24;2680:5;2662:24;:::i;:::-;2653:34;:::i;:::-;2635:53;:::i;:::-;2622:66;;2552:142;;;:::o;2700:126::-;2750:9;2783:37;2814:5;2783:37;:::i;:::-;2770:50;;2700:126;;;:::o;2832:141::-;2897:9;2930:37;2961:5;2930:37;:::i;:::-;2917:50;;2832:141;;;:::o;2979:161::-;3081:52;3127:5;3081:52;:::i;:::-;3076:3;3069:65;2979:161;;:::o;3146:252::-;3254:4;3292:2;3281:9;3277:18;3269:26;;3305:86;3388:1;3377:9;3373:17;3364:6;3305:86;:::i;:::-;3146:252;;;;:::o;3404:118::-;3491:24;3509:5;3491:24;:::i;:::-;3486:3;3479:37;3404:118;;:::o;3528:222::-;3621:4;3659:2;3648:9;3644:18;3636:26;;3672:71;3740:1;3729:9;3725:17;3716:6;3672:71;:::i;:::-;3528:222;;;;:::o;3756:96::-;3793:7;3822:24;3840:5;3822:24;:::i;:::-;3811:35;;3756:96;;;:::o;3858:118::-;3945:24;3963:5;3945:24;:::i;:::-;3940:3;3933:37;3858:118;;:::o;3982:222::-;4075:4;4113:2;4102:9;4098:18;4090:26;;4126:71;4194:1;4183:9;4179:17;4170:6;4126:71;:::i;:::-;3982:222;;;;:::o;4210:122::-;4283:24;4301:5;4283:24;:::i;:::-;4276:5;4273:35;4263:63;;4322:1;4319;4312:12;4263:63;4210:122;:::o;4338:139::-;4384:5;4422:6;4409:20;4400:29;;4438:33;4465:5;4438:33;:::i;:::-;4338:139;;;;:::o;4483:117::-;4592:1;4589;4582:12;4606:102;4647:6;4698:2;4694:7;4689:2;4682:5;4678:14;4674:28;4664:38;;4606:102;;;:::o;4714:180::-;4762:77;4759:1;4752:88;4859:4;4856:1;4849:15;4883:4;4880:1;4873:15;4900:281;4983:27;5005:4;4983:27;:::i;:::-;4975:6;4971:40;5113:6;5101:10;5098:22;5077:18;5065:10;5062:34;5059:62;5056:88;;;5124:18;;:::i;:::-;5056:88;5164:10;5160:2;5153:22;4943:238;4900:281;;:::o;5187:129::-;5221:6;5248:20;;:::i;:::-;5238:30;;5277:33;5305:4;5297:6;5277:33;:::i;:::-;5187:129;;;:::o;5322:311::-;5399:4;5489:18;5481:6;5478:30;5475:56;;;5511:18;;:::i;:::-;5475:56;5561:4;5553:6;5549:17;5541:25;;5621:4;5615;5611:15;5603:23;;5322:311;;;:::o;5639:117::-;5748:1;5745;5738:12;5779:710;5875:5;5900:81;5916:64;5973:6;5916:64;:::i;:::-;5900:81;:::i;:::-;5891:90;;6001:5;6030:6;6023:5;6016:21;6064:4;6057:5;6053:16;6046:23;;6117:4;6109:6;6105:17;6097:6;6093:30;6146:3;6138:6;6135:15;6132:122;;;6165:79;;:::i;:::-;6132:122;6280:6;6263:220;6297:6;6292:3;6289:15;6263:220;;;6372:3;6401:37;6434:3;6422:10;6401:37;:::i;:::-;6396:3;6389:50;6468:4;6463:3;6459:14;6452:21;;6339:144;6323:4;6318:3;6314:14;6307:21;;6263:220;;;6267:21;5881:608;;5779:710;;;;;:::o;6512:370::-;6583:5;6632:3;6625:4;6617:6;6613:17;6609:27;6599:122;;6640:79;;:::i;:::-;6599:122;6757:6;6744:20;6782:94;6872:3;6864:6;6857:4;6849:6;6845:17;6782:94;:::i;:::-;6773:103;;6589:293;6512:370;;;;:::o;6888:117::-;6997:1;6994;6987:12;7011:307;7072:4;7162:18;7154:6;7151:30;7148:56;;;7184:18;;:::i;:::-;7148:56;7222:29;7244:6;7222:29;:::i;:::-;7214:37;;7306:4;7300;7296:15;7288:23;;7011:307;;;:::o;7324:148::-;7422:6;7417:3;7412;7399:30;7463:1;7454:6;7449:3;7445:16;7438:27;7324:148;;;:::o;7478:423::-;7555:5;7580:65;7596:48;7637:6;7596:48;:::i;:::-;7580:65;:::i;:::-;7571:74;;7668:6;7661:5;7654:21;7706:4;7699:5;7695:16;7744:3;7735:6;7730:3;7726:16;7723:25;7720:112;;;7751:79;;:::i;:::-;7720:112;7841:54;7888:6;7883:3;7878;7841:54;:::i;:::-;7561:340;7478:423;;;;;:::o;7920:338::-;7975:5;8024:3;8017:4;8009:6;8005:17;8001:27;7991:122;;8032:79;;:::i;:::-;7991:122;8149:6;8136:20;8174:78;8248:3;8240:6;8233:4;8225:6;8221:17;8174:78;:::i;:::-;8165:87;;7981:277;7920:338;;;;:::o;8264:1509::-;8418:6;8426;8434;8442;8450;8499:3;8487:9;8478:7;8474:23;8470:33;8467:120;;;8506:79;;:::i;:::-;8467:120;8626:1;8651:53;8696:7;8687:6;8676:9;8672:22;8651:53;:::i;:::-;8641:63;;8597:117;8753:2;8779:53;8824:7;8815:6;8804:9;8800:22;8779:53;:::i;:::-;8769:63;;8724:118;8909:2;8898:9;8894:18;8881:32;8940:18;8932:6;8929:30;8926:117;;;8962:79;;:::i;:::-;8926:117;9067:78;9137:7;9128:6;9117:9;9113:22;9067:78;:::i;:::-;9057:88;;8852:303;9222:2;9211:9;9207:18;9194:32;9253:18;9245:6;9242:30;9239:117;;;9275:79;;:::i;:::-;9239:117;9380:78;9450:7;9441:6;9430:9;9426:22;9380:78;:::i;:::-;9370:88;;9165:303;9535:3;9524:9;9520:19;9507:33;9567:18;9559:6;9556:30;9553:117;;;9589:79;;:::i;:::-;9553:117;9694:62;9748:7;9739:6;9728:9;9724:22;9694:62;:::i;:::-;9684:72;;9478:288;8264:1509;;;;;;;;:::o;9779:115::-;9864:23;9881:5;9864:23;:::i;:::-;9859:3;9852:36;9779:115;;:::o;9900:218::-;9991:4;10029:2;10018:9;10014:18;10006:26;;10042:69;10108:1;10097:9;10093:17;10084:6;10042:69;:::i;:::-;9900:218;;;;:::o;10124:1089::-;10228:6;10236;10244;10252;10260;10309:3;10297:9;10288:7;10284:23;10280:33;10277:120;;;10316:79;;:::i;:::-;10277:120;10436:1;10461:53;10506:7;10497:6;10486:9;10482:22;10461:53;:::i;:::-;10451:63;;10407:117;10563:2;10589:53;10634:7;10625:6;10614:9;10610:22;10589:53;:::i;:::-;10579:63;;10534:118;10691:2;10717:53;10762:7;10753:6;10742:9;10738:22;10717:53;:::i;:::-;10707:63;;10662:118;10819:2;10845:53;10890:7;10881:6;10870:9;10866:22;10845:53;:::i;:::-;10835:63;;10790:118;10975:3;10964:9;10960:19;10947:33;11007:18;10999:6;10996:30;10993:117;;;11029:79;;:::i;:::-;10993:117;11134:62;11188:7;11179:6;11168:9;11164:22;11134:62;:::i;:::-;11124:72;;10918:288;10124:1089;;;;;;;;:::o;11219:329::-;11278:6;11327:2;11315:9;11306:7;11302:23;11298:32;11295:119;;;11333:79;;:::i;:::-;11295:119;11453:1;11478:53;11523:7;11514:6;11503:9;11499:22;11478:53;:::i;:::-;11468:63;;11424:117;11219:329;;;;:::o;11554:143::-;11611:5;11642:6;11636:13;11627:22;;11658:33;11685:5;11658:33;:::i;:::-;11554:143;;;;:::o;11703:351::-;11773:6;11822:2;11810:9;11801:7;11797:23;11793:32;11790:119;;;11828:79;;:::i;:::-;11790:119;11948:1;11973:64;12029:7;12020:6;12009:9;12005:22;11973:64;:::i;:::-;11963:74;;11919:128;11703:351;;;;:::o;12060:169::-;12144:11;12178:6;12173:3;12166:19;12218:4;12213:3;12209:14;12194:29;;12060:169;;;;:::o;12235:179::-;12375:31;12371:1;12363:6;12359:14;12352:55;12235:179;:::o;12420:366::-;12562:3;12583:67;12647:2;12642:3;12583:67;:::i;:::-;12576:74;;12659:93;12748:3;12659:93;:::i;:::-;12777:2;12772:3;12768:12;12761:19;;12420:366;;;:::o;12792:419::-;12958:4;12996:2;12985:9;12981:18;12973:26;;13045:9;13039:4;13035:20;13031:1;13020:9;13016:17;13009:47;13073:131;13199:4;13073:131;:::i;:::-;13065:139;;12792:419;;;:::o;13217:85::-;13262:7;13291:5;13280:16;;13217:85;;;:::o;13308:158::-;13366:9;13399:61;13417:42;13426:32;13452:5;13426:32;:::i;:::-;13417:42;:::i;:::-;13399:61;:::i;:::-;13386:74;;13308:158;;;:::o;13472:147::-;13567:45;13606:5;13567:45;:::i;:::-;13562:3;13555:58;13472:147;;:::o;13625:348::-;13754:4;13792:2;13781:9;13777:18;13769:26;;13805:71;13873:1;13862:9;13858:17;13849:6;13805:71;:::i;:::-;13886:80;13962:2;13951:9;13947:18;13938:6;13886:80;:::i;:::-;13625:348;;;;;:::o;13979:176::-;14119:28;14115:1;14107:6;14103:14;14096:52;13979:176;:::o;14161:366::-;14303:3;14324:67;14388:2;14383:3;14324:67;:::i;:::-;14317:74;;14400:93;14489:3;14400:93;:::i;:::-;14518:2;14513:3;14509:12;14502:19;;14161:366;;;:::o;14533:419::-;14699:4;14737:2;14726:9;14722:18;14714:26;;14786:9;14780:4;14776:20;14772:1;14761:9;14757:17;14750:47;14814:131;14940:4;14814:131;:::i;:::-;14806:139;;14533:419;;;:::o;14958:180::-;15006:77;15003:1;14996:88;15103:4;15100:1;15093:15;15127:4;15124:1;15117:15;15144:410;15184:7;15207:20;15225:1;15207:20;:::i;:::-;15202:25;;15241:20;15259:1;15241:20;:::i;:::-;15236:25;;15296:1;15293;15289:9;15318:30;15336:11;15318:30;:::i;:::-;15307:41;;15497:1;15488:7;15484:15;15481:1;15478:22;15458:1;15451:9;15431:83;15408:139;;15527:18;;:::i;:::-;15408:139;15192:362;15144:410;;;;:::o;15560:176::-;15700:28;15696:1;15688:6;15684:14;15677:52;15560:176;:::o;15742:366::-;15884:3;15905:67;15969:2;15964:3;15905:67;:::i;:::-;15898:74;;15981:93;16070:3;15981:93;:::i;:::-;16099:2;16094:3;16090:12;16083:19;;15742:366;;;:::o;16114:419::-;16280:4;16318:2;16307:9;16303:18;16295:26;;16367:9;16361:4;16357:20;16353:1;16342:9;16338:17;16331:47;16395:131;16521:4;16395:131;:::i;:::-;16387:139;;16114:419;;;:::o;16539:168::-;16622:11;16656:6;16651:3;16644:19;16696:4;16691:3;16687:14;16672:29;;16539:168;;;;:::o;16713:114::-;;:::o;16833:362::-;16974:3;16995:65;17058:1;17053:3;16995:65;:::i;:::-;16988:72;;17069:93;17158:3;17069:93;:::i;:::-;17187:1;17182:3;17178:11;17171:18;;16833:362;;;:::o;17201:859::-;17478:4;17516:3;17505:9;17501:19;17493:27;;17530:71;17598:1;17587:9;17583:17;17574:6;17530:71;:::i;:::-;17611:72;17679:2;17668:9;17664:18;17655:6;17611:72;:::i;:::-;17693;17761:2;17750:9;17746:18;17737:6;17693:72;:::i;:::-;17775;17843:2;17832:9;17828:18;17819:6;17775:72;:::i;:::-;17895:9;17889:4;17885:20;17879:3;17868:9;17864:19;17857:49;17923:130;18048:4;17923:130;:::i;:::-;17915:138;;17201:859;;;;;;;:::o;18066:332::-;18187:4;18225:2;18214:9;18210:18;18202:26;;18238:71;18306:1;18295:9;18291:17;18282:6;18238:71;:::i;:::-;18319:72;18387:2;18376:9;18372:18;18363:6;18319:72;:::i;:::-;18066:332;;;;;:::o;18404:442::-;18553:4;18591:2;18580:9;18576:18;18568:26;;18604:71;18672:1;18661:9;18657:17;18648:6;18604:71;:::i;:::-;18685:72;18753:2;18742:9;18738:18;18729:6;18685:72;:::i;:::-;18767;18835:2;18824:9;18820:18;18811:6;18767:72;:::i;:::-;18404:442;;;;;;:::o"
		},
		"gasEstimates": {
			"creation": {
				"codeDepositCost": "1078600",
				"executionCost": "infinite",
				"totalCost": "infinite"
			},
			"external": {
				"balance()": "infinite",
				"buyToken(uint256,uint256)": "infinite",
				"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": "infinite",
				"onERC1155Received(address,address,uint256,uint256,bytes)": "infinite",
				"owner()": "2536",
				"paymentToken()": "infinite",
				"renounceOwnership()": "infinite",
				"supportsInterface(bytes4)": "718",
				"tokenPrice()": "2425",
				"tokenSold()": "2514",
				"transferOwnership(address)": "infinite",
				"withdrawPaymentTokens()": "infinite"
			}
		},
		"methodIdentifiers": {
			"balance()": "b69ef8a8",
			"buyToken(uint256,uint256)": "057466ea",
			"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": "bc197c81",
			"onERC1155Received(address,address,uint256,uint256,bytes)": "f23a6e61",
			"owner()": "8da5cb5b",
			"paymentToken()": "3013ce29",
			"renounceOwnership()": "715018a6",
			"supportsInterface(bytes4)": "01ffc9a7",
			"tokenPrice()": "7ff9b596",
			"tokenSold()": "519ee19e",
			"transferOwnership(address)": "f2fde38b",
			"withdrawPaymentTokens()": "02778fc0"
		}
	},
	"abi": [
		{
			"inputs": [
				{
					"internalType": "contract Dram",
					"name": "_address",
					"type": "address"
				},
				{
					"internalType": "contract IERC20",
					"name": "_paymentToken",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_price",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				}
			],
			"name": "OwnableInvalidOwner",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "account",
					"type": "address"
				}
			],
			"name": "OwnableUnauthorizedAccount",
			"type": "error"
		},
		{
			"inputs": [],
			"name": "ReentrancyGuardReentrantCall",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "token",
					"type": "address"
				}
			],
			"name": "SafeERC20FailedOperation",
			"type": "error"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "previousOwner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "OwnershipTransferred",
			"type": "event"
		},
		{
			"inputs": [],
			"name": "balance",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_amount",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				}
			],
			"name": "buyToken",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				},
				{
					"internalType": "uint256[]",
					"name": "",
					"type": "uint256[]"
				},
				{
					"internalType": "uint256[]",
					"name": "",
					"type": "uint256[]"
				},
				{
					"internalType": "bytes",
					"name": "",
					"type": "bytes"
				}
			],
			"name": "onERC1155BatchReceived",
			"outputs": [
				{
					"internalType": "bytes4",
					"name": "",
					"type": "bytes4"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "bytes",
					"name": "",
					"type": "bytes"
				}
			],
			"name": "onERC1155Received",
			"outputs": [
				{
					"internalType": "bytes4",
					"name": "",
					"type": "bytes4"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "paymentToken",
			"outputs": [
				{
					"internalType": "contract IERC20",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "bytes4",
					"name": "interfaceId",
					"type": "bytes4"
				}
			],
			"name": "supportsInterface",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "tokenPrice",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "tokenSold",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "withdrawPaymentTokens",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
}