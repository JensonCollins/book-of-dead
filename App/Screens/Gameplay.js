App.Gameplay = new Screen({

    Name: "Gameplay",

    Containers: [
        {
            name: 'BackgroundContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'background container wrapper', childs: [
                        {
                            name: 'background',
                            type: 'sprite',
                            position: [0, -25],
                            image: 'basegame_back',
                            scale: 1.2,
                            event: 'screen'
                        }
                    ]
                }
            ]
        },
        {
            name: 'MainContainer',
            visible: true,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'main container wrapper',
                    position: [0, -100],
                    scale: [1, 0.9],
                    childs: [
                        {
                            name: 'reel back',
                            type: 'sprite',
                            image: 'ReelbackgroundHD',
                            position: [-2, 54],
                            scale: [0.967, 1.1]
                        },
                        {
                            name: 'game board container',
                            scale: [1.1, 1.1],
                            position: [0, 65],
                            childs: [
                                {
                                    name: 'game board symbols container',
                                    childs: []
                                },
                                {
                                    name: 'game board symbols highlighted container',
                                    childs: []
                                }
                            ]
                        },
                        {
                            name: 'line container',
                            position: [0, 0],
                            childs: [
                                {
                                    name: 'line 1',
                                    type: 'sprite',
                                    image: 'line_1.png',
                                    position: [0, 70],
                                    scale: [2.8, 3.6],
                                    visible: false
                                },
                                {
                                    name: 'line 2',
                                    type: 'sprite',
                                    image: 'line_2.png',
                                    position: [0, -200],
                                    scale: [2.8, 3.6],
                                    visible: false
                                },
                                {
                                    name: 'line 3',
                                    type: 'sprite',
                                    image: 'line_3.png',
                                    position: [0, 340],
                                    scale: [2.8, 3.6],
                                    visible: false
                                },
                                {
                                    name: 'line 4',
                                    type: 'sprite',
                                    image: 'line_4.png',
                                    position: [0, 70],
                                    scale: [2.8, 3.6],
                                    visible: false
                                },
                                {
                                    name: 'line 5',
                                    type: 'sprite',
                                    image: 'line_5.png',
                                    position: [0, 70],
                                    scale: [2.8, 3.6],
                                    visible: false
                                },
                                {
                                    name: 'line 6',
                                    type: 'sprite',
                                    image: 'line_6.png',
                                    position: [0, -70],
                                    scale: [2.8, 3.6],
                                    visible: false
                                },
                                {
                                    name: 'line 7',
                                    type: 'sprite',
                                    image: 'line_7.png',
                                    position: [0, 200],
                                    scale: [2.8, 3.6],
                                    visible: false
                                },
                                {
                                    name: 'line 8',
                                    type: 'sprite',
                                    image: 'line_8.png',
                                    position: [0, 70],
                                    scale: [2.8, 3.6],
                                    visible: false
                                },
                                {
                                    name: 'line 9',
                                    type: 'sprite',
                                    image: 'line_9.png',
                                    position: [0, 70],
                                    scale: [2.8, 3.6],
                                    visible: false
                                },
                                {
                                    name: 'line 10',
                                    type: 'sprite',
                                    image: 'line_10.png',
                                    position: [0, 70],
                                    scale: [2.8, 3.6],
                                    visible: false
                                }
                            ]
                        },
                        {
                            name: 'line effect container',
                            mask: 'line effect mask',
                            position: [0, 0],
                            childs: [
                                {
                                    name: 'line effect 1',
                                    type: 'sprite',
                                    image: 'line_effect_1.png',
                                    position: [0, 70],
                                    scale: [2.8, 3.6],
                                    visible: false
                                },
                                {
                                    name: 'line effect 2',
                                    type: 'sprite',
                                    image: 'line_effect_2.png',
                                    position: [0, -200],
                                    scale: [2.8, 3.6],
                                    visible: false
                                },
                                {
                                    name: 'line effect 3',
                                    type: 'sprite',
                                    image: 'line_effect_3.png',
                                    position: [0, 340],
                                    scale: [2.8, 3.6],
                                    visible: false
                                },
                                {
                                    name: 'line effect 4',
                                    type: 'sprite',
                                    image: 'line_effect_4.png',
                                    position: [0, 70],
                                    scale: [2.8, 3.6],
                                    visible: false
                                },
                                {
                                    name: 'line effect 5',
                                    type: 'sprite',
                                    image: 'line_effect_5.png',
                                    position: [0, 70],
                                    scale: [2.8, 3.6],
                                    visible: false
                                },
                                {
                                    name: 'line effect 6',
                                    type: 'sprite',
                                    image: 'line_effect_6.png',
                                    position: [0, -70],
                                    scale: [2.8, 3.6],
                                    visible: false
                                },
                                {
                                    name: 'line effect 7',
                                    type: 'sprite',
                                    image: 'line_effect_7.png',
                                    position: [0, 200],
                                    scale: [2.8, 3.6],
                                    visible: false
                                },
                                {
                                    name: 'line effect 8',
                                    type: 'sprite',
                                    image: 'line_effect_8.png',
                                    position: [0, 70],
                                    scale: [2.8, 3.6],
                                    visible: false
                                },
                                {
                                    name: 'line effect 9',
                                    type: 'sprite',
                                    image: 'line_effect_9.png',
                                    position: [0, 70],
                                    scale: [2.8, 3.6],
                                    visible: false
                                },
                                {
                                    name: 'line effect 10',
                                    type: 'sprite',
                                    image: 'line_effect_10.png',
                                    position: [0, 70],
                                    scale: [2.8, 3.6],
                                    visible: false
                                }
                            ]
                        },
                        {
                            name: 'line effect mask',
                            type: 'graphics',
                            position: [0, 0],
                            alpha: 0.5,
                            draw: [['beginFill', 0x000000], ['drawRoundedRect', [-1220, -400,  600, 900]]],
                        },
                        {
                            name: 'line win amount wrapper',
                            position: [0, 60],
                            visible: false,
                            childs: [
                                {
                                    name: 'line win amount bg',
                                    type: 'sprite',
                                    image: 'label_back',
                                    scale: [5, 5],
                                    alpha: 0.7
                                },
                                {
                                    name: 'line win amount text',
                                    type: 'text',
                                    text: '5',
                                    styles: {
                                        align: 'center',
                                        fontSize: '100px',
                                        fontFamily: 'AGLettericaDemiCondensedCAGLettericaDemiCondensedC',
                                        fill: [0xf4bd60, 0xffffff, 0xf4bd60],
                                        dropShadow: true,
                                        dropShadowAngle: 0.5,
                                        dropShadowColor: 0x000000,
                                        dropShadowDistance: 1,
                                        dropShadowBlur: 5,
                                        stroke: "#986d34",
                                        strokeThickness: 2,
                                        lineJoin: "bevel",
                                    },
                                }
                            ]
                        },
                        {
                            name: 'close button',
                            type: 'graphics',
                            button: 'button',
                            visible: false,
                            position: [900, -500],
                            draw: [['beginFill', 0x5555dd], ['drawRoundedRect', [-90 / 2, -25 / 2, 90, 25, 15]]],
                            childs: [
                                {
                                    name: 'close button glow',
                                    type: 'graphics'
                                },
                                {
                                    name: 'close button border',
                                    type: 'graphics',
                                    position: [0, 0],
                                    draw: [['lineStyle', 2, 0x000000, 0.5], ['beginFill', 0x1e50be], ['drawRoundedRect', [-85 / 2, -20 / 2, 85, 20, 15]]]
                                },
                                {
                                    name: 'close button text',
                                    type: 'text',
                                    text: 'More games',
                                    position: [0, 0],
                                    styles: {
                                        align: 'center',
                                        fontFamily: 'Arial',
                                        fontSize: '12px',
                                        fill: 0xffffff
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'test',
                    type: 'gown_check',
                    selected: true
                }
            ]
        },
        {
            name: 'PaytableContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'paytable_background',
                    type: 'sprite',
                    position: [0, -50],
                    scale: 1.2,
                    image: 'paytableBack',
                    childs: [
                        {
                            name: 'helpContainer 1',
                            childs: [
                                {
                                    name: 'left container',
                                    position: [-250, 0],
                                    childs: [
                                        {
                                            type: 'text',
                                            text: 'FREE SPINS',
                                            position: [0, -250],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'oswald_regular',
                                                fontWeight: 600,
                                                fill: 0xfff59f
                                            }
                                        },
                                        {
                                            type: 'text',
                                            text: '3 or more scattered Books trigger 10 free spins!',
                                            position: [0, -90],
                                            styles: {
                                                align: 'center',
                                                fontSize: '20px',
                                                fontFamily: 'Oswald',
                                                fontWeight: 'Bold',
                                                fill: 0xfff59f,
                                            }
                                        },
                                        {
                                            type: 'sprite',
                                            image: 'lightLineBg',
                                            position: [0, -60]
                                        },
                                        {
                                            type: 'text',
                                            text: 'SCATTER',
                                            position: [0, -40],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'oswald_regular',
                                                fontWeight: 600,
                                                fill: 0xfff59f
                                            }
                                        },
                                        {
                                            type: 'sprite',
                                            image: 'B01ScatterBaseGame_0001.png',
                                            position: [-40, 20],
                                            scale: 1.3
                                        },
                                        {
                                            type: 'text',
                                            text: 'X5',
                                            position: [20, -10],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Oswald',
                                                fontWeight: 'Bold',
                                                fill: 0xffffff
                                            }
                                        },
                                        {
                                            type: 'text',
                                            text: '200',
                                            position: [60, -10],
                                            styles: {
                                                fontSize: '25px',
                                                fontFamily: 'oswald_regular',
                                                fontWeight: 'Bold',
                                                fill: 0xfff59f,
                                            }
                                        },
                                        {
                                            type: 'text',
                                            text: 'X4',
                                            position: [20, 19],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Oswald',
                                                fontWeight: 'Bold',
                                                fill: 0xffffff
                                            }
                                        },
                                        {
                                            type: 'text',
                                            text: '20',
                                            position: [60, 19],
                                            styles: {
                                                fontSize: '25px',
                                                fontFamily: 'oswald_regular',
                                                fontWeight: 'Bold',
                                                fill: 0xfff59f,
                                            }
                                        },
                                        {
                                            type: 'text',
                                            text: 'X3',
                                            position: [20, 45],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Oswald',
                                                fontWeight: 'Bold',
                                                fill: 0xffffff
                                            }
                                        },
                                        {
                                            type: 'text',
                                            text: '2',
                                            position: [60, 45],
                                            styles: {
                                                fontSize: '25px',
                                                fontFamily: 'oswald_regular',
                                                fontWeight: 'Bold',
                                                fill: 0xfff59f,
                                            }
                                        },
                                        {
                                            type: 'text',
                                            text: 'The Book is WILD! It can substitute for any other symbol to form a \n winning combo. The Book is also a SCATTER and will pay \n anywhere on the reels.',
                                            position: [0, 100],
                                            styles: {
                                                align: 'center',
                                                fontSize: '18px',
                                                fontFamily: 'OSwald',
                                                fill: 0xfff59f,
                                            }
                                        },
                                        {
                                            type: 'text',
                                            text: 'Scatter wins are multiplied by the total bet staked and are added to\n the payline wins.',
                                            position: [0, 160],
                                            styles: {
                                                align: 'center',
                                                fontSize: '18px',
                                                fontFamily: 'OSwald',
                                                fill: 0xfff59f,
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'right container',
                                    position: [250, 0],
                                    childs: [
                                        {
                                            type: 'sprite',
                                            image: 'lightLineBg',
                                            position: [0, 40]
                                        },
                                        {
                                            type: 'text',
                                            text: 'A special EXPANDING SYMBOL is randomly chosen\n to help you win more on free spins. Watch it expand to\n cover the reel when more prizes are in store! Symbols\n can appear anywhere along an active line to win!',
                                            position: [0, 120],
                                            styles: {
                                                align: 'center',
                                                fontSize: '18px',
                                                fontFamily: 'OSwald',
                                                fill: 0xfff59f,
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'center container',
                                    position: [0, 250],
                                    childs: [
                                        {
                                            type: 'sprite',
                                            image: 'winUpCoinsBg',
                                            scale: 1.2,
                                            position: [0, -10],
                                            childs: [
                                                {
                                                    type: 'text',
                                                    text: 'WIN UP TO 250000 COINS!',
                                                    styles: {
                                                        align: 'center',
                                                        fontSize: '32px',
                                                        fontFamily: 'OSwald',
                                                        fill: 0xfff59f,
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            type: 'sprite',
                                            image: 'lightLineBg',
                                            rotation: 90 * Math.PI / 180,
                                            position: [0, -200]
                                        },
                                        {
                                            type: 'sprite',
                                            image: 'helpRightArrow',
                                            position: [0, -400]
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            name: 'helpContainer 2',
                            visible: false,
                            childs: [
                                {
                                    type: 'sprite',
                                    image: 'help1',
                                    position: [0, -65],
                                    scale: [0.9, 1]
                                },
                                {
                                    type: 'sprite',
                                    image: 'paylineHelpBg',
                                    position: [-6, 170]
                                },
                                {
                                    type: 'text',
                                    text: 'All wins multiplied by bet stacked per line except for SCATTERS.\n All wins pay left to right except SCATTERS which pay any. \n Only hightest win paid per selected line.',
                                    position: [0, 240],
                                    styles: {
                                        align: 'center',
                                        fontSize: '18px',
                                        fontFamily: 'Oswald',
                                        fontWeight: 'Bold',
                                        fill: 0xfff59f,
                                    }
                                }
                            ]
                        },
                        {
                            name: 'helpContainer 3',
                            visible: false,
                            childs: [
                                {
                                    type: 'sprite',
                                    image: 'help2',
                                    position: [0, -65],
                                    scale: [0.9, 1]
                                },
                                {
                                    type: 'sprite',
                                    image: 'paylineHelpBg',
                                    position: [-6, 170]
                                },
                                {
                                    type: 'text',
                                    text: 'All wins multiplied by bet stacked per line except for SCATTERS.\n All wins pay left to right except SCATTERS which pay any. \n Only hightest win paid per selected line.',
                                    position: [0, 240],
                                    styles: {
                                        align: 'center',
                                        fontSize: '18px',
                                        fontFamily: 'Oswald',
                                        fontWeight: 'Bold',
                                        fill: 0xfff59f,
                                    }
                                }
                            ]
                        },
                        {
                            name: 'help action container',
                            position: [-350, 250],
                            childs: [
                                {
                                    name: 'help indicators',
                                    position: [-40, -30],
                                    childs: [
                                        {
                                            name: 'help indicator 1',
                                            position: [-30, 0],
                                            childs: [
                                                {
                                                    type: 'sprite',
                                                    image: 'indicatorDisable'
                                                },
                                                {
                                                    name: 'help indicator 1 active',
                                                    position: [2, 0],
                                                    type: 'sprite',
                                                    image: 'indicatorEnable'
                                                }
                                            ]
                                        },
                                        {
                                            name: 'help indicator 2',
                                            position: [0, 0],
                                            childs: [
                                                {
                                                    type: 'sprite',
                                                    image: 'indicatorDisable'
                                                },
                                                {
                                                    name: 'help indicator 2 active',
                                                    position: [2, 0],
                                                    type: 'sprite',
                                                    visible: false,
                                                    image: 'indicatorEnable'
                                                }
                                            ]
                                        },
                                        {
                                            name: 'help indicator 3',
                                            position: [30, 0],
                                            childs: [
                                                {
                                                    type: 'sprite',
                                                    image: 'indicatorDisable'
                                                },
                                                {
                                                    name: 'help indicator 3 active',
                                                    position: [2, 0],
                                                    type: 'sprite',
                                                    visible: false,
                                                    image: 'indicatorEnable'
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'help page next button',
                                    type: 'sprite',
                                    button: 'button',
                                    image: 'blueRightArrow',
                                    childs: [
                                        {
                                            name: 'help page next button glow'
                                        }
                                    ]
                                },
                                {
                                    name: 'help page down button',
                                    type: 'sprite',
                                    position: [-40, 15],
                                    button: 'button',
                                    image: 'blueRightArrow',
                                    rotation: 90 * Math.PI / 180,
                                    childs: [
                                        {
                                            name: 'help page down button glow'
                                        }
                                    ]
                                },
                                {
                                    name: 'help page prev button',
                                    type: 'sprite',
                                    position: [-80, -2],
                                    button: 'button',
                                    image: 'blueRightArrow',
                                    rotation: Math.PI,
                                    childs: [
                                        {
                                            name: 'help page prev button glow'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'ControlBottomContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            visible: true,
            childs: [
                {
                    name: 'ControlParent',
                    position: [0, 450],
                    scale: [1, 1.2],
                    childs: [
                        {
                            name: 'mainPanel',
                            type: 'sprite',
                            position: [-85, -65],
                            scale: [1.2, 1],
                            image: 'mainPanelBg',
                            childs: [
                                {
                                    name: 'coins text',
                                    type: 'text',
                                    position: [-400, -10],
                                    text: 'COINS: 1000000',
                                    styles: {
                                        fontSize: '25px',
                                        fontFamily: 'Oswald',
                                        fontWeight: 'Bold',
                                        fill: 0xfff59f,
                                    }
                                },
                                {
                                    name: 'win bar',
                                    visible: false,
                                    position: [20, 0],
                                    childs: [
                                        {
                                            name: 'win bar text',
                                            type: 'text',
                                            text: 'WIN:',
                                            styles: {
                                                align: 'center',
                                                fontSize: '35px',
                                                fontFamily: 'Oswald-Bold',
                                                fill: [0xffffff, 0xffffff, 0xffffff, 0xffffff],
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x000000,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 5,
                                                stroke: "#000000",
                                                strokeThickness: 2,
                                                lineJoin: "bevel",
                                            },
                                            position: [-120, 0]
                                        },
                                        {
                                            name: 'wincoins bar text',
                                            type: 'text',
                                            text: '200',
                                            styles: {
                                                align: 'center',
                                                fontSize: '40px',
                                                fontFamily: 'Oswald-Bold',
                                                fill: [0xf6be19, 0xffffff, 0xf6be19],
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x000000,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 5,
                                                stroke: "#361b06",
                                                strokeThickness: 2,
                                                lineJoin: "bevel",
                                            }
                                        },
                                        {
                                            name: 'coinslabel bar text',
                                            type: 'text',
                                            text: 'COINS',
                                            styles: {
                                                align: 'center',
                                                fontSize: '35px',
                                                fontFamily: 'Oswald-Bold',
                                                fill: [0xffffff, 0xffffff, 0xffffff, 0xffffff],
                                                dropShadow: true,
                                                dropShadowAngle: 0.5,
                                                dropShadowColor: 0x000000,
                                                dropShadowDistance: 1,
                                                dropShadowBlur: 5,
                                                stroke: "#000000",
                                                strokeThickness: 2,
                                                lineJoin: "bevel",
                                            },
                                            position: [150, 0]
                                        }
                                    ]
                                },
                                {
                                    name: 'Won text',
                                    visible: false,
                                    position: [20, 0],
                                    childs: [
                                        {
                                            name: 'wonBig text',
                                            type: 'text',
                                            text: 'WIN: 5 COINS',
                                            position: [0, -10],
                                            styles: {
                                                align: 'center',
                                                fontSize: '24px',
                                                fontFamily: 'Oswald',
                                                fontWeight: 'Bold',
                                                fill: 0xfff59f,
                                            }
                                        },
                                        {
                                            name: 'wonSmall text',
                                            type: 'text',
                                            text: 'Won 5 coins on line 7',
                                            position: [0, 10],
                                            styles: {
                                                align: 'center',
                                                fontSize: '18px',
                                                fontFamily: 'Oswald',
                                                fontWeight: 'Bold',
                                                fill: 0xfff59f,
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'statusvalue text',
                                    type: 'text',
                                    text: 'Good luck',
                                    position: [20, 0],
                                    visible: false,
                                    styles: {
                                        align: 'center',
                                        fontSize: '34px',
                                        fontFamily: 'Oswald',
                                        fontWeight: 'Bold',
                                        fill: 0xfff59f,
                                    }
                                },
                                {
                                    name: 'betvalue text',
                                    type: 'text',
                                    position: [420, -10],
                                    text: 'BET: 10',
                                    styles: {
                                        fontSize: '25px',
                                        fontFamily: 'Oswald',
                                        fontWeight: 'Bold',
                                        fill: 0xfff59f,
                                    }
                                }
                            ]
                        },
                        {
                            name: 'paytable button bar',
                            position: [625, -70],
                            scale: [1.2, 1],
                            type: 'sprite',
                            childs: [
                                {
                                    name: 'paytable button',
                                    type: 'sprite',
                                    image: 'paytableBg',
                                    button: 'button',
                                },
                                {
                                    name: 'paytable button glow',
                                    type: 'sprite',
                                    alpha: 0,
                                    image: 'paytableBg',
                                    blendMode: 3
                                },
                                {
                                    name: 'paytable button disabled',
                                    type: 'graphics',
                                    alpha: 0.5,
                                    position: [-1, 0],
                                    button: 'disabled button',
                                    visible: false,
                                    draw: [['beginFill', 0x000000], ['drawRoundedRect', [-144 / 2, -58 / 2, 144, 58, 1]]],
                                },
                                {
                                    name: 'paytable button text',
                                    type: 'text',
                                    text: 'PAYTABLE',
                                    position: [0, -3],
                                    styles: {
                                        fontSize: '25px',
                                        fontFamily: 'Oswald',
                                        fontWeight: 'Bold',
                                        fill: [0x332610, 0x6c4b17, 0x332610],
                                    }
                                }
                            ]
                        },
                        {
                            name: 'autoplay button bar',
                            position: [625, 0],
                            scale: [1.2, 1],
                            type: 'sprite',
                            childs: [
                                {
                                    name: 'autoplay button',
                                    type: 'sprite',
                                    image: 'paytableBg',
                                    button: 'button',
                                },
                                {
                                    name: 'autoplay button glow',
                                    type: 'sprite',
                                    alpha: 0,
                                    image: 'paytableBg',
                                    blendMode: 3
                                },
                                {
                                    name: 'autoplay button disabled',
                                    type: 'graphics',
                                    alpha: 0.5,
                                    position: [-1, 0],
                                    button: 'disabled button',
                                    visible: false,
                                    draw: [['beginFill', 0x000000], ['drawRoundedRect', [-144 / 2, -58 / 2, 144, 58, 1]]],
                                },
                                {
                                    name: 'autoplay button text',
                                    type: 'text',
                                    text: 'AUTO PLAY',
                                    position: [0, -3],
                                    styles: {
                                        fontSize: '24px',
                                        fontFamily: 'Oswald',
                                        fontWeight: 'Bold',
                                        fill: [0x332610, 0x6c4b17, 0x332610],
                                    }
                                }
                            ]
                        },
                        {
                            name: 'autostart button bar',
                            position: [422, -10],
                            visible: false,
                            scale: [1.2, 1],
                            childs: [
                                {
                                    name: 'autostart button',
                                    control: 'slider',
                                    type: 'sprite',
                                    image: 'autoButtonBg',
                                    button: 'button',
                                    position: [0, 0]
                                },
                                {
                                    name: 'autostart button glow',
                                    type: 'sprite',
                                    image: 'autoButtonBg',
                                    blendMode: 3,
                                    alpha: 0
                                },
                                {
                                    name: 'autostart button disabled',
                                    type: 'sprite',
                                    button: 'disabled button',
                                    image: 'autoButtonBg',
                                    alpha: 0,
                                    visible: false,
                                },
                                {
                                    name: 'autostart button text',
                                    type: 'text',
                                    text: 'AUTO PLAY',
                                    position: [0, -20],
                                    styles: {
                                        fontSize: '20px',
                                        fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                                        fontWeight: 'Bold',
                                        fill: 0xfff59f,
                                        stroke: "#000000",
                                        strokeThickness: 1,
                                    }
                                },
                                {
                                    name: 'autoValue text',
                                    type: 'text',
                                    text: '50',
                                    position: [0, 13],
                                    styles: {
                                        fontSize: '40px',
                                        fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                                        fontWeight: 'Bold',
                                        fill: 0xfff59f,
                                        stroke: "#000000",
                                        strokeThickness: 1,
                                    }
                                }
                            ]
                        },
                        {
                            name: 'start button bar',
                            position: [422, -10],
                            scale: [1.2, 1],
                            childs: [
                                {
                                    name: 'start button',
                                    control: 'slider',
                                    type: 'sprite',
                                    image: 'spinButtonBg',
                                    button: 'button',
                                    position: [0, 0]
                                },
                                {
                                    name: 'start button glow',
                                    type: 'sprite',
                                    image: 'spinButtonBg',
                                    blendMode: 3,
                                    alpha: 0
                                },
                                {
                                    name: 'start button disabled',
                                    type: 'sprite',
                                    button: 'disabled button',
                                    image: 'spinButtonBg',
                                    alpha: 0,
                                    visible: false,
                                },
                                {
                                    name: 'start button text',
                                    type: 'text',
                                    text: 'SPIN',
                                    styles: {
                                        fontSize: '45px',
                                        fontFamily: 'Oswald',
                                        fontWeight: 'Bold',
                                        fill: [0xddbd77, 0xe5d8b4, 0xca9d45],
                                        stroke: "#000000",
                                        strokeThickness: 1,
                                    }
                                }
                            ]
                        },
                        {
                            name: 'maxBet button bar',
                            position: [210, 0],
                            scale: [1.2, 1],
                            type: 'sprite',
                            childs: [
                                {
                                    name: 'maxBet button',
                                    type: 'sprite',
                                    image: 'paytableBg',
                                    button: 'button',
                                },
                                {
                                    name: 'maxBet button glow',
                                    type: 'sprite',
                                    alpha: 0,
                                    image: 'paytableBg',
                                    blendMode: 3,
                                },
                                {
                                    name: 'maxBet button disabled',
                                    type: 'graphics',
                                    alpha: 0.5,
                                    position: [-1, 0],
                                    visible: false,
                                    button: 'disabled button',
                                    draw: [['beginFill', 0x000000], ['drawRoundedRect', [-144 / 2, -58 / 2, 144, 58, 1]]],
                                },
                                {
                                    name: 'maxBet button text',
                                    type: 'text',
                                    text: 'BET MAX',
                                    position: [0, -3],
                                    styles: {
                                        fontSize: '25px',
                                        fontFamily: 'Oswald',
                                        fontWeight: 'Bold',
                                        fill: [0x332610, 0x6c4b17, 0x332610],
                                    }
                                }
                            ]
                        },
                        {
                            name: 'lines bar',
                            scale: [1.2, 1],
                            position: [-25, 0],
                            childs: [
                                {
                                    name: 'linesUp button bar',
                                    position: [75, 0],
                                    childs: [
                                        {
                                            name: 'linesUp button',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'plusBg',
                                        },
                                        {
                                            name: 'linesUp button glow',
                                            type: 'sprite',
                                            image: 'plusBg',
                                            blendMode: 3,
                                            alpha: 0,
                                        },
                                        {
                                            name: 'linesUp button disabled',
                                            type: 'graphics',
                                            rotation: -Math.PI / 2,
                                            position: [-22, 29],
                                            alpha: 0.5,
                                            button: 'disabled button',
                                            draw: [
                                                ['beginFill', 0x000000],
                                                ['lineStyle', [0, 0xFF0000, 1]],
                                                ['moveTo', [58, 0]],
                                                ['lineTo', [29, 45]],
                                                ['lineTo', [0, 0]],
                                                ['lineTo', [29, 0]],
                                                ['endFill'],
                                            ],
                                        }
                                    ]
                                },
                                {
                                    name: 'lines text',
                                    childs: [
                                        {
                                            name: 'lines back',
                                            type: 'sprite',
                                            image: 'smPanelBg'
                                        },
                                        {
                                            name: 'lineslabel text',
                                            type: 'text',
                                            text: 'LINES',
                                            position: [0, -12],
                                            styles: {
                                                align: 'center',
                                                fontSize: '20px',
                                                fontFamily: 'Oswald',
                                                fontWeight: 'Bold',
                                                fill: 0xfff59f,
                                            }
                                        },
                                        {
                                            name: 'linesvalue text',
                                            type: 'text',
                                            text: '10',
                                            position: [0, 9],
                                            styles: {
                                                align: 'center',
                                                fontSize: '26px',
                                                fontFamily: 'Oswald',
                                                fontWeight: 'Bold',
                                                fill: 0xfff59f,
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'linesDown button bar',
                                    position: [-75, 0],
                                    childs: [
                                        {
                                            name: 'linesDown button',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'minusBg',
                                        },
                                        {
                                            name: 'linesDown button glow',
                                            type: 'sprite',
                                            image: 'minusBg',
                                            blendMode: 3,
                                            alpha: 0,
                                        },
                                        {
                                            name: 'linesDown button disabled',
                                            type: 'graphics',
                                            alpha: 0.5,
                                            visible: false,
                                            position: [21, -29],
                                            button: 'disabled button',
                                            rotation: Math.PI / 2,
                                            draw: [
                                                ['beginFill', 0x000000],
                                                ['lineStyle', [0, 0xFF0000, 1]],
                                                ['moveTo', [58, 0]],
                                                ['lineTo', [29, 45]],
                                                ['lineTo', [0, 0]],
                                                ['lineTo', [29, 0]],
                                                ['endFill'],
                                            ],
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            name: 'coins bar',
                            scale: [1.2, 1],
                            position: [-300, 0],
                            childs: [
                                {
                                    name: 'coinsUp button bar',
                                    position: [75, 0],
                                    childs: [
                                        {
                                            name: 'coinsUp button',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'plusBg',
                                        },
                                        {
                                            name: 'coinsUp button glow',
                                            type: 'sprite',
                                            image: 'plusBg',
                                            alpha: 0,
                                            blendMode: 3
                                        },
                                        {
                                            name: 'coinsUp button disabled',
                                            type: 'graphics',
                                            rotation: -Math.PI / 2,
                                            position: [-22, 29],
                                            alpha: 0.5,
                                            button: 'disabled button',
                                            draw: [
                                                ['beginFill', 0x000000],
                                                ['lineStyle', [0, 0xFF0000, 1]],
                                                ['moveTo', [58, 0]],
                                                ['lineTo', [29, 45]],
                                                ['lineTo', [0, 0]],
                                                ['lineTo', [29, 0]],
                                                ['endFill'],
                                            ],
                                        }
                                    ]
                                },
                                {
                                    name: 'coins label text',
                                    childs: [
                                        {
                                            name: 'coins back',
                                            type: 'sprite',
                                            image: 'smPanelBg'
                                        },
                                        {
                                            name: 'coinslabel text',
                                            type: 'text',
                                            text: 'COINS',
                                            position: [0, -12],
                                            styles: {
                                                align: 'center',
                                                fontSize: '20px',
                                                fontFamily: 'Oswald',
                                                fontWeight: 'Bold',
                                                fill: 0xfff59f,
                                            }
                                        },
                                        {
                                            name: 'coinsvalue text',
                                            type: 'text',
                                            text: '5',
                                            position: [0, 9],
                                            styles: {
                                                align: 'center',
                                                fontSize: '26px',
                                                fontFamily: 'Oswald',
                                                fontWeight: 'Bold',
                                                fill: 0xfff59f,
                                            }
                                        }

                                    ]
                                },
                                {
                                    name: 'coinsDown button bar',
                                    position: [-75, 0],
                                    childs: [
                                        {
                                            name: 'coinsDown button',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'minusBg',
                                        },
                                        {
                                            name: 'coinsDown button glow',
                                            type: 'sprite',
                                            image: 'minusBg',
                                            alpha: 0,
                                            blendMode: 3
                                        },
                                        {
                                            name: 'coinsDown button disabled',
                                            type: 'graphics',
                                            alpha: 0.5,
                                            position: [21, -29],
                                            visible: false,
                                            button: 'disabled button',
                                            rotation: Math.PI / 2,
                                            draw: [
                                                ['beginFill', 0x000000],
                                                ['lineStyle', [0, 0xFF0000, 1]],
                                                ['moveTo', [58, 0]],
                                                ['lineTo', [29, 45]],
                                                ['lineTo', [0, 0]],
                                                ['lineTo', [29, 0]],
                                                ['endFill'],
                                            ],
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            name: 'coinvalue button',
                            scale: [1.2, 1],
                            position: [-565, -5],
                            button: 'button',
                            childs: [
                                {
                                    name: 'coinvalue back',
                                    type: 'sprite',
                                    image: 'coinValueBg'
                                },
                                {
                                    name: 'coinvalue label',
                                    position: [0, -20],
                                    type: 'text',
                                    text: 'COIN VALUE',
                                    styles: {
                                        fontSize: '20px',
                                        fontFamily: 'Oswald',
                                        fill: [0x332610, 0x6c4b17, 0x332610],
                                    }
                                },
                                {
                                    name: 'coinvalue text',
                                    position: [0, 12],
                                    type: 'text',
                                    text: '0.10',
                                    styles: {
                                        fontSize: '35px',
                                        fontFamily: 'Oswald',
                                        fontWeight: 'Bold',
                                        fill: 0x5a1600,
                                    }
                                },
                                {
                                    name: 'coinvalue button glow'
                                }
                            ]
                        },
                        {
                            name: 'congratulation bar',
                            position: [0, 400],
                            visible: false,
                            childs: [
                                {
                                    name: 'congratulationprefix bar text',
                                    type: 'text',
                                    text: 'WIN:',
                                    styles: {
                                        align: 'center',
                                        fontSize: '40px',
                                        fontFamily: 'Oswald-Bold',
                                        fill: [0xffffff, 0xffffff, 0xffffff, 0xffffff],
                                        dropShadow: true,
                                        dropShadowAngle: 0.5,
                                        dropShadowColor: 0x000000,
                                        dropShadowDistance: 1,
                                        dropShadowBlur: 5,
                                        stroke: "#000000",
                                        strokeThickness: 2,
                                        lineJoin: "bevel",
                                    },
                                    position: [-100, 0]
                                },
                                {
                                    name: 'congratulationcoins bar text',
                                    type: 'text',
                                    text: '200',
                                    styles: {
                                        align: 'center',
                                        fontSize: '40px',
                                        fontFamily: 'Oswald-Bold',
                                        fill: [0xf6be19],
                                        dropShadow: true,
                                        dropShadowAngle: 0.5,
                                        dropShadowColor: 0x000000,
                                        dropShadowDistance: 1,
                                        dropShadowBlur: 5,
                                        stroke: "#361b06",
                                        strokeThickness: 2,
                                        lineJoin: "bevel",
                                    },
                                    position: [-10, 0]
                                },
                                {
                                    name: 'congratulationsuffix bar text',
                                    type: 'text',
                                    text: 'COINS',
                                    styles: {
                                        align: 'center',
                                        fontSize: '40px',
                                        fontFamily: 'Oswald-Bold',
                                        fill: [0xffffff, 0xffffff, 0xffffff, 0xffffff],
                                        dropShadow: true,
                                        dropShadowAngle: 0.5,
                                        dropShadowColor: 0x000000,
                                        dropShadowDistance: 1,
                                        dropShadowBlur: 5,
                                        stroke: "#000000",
                                        strokeThickness: 2,
                                        lineJoin: "bevel",
                                    },
                                    position: [90, 0]
                                },
                                {
                                    name: 'congratulationcontent bar text',
                                    type: 'text',
                                    text: 'Congratulations!',
                                    styles: {
                                        align: 'center',
                                        fontSize: '30px',
                                        fontFamily: 'Oswald-Bold',
                                        fill: [0xffffff, 0xffffff, 0xffffff, 0xffffff],
                                        dropShadow: true,
                                        dropShadowAngle: 0.5,
                                        dropShadowColor: 0x000000,
                                        dropShadowDistance: 1,
                                        dropShadowBlur: 5,
                                        stroke: "#000000",
                                        strokeThickness: 2,
                                        lineJoin: "bevel",
                                    },
                                    position: [0, 40]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'ControlBottom',
                    type: 'graphics',
                    position: [0, 520],
                    draw: [['beginFill', 0x131313], ['drawRect', [-1920 / 2, -40 / 2, 1920, 40]]],
                    childs: [
                        {
                            name: 'bottomBet text',
                            type: 'text',
                            text: 'Bet: 1.00',
                            styles: {
                                fill: "#ffffff"
                            }
                        },
                        {
                            name: 'bottomWin text',
                            type: 'text',
                            text: 'Win: ',
                            position: [300, 0],
                            styles: {
                                fill: "#ffffff"
                            }
                        },
                        {
                            name: 'bottomBalance text',
                            type: 'text',
                            text: 'Balance: 100000',
                            position: [-300, 0],
                            styles: {
                                fill: "#ffffff"
                            }
                        },
                        {
                            name: 'setting button bar',
                            position: [-920, 0],
                            childs: [
                                {
                                    name: 'setting button',
                                    type: 'sprite',
                                    button: 'button',
                                    image: 'bottomMenu',
                                    childs: [
                                        {
                                            name: 'setting button glow'
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            name: 'sound button',
                            position: [-880, 0],
                            button: 'button',
                            type: 'sprite',
                            image: 'soundModeEnabled',
                            childs: [
                                {
                                    name: 'sound button glow',
                                },
                                {
                                    name: 'sound button disabled'
                                }
                            ]
                        },
                        {
                            name: 'speed button',
                            position: [-840, 0],
                            button: 'button',
                            type: 'sprite',
                            image: 'speedModeDisabled',
                            childs: [
                                {
                                    name: 'speed button glow'
                                }
                            ]
                        },
                        {
                            name: 'help button',
                            position: [-800, 0],
                            button: 'button',
                            type: 'sprite',
                            image: 'questionMark'
                        },
                        {
                            name: 'clock sprite',
                            type: 'sprite',
                            image: 'bottomClock',
                            position: [850, 0]
                        },
                        {
                            name: 'timer',
                            position: [900, 0],
                            childs: [
                                {
                                    name: 'timer hour',
                                    position: [-20, 0],
                                    type: 'text',
                                    text: '05',
                                    styles: {
                                        fontFamily: 'Arial',
                                        fontSize: '20px',
                                        fill: 0xffffff,
                                    },
                                },
                                {
                                    name: 'timer symbol',
                                    position: [0, -2],
                                    type: 'text',
                                    text: ':',
                                    visible: true,
                                    styles: {
                                        fontFamily: 'Arial',
                                        fontSize: '20px',
                                        fill: 0xffffff,
                                    },
                                },
                                {
                                    name: 'timer minute',
                                    position: [20, 0],
                                    type: 'text',
                                    text: '05',
                                    styles: {
                                        fontFamily: 'Arial',
                                        fontSize: '20px',
                                        fill: 0xffffff,
                                    },
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'ParticleContainer',
            visible: true,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
        },
        {
            name: 'MenuContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'menu overlay rect',
                    event: 'automenu overlay',
                    type: 'graphics',
                    preventDefault: false,
                    draw: [['beginFill', 0xffffff], ['drawRect', [-1920, -1920, 3840, 3840]]],
                    alpha: 1,
                },
                {
                    name: 'menu_header',
                    event: 'menu_header back',
                    childs: [
                        {
                            name: 'menu_header background',
                            type: 'graphics',
                            mask: 'menu_header background mask',
                            position: [0, -300 - 60 / 2],
                            draw: [['beginFill', 0x222222], ['drawRect', [-900 / 2, -60 / 2, 900, 60]]],
                            alpha: 1,
                            childs: [
                                {
                                    name: 'menu_header item 1 bar',
                                    alpha: 1 / 0.6,
                                    position: [-(225 + 12.5) / 2 * 3, 0],
                                    childs: [
                                        {
                                            name: 'menu_header item 1 background',
                                            type: 'graphics',
                                            draw: [
                                                ['beginFill', 0xbf1e2e],
                                                ['drawRect', [-(225 + 12.5) / 2, -65 / 2, (225 + 12.5), 65]]
                                            ],
                                            skew: [0.4, 0],
                                            alpha: 1
                                        },
                                        {
                                            name: 'menu_header item 1',
                                            type: 'sprite',
                                            step: 1,
                                            scale: [1.5, 1.5],
                                            image: 'btnSoundUp.png',
                                            button: 'menu_header button',
                                            childs: [
                                                {
                                                    name: 'menu_header item 1 glow',
                                                    type: 'text',
                                                    text: 'Sounds',
                                                    position: [0, -35],
                                                    scale: [1 / 1.5 * 0.75, 1 / 1.5 * 0.9],
                                                    alpha: 0,
                                                    styles: {
                                                        align: 'center',
                                                        fontFamily: 'Arial',
                                                        fontSize: '30px',
                                                        fill: 0xffffff,
                                                        strokeThickness: 4,
                                                    },
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: 'menu_header item 2 bar',
                                    alpha: 1 / 0.6,
                                    position: [-(225 + 12.5) / 2, 0],
                                    childs: [
                                        {
                                            name: 'menu_header item 2 background',
                                            type: 'graphics',
                                            draw: [
                                                ['beginFill', 0xbf1e2e],
                                                ['drawRect', [-(225 + 12.5) / 2, -65 / 2, (225 + 12.5), 65]]
                                            ],
                                            skew: [0.4, 0],
                                            alpha: 0
                                        },
                                        {
                                            name: 'menu_header item 2',
                                            type: 'sprite',
                                            step: 2,
                                            scale: [1.5, 1.5],
                                            button: 'menu_header button',
                                            image: 'btnAutoUpMenu.png',
                                            childs: [
                                                {
                                                    name: 'menu_header item 2 glow',
                                                    type: 'text',
                                                    text: 'Autoplay',
                                                    position: [0, -35],
                                                    scale: [1 / 1.5 * 0.75, 1 / 1.5 * 0.9],
                                                    alpha: 0,
                                                    styles: {
                                                        align: 'center',
                                                        fontFamily: 'Arial',
                                                        fontSize: '30px',
                                                        fill: 0xffffff,
                                                        strokeThickness: 4,
                                                    },
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: 'menu_header item 3 bar',
                                    alpha: 1 / 0.6,
                                    position: [(225 + 12.5) / 2, 0],
                                    childs: [
                                        {
                                            name: 'menu_header item 3 background',
                                            type: 'graphics',
                                            draw: [
                                                ['beginFill', 0xbf1e2e],
                                                ['drawRect', [-(225 + 12.5) / 2, -65 / 2, (225 + 12.5), 65]]
                                            ],
                                            skew: [0.4, 0],
                                            alpha: 0
                                        },
                                        {
                                            name: 'menu_header item 3',
                                            type: 'sprite',
                                            scale: [1.5, 1.5],
                                            step: 3,
                                            button: 'menu_header button',
                                            image: 'btnBetUp.png',
                                            childs: [
                                                {
                                                    name: 'menu_header item 3 glow',
                                                    type: 'text',
                                                    text: 'Bet',
                                                    position: [0, -35],
                                                    scale: [1 / 1.5 * 0.75, 1 / 1.5 * 0.9],
                                                    alpha: 0,
                                                    styles: {
                                                        align: 'center',
                                                        fontFamily: 'Arial',
                                                        fontSize: '30px',
                                                        fill: 0xffffff,
                                                        strokeThickness: 4,
                                                    },
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: 'menu_header item 4 bar',
                                    alpha: 1 / 0.6,
                                    position: [(225 + 12.5) / 2 * 3, 0],
                                    childs: [
                                        {
                                            name: 'menu_header item 4 background',
                                            type: 'graphics',
                                            draw: [
                                                ['beginFill', 0xbf1e2e],
                                                ['drawRect', [-(225 + 12.5) / 2, -65 / 2, (225 + 12.5), 65]]
                                            ],
                                            skew: [0.4, 0],
                                            alpha: 0
                                        },
                                        {
                                            name: 'menu_header item 4',
                                            type: 'sprite',
                                            step: 4,
                                            scale: [1.5, 1.5],
                                            button: 'menu_header button',
                                            image: 'btnInfoUp.png',
                                            childs: [
                                                {
                                                    name: 'menu_header item 4 glow',
                                                    type: 'text',
                                                    text: 'Info',
                                                    position: [0, -35],
                                                    scale: [1 / 1.5 * 0.75, 1 / 1.5 * 0.9],
                                                    alpha: 0,
                                                    styles: {
                                                        align: 'center',
                                                        fontFamily: 'Arial',
                                                        fontSize: '30px',
                                                        fill: 0xffffff,
                                                        strokeThickness: 4,
                                                    },
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'menu_header background mask',
                            type: 'graphics',
                            draw: [['beginFill', 0x000000], ['drawRect', [-900 / 2, -150 / 2, 900, 150]]],
                            position: [0, -300 - 60 / 2],
                            alpha: 0.5
                        },
                        {
                            name: 'menu_body background',
                            type: 'graphics',
                            position: [0, 0],
                            draw: [['beginFill', 0x000000], ['drawRect', [-900 / 2, -585 / 2, 900, 585]]],
                            alpha: 0.6
                        },
                        {
                            name: 'menu_body title container',
                            position: [0, -240],
                            childs: [
                                {
                                    name: 'menu_body title',
                                    type: 'text',
                                    text: 'SOUNDS',
                                    position: [0, 0],
                                    scale: [0.8, 1],
                                    styles: {
                                        align: 'center',
                                        fontWeight: '700',
                                        fontFamily: 'Arial',
                                        fontSize: '40px',
                                        fill: 0xbf1e2e,
                                    }
                                },
                                {
                                    name: 'menu_body close button',
                                    type: 'sprite',
                                    image: 'btnCloseUp.png',
                                    scale: [1.5, 1.5],
                                    position: [400, 0],
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'menu_body close button glow',
                                            type: 'text',
                                            text: 'Close',
                                            position: [0, -25],
                                            scale: [1 / 1.5 * 0.75, 1 / 1.5 * 0.9],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontSize: '30px',
                                                fill: 0xffffff,
                                                strokeThickness: 4,
                                            },
                                            alpha: 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'menu_body sound container',
                            visible: true,
                            childs: [
                                {
                                    name: 'menu_body sound button',
                                    type: 'sprite',
                                    image: 'btnSoundUp.png',
                                    position: [0, -150],
                                    scale: [1.5, 1.5],
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'menu_body sound button glow',
                                            type: 'text',
                                            text: 'Mute',
                                            position: [0, -30],
                                            scale: [1 / 1.5, 1 / 1.5],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontSize: '30px',
                                                fill: 0xffffff,
                                                strokeThickness: 2,
                                                lineJoin: "bevel",
                                            },
                                            alpha: 0
                                        }
                                    ]
                                },
                                {
                                    name: 'menu_body backgroundmusic button',
                                    position: [0, 50],
                                    childs: [
                                        {
                                            name: 'menu_body backgroundmusic checkbox',
                                            type: 'graphics',
                                            button: 'music button',
                                            position: [-150, 0],
                                            draw: [
                                                ['beginFill', 0xffffff],
                                                ['drawRoundedRect', [-50 / 2, 50 / 2, 50, 50, 8]],
                                                ['beginFill', 0x00000000],
                                                ['drawRoundedRect', [-40 / 2, 30, 40, 40, 6]],
                                            ],
                                            childs: [
                                                {
                                                    name: 'menu_body backgroundmusic red',
                                                    type: 'graphics',
                                                    position: [0, 18],
                                                    draw: [
                                                        ['beginFill', 0xbf1e2e],
                                                        ['drawRoundedRect', [-32 / 2, 32 / 2, 32, 32, 6]],
                                                    ],
                                                    alpha: 1
                                                }
                                            ]
                                        },
                                        {
                                            name: 'menu_body backgroundmusic text',
                                            type: 'text',
                                            text: 'Background Music',
                                            position: [10, 50],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontSize: '30px',
                                                fill: 0xffffff
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'menu_body autoplay container',
                            visible: false,
                            childs: [
                                {
                                    name: 'menu_body autoplay title',
                                    position: [0, -170],
                                    scale: [1, 1.2],
                                    type: 'text',
                                    text: 'Autoplay Spins',
                                    styles: {
                                        align: 'center',
                                        fontFamily: 'Arial',
                                        fontSize: '22px',
                                        fill: 0xffffff,
                                        strokeThickness: 1,
                                    },
                                },
                                {
                                    name: 'menu_body autoplay 0',
                                    scale: [1.5, 1.5],
                                    position: [-320, -100],
                                    button: 'autoplay button',
                                    step: 0,
                                    pressed: false,
                                    childs: [
                                        {
                                            name: 'menu_body autoplay 0 selected',
                                            type: 'sprite',
                                            image: 'btnRadioSelected.png',
                                            alpha: 1,
                                        },
                                        {
                                            name: 'menu_body autoplay 0 disabled',
                                            type: 'sprite',
                                            image: 'btnRadioUnselected.png',
                                            alpha: 0,
                                        },
                                        {
                                            name: 'menu_body autoplay 0 text',
                                            type: 'text',
                                            text: '0',
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontSize: '20px',
                                                fill: 0xffffff,
                                            },
                                        }
                                    ]
                                },
                                {
                                    name: 'menu_body autoplay 10',
                                    scale: [1.5, 1.5],
                                    position: [-160, -100],
                                    button: 'autoplay button',
                                    step: 10,
                                    pressed: false,
                                    childs: [
                                        {
                                            name: 'menu_body autoplay 10 selected',
                                            type: 'sprite',
                                            image: 'btnRadioSelected.png',
                                            alpha: 0,
                                        },
                                        {
                                            name: 'menu_body autoplay 10 disabled',
                                            type: 'sprite',
                                            image: 'btnRadioUnselected.png',
                                            alpha: 1,
                                        },
                                        {
                                            name: 'menu_body autoplay 10 text',
                                            type: 'text',
                                            text: '10',
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontSize: '20px',
                                                fill: 0xffffff,
                                            },
                                        }
                                    ]
                                },
                                {
                                    name: 'menu_body autoplay 25',
                                    scale: [1.5, 1.5],
                                    position: [0, -100],
                                    button: 'autoplay button',
                                    step: 25,
                                    pressed: false,
                                    childs: [
                                        {
                                            name: 'menu_body autoplay 25 selected',
                                            type: 'sprite',
                                            image: 'btnRadioSelected.png',
                                            alpha: 0,
                                        },
                                        {
                                            name: 'menu_body autoplay 25 disabled',
                                            type: 'sprite',
                                            image: 'btnRadioUnselected.png',
                                            alpha: 1,
                                        },
                                        {
                                            name: 'menu_body autoplay 25 text',
                                            type: 'text',
                                            text: '25',
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontSize: '20px',
                                                fill: 0xffffff,
                                            },
                                        }
                                    ]
                                },
                                {
                                    name: 'menu_body autoplay 50',
                                    scale: [1.5, 1.5],
                                    position: [160, -100],
                                    step: 50,
                                    button: 'autoplay button',
                                    pressed: false,
                                    childs: [
                                        {
                                            name: 'menu_body autoplay 50 selected',
                                            type: 'sprite',
                                            image: 'btnRadioSelected.png',
                                            alpha: 0,
                                        },
                                        {
                                            name: 'menu_body autoplay 50 disabled',
                                            type: 'sprite',
                                            image: 'btnRadioUnselected.png',
                                            alpha: 1,
                                        },
                                        {
                                            name: 'menu_body autoplay 50 text',
                                            type: 'text',
                                            text: '50',
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontSize: '20px',
                                                fill: 0xffffff,
                                            },
                                        }
                                    ]
                                },
                                {
                                    name: 'menu_body autoplay 100',
                                    scale: [1.5, 1.5],
                                    position: [320, -100],
                                    step: 100,
                                    button: 'autoplay button',
                                    pressed: false,
                                    childs: [
                                        {
                                            name: 'menu_body autoplay 100 selected',
                                            type: 'sprite',
                                            image: 'btnRadioSelected.png',
                                            alpha: 0,
                                        },
                                        {
                                            name: 'menu_body autoplay 100 disabled',
                                            type: 'sprite',
                                            image: 'btnRadioUnselected.png',
                                            alpha: 1,
                                        },
                                        {
                                            name: 'menu_body autoplay 100 text',
                                            type: 'text',
                                            text: '100',
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontSize: '20px',
                                                fill: 0xffffff,
                                            },
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            name: 'menu_body totalbet container',
                            visible: false,
                            childs: []
                        },
                        {
                            name: 'menu_body info container',
                            visible: false,
                            childs: [
                                {
                                    name: 'menu_body info up button',
                                    type: 'sprite',
                                    image: 'info_up',
                                    position: [400, -170],
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'menu_body info up button glow',
                                            type: 'text',
                                            text: 'Previous',
                                            position: [0, -35],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontSize: '18px',
                                                fill: 0xffffff,
                                                strokeThickness: 3,
                                                lineJoin: "bevel",
                                            },
                                            alpha: 0
                                        }
                                    ]
                                },
                                {
                                    name: 'menu_body info down button',
                                    type: 'sprite',
                                    image: 'info_down',
                                    position: [400, 200],
                                    button: 'button',
                                    childs: [
                                        {
                                            name: 'menu_body info down button glow',
                                            type: 'text',
                                            text: 'Next',
                                            position: [0, -35],
                                            styles: {
                                                align: 'center',
                                                fontFamily: 'Arial',
                                                fontSize: '18px',
                                                fill: 0xffffff,
                                                strokeThickness: 3,
                                                lineJoin: "bevel",
                                            },
                                            alpha: 0
                                        }
                                    ]
                                },
                                {
                                    name: 'menu_body infochild container',
                                    mask: 'menu_body info mask',
                                    position: [-30, 15],
                                    childs: [
                                        {
                                            name: 'menu_body infochild container 1',
                                            type: 'graphics',
                                            position: [0, 0],
                                            visible: true,
                                            alpha: 0.7,
                                            draw: [
                                                ['beginFill', 0x000000],
                                                ['drawRoundedRect', [-750 / 2, -450 / 2, 750, 450, 20]],
                                            ],
                                            childs: [
                                                {
                                                    name: 'menu_body infochild container 1 title',
                                                    type: 'text',
                                                    position: [0, -180],
                                                    alpha: 1 / 0.7,
                                                    text: 'KING OF SKULL ISLAND BONUS',
                                                    styles: {
                                                        align: 'center',
                                                        fontSize: '45px',
                                                        fontFamily: 'Oswald-Bold',
                                                        fill: [0xeb4e0a, 0xffea72],
                                                        dropShadow: true,
                                                        dropShadowAngle: 0.5,
                                                        dropShadowColor: 0x220342,
                                                        dropShadowDistance: 1,
                                                        dropShadowBlur: 25,
                                                        stroke: "#581a08",
                                                        strokeThickness: 3,
                                                        lineJoin: "bevel",
                                                    }
                                                },
                                                {
                                                    name: 'menu_body infochild container 1 bonuscard',
                                                    type: 'sprite',
                                                    image: 'sym12.png',
                                                    alpha: 1 / 0.7,
                                                    scale: [1.5, 1.5],
                                                    position: [-200, 50]
                                                },
                                                {
                                                    name: 'menu_body infochild container 1 details 1',
                                                    type: 'text',
                                                    text: 'WIN FREE GAMES',
                                                    position: [130, -90],
                                                    alpha: 1 / 0.7,
                                                    styles: {
                                                        align: 'center',
                                                        fontSize: '25px',
                                                        fontWeight: 900,
                                                        fontFamily: 'clearly-gothic-heavy',
                                                        fill: 0xeb8c00
                                                    }
                                                },
                                                {
                                                    name: 'menu_body infochild container 1 details 2',
                                                    type: 'text',
                                                    alpha: 1 / 0.7,
                                                    text: 'when BONUS appears on\nReel 1 and 5',
                                                    position: [130, -40],
                                                    styles: {
                                                        align: 'center',
                                                        fontSize: '25px',
                                                        fontWeight: 700,
                                                        fontFamily: 'clearly-gothic-heavy',
                                                        fill: 0xffffff
                                                    }
                                                },
                                                {
                                                    name: 'menu_body infochild container 1 details 3',
                                                    type: 'text',
                                                    alpha: 1 / 0.7,
                                                    text: 'Spin the Statue Reels to reveal up to',
                                                    position: [130, 30],
                                                    styles: {
                                                        align: 'center',
                                                        fontSize: '25px',
                                                        fontWeight: 700,
                                                        fontFamily: 'clearly-gothic-heavy',
                                                        fill: 0xffffff
                                                    },
                                                    childs: [
                                                        {
                                                            name: 'menu_body infochild container 1 details 4',
                                                            type: 'text',
                                                            text: '100',
                                                            position: [0, 30],
                                                            styles: {
                                                                align: 'center',
                                                                fontSize: '30px',
                                                                fontWeight: 900,
                                                                fontFamily: 'clearly-gothic-heavy',
                                                                fill: 0xfed734
                                                            }
                                                        },
                                                        {
                                                            name: 'menu_body infochild container 1 details 5',
                                                            type: 'text',
                                                            text: 'FREE GAMES!',
                                                            position: [0, 60],
                                                            styles: {
                                                                align: 'center',
                                                                fontSize: '30px',
                                                                fontWeight: 900,
                                                                fontFamily: 'clearly-gothic-heavy',
                                                                fill: 0xfed734
                                                            }
                                                        },
                                                        {
                                                            name: 'menu_body infochild container 1 details 6',
                                                            type: 'text',
                                                            text: 'with RAGING RE-SPINS',
                                                            position: [0, 100],
                                                            styles: {
                                                                align: 'center',
                                                                fontSize: '27px',
                                                                fontWeight: 900,
                                                                fontFamily: 'clearly-gothic-heavy',
                                                                fill: 0xeb8c00
                                                            }
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            name: 'menu_body infochild container 2',
                                            type: 'graphics',
                                            position: [0, 0],
                                            visible: false,
                                            alpha: 0.7,
                                            draw: [
                                                ['beginFill', 0x000000],
                                                ['drawRoundedRect', [-750 / 2, -450 / 2, 750, 450, 20]],
                                            ],
                                            childs: [
                                                {
                                                    name: 'menu_body infochild container 2 title',
                                                    type: 'text',
                                                    position: [0, -150],
                                                    alpha: 1 / 0.7,
                                                    text: 'LIGHTNING REEL',
                                                    styles: {
                                                        align: 'center',
                                                        fontSize: '45px',
                                                        fontFamily: 'Oswald-Bold',
                                                        fill: [0xeb4e0a, 0xffea72],
                                                        dropShadow: true,
                                                        dropShadowAngle: 0.5,
                                                        dropShadowColor: 0x220342,
                                                        dropShadowDistance: 1,
                                                        dropShadowBlur: 25,
                                                        stroke: "#581a08",
                                                        strokeThickness: 3,
                                                        lineJoin: "bevel",
                                                    }
                                                },
                                                {
                                                    name: 'menu_body infochild container 2 details 1',
                                                    type: 'text',
                                                    text: 'The',
                                                    position: [0, -70],
                                                    alpha: 1 / 0.7,
                                                    styles: {
                                                        align: 'center',
                                                        fontSize: '25px',
                                                        fontWeight: 700,
                                                        fontFamily: 'clearly-gothic-heavy',
                                                        fill: 0xffffff
                                                    }
                                                },
                                                {
                                                    name: 'menu_body infochild container 2 details 2',
                                                    type: 'text',
                                                    text: 'LIGHTNING REEL',
                                                    position: [0, -40],
                                                    alpha: 1 / 0.7,
                                                    styles: {
                                                        align: 'center',
                                                        fontSize: '25px',
                                                        fontWeight: 900,
                                                        fontFamily: 'clearly-gothic-heavy',
                                                        fill: 0xeb8c00
                                                    }
                                                },
                                                {
                                                    name: 'menu_body infochild container 1 details 2',
                                                    type: 'text',
                                                    alpha: 1 / 0.7,
                                                    text: 'may appear during',
                                                    position: [0, -10],
                                                    styles: {
                                                        align: 'center',
                                                        fontSize: '25px',
                                                        fontWeight: 700,
                                                        fontFamily: 'clearly-gothic-heavy',
                                                        fill: 0xffffff
                                                    }
                                                },
                                                {
                                                    name: 'menu_body infochild container 1 details 3',
                                                    type: 'text',
                                                    alpha: 1 / 0.7,
                                                    text: 'ANY SPIN,',
                                                    position: [0, 20],
                                                    styles: {
                                                        align: 'center',
                                                        fontSize: '25px',
                                                        fontWeight: 900,
                                                        fontFamily: 'clearly-gothic-heavy',
                                                        fill: 0xeb8c00
                                                    },
                                                    childs: [
                                                        {
                                                            name: 'menu_body infochild container 1 details 4',
                                                            type: 'text',
                                                            text: 'adding up to',
                                                            position: [0, 30],
                                                            styles: {
                                                                align: 'center',
                                                                fontSize: '25px',
                                                                fontWeight: 700,
                                                                fontFamily: 'clearly-gothic-heavy',
                                                                fill: 0xffffff
                                                            }
                                                        },
                                                        {
                                                            name: 'menu_body infochild container 1 details 5',
                                                            type: 'text',
                                                            text: '15 BEAST SYMBOLS',
                                                            position: [0, 70],
                                                            styles: {
                                                                align: 'center',
                                                                fontSize: '40px',
                                                                fontWeight: 900,
                                                                fontFamily: 'clearly-gothic-heavy',
                                                                fill: 0xfed734
                                                            }
                                                        },
                                                        {
                                                            name: 'menu_body infochild container 1 details 6',
                                                            type: 'text',
                                                            text: 'for MONSTROUS WINS!',
                                                            position: [0, 110],
                                                            styles: {
                                                                align: 'center',
                                                                fontSize: '27px',
                                                                fontWeight: 900,
                                                                fontFamily: 'clearly-gothic-heavy',
                                                                fill: 0xffffff
                                                            }
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            name: 'menu_body infochild container 3',
                                            type: 'sprite',
                                            position: [0, 0],
                                            image: 'help3',
                                            visible: false,
                                            scale: [1, 0.9]
                                        },
                                        {
                                            name: 'menu_body infochild container 4',
                                            type: 'sprite',
                                            position: [0, 0],
                                            image: 'help4',
                                            scale: [1, 0.7],
                                            visible: false,
                                        },
                                        {
                                            name: 'menu_body infochild container 5',
                                            type: 'sprite',
                                            position: [0, 0],
                                            image: 'help5',
                                            scale: [1, 0.85],
                                            visible: false,
                                        },
                                        {
                                            name: 'menu_body infochild container 6',
                                            type: 'sprite',
                                            position: [0, 0],
                                            image: 'help6',
                                            scale: [1, 0.8],
                                            visible: false,
                                        },
                                        {
                                            name: 'menu_body infochild container 7',
                                            type: 'sprite',
                                            position: [0, 0],
                                            image: 'help7',
                                            scale: [1, 0.6],
                                            visible: false,
                                        },
                                    ]
                                },
                                {
                                    name: 'menu_body info mask',
                                    type: 'graphics',
                                    position: [-30, 15],
                                    draw: [
                                        ['beginFill', 0x000000],
                                        ['drawRoundedRect', [-750 / 2, -500 / 2, 750, 500, 20]]
                                    ],
                                    alpha: 0.5
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'LogoContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    position: [0, -475],
                    scale: 1.2,
                    childs: [
                        {
                            name: 'LogoBack',
                            type: 'sprite',
                            image: 'Piramid'
                        },
                        {
                            name: 'LogoRichLabel',
                            type: 'sprite',
                            image: 'RichWild',
                            position: [0, -25]
                        },
                        {
                            name: 'LogoLabel',
                            type: 'sprite',
                            image: 'BookOfDead',
                            position: [0, 15]
                        },
                    ]
                },
            ]
        },
        {
            name: 'SettingsContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1200, 900],
            scaleStrategyLandscape: ['fit-to-screen', 1200, 900],
            childs: [
                {
                    type: 'graphics',
                    alpha: 0.5,
                    draw: [
                        ['beginFill', 0x000000],
                        ['drawRect', [-1200 / 2, -900 / 2, 1200, 900]]
                    ]
                },
                {
                    type: 'sprite',
                    image: 'modal2.png',
                    position: [0, -10],
                    scale: [1.15, 1.6],
                },
                {
                    scale: [0.8, 1],
                    childs: [
                        {
                            name: 'Settings title',
                            type: 'text',
                            position: [0, -210],
                            text: 'Settings',
                            styles: {
                                fontSize: '30px',
                                align: 'center',
                                fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                                fontWeight: 600,
                                fill: 0xebb122
                            }
                        },
                        {
                            position: [-160, -90],
                            childs: [
                                {
                                    name: 'settings coinValueUp button bar',
                                    type: 'button',
                                    scale: 1.5,
                                    position: [0, -65],
                                    childs: [
                                        {
                                            name: 'settings coinValueUp button',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'tri_plus_button.png'
                                        },
                                        {
                                            name: 'settings coinValueUp button glow',
                                            type: 'sprite',
                                            image: 'tri_plus_button.png',
                                            alpha: 0,
                                            blendMode: 3
                                        },
                                        {
                                            name: 'settings coinValueUp button disabled',
                                            type: 'graphics',
                                            position: [0.1, 0],
                                            alpha: 0.5,
                                            visible: false,
                                            button: 'disabled button',
                                            draw: [
                                                ['beginFill', 0x000000],
                                                ['lineStyle', [0, 0xFF0000, 1]],
                                                ['moveTo', [0, -12]],
                                                ['lineTo', [15, 12]],
                                                ['lineTo', [-15, 12]],
                                                ['lineTo', [0, -12]],
                                                ['endFill'],
                                            ],
                                        }
                                    ]
                                },
                                {
                                    childs: [
                                        {
                                            name: 'settings coinValueDown back',
                                            type: 'graphics',
                                            draw: [
                                                ['beginFill', 0x000000],
                                                ['drawRoundedRect', [-100 / 2, -70 / 2 ,100, 70, 5]]
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: 'COIN VALUE',
                                            position: [0, -20],
                                            scale: [0.7, 1],
                                            styles: {
                                                fontSize: '18px',
                                                fill: 0xffffff,
                                                align: 'center',
                                                fontWeight: 600,
                                                fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                                            }
                                        },
                                        {
                                            name: 'settings coinValue text',
                                            type: 'text',
                                            text: '0.10',
                                            position: [0, 13],
                                            scale: [0.7, 1],
                                            styles: {
                                                fontSize: '40px',
                                                fill: 0xebb122,
                                                align: 'center',
                                                fontWeight: 600,
                                                fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'settings coinValueDown button bar',
                                    type: 'button',
                                    scale: 1.5,
                                    position: [0, 65],
                                    childs: [
                                        {
                                            name: 'settings coinValueDown button',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'tri_minus_button.png'
                                        },
                                        {
                                            name: 'settings coinValueDown button glow',
                                            type: 'sprite',
                                            image: 'tri_minus_button.png',
                                            alpha: 0,
                                            blendMode: 3
                                        },
                                        {
                                            name: 'settings coinValueDown button disabled',
                                            type: 'graphics',
                                            position: [0.1, 0],
                                            alpha: 0.5,
                                            visible: false,
                                            rotation: Math.PI,
                                            button: 'disabled button',
                                            draw: [
                                                ['beginFill', 0x000000],
                                                ['lineStyle', [0, 0xFF0000, 1]],
                                                ['moveTo', [0, -12]],
                                                ['lineTo', [15, 12]],
                                                ['lineTo', [-15, 12]],
                                                ['lineTo', [0, -12]],
                                                ['endFill'],
                                            ],
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            name: 'settings coins container',
                            position: [0, -90],
                            childs: [
                                {
                                    name: 'settings coinsUp button bar',
                                    type: 'button',
                                    scale: 1.5,
                                    position: [0, -65],
                                    childs: [
                                        {
                                            name: 'settings coinsUp button',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'tri_plus_button.png'
                                        },
                                        {
                                            name: 'settings coinsUp button glow',
                                            type: 'sprite',
                                            image: 'tri_plus_button.png',
                                            alpha: 0,
                                            blendMode: 3
                                        },
                                        {
                                            name: 'settings coinsUp button disabled',
                                            type: 'graphics',
                                            position: [0.1, 0],
                                            alpha: 0.5,
                                            visible: true,
                                            button: 'disabled button',
                                            draw: [
                                                ['beginFill', 0x000000],
                                                ['lineStyle', [0, 0xFF0000, 1]],
                                                ['moveTo', [0, -12]],
                                                ['lineTo', [15, 12]],
                                                ['lineTo', [-15, 12]],
                                                ['lineTo', [0, -12]],
                                                ['endFill'],
                                            ],
                                        }
                                    ]
                                },
                                {
                                    childs: [
                                        {
                                            name: 'settings coins back',
                                            type: 'graphics',
                                            draw: [
                                                ['beginFill', 0x000000],
                                                ['drawRoundedRect', [-100 / 2, -70 / 2 ,100, 70, 5]]
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: 'COINS',
                                            position: [0, -20],
                                            scale: [0.7, 1],
                                            styles: {
                                                fontSize: '18px',
                                                fill: 0xffffff,
                                                align: 'center',
                                                fontWeight: 600,
                                                fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                                            }
                                        },
                                        {
                                            name: 'settings coins text',
                                            type: 'text',
                                            text: '5',
                                            position: [0, 13],
                                            scale: [0.7, 1],
                                            styles: {
                                                fontSize: '40px',
                                                fill: 0xebb122,
                                                align: 'center',
                                                fontWeight: 600,
                                                fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'settings coinsDown button bar',
                                    type: 'button',
                                    scale: 1.5,
                                    position: [0, 65],
                                    childs: [
                                        {
                                            name: 'settings coinsDown button',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'tri_minus_button.png'
                                        },
                                        {
                                            name: 'settings coinsDown button glow',
                                            type: 'sprite',
                                            image: 'tri_minus_button.png',
                                            alpha: 0,
                                            blendMode: 3
                                        },
                                        {
                                            name: 'settings coinsDown button disabled',
                                            type: 'graphics',
                                            position: [0.1, 0],
                                            alpha: 0.5,
                                            visible: false,
                                            rotation: Math.PI,
                                            button: 'disabled button',
                                            draw: [
                                                ['beginFill', 0x000000],
                                                ['lineStyle', [0, 0xFF0000, 1]],
                                                ['moveTo', [0, -12]],
                                                ['lineTo', [15, 12]],
                                                ['lineTo', [-15, 12]],
                                                ['lineTo', [0, -12]],
                                                ['endFill'],
                                            ],
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            name: 'settings lines container',
                            position: [160, -90],
                            childs: [
                                {
                                    name: 'settings linesUp button bar',
                                    type: 'button',
                                    scale: 1.5,
                                    position: [0, -65],
                                    childs: [
                                        {
                                            name: 'settings linesUp button',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'tri_plus_button.png'
                                        },
                                        {
                                            name: 'settings linesUp button glow',
                                            type: 'sprite',
                                            image: 'tri_plus_button.png',
                                            alpha: 0,
                                            blendMode: 3
                                        },
                                        {
                                            name: 'settings linesUp button disabled',
                                            type: 'graphics',
                                            position: [0.1, 0],
                                            alpha: 0.5,
                                            visible: true,
                                            button: 'disabled button',
                                            draw: [
                                                ['beginFill', 0x000000],
                                                ['lineStyle', [0, 0xFF0000, 1]],
                                                ['moveTo', [0, -12]],
                                                ['lineTo', [15, 12]],
                                                ['lineTo', [-15, 12]],
                                                ['lineTo', [0, -12]],
                                                ['endFill'],
                                            ],
                                        }
                                    ]
                                },
                                {
                                    childs: [
                                        {
                                            name: 'settings lines back',
                                            type: 'graphics',
                                            draw: [
                                                ['beginFill', 0x000000],
                                                ['drawRoundedRect', [-100 / 2, -70 / 2 ,100, 70, 5]]
                                            ]
                                        },
                                        {
                                            type: 'text',
                                            text: 'LINES',
                                            position: [0, -20],
                                            scale: [0.7, 1],
                                            styles: {
                                                fontSize: '18px',
                                                fill: 0xffffff,
                                                align: 'center',
                                                fontWeight: 600,
                                                fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                                            }
                                        },
                                        {
                                            name: 'settings lines text',
                                            type: 'text',
                                            text: '10',
                                            position: [0, 13],
                                            scale: [0.7, 1],
                                            styles: {
                                                fontSize: '40px',
                                                fill: 0xebb122,
                                                align: 'center',
                                                fontWeight: 600,
                                                fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'settings linesDown button bar',
                                    type: 'button',
                                    scale: 1.5,
                                    position: [0, 65],
                                    childs: [
                                        {
                                            name: 'settings linesDown button',
                                            type: 'sprite',
                                            button: 'button',
                                            image: 'tri_minus_button.png'
                                        },
                                        {
                                            name: 'settings linesDown button glow',
                                            type: 'sprite',
                                            image: 'tri_minus_button.png',
                                            alpha: 0,
                                            blendMode: 3
                                        },
                                        {
                                            name: 'settings linesDown button disabled',
                                            type: 'graphics',
                                            position: [0.1, 0],
                                            alpha: 0.5,
                                            visible: false,
                                            rotation: Math.PI,
                                            button: 'disabled button',
                                            draw: [
                                                ['beginFill', 0x000000],
                                                ['lineStyle', [0, 0xFF0000, 1]],
                                                ['moveTo', [0, -12]],
                                                ['lineTo', [15, 12]],
                                                ['lineTo', [-15, 12]],
                                                ['lineTo', [0, -12]],
                                                ['endFill'],
                                            ],
                                        }
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    childs: [
                        {
                            name: 'settings sound switch',
                            type: 'gown_check',
                            selected: true,
                            skinName: 'switch',
                            position: [-180, 20],
                            width: 40,
                            height: 25
                        },
                        {
                            type: 'text',
                            text: 'Sound',
                            scale: [0.7, 1],
                            position: [-110, 33],
                            styles: {
                                fontSize: '25px',
                                fill: 0xffffff,
                                align: 'center',
                                fontWeight: 600,
                                fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                            }
                        },
                        {
                            name: 'settings adjustBet switch',
                            type: 'gown_check',
                            selected: false,
                            skinName: 'switch',
                            position: [20, 20],
                            width: 40,
                            height: 25
                        },
                        {
                            type: 'text',
                            text: 'Auto adjust bet',
                            scale: [0.7, 1],
                            position: [125, 33],
                            styles: {
                                fontSize: '25px',
                                fill: 0xffffff,
                                align: 'center',
                                fontWeight: 600,
                                fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                            }
                        }
                    ]
                },
                {
                    position: [0, 60],
                    childs: [
                        {
                            name: 'settings fastPlay switch',
                            type: 'gown_check',
                            selected: false,
                            skinName: 'switch',
                            position: [-180, 20],
                            width: 40,
                            height: 25
                        },
                        {
                            type: 'text',
                            text: 'Fast play',
                            scale: [0.7, 1],
                            position: [-100, 33],
                            styles: {
                                fontSize: '25px',
                                fill: 0xffffff,
                                align: 'center',
                                fontWeight: 600,
                                fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                            }
                        },
                        {
                            name: 'settings spacebar switch',
                            type: 'gown_check',
                            selected: true,
                            skinName: 'switch',
                            position: [20, 20],
                            width: 40,
                            height: 25
                        },
                        {
                            type: 'text',
                            text: 'Spacebar to spin',
                            scale: [0.7, 1],
                            position: [125, 33],
                            styles: {
                                fontSize: '25px',
                                fill: 0xffffff,
                                align: 'center',
                                fontWeight: 600,
                                fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                            }
                        }
                    ]
                },
                {
                    name: 'settings okBtn bar',
                    position: [0, 200],
                    scale: 1.5,
                    childs: [
                        {
                            name: 'settings okBtn',
                            type: 'sprite',
                            button: 'button',
                            image: 'okButton.png'
                        },
                        {
                            name: 'settings okBtn glow',
                            type: 'sprite',
                            image: 'okButton.png',
                            alpha: 0,
                            blendMode: 3
                        },
                        {
                            name: 'settings okBtn text',
                            type: 'text',
                            text: 'OK',
                            scale: [0.4, 0.5],
                            styles: {
                                fontSize: '35px',
                                fill: 0xffffff,
                                align: 'center',
                                fontWeight: 600,
                                fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: 'AutoPlayContainer',
            visible: false,
            scaleStrategyPortrait: ['fit-to-screen', 1200, 900],
            scaleStrategyLandscape: ['fit-to-screen', 1200, 900],
            childs: [
                {
                    name: 'AutoPlayOverlay',
                    type: 'graphics',
                    alpha: 0.5,
                    draw: [
                        ['beginFill', 0x000000],
                        ['drawRect', [-1200 / 2, -900 / 2, 1200, 900]]
                    ]
                },
                {
                    name: 'AutoplayBack',
                    type: 'sprite',
                    position: [0, -10],
                    scale: [1.15, 1.6],
                    image: 'modal1.png',
                },
                {
                    childs: [
                        {
                            name: 'AutoplayTopContainer',
                            position: [0, -290],
                            childs: [
                                {
                                    name: 'Autoplay title',
                                    type: 'text',
                                    position: [0, -30],
                                    scale: [0.7, 1],
                                    text: 'AUTO PLAY',
                                    styles: {
                                        fontSize: '30px',
                                        align: 'center',
                                        fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                                        fontWeight: 600,
                                        fill: 0xebb122
                                    }
                                },
                                {
                                    name: 'AutoplayItems',
                                    position: [0, 20],
                                    childs: [
                                        {
                                            name: 'autoplay item 10',
                                            button: 'autoplay button',
                                            step: 10,
                                            position: [-160, 0],
                                            scale: [1, 1.5],
                                            childs: [
                                                {
                                                    name: 'autoplay item 10 active',
                                                    type: 'sprite',
                                                    image: 'autoitem_enable.png',
                                                },
                                                {
                                                    name: 'autoplay item 10 disable',
                                                    type: 'sprite',
                                                    image: 'autoitem_disable.png',
                                                },
                                                {
                                                    name: 'autoplay item text',
                                                    type: 'text',
                                                    text: '10',
                                                    styles: {
                                                        fontSize: '20px',
                                                        align: 'center',
                                                        fontWeight: 600,
                                                        fill: 0x000000
                                                    }
                                                }
                                            ],
                                        },
                                        {
                                            name: 'autoplay item 20',
                                            button: 'autoplay button',
                                            step: 20,
                                            position: [-80, 0],
                                            scale: [1, 1.5],
                                            childs: [
                                                {
                                                    name: 'autoplay item 20 active',
                                                    type: 'sprite',
                                                    image: 'autoitem_enable.png',
                                                },
                                                {
                                                    name: 'autoplay item 20 disable',
                                                    type: 'sprite',
                                                    image: 'autoitem_disable.png',
                                                },
                                                {
                                                    name: 'autoplay item text',
                                                    type: 'text',
                                                    text: '20',
                                                    styles: {
                                                        fontSize: '20px',
                                                        align: 'center',
                                                        fontWeight: 600,
                                                        fill: 0x000000
                                                    }
                                                }
                                            ],
                                        },
                                        {
                                            name: 'autoplay item 50',
                                            button: 'autoplay button',
                                            step: 50,
                                            scale: [1, 1.5],
                                            childs: [
                                                {
                                                    name: 'autoplay item 50 active',
                                                    type: 'sprite',
                                                    image: 'autoitem_enable.png',
                                                },
                                                {
                                                    name: 'autoplay item 50 disable',
                                                    type: 'sprite',
                                                    visible: false,
                                                    image: 'autoitem_disable.png',
                                                },
                                                {
                                                    name: 'autoplay item text',
                                                    type: 'text',
                                                    text: '50',
                                                    styles: {
                                                        fontSize: '20px',
                                                        align: 'center',
                                                        fontWeight: 600,
                                                        fill: 0x000000
                                                    }
                                                }
                                            ],
                                        },
                                        {
                                            name: 'autoplay item 75',
                                            button: 'autoplay button',
                                            step: 75,
                                            position: [80, 0],
                                            scale: [1, 1.5],
                                            childs: [
                                                {
                                                    name: 'autoplay item 75 active',
                                                    type: 'sprite',
                                                    image: 'autoitem_enable.png',
                                                },
                                                {
                                                    name: 'autoplay item 75 disable',
                                                    type: 'sprite',
                                                    image: 'autoitem_disable.png',
                                                },
                                                {
                                                    name: 'autoplay item text',
                                                    type: 'text',
                                                    text: '75',
                                                    styles: {
                                                        fontSize: '20px',
                                                        align: 'center',
                                                        fontWeight: 600,
                                                        fill: 0x000000
                                                    }
                                                }
                                            ],
                                        },
                                        {
                                            name: 'autoplay item 100',
                                            button: 'autoplay button',
                                            step: 100,
                                            position: [160, 0],
                                            scale: [1, 1.5],
                                            childs: [
                                                {
                                                    name: 'autoplay item 100 active',
                                                    type: 'sprite',
                                                    image: 'autoitem_enable.png',
                                                },
                                                {
                                                    name: 'autoplay item 100 disable',
                                                    type: 'sprite',
                                                    image: 'autoitem_disable.png',
                                                },
                                                {
                                                    name: 'autoplay item text',
                                                    type: 'text',
                                                    text: '100',
                                                    styles: {
                                                        fontSize: '20px',
                                                        align: 'center',
                                                        fontWeight: 600,
                                                        fill: 0x000000
                                                    }
                                                }
                                            ],
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'AutoplayCenterContainer',
                            position: [0, -200],
                            childs: [
                                {
                                    type: 'text',
                                    text: 'Stop autoplay',
                                    scale: [0.7, 1],
                                    position: [-145, 0],
                                    styles: {
                                        fontSize: '25px',
                                        align: 'center',
                                        fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                                        fontWeight: 600,
                                        fill: 0xffffff
                                    }
                                },
                                {
                                    name: 'nAnyWin',
                                    type: 'gown_check',
                                    skinName: 'switch',
                                    selected: false,
                                    position: [-190, 30],
                                    width: 40,
                                    height: 25
                                },
                                {
                                    type: 'text',
                                    text: 'On any win',
                                    scale: [0.7, 1],
                                    position: [-106, 42],
                                    styles: {
                                        fontSize: '22px',
                                        align: 'center',
                                        fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                                        fontWeight: 600,
                                        fill: 0xffffff
                                    }
                                },
                                {
                                    name: 'nFreespinWon',
                                    type: 'gown_check',
                                    skinName: 'switch',
                                    selected: true,
                                    position: [15, 30],
                                    width: 40,
                                    height: 25
                                },
                                {
                                    type: 'text',
                                    text: 'If free spins are won',
                                    scale: [0.7, 1],
                                    position: [130, 42],
                                    styles: {
                                        fontSize: '22px',
                                        align: 'center',
                                        fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                                        fontWeight: 600,
                                        fill: 0xffffff
                                    }
                                },
                                {
                                    visible: false,
                                    position: [-150, 100],
                                    childs: [
                                        {
                                            name: 'gown_slider',
                                            type: 'gown_slider',
                                            width: 300,
                                            minimum: 0,
                                            maximum: 100
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'autoplay okBtn bar',
                    position: [100, 295],
                    scale: 1.5,
                    childs: [
                        {
                            name: 'autoplay okBtn',
                            type: 'sprite',
                            scale: [0.8, 1],
                            button: 'button',
                            image: 'okButton.png'
                        },
                        {
                            name: 'autoplay okBtn glow',
                            type: 'sprite',
                            scale: [0.8, 1],
                            image: 'okButton.png',
                            alpha: 0,
                            blendMode: 3
                        },
                        {
                            name: 'autoplay okBtn text',
                            type: 'text',
                            text: 'OK',
                            scale: [0.4, 0.5],
                            styles: {
                                fontSize: '30px',
                                fill: 0xffffff,
                                align: 'center',
                                fontWeight: 600,
                                fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                            }
                        }
                    ]
                },
                {
                    name: 'autoplay cancelBtn bar',
                    position: [-100, 295],
                    scale: 1.5,
                    childs: [
                        {
                            name: 'autoplay cancelBtn',
                            type: 'sprite',
                            scale: [0.8, 1],
                            button: 'button',
                            image: 'cancelButton.png'
                        },
                        {
                            name: 'autoplay cancelBtn glow',
                            type: 'sprite',
                            scale: [0.8, 1],
                            image: 'cancelButton.png',
                            alpha: 0,
                            blendMode: 3
                        },
                        {
                            name: 'autoplay cancelBtn text',
                            type: 'text',
                            text: 'CANCEL',
                            scale: [0.4, 0.5],
                            styles: {
                                fontSize: '30px',
                                fill: 0xffffff,
                                align: 'center',
                                fontWeight: 600,
                                fontFamily: 'ROBOTO_CONDENSED_REGULAR',
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: 'OverlayContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1500, 725],
            scaleStrategyLandscape: ['fit-to-screen', 1500, 725],
            childs: [
                {
                    name: 'overlay', visible: false, childs: [
                        {
                            name: 'overlay rect',
                            event: 'overlay',
                            type: 'graphics',
                            draw: [['beginFill', 0x000000], ['drawRect', [-1500, -1500, 3000, 3000]]]
                        }
                    ]
                }
            ]
        },
        {
            name: 'BonusContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            childs: [
                {
                    name: 'bonus container',
                    visible: false,
                    childs: [
                        {name: 'bonus rect', type: 'sprite', image: 'bonuspane.png'},
                        {name: 'bonus line', type: 'graphics'},
                        {
                            name: 'bonus text 2',
                            type: 'text',
                            text: 'Something went wrong.',
                            position: [0, 0],
                            styles: {
                                align: 'center',
                                fontFamily: 'Oswald-Bold',
                                fontWeight: 700,
                                stroke: 'white',
                                strokeThickness: 5,
                                fontSize: '60px',
                                padding: 15,
                                fill: [0xff0b00, 0xffa61f]
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: 'OrientSwitchContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1080, 1920],
            scaleStrategyLandscape: [0, 0],
            visibleLandscape: false,
            visiblePortrait: true,
            childs: [
                {
                    name: 'orient switch background',
                    type: 'graphics',
                    scale: [1, 1],
                    draw: [['beginFill', 0x212121], ['drawRect', [-1920, -1920, 3840, 3840]]],
                    childs: [
                        {
                            name: 'orient switch icon',
                            type: 'sprite',
                            image: 'orient_switch',
                        },
                        {
                            name: 'orient switch text',
                            type: 'text',
                            position: [0, -300],
                            text: 'PLEASE TURN YOUR DEVICE',
                            alpha: 1,
                            styles: {
                                fontFamily: 'AGLettericaDemiCondensedC',
                                fontSize: '60px',
                                fontWeight: 'Bold',
                                fill: 0xffffff
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: 'LoadingContainer',
            scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
            scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
            visible: true,
            childs: [
                {
                    name: 'background container wrapper',
                    childs: [
                        {
                            name: 'Loadingbackground',
                            type: 'sprite',
                            position: [0, -70],
                            image: 'basegame_back',
                            scale: 1.1,
                            event: 'screen',
                            childs: [
                                {
                                    name: 'logo',
                                    position: [0, -370],
                                    childs: [
                                        {
                                            name: 'LogoBack',
                                            type: 'sprite',
                                            image: 'Piramid'
                                        },
                                        {
                                            name: 'LogoRichLabel',
                                            type: 'sprite',
                                            image: 'RichWild',
                                            position: [0, -25]
                                        },
                                        {
                                            name: 'LogoLabel',
                                            type: 'sprite',
                                            image: 'BookOfDead',
                                            position: [0, 15]
                                        }
                                    ]
                                },
                                {
                                    name: 'book',
                                    type: 'sprite',
                                    image: 'BigBook'
                                },
                                {
                                    name: 'shadow',
                                    type: 'sprite',
                                    image: 'shadowBg',
                                    position: [0, 450],
                                    scale: [10, 3]
                                }
                            ]
                        }
                    ]
                },
                {
                    name :'captions',
                    position: [0, -40],
                    childs: [

                        {
                            name: 'Free Spin caption',
                            text: 'FREE SPINS',
                            type: 'text',
                            position: [-250, -233],
                            styles: {
                                align: 'center',
                                fontFamily: 'Arial',
                                fontSize: '50px',
                                fontWeight: 'bold',
                                fill: [0x37250a, 0x73481a, 0x37250a],
                                dropShadow: true,
                                dropShadowAngle: 0.5,
                                dropShadowColor: 0x000000,
                                dropShadowDistance: 1,
                                dropShadowBlur: 5,
                            }
                        },
                        {
                            name: 'hint caption 1',
                            text: 'Win more on free spins with\nspecial EXPANDING\nsymbol!',
                            type: 'text',
                            position: [250, 102],
                            styles: {
                                align: 'center',
                                fontFamily: 'Arial',
                                fontSize: '30px',
                                fill: 0x572e16,
                            }
                        },
                        {
                            name: 'hint caption 2',
                            text: '3 or more scattered Books\ntrigger 10 free spins!',
                            type: 'text',
                            position: [-250, 102],
                            styles: {
                                align: 'center',
                                fontFamily: 'Arial',
                                fontSize: '30px',
                                fill: 0x572e16,
                            }
                        },
                        {
                            name: 'continue button',
                            button: 'button',
                            position: [0, 400],
                            childs: [
                                {
                                    name: 'continue button bg',
                                    type: 'sprite',
                                    image: 'continue_button.png',
                                    scale: [4, 4]
                                },
                                {
                                    name: 'continue button glow',
                                },
                                {
                                    name: 'continue text',
                                    text: 'CONTINUE',
                                    type: 'text',
                                    styles: {
                                        align: 'center',
                                        fontFamily: 'Arial',
                                        fontSize: '35px',
                                        fill: [0xeec062, 0xffffff, 0xeec062],
                                    }
                                },
                                {
                                    name: 'continue button effect',
                                    mask: 'continue button effect mask',
                                    type: 'graphics',
                                    draw: [['beginFill', 0xffffff], ['drawRect', [-165, -40, 330, 84]]],
                                    rotation: 40,
                                    alpha: 0.3
                                },
                                {
                                    name: 'continue button effect mask',
                                    type: 'graphics',
                                    draw: [['beginFill', 0x000000], ['drawRect', [-165, -40, 330, 84]]],
                                    alpha: 0
                                }
                            ]
                        }
                    ]
                },
            ]
        },
    ],

    Events: {

        'Gameplay before build': function () {
            this.updateChildParamsByName(Settings[this.Name]);
        },

        'Gameplay menu overlay up': function (container, e) {
            MRAID.markMeaningfulInteraction();
            this.menu_mode = false;
            this['MenuContainer'].visible = this.menu_mode;
        },

        'Gameplay automenu overlay up': function (container, e) {
            MRAID.markMeaningfulInteraction();
            this.hideMenuContainer();
        },

        'Gameplay menu_header back up': function (container, e) {

        },

        'Gameplay infobackground up': function (container, e) {

        },

        'Gameplay indicator up': function (container, e) {
            if (container.name.substr(-1) === "1") {
                this.helpPageIndex = 1;
                this['indicator 1'].texture = this.getTexture("circle");
                this['indicator 2'].texture = this.getTexture("circle_dark");
            } else {
                this.helpPageIndex = 2;
                this['indicator 1'].texture = this.getTexture("circle_dark");
                this['indicator 2'].texture = this.getTexture("circle");
            }
        },

        'overlay down': function () {
            MRAID.markMeaningfulInteraction();
            this['overlay'].visible = false;
        },

        'Gameplay build': function () {
            this.is_local_mode = true;
            //getting init data from server
            if (!this.is_local_mode) {
                var reg1 = new RegExp("(^|&)" + "game_id" + "=([^&]*)(&|$)", "i");
                var reg2 = new RegExp("(^|&)" + "key" + "=([^&]*)(&|$)", "i");
                var r1 = window.location.search.substr(1).match(reg1);
                var r2 = window.location.search.substr(1).match(reg2);
                if (r2 !== null) {
                    // Global.session_id = r1[2];
                    localStorage.api_key = r2[2];
                    // console.log(r2[2])
                }
                if (r1 !== null) {
                    this.session_id = r1[2];
                    // console.log(this.session_id)
                } else {
                    console.log("no");
                    this.userBlockLayer.active = true;
                    return;
                }
            }
            // server end

            this['settings sound switch'].on('change', ({ selected }) => {
                this.buttonHandlerAudioSet();
            });
            this['settings fastPlay switch'].on('change', ({ selcted }) => {
                this.buttonHandlerSpeedSet();
            });
            this.is_bonus = false;

            this.const = {
                RESULT_TYPE: {
                    NORMAL: 0x000000,
                    BIGMONEY: 0x000001,
                    JACKPOT: 0x000002,
                    BLUEJACKPOT: 0x000003,
                    REDJACKPOT: 0x000004
                },
                STATUS_TYPE: {
                    NORMAL: 0,
                    DISABLED: 1,
                    INVISIBLE: 2,
                    VISIBLE: 3
                }
            };
            this.win_anim_mode = 0x0;

            this.menu_mode = false;

            this.current_auto_amount = 0;

            //getting init data from server

            this.credits = {
                value: 11251,
                drawed: 11251
            };
            if (!this.is_local_mode) {
                var cashinfo = this.getCashInfo();
                this.credits = {
                    value: parseFloat(cashinfo.response.balance),
                    drawed: parseFloat(cashinfo.response.balance)
                };
                this.gamespec = cashinfo.response.gamespec;
                this.gamesession_id = cashinfo.response.gamesession_id;
            }
            show_balance(this.credits.drawed);
            //server end

            if (!this.is_local_mode) {
                var array_server = this.getInitData();
                if (array_server.error === "0") {
                    // array_server.response.arrLinesValue
                    // array_server.response.arrBetValue
                    // array_server.response.arrDenomValue

                    this.line_value_list = array_server.response.arrLinesValue;
                    this.totalbet_value_list = array_server.response.arrBetValue;
                    this.coin_value_list = array_server.response.arrDenomValue;

                    this.bet = {
                        amount: this.coin_value_list[0] * this.totalbet_value_list[0] * this.line_value_list[0],
                        drawed: this.coin_value_list[0] * this.totalbet_value_list[0] * this.line_value_list[0],
                        step: 1
                    };

                    this.lines = {
                        value: this.line_value_list[this.line_value_list.length - 1],
                        step: 1
                    };

                    this.levels = {
                        value: 2,
                        step: 1
                    };

                    this.coins = {
                        value: 1,
                        step: 1
                    };
                } else {
                    console.warn("Server error");
                }
            } else {

                this.line_value_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                this.coin_weight_list = [0.01, 0.02, 0.03, 0.05, 0.1, 0.2, 0.5, 1, 2];
                this.totalbet_value_list = [0.01, 0.02, 0.03, 0.05, 0.1, 0.2, 0.5, 1, 2];
                this.coin_value_list = [1, 2, 3, 4, 5];

                this.bet = {
                    amount: this.totalbet_value_list[0],
                    drawed: this.totalbet_value_list[0],
                    step: 1
                };

                this.bottombet = {
                    amount: this.bet.amount * 0.1
                };

                this.lines = {
                    value: 10,
                    step: 10
                };

                this.levels = {
                    value: 1,
                    step: 1
                };

                this.coins = {
                    value: 5,
                    step: 5
                };

                this.weight = {
                    value: 0.1,
                    step: 5
                }
            }

            this.spinCombinations = [];
            this.helpPageVisabilityFlag = false;

            this.helpPageIndex = 1;

            this.staticTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.staticTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].gotoAndPlay(0);
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.staticTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.staticTweens.showTweens = [];
                    this.staticTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.staticTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.staticTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.staticTweens.showTweens = [];
                    this.staticTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.staticTweens.hideTweens = [];
                    this.staticTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.staticTweens.hideQuickTweens = [];
                }
            };

            this.passiveTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.passiveTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].gotoAndPlay(0);
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.passiveTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.passiveTweens.showTweens = [];
                    this.passiveTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.passiveTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.passiveTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.passiveTweens.showTweens = [];
                    this.passiveTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.passiveTweens.hideTweens = [];
                    this.passiveTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.passiveTweens.hideQuickTweens = [];
                }
            };

            this.flashTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.flashTweens.showTweens.forEach((tween, index) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                for (var i = 0; i < container.children.length; i++)
                                    container.children[i].gotoAndPlay(0);
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.flashTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.flashTweens.showTweens = [];
                    this.flashTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.flashTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.flashTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.flashTweens.showTweens = [];
                    this.flashTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.flashTweens.hideTweens = [];
                    this.flashTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.flashTweens.hideQuickTweens = [];
                }
            };

            this.currentTweens = {
                showTweens: [],
                hideTweens: [],
                hideQuickTweens: [],
                show: () => {
                    this.currentTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                // container.children[0].gotoAndPlay(0);
                                // if (container.children.length > 1) {
                                //     for (var i = 1; i < container.children.length; i++)
                                //         container.children[i].gotoAndPlay(0);
                                // }
                                for (var i = 0; i < container.children.length; i++) {
                                    if (container.children[i].type === 'movie-clip')
                                        container.children[i].gotoAndPlay(0);
                                }
                            }
                        });
                        tween.play();
                    });
                },
                hide: () => {
                    this.currentTweens.showTweens.forEach((tween) => {
                        tween.stop();
                    });
                    this.currentTweens.showTweens = [];
                    this.currentTweens.hideTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.currentTweens.hideTweens = [];
                },
                hideQuick: () => {
                    this.currentTweens.showTweens.forEach((tween) => {
                        tween.targets.forEach((container) => {
                            if ((container.children.length > 0) && container.children[0].type === "movie-clip") {
                                container.children[0].stop();
                            }
                        });
                        tween.stop();
                        tween = null;
                    });
                    this.currentTweens.showTweens = [];
                    this.currentTweens.hideTweens.forEach((tween) => {
                        tween.stop();
                        tween = null;
                    });
                    this.currentTweens.hideTweens = [];
                    this.currentTweens.hideQuickTweens.forEach((tween) => {
                        tween.play();
                    });
                    this.currentTweens.hideQuickTweens = [];
                }
            };

            this.auto_mode = false;
            this.sound_mode = true;
            this.speed_mode = false;
            this.creditsNotInc = true;

            this.BOARD_SIZE = [245, 680];

            this.COLUMNS_COUNT = 5;
            this.ROWS_COUNT = 3;

            this.REEL_SYMBOLS_COUNT = this.ROWS_COUNT + this.ROWS_COUNT + 1;

            this.COLUMNS_OFFSET = 218;
            this.ROWS_OFFSET = 230; // symbols offset in the reel

            this.REELS_STOP_TIMEOUT = 1000;
            this.REELS_STOP_DELAY = 300;

            this.REELS_START_TIMEOUT = 0;
            this.REELS_START_DELAY = 0;

            this.SYMBOLS_SCALE = [3.3, 3.6];

            this.reels = [];
            let init_card = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [9, 2, 4],
                [6, 8, 3]
            ];

            for (let i = 0; i < this.COLUMNS_COUNT; i++) {

                let mostLeft = -1 * (this.COLUMNS_COUNT - 1) / 2 * this.COLUMNS_OFFSET - 2; // the most left element on game board

                this.buildChild(this['game board symbols container'], {
                    name: 'reel mask ' + i,
                    type: 'graphics',
                    draw: [['beginFill', [0x000000]], ['drawRect', [-this.BOARD_SIZE[0] / 2, -this.BOARD_SIZE[1] / 2, this.BOARD_SIZE[0], this.BOARD_SIZE[1]]]],
                    position: [mostLeft + this.COLUMNS_OFFSET * i, 0],
                    alpha: 0.5
                });

                let reelSprite = this.buildChild(this['game board symbols container'],
                    {
                        name: 'reel ' + i,
                        mask: 'reel mask ' + i,
                        position: [mostLeft + this.COLUMNS_OFFSET * i, -1 * (this.ROWS_COUNT - 1) / 2 * this.ROWS_OFFSET - (this.ROWS_COUNT + 1) * this.ROWS_OFFSET]
                    });

                let reelSpriteHighlight = this.buildChild(this['game board symbols highlighted container'],
                    {
                        name: 'reel highlighted ' + i,
                        position: [mostLeft + this.COLUMNS_OFFSET * i, -1 * (this.ROWS_COUNT - 1) / 2 * this.ROWS_OFFSET - (this.ROWS_COUNT + 1) * this.ROWS_OFFSET]
                    });

                this.reels.push({
                    sprite: reelSprite,
                    spriteHighlight: reelSpriteHighlight,
                    speed: null,
                    completeSymbol: null,
                    completed: null,
                    animationState: null
                });

                for (let j = 0; j < this.REEL_SYMBOLS_COUNT; j++) {

                    this.buildChild(this['reel ' + i], {
                        name: 'reel ' + i + ' symbol container ' + j,
                        scale: this.SYMBOLS_SCALE,
                        position: [0, this.ROWS_OFFSET * j]
                    });

                    this.buildChild(this['reel highlighted ' + i], {
                        name: 'reel ' + i + ' symbol highlighted container ' + j,
                        scale: [1, 170 / 150],
                        position: [0, this.ROWS_OFFSET * j]
                    });

                    this.buildChild(this['reel ' + i + ' symbol highlighted container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' highlight',
                        position: [0, -5],
                        type: 'sprite',
                        visible: false
                    });

                    this.buildChild(this['reel ' + i + ' symbol container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' crisp',
                        type: 'sprite'
                    });

                    this.buildChild(this['reel ' + i + ' symbol container ' + j], {
                        name: 'reel ' + i + ' symbol ' + j + ' blur',
                        type: 'sprite',
                        visible: false
                    });

                    var card_index = 0;
                    if (j >= (this.ROWS_COUNT + 1)) {
                        card_index = init_card[i][j - (this.ROWS_COUNT + 1)];
                    } else {
                        card_index = _.random(0, App.Symbols.length - 1);
                    }
                    this.setSymbolTexture('reel ' + i + ' symbol container ' + j, App.Symbols[card_index].Image);
                }

            }


            let frames = [];
            for (let i = 1; i <= 41; i++) {
                frames.push('loading_' + i.toString() + '.png');
            }
            let loadingAnimation1 = this.buildChild(this['LoadingContainer'], {
                name: 'loading animation 1',
                type: 'movie-clip',
                frames: frames,
                scale: [2.87, 3.2],
                position: [238, -150],
                speed: 0.2,
                loop: true
            });
            let helpRightAnimation1 = this.buildChild(this['right container'], {
                name: 'help loading animation 1',
                type: 'movie-clip',
                frames: frames,
                scale: [2.87, 3.2],
                position: [0, -110],
                speed: 0.2,
                loop: true
            });
            loadingAnimation1.gotoAndPlay(0);
            helpRightAnimation1.gotoAndPlay(0);

            for (let i = 1; i <= 3; i++) {
                this.buildChild(this['left container'], {
                    name: 'help hint book container ' + i.toString(),
                    scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
                    scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
                    position: [200 - i * 100, -160],
                });
                this.buildChild(this['help hint book container ' + i.toString()], {
                    name: 'book ' + i.toString(),
                    type: 'sprite',
                    image: 'hint_book_bg',
                    scale: 1.5,
                });
                this.buildChild(this['help hint book container ' + i.toString()], {
                    name: 'book ' + i.toString(),
                    type: 'sprite',
                    image: 'hint_book',
                    scale: 1.5
                });
                let hintBookAnimation = this.tween({
                    to: [
                        ['scale', [1.8, 1.8], 300, Power1.easeInOut],
                    ],
                    next: [
                        ['scale', [1.9, 1.9], 50, Power1.easeInOut],
                    ],
                    loop: true
                }, 'book ' + i.toString());
                this.buildChild(this['help hint book container ' + i.toString()], {
                    name: 'hint book light ' + i.toString(),
                    type: 'sprite',
                    image: 'light',
                    scale: [2.5, 2.5],
                });
                this['hint book light ' + i.toString()].tween = this.tween({
                    set: ['rotation', 0],
                    to: ['rotation', 2 * Math.PI, 16000, 0, Power0.easeNone],
                    loop: true
                }, 'hint book light ' + i.toString());
            }

            for (let i = 1; i <= 3; i++) {
                this.buildChild(this['LoadingContainer'], {
                    name: 'hint book container ' + i.toString(),
                    scaleStrategyPortrait: ['fit-to-screen', 1920, 1080],
                    scaleStrategyLandscape: ['fit-to-screen', 1920, 1080],
                    position: [25 - i * 135, -135],
                });
                this.buildChild(this['hint book container ' + i.toString()], {
                    name: 'book ' + i.toString(),
                    type: 'sprite',
                    image: 'hint_book_bg',
                    scale: [2, 2],
                });
                this.buildChild(this['hint book container ' + i.toString()], {
                    name: 'book ' + i.toString(),
                    type: 'sprite',
                    image: 'hint_book',
                    scale: [2, 2]
                });
                let hintBookAnimation = this.tween({
                    to: [
                        ['scale', [2.2, 2.2], 300, Power1.easeInOut],
                    ],
                    next: [
                        ['scale', [2.3, 2.3], 50, Power1.easeInOut],
                    ],
                    loop: true
                }, 'book ' + i.toString());
                this.buildChild(this['hint book container ' + i.toString()], {
                    name: 'hint book light ' + i.toString(),
                    type: 'sprite',
                    image: 'light',
                    scale: [2.5, 2.5],
                });
                this['hint book light ' + i.toString()].tween = this.tween({
                    set: ['rotation', 0],
                    to: ['rotation', 2 * Math.PI, 16000, 0, Power0.easeNone],
                    loop: true
                }, 'hint book light ' + i.toString());
            }

            let continueButtonAnimation = this.tween({
                set: [
                    ['x', -165]
                ],
                to:[
                    ['x', 330, 800, Power0.easeNone]
                ],
                loop: true
            }, 'continue button effect');

            /*------------generate total bet items start------------*/
            // this.totalbet_value_list = [0.25, 0.5, 0.75, 1, 1.25, 2.5, 5, 6.25, 12.5, 25, 50, 62.5, 125, 250, 500];
            let totalbet_x = [-320, -160, 0, 160, 320];
            let totalbet_y = [-100, 0, 100, 200];

            this.buildChild(this['menu_body totalbet container'], {
                name: 'menu_body totalbet title',
                position: [0, -190],
                scale: [1, 1.2],
                type: 'text',
                text: '0.25',
                styles: {
                    align: 'center',
                    fontFamily: 'Arial',
                    fontSize: '30px',
                    fill: 0xffffff,
                    fontWeight: '700',
                    strokeThickness: 1,
                },
            });
            for (let i = 0; i < this.totalbet_value_list.length; i++) {
                let j = Math.floor(i / 5);
                this.buildChild(this['menu_body totalbet container'], {
                    name: 'menu_body totalbet ' + i,
                    scale: [1.5, 1.5],
                    position: [totalbet_x[i % 5], totalbet_y[j]],
                    button: 'totalbet button',
                    step: i,
                    pressed: false,
                });

                this.buildChild(this['menu_body totalbet ' + i], {
                    name: 'menu_body totalbet ' + i + ' selected',
                    type: 'sprite',
                    image: 'btnRadioSelected.png',
                    alpha: i === 0 ? 1 : 0,
                })
                ;
                this.buildChild(this['menu_body totalbet ' + i], {
                    name: 'menu_body totalbet ' + i + ' disabled',
                    type: 'sprite',
                    image: 'btnRadioUnselected.png',
                    alpha: i === 0 ? 0 : 1,
                });
                this.buildChild(this['menu_body totalbet ' + i], {
                    name: 'menu_body totalbet ' + i + ' text',
                    type: 'text',
                    text: this.totalbet_value_list[i].toString(),
                    styles: {
                        align: 'center',
                        fontFamily: 'Arial',
                        fontSize: '20px',
                        fill: 0xffffff,
                    },
                });
            }
            /*------------generate total bet items end------------*/

            this.setValues();
            this.refreshPanel();
            this.playSound("background_music", {}, {volume: this.sound_mode ? 0.5 : 0, loop: true}, sound => {
                this.backSound = sound;
            });

        },

        'Gameplay resize': function () {

            this.refreshPanel();

           /* if (App.IsLandscape) {
                if (this.helpPageVisabilityFlag) {
                    this['info container ' + this.helpPageIndex].visible = 1;
                    this['info container controlls'].visible = 1;

                    this['MainContainer'].visible = 0;
                    this['ControlPanelContainer'].visible = 0;
                }
            } else {

            }

            if (this.menu_mode === true)
                this['MenuContainer'].visible = true;*/
        },

        'Gameplay showed': function () {

            if (Settings["intro"]) {

                this.showIntro(function () {

                    this.startGame();

                });

            } else {

                this.skipIntro(function () {

                    this.startGame();

                });

            }

        },

        'Gameplay update': function () {

            let time = this.updateTimeOffset / (1000 / 60);

            if (time > 2) time = 2;

            if (this.state === 'spin' || this.state === 'spinStop') {

                for (let i = 0; i < this.COLUMNS_COUNT; i++) {

                    if (this.reels[i].completed) continue;

                    if (this.state === 'spinStop' && this.reels[i].completeSymbol) {

                        if (this.reels[i].animation.state === 0) {

                            let dist = (this.ROWS_COUNT + 1) * this.ROWS_OFFSET + this.ROWS_OFFSET / 3 - this[this.reels[i].completeSymbol].position.y;

                            this.reels[i].speed = dist * 0.5;

                            if (this.reels[i].speed <= 1) {

                                this.reels[i].animation.state = 1;

                            }

                        } else if (this.reels[i].animation.state === 1) {

                            let dist = (this.ROWS_COUNT + 1) * this.ROWS_OFFSET - this[this.reels[i].completeSymbol].position.y;

                            this.reels[i].speed = dist * 0.3 - 1;

                        }

                    }

                    this.reels[i].sprite.children.forEach(symbol => {

                        symbol.position.set(null, symbol.position.y + this.reels[i].speed * time);

                    });

                    this.reels[i].spriteHighlight.children.forEach(symbol => {

                        symbol.position.set(null, symbol.position.y + this.reels[i].speed * time);

                    });

                    if (this.state === 'spinStop' && this.reels[i].completeSymbol && this.reels[i].animation.state === 1) {

                        if (this[this.reels[i].completeSymbol].position.y <= (this.ROWS_COUNT + 1) * this.ROWS_OFFSET) {

                            for (let j = 0; j < this.reels[i].sprite.children.length; j++) {

                                let symbol = this.reels[i].sprite.children[j];

                                symbol.position.set(null, j * this.ROWS_OFFSET);

                                if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                                    symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                                    symbol.parent.addChildAt(symbol, 0);

                                }

                            }

                            for (let j = 0; j < this.reels[i].spriteHighlight.children.length; j++) {

                                let symbol = this.reels[i].spriteHighlight.children[j];

                                symbol.position.set(null, j * this.ROWS_OFFSET);

                                if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                                    symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                                    symbol.parent.addChildAt(symbol, 0);

                                }

                            }

                            this.reels[i].completed = true;

                            if (this.reels.every(item => item.completed)) {
                                this.completeSpin();
                            }


                        }

                    }

                }

            }

        },

        'Gameplay update tick 5': function () {

            if (this.state === 'spin' || this.state === 'spinStop') {

                for (let i = 0; i < this.COLUMNS_COUNT; i++) {

                    if (this.reels[i].completed) continue;

                    this.reels[i].sprite.children.forEach(symbol => {

                        if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                            symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                            symbol.parent.addChildAt(symbol, 0);

                        }

                    });

                    this.reels[i].spriteHighlight.children.forEach(symbol => {

                        if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                            symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                            symbol.parent.addChildAt(symbol, 0);

                        }

                    });

                }

            }

        },

        'Gameplay update tick 30': function() {
            this['timer symbol'].visible = this['timer symbol'].visible !== true;
            this.updateTimerpanel();
        },

        'Gameplay autoplay button over': function (container, e) {
            this.handleAutoButtonOver(container, e);
        },

        'Gameplay autoplay button out': function (container, e) {
            this.handleAutoButtonOut(container, e);
        },

        'Gameplay autoplay button up': function (container, e) {
            this.handleAutoButtonUp(container, e);
        },

        'Gameplay autoplay button down': function (container, e) {
            this.handleAutoButtonDown(container, e);
        },

        'Gameplay music button down': function (container, e) {
            this.handleMusicButtonDown(container, e);
        },

        'Gameplay totalbet button over': function (container, e) {
            this.handleTotalBetButtonOver(container, e);
        },

        'Gameplay totalbet button out': function (container, e) {
            this.handleTotalBetButtonOut(container, e);
        },

        'Gameplay totalbet button up': function (container, e) {
            this.handleTotalBetButtonUp(container, e);
        },

        'Gameplay totalbet button down': function (container, e) {
            this.handleTotalBetButtonDown(container, e);
        },

        'Gameplay menu_header button over': function (container, e) {
            this.handleMenuButtonOver(container, e);
        },

        'Gameplay menu_header button out': function (container, e) {
            this.handleMenuButtonOut(container, e);
        },

        'Gameplay menu_header button up': function (container, e) {
            this.handleMenuButtonUp(container, e);
        },

        'Gameplay menu_header button down': function (container, e) {
            this.handleMenuButtonDown(container, e);
        },

        'Gameplay disabled button up': function (container, e) {

        },

        'Gameplay button over': function (container, e) {
            this.handleButtonOver(container, e);
        },

        'Gameplay button out': function (container, e) {
            this.handleButtonOut(container, e);
        },

        'Gameplay button up': function (container, e) {
            this.handleButtonUp(container, e);
        },

        'Gameplay button down': function (container, e) {
            this.handleButtonDown(container, e);
        },

        'Gameplay new jackpot': function (data) {

            App.escalibur.Jackpot.value = parseFloat(data.amount);

            this.drawJackpot();

        },
    },

    transferToCTA: function () {

        this.tween(['alpha', 0, 500], ['BackgroundContainer', 'MainContainer']);
        //
        // if (!App.CallToAction.showed) App.CallToAction.show();

    },

    showIntro: function (next) {

        //Show intro animation if needed and call next

        if (next) next.call(this);

    },

    skipIntro: function (next) {

        //Hide intro animation elements if needed and call next

        if (next) next.call(this);

    },

    startGame: function () {

        MRAID.track('Game Starts');

        this.tutorialTimeout(0);

        this.state = 'ready';

        this['grant jackpot'] = {
            value: App.escalibur.Jackpot.value,
            drawed: App.escalibur.Jackpot.value
        };
    },

    spin: function () {

        this.winAnimationMode = false;
        this.is_bonus = false;
        // this.hideLinecontainer();
        if (this.winSound !== null) {
            this.playSound('reelSpin', {}, {
                volume: this.sound_mode ? 0.5 : 0,
                loop: true
            }, sound => {
                this.winSound = sound;
            });
        }

        this['statusvalue text'].visible = true;

        show_win();

        if (this.credits.value - this.bet.amount >= 0) {
            this.credits.value -= this.bet.amount;
            this.credits.drawed = this.credits.value;
            this.server_win_amount.value = 0;
            this.server_win_amount.drawed = 0;
            // this.animFieldPoints('credits bar', this.credits.drawed);
            show_balance(this.credits.drawed);
            this.refreshPanelValues();

            this.creditsNotInc = true;
        } else {
            this.handleButtonAutoStop();
            return;
        }

        this.first_reel = false;
        this.second_reel = false;
        this.third_reel = false;

        this['win bar'].visible = false;
        this['Won text'].visible = false;
        this['congratulation bar'].visible = false;
        this.setStatusControlBar(['maxBet button', 'coinsUp button', 'coinsDown button', 'linesUp button', 'linesDown button'], this.const.STATUS_TYPE.DISABLED);
        // this['start button bar'].visible = false;
        // this['autostop button bar'].visible = false;
        // this.setStatusControlBar(['home button', 'autostart button', 'betplus button', 'betminus button'], this.const.STATUS_TYPE.DISABLED);
        // this['start button'].texture = this.getTexture(this.startbuttonDisablebg);
        // this['button auto'].texture = this.getTexture(this.autobuttonNormalbg);

        if (this.winSound) {
            this.winSound.stop();
            this.winSound = false;
        }

        if (this.state !== 'ready') return;

        this.state = 'spin';

        this.currentTweens.hide();
        this.currentTweens.hideQuick();
        this.staticTweens.hide();
        this.staticTweens.hideQuick();
        this.passiveTweens.hide();
        this.passiveTweens.hideQuick();
        this.flashTweens.hide();
        this.flashTweens.hideQuick();
        this.wildSprites = [];

        var self = this;

        this.spinCombination = null;

        if (this.auto_mode === true) {
            this.current_auto_amount--;
            // this.setStatusControlBar(['autostop button'], this.const.STATUS_TYPE.NORMAL);
            // this.setStatusControlBar(['autostart button'], this.const.STATUS_TYPE.INVISIBLE);
            // this.setStatusCenterBar('forward button', this.const.STATUS_TYPE.NORMAL);
            this['start button bar'].visible = false;
            this['autostart button bar'].visible = true;
            this['autoplay button text'].text = 'STOP';
            if (this.current_auto_amount === 0) {
                // this.setStatusCenterBar('start button', this.const.STATUS_TYPE.NORMAL);
                // this.setStatusControlBar([], this.const.STATUS_TYPE.NORMAL);
                // this.setStatusControlBar(['autostop button'], this.const.STATUS_TYPE.INVISIBLE);
                // this.setStatusControlBar(['autostart button'], this.const.STATUS_TYPE.VISIBLE);
                this['start button bar'].visible = true;
                this['autostart button bar'].visible = false;
                this['autoplay button text'].text = 'AUTO PLAY';
                this.auto_mode = false;
            }
            this.refreshAutoamount();
            this.refreshPanelValues();
        }

        /*getServerCardsInfo(this.bet.step)*/
        /*getServerData()*/
        $.when((this.is_local_mode ? this.getServerData() : this.getServerCardsInfo(this.bet.step, this.isfreespin))).done(function (response) {
            var serverData = response;

            if (serverData.error === "0") {

                self.credits.value = serverData.response.balance;
                self.credits.drawed = self.credits.value;

                self.server_initMatrix = serverData.response.initCards;

                self.spinCombination = null;

                self.spinCombination = App.escalibur.mathFromServer(self.bet.amount, self.server_initMatrix);

                var arrRetval = serverData.response.arrRetVal;
                self.credits = {
                    value: serverData.response.balance,
                    drawed: serverData.response.balance
                };
                var newArrRetval = [];
                self.win_anim_mode = 0;
                self.server_win_amount.value = serverData.response.winAmount;
                self.nomean_multiplier = _.random(2, 7);
                for (let i = 0; i < arrRetval.length; i++) {
                    if (arrRetval[i].retType === 0) {
                        if (self.isfreespin && self.freespin_count !== self.freespin_index) {
                            self.nomean_multiplier = arrRetval[i].spitfire;
                        }
                        newArrRetval.push(arrRetval[i]);
                    }

                    if (arrRetval[i].retType === 5) {
                        self.win_anim_mode = self.win_anim_mode | self.const.RESULT_TYPE.JACKPOT;
                        //jackpot
                    }

                    if (arrRetval[i].retType === 6) {
                        //bigmoney
                        self.win_anim_mode = self.win_anim_mode | self.const.RESULT_TYPE.BIGMONEY;
                    }

                    //In bonus case
                    if (arrRetval[i].retType === 2) {
                        self.isfreespin = true;
                        self.auto_mode = false;
                        self.freespin_animation = true;
                        self.freespin_count = arrRetval[i].count;
                        self.freespin_first_animation = true;
                    }
                }
                if (self.isfreespin && self.freespin_first_animation === false) {
                    if ((self.freespin_count) !== self.freespin_index) {
                        console.log(self.freespin_count - 1);
                        console.log(self.freespin_index);

                        if ((self.freespin_count - 1) === self.freespin_index) {
                            console.log("ended");
                            self.freespin_end = true;
                            self.auto_mode = false;
                        }
                        self.total_freespin_amount += serverData.response.winAmount;
                        self.animFieldPoints('bonus_win bar', self.total_freespin_amount);
                        self.freespin_index++;
                        self['freegames text'].text = self.freespin_index + " / " + self.freespin_count;

                        //Reel fire animation
                        self.stopReelfireAnimation("main_fire");
                        self.startReelSplashAnimation("main_fire");
                        setTimeout(() => {
                            self.stopReelSplashAnimation("main_fire");
                            self.startReelfireAnimation(self.nomean_multiplier.toString() + 'x_fire');
                            self.startMultiplierAnimation(self.nomean_multiplier.toString() + "x");
                        }, 500);
                        //Reel fire animation

                    } else {
                    }
                }


                if (self.freespin_first_animation === true)
                    self.freespin_first_animation = false;
                self.server_arrRetVal = newArrRetval;

                if (arrRetval.length !== 0) {
                    if (arrRetval[0].retType === 3) {
                        // In Case Jackpot
                        self.is_bonus = true;
                        self.bonus_amount = parseInt(arrRetval[0].win);
                        self.server_win_amount.value = parseInt(arrRetval[0].win);
                    } else if (arrRetval[0].retType === 0) {
                        // In Case NORMAL
                        self.is_bonus = false;
                        self.spinCombination.winData.winLines = self.generateWinData();
                    } else if (arrRetval[0].retType === 1) {

                    }
                }
            } else {

            }
            // if (this.is_local_mode === false)
            //     self.sendSignalToSite();
        });

        if (this.timeouts && this.timeouts.length > 0) {

            this.timeouts.forEach((timeout) => {

                clearTimeout(timeout);

            });

        }

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {

            this.timeout(() => {

                for (let j = 0; j < this.REEL_SYMBOLS_COUNT; j++) {
                    // var card_index = (j % 2 === 0 ? _.random(0, App.Symbols.length - 2) : 5);
                    var card_index = _.random(0, App.Symbols.length - 1);

                    this.setSymbolTexture(this.reels[i].sprite.children[j].name, App.Symbols[card_index].Image);

                    this.setSymbolsBlur(this.reels[i].sprite.children[j].name, true);

                }

                this.reels[i].completed = false;
                this.reels[i].completeSymbol = null;
                this.reels[i].speed = 80;

                let stopReelInterval = setInterval(() => {

                    if (this.spinCombination) {

                        if (stopReelInterval) clearInterval(stopReelInterval);

                        this.timeout(() => {

                            /*if (i === 2 && this.first_reel === true && this.second_reel === true) {
                                this.playSound('anticipation_sound', {}, {
                                    volume: this.sound_mode ? 1 : 0,
                                    loop: false
                                });
                                this['anticipation container'].visible = true;
                                this['anticipation container'].children[0].gotoAndPlay(0);
                                setTimeout(() => {
                                    this['anticipation container'].visible = false;
                                    this['anticipation container'].children[0].stop();
                                    this.stopReel(i);
                                }, 3000);
                            } else {*/
                            this.stopReel(i);
                            /*}*/

                            if (i == this.COLUMNS_COUNT - 1) {
                                this['statusvalue text'].visible = false;
                            }

                        }, this.REELS_STOP_TIMEOUT + i * this.REELS_STOP_DELAY);

                    }

                }, 80);

            }, this.REELS_START_TIMEOUT + i * this.REELS_START_DELAY);

        }

        if (this.currentSound) {
            this.currentSound.stop();
            this.currentSound = false;
        }
    },

    showError: function (message) {

        this['error container'].visible = true;
        this['overlay'].visible = true;

        if (message) this['error text 2'].text = lineBreak(40, message);

        this.tween({
            set: ['alpha', 0],
            to: ['alpha', 1, 250, 100, Power1.easeOut]
        }, 'error container');

        this.tween({
            set: ['alpha', 0],
            to: ['alpha', 0.6, 250, 100, Power1.easeOut]
        }, 'overlay');

        function lineBreak(length, text) {
            let newString = "";
            for (let i = 0; i < text.length; i++) {
                if ((i !== 0) && (i % length === 0)) {
                    newString = newString + text[i] + '\n';
                } else {
                    newString = newString + text[i];
                }
            }
            return newString;
        }

    },

    showBounupane: function (message) {
        this['bonus container'].visible = true;
        this['overlay'].visible = true;

        if (message) this['bonus text 2'].text = message;

        this.tween({
            set: ['alpha', 0],
            to: ['alpha', 1, 250, 100, Power1.easeOut]
        }, 'bonus container');

        this.tween({
            set: ['alpha', 0],
            to: ['alpha', 0.6, 250, 100, Power1.easeOut]
        }, 'overlay');
    },

    stopReel: function (reel, errorStop) {

        if (this.winSound) {
            this.winSound.stop();
            this.winSound = false;
        }
        this.reels[reel].completeSymbol = this.reels[reel].sprite.children[0].name;

        this.reels[reel].animation = {
            state: 0
        };

        for (let i = 0; i < this.ROWS_COUNT; i++) {

            let imageName;

            if (errorStop) {

                imageName = App.Symbols[_.random(0, App.Symbols.length - 1)].Image;

                this.setSymbolTexture(this.reels[reel].sprite.children[i].name, imageName);

            } else {
                imageName = this.spinCombination.symbols[i][reel];
                this.setSymbolTexture(this.reels[reel].sprite.children[i].name, App.SymbolsNames[imageName]);
            }
        }

        for (let i = 0; i < this.reels[reel].sprite.children.length; i++) {

            let symbol = this.reels[reel].sprite.children[i];

            this.setSymbolsBlur(symbol.name, false);

            symbol.position.set(null, (i + 1) * this.ROWS_OFFSET);

            if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                symbol.parent.addChildAt(symbol, 0);

            }

        }

        for (let i = 0; i < this.reels[reel].spriteHighlight.children.length; i++) {

            let symbol = this.reels[reel].spriteHighlight.children[i];

            // this.setSymbolsBlur(symbol.name, false);

            symbol.position.set(null, (i + 1) * this.ROWS_OFFSET);

            if (symbol.position.y > this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET) {

                symbol.position.y -= this.REEL_SYMBOLS_COUNT * this.ROWS_OFFSET;

                symbol.parent.addChildAt(symbol, 0);

            }

        }

        this.playSound('reelstop', {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

        this.state = 'spinStop';

    },

    completeSpin: function () {

        if (!this.auto_mode) {
            this['start button'].visible = true;
            this['statusvalue text'].visible = false;
            this.setStatusCenterBar('start button', this.const.STATUS_TYPE.NORMAL);
        } else {
            if (this.current_auto_amount === 0) {
                this.setStatusCenterBar('start button', this.const.STATUS_TYPE.NORMAL);
                this['autostop button bar'].visible = false;
                this['statusvalue text'].visible = false;
            }
        }
        this.setStatusControlBar(['maxBet button'], this.const.STATUS_TYPE.NORMAL)
        this.refreshCoinBar(this.coins.step);
        this.refreshLineBar(this.lines.step);

        if (this.spinCombination) {
            if (!this.is_bonus) {
                if (this.spinCombination.winData.winLines.length > 0) {

                    this.spinCombinations.push(this.spinCombination);

                    this.winSpinCombination = this.spinCombination;

                    this.state = 'ready';

                    this.win_sound_play = true;

                    this.winAnimationMode = true;

                    if (this.win_anim_mode && this.const.RESULT_TYPE.BIGMONEY) {
                        // this.startBigMoneyAnimation();
                    }
                    if (this.win_anim_mode && this.const.RESULT_TYPE.JACKPOT) {
                        // this.startJackpotAnimation();
                    }

                    this.winAnimation();
                    this.playSound("winline", {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

                    if (this.spinCombination.winData.winLines.length > 1) {
                        this.playSound("coins", {}, {volume: this.sound_mode ? 0.5 : 0, loop: false}, sound => {
                        });
                    }

                    this['win bar'].visible = true;
                    this['congratulation bar'].visible = false;
                    this['wincoins bar text'].text = '0';
                    var countCoinsInterval = setInterval(() => {
                        let coins = parseInt(this['wincoins bar text'].text);
                        coins++;
                        if (coins > this.server_win_amount.value) {
                            coins = this.server_win_amount.value;
                        }
                        this['wincoins bar text'].text = coins.toString();
                    }, 1000 / (this.server_win_amount.value + 1));
                    setTimeout(() => {
                        clearInterval(countCoinsInterval);
                        this['win bar'].visible = false;
                        this['Won text'].visible = true;
                        if (this.spinCombination.winData.winLines.length == 1) {
                            this['congratulation bar'].visible = true;
                            this['congratulationcoins bar text'].text = this.server_win_amount.value;
                            this['congratulationcontent bar text'].text = 'Congratulations!';
                            setTimeout(() => {
                                this['congratulationcontent bar text'].text =
                                    'Won ' +
                                    this.server_win_amount.value.toString() +
                                    ' coins on line ' +
                                    this.spinCombination.winData.winLines[0][4].toString();
                                    setTimeout(() => {
                                        this['congratulation bar'].visible = false;
                                    }, 1000);
                            }, 500);
                        }
                    }, this.spinCombination.winData.winLines.length > 1 ? 3000 : 1500);

                    if (this.spinCombination.winData.winLines.length > 1) {
                        setTimeout(() => {
                            let frames = [];
                            for (let k = 1; k <= 10; k++) {
                                frames.push('coins_' + k.toString() + '.png');
                            }
                            this.buildChild(this['ParticleContainer'], {
                                name: 'coins particle',
                                type: 'movie-clip',
                                frames: frames,
                                scale: [3, 3],
                                position: [0, 350],
                                speed: 0.2,
                                loop: false
                            });
                            this['coins particle'].gotoAndPlay(0);
                            setTimeout(() => {
                                this['ParticleContainer'].removeChildren();
                            }, 1000);
                        }, 500);
                    }

                    let logoTween = this.tween({
                        to: [
                            ['scale', [1.05, 1.05], 300, Power1.easeInOut],
                            ['position', [0, 20], 300, Power1.easeInOut],
                        ],
                        next: [
                            ['scale', [1.0, 1.0], 50, Power1.easeInOut],
                            ['position', [0, 0], 50, Power1.easeInOut]
                        ],
                        loop: true
                    }, 'logo caption');

                    // let logoTitleTween = this.tween({
                    //     to: [
                    //         ['tint', 0xfffcca, 100, Power1.easeInOut] // 0xfcff00,
                    //     ],
                    //     next: [
                    //         ['tint', 0xffffff, 50, Power1.easeInOut]
                    //     ],
                    //     loop: true
                    // }, 'title');

                    setTimeout(() => {
                        this.stopTween(logoTween);
                        // this.stopTween(logoTitleTween);
                    }, 1200);
                    // this['win bar text'].text = this.server_win_amount.value;

                    // this.animatePassiveLines(this.spinCombination.winData);

                    // this.credits.value += this.server_win_amount.value;
                    this.credits.drawed = this.credits.value;

                    this.server_win_amount.drawed = this.server_win_amount.value;
                    this.refreshPanelValues();

                } else {

                    this.spinCombinations.push(0);

                    // this.animFieldPoints('win', 0);

                    this.winAnimationMode = false;

                    this.state = 'ready';
                    this.credits.drawed = this.credits.value;
                    this.server_win_amount.drawed = this.server_win_amount.value;
                    this.refreshPanelValues();

                    // this.drawJackpot();

                    if (this.freespin_end && this.isfreespin) {
                        setTimeout(() => {
                            this['bonus_win title'].text = this.total_freespin_amount;
                            this['BonusWinContainer'].visible = true;
                            this.freespin_count = 0;
                            this.freespin_index = 0;
                            this.total_freespin_amount = 0;
                            this.isfreespin = false;
                            this.freespin_end = false;
                            setTimeout(() => {
                                this['BonusWinContainer'].visible = false;
                                this.completeFreespin();
                            }, 3000);
                        }, 3000);
                    }
                    setTimeout(() => {
                        if (this.state === 'ready' && this.auto_mode) {
                            this.spin();
                        }
                    }, 500);
                }
            } else {
                // this.credits.value += parseInt(this.bonus_amount);
                // this.credits.drawed += parseInt(this.bonus_amount);
                this.state = 'ready';
                this.refreshPanelValues();

                this.showBounupane("+" + this.bonus_amount);
                this.playSound('bonus.mp3', {}, {volume: this.sound_mode ? 1 : 0, loop: false});

                setTimeout(() => {
                    this.bonusclose();
                    this.state = 'ready';
                    if(this.auto_mode)
                        this.spin();
                }, 3000);
            }
        } else {
            this.state = 'ready';
        }

        if (this.currentSound) {
            this.currentSound.stop();
            this.currentSound = false;
        }
    }
    ,

    drawJackpot: function () {

    },

    updateTimerpanel: function () {
        var date = new Date;
        var h = date.getHours();
        var m = date.getMinutes();
        h = (h < 10 ? "0" : "") + h;
        m = (m < 10 ? "0" : "") + m;

        this['timer hour'].text = h;
        this['timer minute'].text = m;
    },

    setSymbolTexture: function (container, image) {

        let name = container.replace('container ', '');

        this[name + ' crisp'].texture = this.getTexture(image);
        this[name + ' blur'].texture = this.getTexture("blur_" + image);

        this[name + ' highlight'].removeChildren();

        let frames = [];
        let frame_suffix = image.substring(0, image.indexOf('.png'));
        let position = [0, 0], scale = [1, 1];

        if (image === 'B01ScatterBaseGame_0001.png') {
            position = [0, 2];
            scale = [1.55, 1.43];
        } else if (image.indexOf('BaseGame') >= 0) {
            if (image <= 'S05BaseGame.png') {
                position = [0, 2.4];
                scale = [1.57, 1.44];
            } else {
                for (let k = 1; k <= 24; k++) {
                    frames.push('frame_' + k.toString() + '.png');
                }
                this.buildChild(this[name + ' highlight'], {
                    name: name + ' highlight animation frame',
                    type: 'movie-clip',
                    frames: frames,
                    speed: 0.2,
                    position: [0, 3.5],
                    scale: [1.63, 1.50],
                    loop: true
                });
                position = [0, 2];
                scale = [1.55, 1.43];
            }
        }

        // highlight symbols
        frames = [];
        for (let k = 1; k <= 6; k++) {
            frames.push(frame_suffix + '_' + k.toString() + '.png');
        }
        this.buildChild(this[name + ' highlight'], {
            name: name + ' highlight animation',
            type: 'movie-clip',
            frames: frames,
            position: position,
            scale: scale,
            speed: 0.2,
            loop: true
        });

        if (image === 'B01ScatterBaseGame_0001.png') {
            this.buildChild(this[name + ' highlight'], {
                name: name + ' light animation',
                type: 'sprite',
                image: 'light',
                scale: [1.5, 1.5],
            });
            this[name + ' light animation'].tween = this.tween({
                set: ['rotation', 0],
                to: ['rotation', 2 * Math.PI, 16000, 0, Power0.easeNone],
                loop: true
            }, name + ' light animation');
        }
    }
    ,

    setSymbolsBlur: function (container, state) {

        let name = container.replace('container ', '');

        this[name + ' crisp'].visible = false;
        this[name + ' blur'].visible = false;

        if (state) this[name + ' blur'].visible = true;
        else this[name + ' crisp'].visible = true;

    }
    ,

    tweensBySprites: function (activeSprites, passiveSprites, highlightSprites, textSprites, lineSprites, textValue, lineNum, callback, winAmountLabelPos) {

        this.currentTweens.showTweens = [];
        this.currentTweens.hideTweens = [];
        this.currentTweens.hideQuickTweens = [];

        this.staticTweens.showTweens = [];
        this.staticTweens.hideTweens = [];
        this.staticTweens.hideQuickTweens = [];
        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }
        //init highlight sprite tweens
        if (this.state === 'ready') {
            this.currentTweens.showTweens.push(this.tween({
                name: 'win-animation',
                set: [
                    ['visible', true],
                    ['scale', [2.1, 2.2]]
                ],
            }, highlightSprites));

            this.currentTweens.showTweens[this.currentTweens.showTweens.length - 1].stop();
            this.currentTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['visible', false]
                ],
            }, highlightSprites));

            this.currentTweens.hideTweens[this.currentTweens.hideTweens.length - 1].stop();

            this.currentTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['visible', false, 200],
                ]
            }, highlightSprites));

            this.currentTweens.hideQuickTweens[this.currentTweens.hideQuickTweens.length - 1].stop();
        }

        // win amount label animation
        if (this.state === 'ready') {
            // tween
            this.currentTweens.showTweens.push(this.tween({
                name: 'win-animation',
                set: [
                    ['position', [(winAmountLabelPos[1] - 2) * 240, 60 + (winAmountLabelPos[0] - 1) * 260]],
                    ['visible', true],
                    ['scale', [0.1, 0.1]]
                ],
                to: [
                    ['scale', [1.0, 1.0], 100, Power1.easeInOut]
                ]
            }, 'line win amount wrapper'));

            this.currentTweens.showTweens[this.currentTweens.showTweens.length - 1].stop();
            this.currentTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['scale', [0.1, 0.1], 100, Power1.easeInOut]
                ],
                next: [
                    ['visible', false]
                ]
            }, 'line win amount wrapper'));

            this.currentTweens.hideTweens[this.currentTweens.hideTweens.length - 1].stop();

            this.currentTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['visible', false, 100],
                ]
            }, 'line win amount wrapper'));

            this.currentTweens.hideQuickTweens[this.currentTweens.hideQuickTweens.length - 1].stop();
        }

        // line animation
        {
            this.staticTweens.showTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['visible', true, 50]
                ]
            }, lineSprites));

            this.staticTweens.showTweens[this.staticTweens.showTweens.length - 1].stop();
            this.staticTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['visible', false]
                ]
            }, lineSprites));

            this.staticTweens.hideTweens[this.staticTweens.hideTweens.length - 1].stop();

            this.staticTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['visible', false]
                ]
            }, lineSprites));

            this.staticTweens.hideQuickTweens[this.staticTweens.hideQuickTweens.length - 1].stop();
        }

        // line effect animation
        {
            let line_effect_num = 'line effect ' + lineNum.toString();
            this.staticTweens.showTweens.push(this.tween({
                name: 'win-animation',
                set: [
                    ['visible', true]
                ]
            }, this[line_effect_num]));

            this.staticTweens.showTweens[this.staticTweens.showTweens.length - 1].stop();
            this.staticTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['visible', false]
                ]
            }, this[line_effect_num]));

            this.staticTweens.hideTweens[this.staticTweens.hideTweens.length - 1].stop();

            this.staticTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['visible', false]
                ]
            }, this[line_effect_num]));

            this.staticTweens.hideQuickTweens[this.staticTweens.hideQuickTweens.length - 1].stop();
        }

        if (this.state === 'ready') {
            this.currentTweens.show();
            this.staticTweens.show();
            this.tween({
                set: [
                    ['x', 0]
                ],
                to: ['x', 1830, 800, 10, Power1.easeOut],
                loop: false
            }, 'line effect mask');
        }

        let tempTimeout = null;
        if (this.state === 'ready') tempTimeout = setTimeout(() => {

            if (this.state !== 'ready') {
                if (tempTimeout) clearTimeout(tempTimeout);
                return;
            }

            if (this.state === 'ready') {
                this.staticTweens.hide();
                this.currentTweens.hide();
            }

            if (callback && (this.state === 'ready')) {

                let tempTimeout2 = null;
                let tempTimeout3 = null;

                if (this.state === 'ready') tempTimeout2 = setTimeout(() => {

                    if (this.state !== 'ready') {
                        if (tempTimeout2) clearTimeout(tempTimeout2);
                        return;
                    }

                    if (this.state === 'ready') {
                        this.currentTweens.hide();
                        // this.hideLinecontainer();
                        // caapllback.call(this);
                    }
                }, 10);
                if (this.state === 'ready') tempTimeout3 = setTimeout(() => {
                    if (this.state !== 'ready') {
                        if (tempTimeout2) clearTimeout(tempTimeout2);
                        return;
                    }
                    callback.call(this);
                }, 200);

            }

        }, 2500);

    }
    ,


    allanimatepassive: function (activeSprites, passiveSprites) {

        this.passiveTweens.showTweens = [];
        this.passiveTweens.hideTweens = [];
        this.passiveTweens.hideQuickTweens = [];
        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }

        //Passivesprite animation
        if (this.state === 'ready') {

            this.passiveTweens.showTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 0.35, 300]
            }, passiveSprites));

            this.passiveTweens.showTweens[this.passiveTweens.showTweens.length - 1].stop();

            this.passiveTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 1, 300, 500]
            }, passiveSprites));

            this.passiveTweens.hideTweens[this.passiveTweens.hideTweens.length - 1].stop();

            this.passiveTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: ['alpha', 1, 50, 0]
            }, passiveSprites));

            this.passiveTweens.hideQuickTweens[this.passiveTweens.hideQuickTweens.length - 1].stop();

        }

        if (this.state === 'ready') {
            if (this.passiveTweens.showTweens.length > 0)
                this.passiveTweens.show();
        }


    }
    ,

    animateLine: function (line, callback) {

        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }

        let highlightSprites = [];
        let activeSprites = [];
        let passiveSprites = [];
        let textSprites = [];
        let linesNum = line[4];
        let topHighlightSpriteName = 'card10';
        let winAmountLabelPos = [0, 0];

        let spritesModel = [];

        let matched_symbol_cnt = line[3] === 1 ? 3 : line[3];

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {

            if (this.state !== 'ready' || this.winAnimationMode === false)
                break;
            spritesModel[i] = [];

            for (let j = 0; j < this.ROWS_COUNT; j++) {

                if (this.state !== 'ready' || this.winAnimationMode === false)
                    break;

                spritesModel[i][j] = '';

                if (line[0][j][i] !== 0) {
                    if (line[1][i].name !== "wild") {
                        if (activeSprites.length < matched_symbol_cnt) {
                            activeSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                            spritesModel[i][j] = 'active';
                        } else
                            passiveSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);

                        if (highlightSprites.length < matched_symbol_cnt) {
                            spritesModel[i][j] = 'highlight';
                            highlightSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                            if (topHighlightSpriteName !== 'bonus') {
                                if (line[1][i].name === 'bonus' || App.SymbolsNames[line[1][i].name] > App.SymbolsNames[topHighlightSpriteName]) {
                                    winAmountLabelPos = [j, i];
                                    topHighlightSpriteName = line[1][i].name;
                                }
                            }
                        }
                    } else {
                        spritesModel[i][j] = 'active';
                        if (this.wildSprites.length === 0)
                            this.wildSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                    }
                }
            }
        }

        if (this.wildSprites.length !== 0)
            this.wildCardAnimation();

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {
            if (this.state !== 'ready') break;
            for (let j = 0; j < this.ROWS_COUNT; j++) {
                if (this.state !== 'ready') break;
                if ((spritesModel[i][j] !== 'active') && (spritesModel[i][j] !== 'highlight')) {
                    passiveSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                }
            }
        }

        let lineSprites = [];
        lineSprites.push("line " + linesNum);

        if (this.state !== 'ready' || this.winAnimationMode === false) {
            return;
        }
        this.tweensBySprites(activeSprites, passiveSprites, highlightSprites, textSprites, lineSprites, line[5], linesNum, callback, winAmountLabelPos);
    }
    ,

    animatePassiveLines: function (winData) {

        if (this.state !== 'ready' || this.winAnimationMode === false) {
            return;
        }

        // this.server_win_amount.value;
        let activeSprites = [];
        let passiveSprites = [];
        let highlightSprites = [];

        let spritesModel = [];

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {
            if (this.state !== 'ready') break;
            spritesModel[i] = [];

            for (let j = 0; j < this.ROWS_COUNT; j++) {
                if (this.state !== 'ready') break;

                spritesModel[i][j] = '';

                for (let k = 0; k < winData.winLines.length; k++) {
                    let lineData = winData.winLines[k];

                    if ((lineData[0][j][i] !== 0) && (spritesModel[i][j] !== 'active') && (spritesModel[i][j] !== 'highlight')) {
                        spritesModel[i][j] = 'active';
                        activeSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                        if ((spritesModel[i][j] !== 'highlight')) {
                            spritesModel[i][j] = 'highlight';
                            highlightSprites.push(this.reels[i].spriteHighlight.children[this.ROWS_COUNT + 1 + j].children[0].params.name.replace('crisp', 'highlight'));
                        }
                    }
                }
            }
        }

        for (let i = 0; i < this.COLUMNS_COUNT; i++) {
            for (let j = 0; j < this.ROWS_COUNT; j++) {
                if ((spritesModel[i][j] !== 'active') && (spritesModel[i][j] !== 'highlight')) {
                    passiveSprites.push(this.reels[i].sprite.children[this.ROWS_COUNT + 1 + j]);
                }
            }
        }

        if (this.state === 'ready') this.allanimatepassive(activeSprites, passiveSprites);
    }
    ,

    animateEachLine: function (winLines, callback) {

        if (this.state !== 'ready' || this.winAnimationMode === false) {
            callback = null;
            return;
        }

        this.timeouts = [];

        let win = 0;

        for (let i = 0; i < winLines.length; i++) {
            win += winLines[i][5];
        }

        if (win == 0) win = '';

        for (let i = 0; i < winLines.length; i++) {

            let lineData = winLines[i];

            let lineNum = i;

            if (this.state !== 'ready' || this.winAnimationMode === false) {
                callback = null;
                return;
            }

            let tempTimeout = null;
            if (this.state === 'ready') tempTimeout = setTimeout(() => {

                if (this.state !== 'ready' || this.winAnimationMode === false) {
                    if (tempTimeout) clearTimeout(tempTimeout);
                    callback = null;
                    return;
                }

                if (this.state === 'ready' && this.spinCombination)
                    this.staticTweens.hide();
                this.animateLine(lineData, () => {
                    if (this.spinCombination) {
                        if (this.spinCombination.winData.winLines.length - 1 === lineNum) {
                            if (this.state !== 'ready' || this.winAnimationMode === false) {
                                callback = null;
                                return;
                            }
                            if ((callback) && (this.state === 'ready')) callback.call(this);
                        }
                    }
                    show_win(win);
                });

            }, lineNum * 2700);

            this.timeouts.push(tempTimeout);

        }

    }
    ,

    wildCardAnimation: function () {
        if (this.wildSprites.length === 0)
            return;
        this.flashTweens.showTweens = [];
        this.flashTweens.hideTweens = [];
        this.flashTweens.hideQuickTweens = [];

        if (this.state === 'ready') {
            this.flashTweens.showTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['visible', true],
                    ['alpha', 1],
                    ['scale', [2.1, 2.1]]
                ]
            }, this.wildSprites));

            this.flashTweens.showTweens[this.flashTweens.showTweens.length - 1].stop();
            this.flashTweens.hideTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['visible', false, 200],
                    ['alpha', 0, 200]
                ],
            }, this.wildSprites));

            this.flashTweens.hideTweens[this.flashTweens.hideTweens.length - 1].stop();

            this.flashTweens.hideQuickTweens.push(this.tween({
                name: 'win-animation',
                to: [
                    ['visible', false, 200],
                    ['alpha', 0, 200]
                ]
            }, this.wildSprites));

            this.flashTweens.hideQuickTweens[this.flashTweens.hideQuickTweens.length - 1].stop();
            this.flashTweens.show();
        }
    },

    winAnimation: function () {
        if (this.spinCombination.winData.winLines.length > 0) {
            if (this.state !== 'ready' || this.winAnimationMode === false) {
                this.refreshPanelValues();
                return;
            }

            this.animateEachLine(this.spinCombination.winData.winLines, () => {
                if (this.state !== 'ready') return;
                let tempTimeout = null;
                if (this.state === 'ready') tempTimeout = setTimeout(() => {

                    if (this.state !== 'ready' || this.winAnimationMode === false) {
                        if (tempTimeout) clearTimeout(tempTimeout);
                        return;
                    }

                    this.state = 'ready';
                    // this.winAnimationMode = false;
                    if (this.auto_mode) {
                        this.spin();
                    } else {
                        if (this.state === 'ready') this.winAnimation();
                    }

                }, 0);
            });
        } else {

            // if (this.creditsNotInc) {
            //     this.credits.value += this.server_win_amount;
            //     this.credits.drawed = this.credits.value;
            // }

            this.refreshPanelValues();
        }

    }
    ,

    animFieldPoints: function (fieldName, points, bAnim = false, speed = 0) {
        // if (bAnim === false) {
        //     if (this[fieldName + ' text'].text === points.toString()) return;
        //     this[fieldName + ' text'].text = points.toString();
        // } else if (this[fieldName].text !== points.toString()) {
        //     let duration = 1000;
        //     if (points > 10000)
        //         duration = 9000;
        //     else if (points > 5000)
        //         duration = 6000;
        //     else if (points > 1000)
        //         duration = 4000;
        //     else if (points > 500)
        //         duration = 2000;

        //     this.tween({
        //         set: ['drawed', this[fieldName].drawed],
        //         to: ['drawed', points, duration, 100, Expo.easeOut],
        //         update: () => {
        //             this[fieldName + ' text'].text = Math.trunc(this[fieldName].drawed).toString();
        //             this.roll_sound_play = false;
        //         }
        //     }, fieldName);
        // }
    }
    ,

    tutorialTimeout: function (timeout) {

        if (this.state !== 'intro') {

            clearTimeout(this.TutorialTimeout);
            this.TutorialTimeout = setTimeout(function () {

                if (Settings["tutorial"] && !App.Tutorial.showed && !App.CallToAction.showed) App.Tutorial.show();

            }, typeof timeout === "number" ? timeout : Settings["tutorial-timeout"]);

        }

    }
    ,

    hideTutorial: function () {

        clearTimeout(this.TutorialTimeout);

        if (App.Tutorial.showed) App.Tutorial.hide();

    }
    ,

    handleAutoButtonOver: function (container, e) {
    }
    ,

    handleAutoButtonOut: function (container, e) {
        let nameGlow1 = container.name;

        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
    },

    handleAutoButtonUp: function (container, e) {
        let name = container.name;

        if (this[name].tween) this[name].tween.stop();

        switch (name) {
            default:
                if (name.indexOf('autoplay item') === 0) {
                    this.buttonHandleAutoItem(this[name].step);
                }
                break;
        }
    }
    ,

    handleAutoButtonDown: function (container, e) {
        let nameGlow1 = container.name;
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
    },

    handleMusicButtonDown: function (container, e) {

        if (this['menu_body backgroundmusic red'].alpha === 1) {
            this['menu_body backgroundmusic red'].alpha = 0;
            this.backSound.stop();
        } else {
            this['menu_body backgroundmusic red'].alpha = 1;
            this.playSound("background_music", {}, {volume: this.sound_mode ? 0.5 : 0, loop: true}, sound => {
                this.backSound = sound;
            });
        }
    }
    ,

    handleTotalBetButtonOver: function (container, e) {
    }
    ,

    handleTotalBetButtonOut: function (container, e) {
        let nameGlow1 = container.name;

        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();

        if (this[nameGlow1].pressed === true) {
            this[nameGlow1].tween = this.tween({
                to: ['scale', [this[nameGlow1].scale._x + 0.1, this[nameGlow1].scale._y + 0.1], 150, 0, Power1.easeOut]
            }, nameGlow1);
            this[nameGlow1].pressed = false;
        }
    }
    ,

    handleTotalBetButtonUp: function (container, e) {
        let name = container.name;

        if (this[name].tween) this[name].tween.stop();

        if (this[name].pressed === true) {
            this[name].tween = this.tween({
                to: ['scale', [this[name].scale._x + 0.1, this[name].scale._y + 0.1], 150, 0, Power1.easeOut]
            }, name);
            this[name].pressed = false;

            switch (name) {
                default:
                    if (name.indexOf('menu_body totalbet') === 0) {
                        this.buttonHandleTotalbetItem(container, 'menu_body totalbet');
                    }
                    break;
            }
        }
    }
    ,

    handleTotalBetButtonDown: function (container, e) {
        let nameGlow1 = container.name;
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].pressed = true;
        this[nameGlow1].tween = this.tween({
            to: ['scale', [this[nameGlow1].scale._x - 0.1, this[nameGlow1].scale._y - 0.1], 150, 0, Power1.easeOut]
        }, nameGlow1);
    }
    ,

    handleMenuButtonOver: function (container, e) {
        let nameGlow1 = container.name + ' glow';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: ['alpha', 1, 150, 0, Power1.easeOut]
        }, nameGlow1);
    }
    ,

    handleMenuButtonOut: function (container, e) {
        let nameGlow1 = container.name + ' glow';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: ['alpha', 0, 150, 0, Power1.easeOut]
        }, nameGlow1);

        let name = container.name;

        if (this[name].tween) this[name].tween.stop();

        if (this[name].pressed === true) {
            this[name].tween = this.tween({
                to: ['scale', [this[name].scale._x + 0.1, this[name].scale._y + 0.1], 150, 0, Power1.easeOut]
            }, name);
            this[name].pressed = false;
        }
    }
    ,

    handleMenuButtonUp: function (container, e) {
        let name = container.name;

        if (this[name].tween) this[name].tween.stop();

        if (this[name].pressed === true) {
            this[name].tween = this.tween({
                to: ['scale', [this[name].scale._x + 0.1, this[name].scale._y + 0.1], 150, 0, Power1.easeOut]
            }, name);
            this[name].pressed = false;

            if (name.indexOf('menu_header item') === 0) {
                this.buttonHandleMenuHeaderItem(container, 'menu_header item');
            }
        }
    }
    ,

    handleMenuButtonDown: function (container, e) {
        let nameGlow1 = container.name;
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].pressed = true;
        this[nameGlow1].tween = this.tween({
            to: ['scale', [this[nameGlow1].scale._x - 0.1, this[nameGlow1].scale._y - 0.1], 150, 0, Power1.easeOut]
        }, nameGlow1);
    }
    ,

    handleButtonOut: function (container, e) {
        if (this.freeze_status)
            return;
        let nameGlow = container.name + ' glow';

        if (this[nameGlow].tween) this[nameGlow].tween.stop();

        this[nameGlow].tween = this.tween({
            to: ['alpha', 0, 150, 0, Power1.easeOut]
        }, nameGlow);
/*
        let nameGlow1 = container.name;

        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();

        if (this[nameGlow1].pressed === true) {
            this[nameGlow1].tween = this.tween({
                to: ['scale', [this[nameGlow1].scale._x + 0.1, this[nameGlow1].scale._y + 0.1], 150, 0, Power1.easeOut]
            }, nameGlow1);
            this[nameGlow1].pressed = false;
        }*/
    }
    ,

    handleButtonOver: function (container, e) {
        if (this.freeze_status || this.state !== 'ready')
            return;
        let nameGlow1 = container.name + ' glow';
        if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].tween = this.tween({
            to: ['alpha', 1, 150, 0, Power1.easeOut]
        }, nameGlow1);
    }
    ,

    handleButtonUp: function (container, e) {

        if (this.freeze_status)
            return;

        let nameGlow = container.name + ' glow';

        if (this[nameGlow].tween) this[nameGlow].tween.stop();

        this[nameGlow].tween = this.tween({
            to: ['alpha', 0, 150, 0, Power1.easeOut]
        }, nameGlow);

        let name = container.name;

        switch (name) {
            case 'continue button':
                this.buttonHandleContinueButton(container);
                break;
            case 'start button':
                /*if (!this.isfreespin)*/
                this.buttonHandleStartButton(container);
                /*else
                    this.buttonHandleFreeStartButton(container);*/
                break;
            case 'auto start button':
                this.buttonHandleAutoStartButton(container);
                break;
            case 'autospin_dialog close button':
                this.buttonHandlerCloseDialog(container);
                break;
            case 'menu_body sound button':
                this.buttonHandlerAudioSet();
                break;
            case 'close button':
                this.buttonHandlerClose(container);
                break;
            case 'menu_body close button':
                this.hideMenuContainer();
                break;
            case 'coinsUp button':
            case 'settings coinsUp button':
                this.coinBarClicked(true);
                break;
            case 'coinsDown button':
            case 'settings coinsDown button':
                this.coinBarClicked(false);
                break;
            case 'linesUp button':
            case 'settings linesUp button':
                this.lineBarClicked(true);
                break;
            case 'linesDown button':
            case 'settings linesDown button':
                this.lineBarClicked(false);
                break;
            case 'home button':
                this.showMenuContainer(3);
                break;
            case 'autoplay button':
                if (!this.auto_mode) {
                    this.showAutoplayContainer(true);
                } else {
                    this['start button bar'].visible = true;
                    this['autostart button bar'].visible = false;
                    this['autoplay button text'].text = 'AUTO PLAY';
                    this.auto_mode = false;
                }
                break;
            case 'autoplay cancelBtn':
                this.showAutoplayContainer(false);
                break;
            case 'coinvalue button':
                this.buttonhandlerCoinValue();
                break;
            case 'settings coinValueUp button':
                this.coinValueBarClicked(true);
                break;
            case 'settings coinValueDown button':
                this.coinValueBarClicked(false);
                break;
            case 'autostart button':
                this.refreshAutoItemBack(this.current_auto_amount);
                this.showMenuContainer(2);
                break;
            case 'autostop button':
                this.handleButtonAutoStop(container);
                break;
            case 'menu_body info down button':
                this.showHelpContainer(this.helpPageIndex, false);
                break;
            case 'menu_body info up button':
                this.showHelpContainer(this.helpPageIndex, true);
                break;
            case 'menu button':
                this.showMenuContainer(2);
                if (this['menu button'].texture_name === 'menu') {
                    this['menu button'].texture_name = 'back';
                    this['menu button'].texture = this.getTexture('back.png');
                } else if (this['menu button'].texture_name === 'back') {
                    this['menu button'].texture_name = 'menu';
                    this['menu button'].texture = this.getTexture('menu.png');
                }
                break;

            case 'autoplay okBtn':
                this.buttonHandleAutoStartButton();
                this.showAutoplayContainer(false);
                break;

            case 'setting button':
                this.showSettingsContainer(true);
                break;
            case 'settings okBtn':
                this.showSettingsContainer(false);
                break;
            case 'sound button':
                this.buttonHandlerAudioSet();
                break;

            case 'speed button':
                this.buttonHandlerSpeedSet();
                break;

            case 'help button':

                break;

            case 'maxBet button':
                if (this.auto_mode)
                    return;
                this.buttonHandleMaxbetButton();
                break;

            case 'paytable button':
                this.paytableContainer(true);
                break;

            case 'help page down button':
                this.paytableContainer(false);
                break;
            case 'help page next button':
                this.paytableNext(true);
                break;
            case 'help page prev button':
                this.paytableNext(false);
                break;
            default:
                if (name.indexOf('button automenu') === 0) {
                    this.buttonHandleAutoItem(container, name);
                }
                break;
        }
    }
    ,

    /*------------------New method definition started------------------*/

    coinBarClicked: function(up) {
        if (this.state !== 'ready' || this.auto_mode) return;
        let cur_step = this.coins.step;
        if (up === true) {
            if (cur_step < this.coin_value_list.length) {
                cur_step++;
            }
        } else {
            if (cur_step > 1) {
                cur_step--;
            }
        }
        this.refreshCoinBar(cur_step);
        this.setBetAmountValues(this.lines.step, this.levels.step, cur_step, this.weight.step);
    },

    lineBarClicked: function(up) {
        if (this.state !== 'ready' || this.auto_mode) return;
        let cur_step = this.lines.step;
        if (up === true) {
            if (cur_step < this.line_value_list.length) {
                cur_step++;
            }
        } else {
            if (cur_step > 1) {
                cur_step--;
            }
        }
        this.refreshLineBar(cur_step);
        this.setBetAmountValues(cur_step, this.levels.step, this.coins.step, this.weight.step);
    },

    coinValueBarClicked: function(up = true) {
        if (this.state !== 'ready' || this.auto_mode) return;
        let cur_step = this.weight.step;
        if (up === true) {
            if (cur_step < this.coin_weight_list.length) {
                cur_step ++;
            }
        } else {
            if (cur_step > 1) {
                cur_step--;
            }
        }
        this.refreshCoinValuBar(cur_step);
        this.setBetAmountValues(this.lines.step, this.levels.step, this.coins.step, cur_step);
    },

    refreshCoinBar: function (cur_step) {
        switch (cur_step) {
            case 1:
                this.setStatusControlBar(['coinsDown button'], this.const.STATUS_TYPE.DISABLED);
                this.setStatusControlBar(['coinsUp button'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['settings coinsDown button'], this.const.STATUS_TYPE.DISABLED);
                this.setStatusControlBar(['settings coinsUp button'], this.const.STATUS_TYPE.NORMAL);
                break;
            case this.coin_value_list.length:
                this.setStatusControlBar(['coinsDown button'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['coinsUp button'], this.const.STATUS_TYPE.DISABLED);
                this.setStatusControlBar(['settings coinsDown button'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['settings coinsUp button'], this.const.STATUS_TYPE.DISABLED);
                break;
            default:
                this.setStatusControlBar(['coinsDown button'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['coinsUp button'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['settings coinsDown button'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['settings coinsUp button'], this.const.STATUS_TYPE.NORMAL);
                break;
        }
    },

    refreshLineBar: function (cur_step) {
        switch (cur_step) {
            case 1:
                this.setStatusControlBar(['linesDown button'], this.const.STATUS_TYPE.DISABLED);
                this.setStatusControlBar(['linesUp button'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['settings linesDown button'], this.const.STATUS_TYPE.DISABLED);
                this.setStatusControlBar(['settings linesUp button'], this.const.STATUS_TYPE.NORMAL);
                break;
            case this.line_value_list.length:
                this.setStatusControlBar(['linesDown button'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['linesUp button'], this.const.STATUS_TYPE.DISABLED);
                this.setStatusControlBar(['settings linesDown button'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['settings linesUp button'], this.const.STATUS_TYPE.DISABLED);
                break;
            default:
                this.setStatusControlBar(['linesDown button'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['linesUp button'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['settings linesDown button'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['settings linesUp button'], this.const.STATUS_TYPE.NORMAL);
                break;
        }
    },

    refreshCoinValuBar: function(cur_step) {
        switch (cur_step) {
            case 1:
                this.setStatusControlBar(['settings coinValueDown button'], this.const.STATUS_TYPE.DISABLED);
                this.setStatusControlBar(['settings coinValueUp button'], this.const.STATUS_TYPE.NORMAL);
                break;
            case this.coin_weight_list.length:
                this.setStatusControlBar(['settings coinValueDown button'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['settings coinValueUp button'], this.const.STATUS_TYPE.DISABLED);
                break;
            default:
                this.setStatusControlBar(['settings coinValueDown button'], this.const.STATUS_TYPE.NORMAL);
                this.setStatusControlBar(['settings coinValueUp button'], this.const.STATUS_TYPE.NORMAL);
                break;
        }
    },

    showAutoplayContainer: function(show = true) {
        this['AutoPlayContainer'].visible = show;
    },

    showMenuContainer: function (header_index) {
        if (this['MenuContainer'].visible) {
            this['MainContainer'].visible = true;
            this['MenuContainer'].visible = false;
        } else {
            this.playSound("btn_popupopen", {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
            this['MainContainer'].visible = false;
            this['MenuContainer'].visible = true;
            this.refreshMenuHeaderItemBack(header_index);
        }
    }
    ,

    hideMenuContainer: function () {
        this.playSound("btn_popupclose", {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});
        this['MenuContainer'].visible = false;
        this['MainContainer'].visible = true;
        this['win bar'].visible = false;
    }
    ,

    showHelpContainer: function (index, bUp) {
        if (bUp === true) {
            if (index === 1)
                index = 7;
            else
                index--;
        } else {
            if (index === 7)
                index = 1;
            else
                index++;
        }

        for (let i = 1; i <= 7; i++) {
            if (index === i) {
                this['menu_body infochild container ' + i].visible = true;
            } else {
                this['menu_body infochild container ' + i].visible = false;
            }
        }
        this.helpPageIndex = index;
    }
    ,

    handleButtonDown: function (container, e) {
        if (this.freeze_status || this.state !== 'ready')
            return;
        let nameGlow1 = container.name;
        /*if (this[nameGlow1].tween) this[nameGlow1].tween.stop();
        this[nameGlow1].pressed = true;
        this[nameGlow1].tween = this.tween({
            to: ['scale', [this[nameGlow1].scale._x - 0.1, this[nameGlow1].scale._y - 0.1], 150, 0, Power1.easeOut]
        }, nameGlow1);*/

        this.cur_mouse_capture_container_name = container.name;
    },

    handleButtonAutoStop: function (container) {
        this['autostop button bar'].visible = false;
        // this.setStatusCenterBar('start button', this.const.STATUS_TYPE.NORMAL);
        // this.setStatusControlBar([], this.const.STATUS_TYPE.NORMAL);
        // this.setStatusControlBar(['autostop button'], this.const.STATUS_TYPE.INVISIBLE);
        // this.setStatusControlBar(['autostart button'], this.const.STATUS_TYPE.VISIBLE);
        this.auto_mode = false;
        this.current_auto_amount = 0;
        this.refreshAutoamount();
    },

    buttonHandleAutoItem: function (step) {
        if (this.state !== 'ready') return;
        this.current_auto_amount = step;
        this.refreshAutoItemBack(step);
    },

    refreshAutoItemBack: function (number) {
        let items = [10, 20, 50, 75, 100];
        for (let i = 0; i < items.length; i++) {
            if (number !== items[i]) {
                this[`autoplay item ${items[i]} active`].visible = false;
                this[`autoplay item ${items[i]} disable`].visible = true;
            } else {
                this[`autoplay item ${items[i]} active`].visible = true;
                this[`autoplay item ${items[i]} disable`].visible = false;
            }
        }
        if (number === 0) {
            this.current_auto_amount = 0;
            this['start button'].visible = true;
            this.setStatusCenterBar('start button', this.const.STATUS_TYPE.NORMAL);
        } else {
            this.winAnimationMode = false;
            this.current_auto_amount = number;
            this.refreshAutoamount();
            this.setStatusCenterBar('auto start button', this.const.STATUS_TYPE.NORMAL);
        }
    }
    ,

    refreshAutoamount: function () {
        this['autoValue text'].text = this.current_auto_amount;
    },

    setStatusCenterBar: function (name, status) {
        // let bar_names = ['start button bar', 'auto start button bar', 'forward button bar'];
        // let button_items = ['start button', 'auto start button', 'forward button'];
        // for (let i = 0; i < bar_names.length; i++) {
        //     if (name === button_items[i]) {
        //         this[bar_names[i]].visible = true;
        //         if (status === this.const.STATUS_TYPE.DISABLED) {
        //             this[name + ' disabled'].alpha = 1;
        //             this[name + ' disabled'].visible = true;
        //         } else {
        //             this[name + ' disabled'].alpha = 0;
        //             this[name + ' disabled'].visible = false;
        //         }
        //     } else {
        //         this[bar_names[i]].visible = false;
        //     }
        // }
    }
    ,

    setStatusControlBar: function (names, status) {
        let bar_names = [
            'start button bar', 'paytable button bar', 'autoplay button bar', 'linesUp button bar',
            'linesDown button bar', 'coinsUp button bar', 'coinsDown button bar', 'maxBet button bar',
            'settings coinValueUp button bar', 'settings coinValueDown button bar',
            'settings coinsUp button bar', 'settings coinsDown button bar',
            'settings linesUp button bar', 'settings linesDown button bar',
        ];
        let button_names = [
            'start button', 'paytable button', 'autoplay button', 'linesUp button',
            'linesDown button', 'coinsUp button', 'coinsDown button', 'maxBet button',
            'settings coinValueUp button', 'settings coinValueDown button',
            'settings coinsUp button', 'settings coinsDown button',
            'settings linesUp button', 'settings linesDown button',
        ];
        for (let i = 0; i < bar_names.length; i++) {
            if (names.includes(button_names[i])) {
                this[bar_names[i]].visible = true;
                if (status === this.const.STATUS_TYPE.DISABLED) {
                    this[button_names[i] + ' disabled'].visible = true;
                } else if (status === this.const.STATUS_TYPE.INVISIBLE) {
                    this[bar_names[i]].visible = false;
                } else if (status === this.const.STATUS_TYPE.NORMAL) {
                    this[button_names[i] + ' disabled'].visible = false;
                } else if (status === this.const.STATUS_TYPE.VISIBLE) {
                    this[bar_names[i]].visible = true;
                }
            }
        }
    },

    buttonHandleTotalbetItem: function (container, name) {
        if (this.state !== 'ready') return;
        this.refreshTotalbetItemBack(container.step);
        this.bet.step = container.step + 1;
        // this.bet.amount = this.totalbet_value_list[container.step] * this.line_value_list[0];
        this.refreshPanel();
        this.refreshTotalbet(this.bet.step);
    }
    ,

    refreshTotalbetItemBack: function (number) {
        for (let i = 0; i < this.totalbet_value_list.length; i++) {
            if (number !== i) {
                let tweenname = "menu_body totalbet " + i + " disabled";
                let selected_name = "menu_body totalbet " + i + " selected";
                this.tween({
                    to: ['alpha', 1, 150, 0, Power1.easeOut]
                }, tweenname);
                this.tween({
                    to: ['alpha', 0, 150, 0, Power1.easeOut]
                }, selected_name);
            } else {
                this["menu_body totalbet " + number + " disabled"].alpha = 0;
                this["menu_body totalbet " + number + " selected"].alpha = 1;
            }
        }
    }
    ,

    buttonHandleMenuHeaderItem: function (container, name) {
        if (this.state !== 'ready') return;

        this.refreshMenuHeaderItemBack(container.step);
    }
    ,

    refreshMenuHeaderItemBack: function (number) {
        switch (number) {
            case 1:
                this['menu_body title'].text = 'SOUNDS';
                break;
            case 2:
                this['menu_body title'].text = 'AUTOPLAY';
                break;
            case 3:
                this['menu_body title'].text = 'TOTAL BET';
                break;
            case 4:
                this['menu_body title'].text = '';
                break;
        }

        let title_value_list = ['sound', 'autoplay', 'totalbet', 'info'];

        for (let i = 1; i <= 4; i++) {
            if (number !== i) {
                let tweenname = "menu_header item " + i + " background";
                this.tween({
                    to: ['alpha', 0, 10, 0, Power1.easeOut]
                }, tweenname);

                let containername = 'menu_body ' + title_value_list[i - 1] + ' container';
                this.tween({
                    to: ['visible', false, 10, 0, Power1.easeOut]
                }, containername);
            } else {
                let tweenname = "menu_header item " + i + " background";
                this.tween({
                    to: ['alpha', 1, 10, 0, Power1.easeOut]
                }, tweenname);
                let containername = 'menu_body ' + title_value_list[i - 1] + ' container';
                this.tween({
                    to: ['visible', true, 10, 0, Power1.easeOut]
                }, containername);
            }
        }
    }
    ,

    refreshPanel: function () {
        // this['control totalbet amount text'].text = this.bet.amount.toString();
        // this['bottom win text'].text = ''; // this.bet.amount.toString();
        this['menu_body totalbet title'].text = this.bet.amount.toString();
    }
    ,

    buttonHandleAutoStartButton: function () {
        if (this.state !== 'ready') return;
        if (this.auto_mode === false) {
            this.auto_mode = true;
            this.spin();
        }
    },

    /*------------------New method definition ended------------------*/

    completeFreespin: function () {
        this['ControlPanelContainer'].visible = true;
        this['back_fire'].visible = true;
        this['background container wrapper'].visible = true;
        this['free_background container wrapper'].visible = false;
        this['start button'].texture = this.getTexture(this.startbuttonNormalbg);
        this['start button glow'].texture = this.getTexture(this.startbuttonGlowbg);
        this['statusvalue text'].visible = false;
    },

    buttonHandleContinueButton: function (container) {
        MRAID.markMeaningfulInteraction();
        this['LoadingContainer'].removeChildren();
        $("button#menu").css("opacity", "1.0");
        $("button#sound").css("display", "none");
        document.getElementById("footer").style.zIndex = 9999;
    },

    buttonHandleStartButton: function (container) {
        this.hideMenuContainer();
        if (this.credits.value < this.bet.amount)
            return;

        MRAID.markMeaningfulInteraction();

        if (this.state !== 'ready') return;

        this.playSound("btn_spin", {}, {volume: this.sound_mode ? 0.5 : 0, loop: false});

        this.spin();

        this.refreshPanelValues();
    },

    buttonHandlerCloseDialog: function (container) {
        MRAID.markMeaningfulInteraction();
        this.playSound('btn_auto_close', {}, {volume: this.sound_mode ? 1 : 0, loop: false});
        this.automenu_mode = false;
    },

    buttonHandlerAudioSet: function () {
        this.sound_mode = !(this.sound_mode);
        if (this.sound_mode) {
            this.playSound("background_music", {}, {volume: this.sound_mode ? 0.5 : 0, loop: true}, sound => {
                this.backSound = sound;
            });
            if (this['sound button']) this['sound button'].texture = this.getTexture("soundModeEnabled");
        } else {
            this.backSound.stop();
            if (this['sound button']) this['sound button'].texture = this.getTexture("soundModeDisabled");
        }
    },

    buttonHandlerSpeedSet: function() {
        this.speed_mode = !this.speed_mode;
        if (this.speed_mode) {
            this['speed button'].texture = this.getTexture('speedModeEnabled')
        } else {
            this['speed button'].texture = this.getTexture('speedModeDisabled')
        }
    },

    buttonhandlerCoinValue: function() {
        let cur_step = this.weight.step;
        this.weight.step ++;
        if(this.weight.step > this.coin_weight_list.length) {
            this.weight.step = 1;
        }
        this.refreshCoinValuBar(this.weight.step);
        this.setBetAmountValues(this.lines.step, this.levels.step, this.coins.step, this.weight.step)
    },

    buttonHandlerClose: function (container) {
        this.closeGame();
    },

    buttonHandleMaxbetButton: function() {
        if (this.coins.step !== this.coin_value_list.length || this.lines.step !== this.line_value_list.length) {
            this.coins.step = this.coin_value_list.length;
            this.lines.step = this.line_value_list.length;
            this.setBetAmountValues(this.lines.step, this.levels.step, this.coins.step, this.weight.step);
            this.refreshLineBar(this.lines.step);
            this.refreshCoinBar(this.coins.step);
        } else {
            this.spin();
        }
    },

    showSettingsContainer: function(show = true) {
        this['SettingsContainer'].visible = show;
    },

    paytableContainer: function(show = true) {
        if(show) {
            this['PaytableContainer'].visible = true;
        } else {
            this['PaytableContainer'].visible = false;
        }
    },

    paytableNext: function(next = true) {
        let current = this.helpPageIndex;
        if(next) {
            this.helpPageIndex ++;
            if(this.helpPageIndex > 3) {
                this.helpPageIndex = 1;
            }

        } else {
            this.helpPageIndex --;
            if(this.helpPageIndex < 1) {
                this.helpPageIndex = 3;
            }
        }
        this['help indicator ' + current + ' active'].visible = false;
        this['helpContainer ' + current].visible = false;
        this['help indicator ' + this.helpPageIndex + ' active'].visible = true;
        this['helpContainer ' + this.helpPageIndex].visible = true;
    },

    setBetAmountValues: function (line_step, level_step, coin_step, weight_step) {

        let line_value = this.line_value_list[line_step - 1];
        let level_value = this.totalbet_value_list[level_step - 1];
        let coin_value = this.coin_value_list[coin_step - 1];
        let weight_value  = this.coin_weight_list[weight_step - 1];

        let betAmount = line_value * coin_value;

        if (this.credits.value < betAmount) {
            console.warn("BetAmount is lower than Credit Value");
            return false;
        }

        this.lines.value = line_value;
        this.lines.step = line_step;

        this.levels.value = level_value;
        this.levels.step = level_step;

        this.coins.value = coin_value;
        this.coins.step = coin_step;

        this.weight.value = weight_value;
        this.weight.step = weight_step;

        this.bet.amount = betAmount;
        this.bottombet.amount = weight_value * betAmount;

        this.refreshPanelValues();
    }
    ,

    setCoinValues: function (coin_step, level_step) {

        let line_value = this.coins_;
        let level_value = this.totalbet_value_list[level_step - 1];

        let betAmount = line_value * level_value;

        if (this.credits.value < betAmount) {
            return false;
        }

        this.lines.value = line_value;
        this.coins.step = coin_step;

        this.levels.value = level_value;
        this.levels.step = level_step;

        this.bet.amount = betAmount;

        this.refreshPanelValues();
    },

    refreshPanelValues: function () {
        this.animFieldPoints('credits bar', this.credits.drawed);
        this['coinsvalue text'].text = this.coins.value;
        this['linesvalue text'].text = this.lines.value;
        this['betvalue text'].text = `BET: ${this.bet.amount}`;
        this['bottomBet text'].text = `BET: ${this.bottombet.amount.toFixed(2).toString()}`;
        this['bottomBalance text'].text = `Balance: ${this.credits.value}`;
        this['coinvalue text'].text = `${this.weight.value.toFixed(2).toString()}`;
        this['coins text'].text = `COINS: ${(this.credits.value / this.weight.value).toFixed(0).toString()}`;
        this['settings coins text'].text = this.coins.value;
        this['settings lines text'].text = this.lines.value;
        this['settings coinValue text'].text = this.weight.value.toFixed(2).toString();
        // this.animFieldPoints('bottom totalbet', this.bet.amount);
        // this.animFieldPoints('control totalbet amount', this.bet.amount);
        // this['menu_body totalbet title'].text = this.bet.amount;
        // this.animFieldPoints('coin bar', this.coins.value);
        // this.animFieldPoints('win bar', this.server_win_amount.drawed, true);
        // this.animFieldPoints('betamount', this.levels.value * this.line_value_list);
        // this.animFieldPoints('bet bar', this.bet.amount.toFixed(2).toString());
        // this.animFieldPoints('total_bet bar', this.bet.amount.toFixed(2).toString());
        //
        // if (this.auto_mode) {
        //     this.animFieldPoints('autoamount', this.current_auto_amount);
        // }
        //
        // if (this.auto_mode === false) {
        //     this['start button'].visible = true;
        //     this['stop button'].visible = false;
        // } else {
        //     this['start button'].visible = true;
        //     this['stop button'].visible = false;
        // }
    }
    ,

    startMultiplierAnimation: function (name) {
        this['multiplier_' + name + ' container'].visible = true;
        this['multiplier_' + name + ' container'].children[2].visible = true;
        // this['multiplier_2x container'].children[0].visible = true;
        this['multiplier_' + name + ' container'].children[2].gotoAndPlay(0);
        setTimeout(() => {
            this['multiplier_' + name + ' container'].children[2].stop();
            this['multiplier_' + name + ' container'].children[2].visible = false;
            this['multiplier_' + name + ' container'].children[1].visible = true;
            this['multiplier_' + name + ' container'].children[1].gotoAndPlay(0);
            this['multiplier_' + name + ' number'].visible = true;
            this['multiplier_' + name + ' x'].visible = true;
        }, 450);
    }
    ,

    stopMultiplierAnimation: function (name) {
        this.tween({
            to: ['visible', false, 250, 0, Power1.easeIn]
        }, 'multiplier_' + name + ' container');
        this['multiplier_' + name + ' container'].children[2].visible = false;
        this['multiplier_' + name + ' container'].children[2].stop();
        this['multiplier_' + name + ' container'].children[1].visible = false;
        this['multiplier_' + name + ' container'].children[1].stop();
        this['multiplier_' + name + ' number'].visible = false;
        this['multiplier_' + name + ' x'].visible = false;
    }
    ,

    startReelfireAnimation: function (name) {
        this[name + ' container'].visible = true;
        this[name + ' container'].children[0].visible = true;
        this[name + ' container'].children[0].gotoAndPlay(0);
    }
    ,

    stopReelfireAnimation: function (name) {
        this[name + ' container'].visible = false;
        this[name + ' container'].children[0].visible = false;
        this[name + ' container'].children[0].stop();
    }
    ,

    startReelSplashAnimation: function (name) {
        this[name + ' container'].visible = true;
        this[name + ' container'].children[1].visible = true;
        this[name + ' container'].children[1].gotoAndPlay(0);
    }
    ,

    stopReelSplashAnimation: function (name) {
        this[name + ' container'].visible = false;
        this[name + ' container'].children[1].visible = false;
        this[name + ' container'].children[1].stop();
    }
    ,

    setValues: function () {
        this.startbuttonNormalbg = "spinButtonIdle.png";
        this.startbuttonGlowbg = "spinButtonOver.png";
        this.startbuttonDisablebg = "spinButtonDisabled.png";
        this.maxbetbuttonNormalbg = "maxBetButtonUp.png";
        this.maxbetButtonDisablebg = "maxBetButtonDisabled.png";
        this.autobuttonNormalbg = "autoPlayButtonUp.png";
        this.autoButtonGlowbg = "autoPlayButtonOver.png";
    }
    ,

    /*hideLinecontainer: function () {
        this['line container'].visible = false;
    },

    showLinecontainer: function () {
        this['line container'].visible = true;
    },*/

    interval: 0,
    server_initMatrix:
        [],
    server_arrRetVal:
        [],
    server_scatters:
        [],
    base_amount:
        [100, 25, 7, 20, 10, 5, 10, 5, 3, 10, 5, 3, 500, 50, 10, 50, 25, 5, 8, 4, 2, 8, 4, 2, 8, 4, 2, 5, 2, 1],
    api_url: "https://ace.777berserk.org/api/",
    // api_url: "http://localhost:8000/api/",
    server_win_amount:
        {
            value: 0,
            drawed:
                0
        }
    ,
    gamesession_id: "",
    session_id:
        0,

    freeze_status:
        false,

    first_reel:
        false,
    second_reel:
        false,
    third_reel:
        false,

    freespin_animation:
        false,
    freespin_count:
        0,
    isfreespin:
        false,
    freespin_index:
        0,
    freespin_first_animation:
        false,
    total_freespin_amount:
        0,
    freespin_end:
        false,
    base_sound:
        null,
    roll_sound:
        null,
    roll_sound_play:
        false,

    nomean_multiplier:
        2,

    levelup_state:
        false,
    leveldown_state:
        false,
    coinup_state:
        false,
    coindown_state:
        false,

    bonus_highlights:
        [],
    bonus_active:
        [],
    wildSprites: [],

    removeCellMatrix: function (matrix, card_count, direction) {
        for (var i = 0; i < 3; i++) {
            for (var j = card_count; j < 5; j++) {
                matrix[i][j] = 0;
            }
        }
        return matrix;
    },

    exchangeMatrix: function (matrix) {
        var return_matrix = [[], [], [], [], []];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 5; j++) {
                return_matrix[j][i] = matrix[i][j];
            }
        }
        return return_matrix;
    }
    ,

    exchangeagain: function (matrix) {
        var return_matrix = [[], [], [], [], []];
        for (var i = 0; i < 5; i++)
            for (var j = 0; j < 3; j++) {
                return_matrix[4 - i][j] = matrix[i][j];
            }
        return return_matrix;
    }
    ,

    generateWinData: function () {
        var serverData = this.server_arrRetVal;
        var changed_matrix = this.exchangeMatrix(this.server_initMatrix);
        changed_matrix = this.exchangeagain(changed_matrix);
        var return_var = [[]];
        for (var k = 0; k < serverData.length; k++) {
            var windata = [];
            var pay_line;
            var symbol_name;
            var card_count;
            var symbols = this.spinCombination.symbols;
            var pos_array = [];
            var linePosIdx = serverData[k].linePosIdx + 1;
            card_count = serverData[k].cardCount === 3 ? 1 : serverData[k].cardCount;
            pay_line = this.spinCombination.paylines[serverData[k].linePosIdx];
            pay_line = this.removeCellMatrix(pay_line, serverData[k].cardCount);
            symbol_name = this.spinCombination.uniquesymbols[serverData[k].audioIndex];
            for (var i = 0; i < this.COLUMNS_COUNT; i++) {
                for (var j = 0; j < this.ROWS_COUNT; j++) {
                    if (pay_line[j][i] === 1) {
                        pos_array.push({name: symbols[j][i], position: [j, i]});
                    }
                }
            }
            windata.push(pay_line);
            windata.push(pos_array);
            windata.push("symbol_name");
            windata.push(card_count);
            windata.push(linePosIdx);
            windata.push(serverData[k].win);
            return_var[k] = windata;
        }
        return return_var;
    }
    ,

    bonusclose: function () {
        this.tween({
            to: ['alpha', 0, 250, 0, Power1.easeIn]
        }, 'overlay', () => {
            this['overlay'].visible = false;
        });

        this.tween({
            to: ['alpha', 0, 250, 0, Power1.easeIn]
        }, 'bonus container', () => {
            this['bonus container'].visible = false;
        });
    }
    ,

    apiRequest: function (options) {
        var params = '';
        if (options.params) {
            for (var index in options.params) {
                params += '&' + options.params[index].key + '=' + options.params[index].value;
            }
        }
        var xhr = $.ajax({
            // url: "https://ace.777berserk.org/api/" + options.endpoint,
            url: this.api_url + options.endpoint,
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + localStorage.api_key,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            type: 'post',
            data: params.substr(1),
            success: function (data) {

            },
            error: function (error) {
                console.log(error);
            }
        });

        return xhr;
    }
    ,

    getInitData: function () {
        var options = {
            endpoint: 'zt_get_setting',
            params: [
                {
                    key: 'gamesession_id',
                    value: this.gamesession_id
                },
                {
                    key: 'gamespec',
                    value: this.gamespec
                },
            ]
        };
        var params = "";
        if (options.params) {
            for (var index in options.params) {
                params += '&' + options.params[index].key + '=' + options.params[index].value;
            }
        }
        var xhr = $.ajax({
            url: this.api_url + options.endpoint,
            dataType: 'json',
            async: false,
            type: 'post',
            headers: {
                "Authorization": "Bearer " + localStorage.api_key,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: params.substr(1),
            success: function (data) {

            },
            error: function (error) {
                console.log(error);
            }
        });
        var response = xhr.responseText;
        return JSON.parse(response.toString());
    }
    ,

    getCashInfo: function () {
        var options = {
            endpoint: 'zt_get_player_balance',
            params: [
                {
                    key: 'session_id',
                    value: this.session_id
                }
            ]
        };
        var params = "";
        if (options.params) {
            for (var index in options.params) {
                params += '&' + options.params[index].key + '=' + options.params[index].value;
            }
        }
        var xhr = $.ajax({
            // url: "https://ace.777berserk.org/api/" + options.endpoint,
            url: this.api_url + options.endpoint,
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + localStorage.api_key,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            async: false,
            type: 'post',
            data: params.substr(1),
            success: function (data) {

            },
            error: function (error) {
                console.log(error);
            }
        });
        var response = xhr.responseText;
        return JSON.parse(response.toString());
    }
    ,

    getServerData: function () {


        // WInLine
        // var response = '{"error":"0","response":{"initCards":[[5,6,4,10],[8,3,4,7],[2,1,3,4],[2,3,5,7],[1,8,2,0]],"arrRetVal":[{"retType":0,"win":6,"linePosIdx":36,"cardCount":3}],"betAmount":50,"winAmount":6,"balance":10006}}';
        // var response = '{"error":"0","response":{"initCards":[[2,3,0,7],[3,0,0,1],[2,3,5,3],[2,1,9,10],[2,3,0,0]],"arrRetVal":[{"retType":0,"win":5,"linePosIdx":10,"cardCount":3}],"betAmount":50,"winAmount":5,"balance":99613}}';
        // var response = '{"error":"0","response":{"initCards":[[2,8,1,2],[7,3,2,6],[7,4,2,3],[9,1,4,9],[0,3,8,9]],"arrRetVal":[{"retType":0,"win":5,"linePosIdx":18,"cardCount":3},{"retType":0,"win":5,"linePosIdx":25,"cardCount":3}],"betAmount":50,"winAmount":10,"balance":99720}}';
        // var response = '{"error":"0","response":{"initCards":[[10,2,7,3],[4,2,3,8],[5,1,1,2],[3,1,1,3],[4,0,1,3]],"arrRetVal":[{"retType":0,"win":5,"linePosIdx":37,"cardCount":3},{"retType":0,"win":5,"linePosIdx":5,"cardCount":3}],"betAmount":50,"winAmount":10,"balance":43228}}';
        // Normal
        // var response = '{"error":"0","response":{"initCards":[[3,2,10,6],[8,2,0,0],[5,6,3,0],[6,4,0,1],[2,7,4,6]],"arrRetVal":[],"betAmount":50,"winAmount":0,"balance":10000}}';

        // var response = "{\"error\":\"0\",\"response\":{\"initCards\":[[3,5,2],[1,3,4],[2,4,0],[5,3,0],[2,4,0]],\"arrRetVal\":[{\"retType\":0,\"win\":25,\"linePosIdx\":1,\"cardCount\":3,\"direction\":0}],\"betAmount\":1,\"winAmount\":25,\"balance\":60582}}";
        // var response = "{\"error\":\"0\",\"response\":{\"initCards\":[[1,3,1],[0,1,3],[3,0,1],[5,1,5],[2,1,1]],\"arrRetVal\":[{\"retType\":0,\"win\":1,\"linePosIdx\":4,\"cardCount\":4,\"direction\":1}],\"betAmount\":0.1,\"winAmount\":1,\"balance\":605825}}";

        //jackpot
        // var response = "{\"error\":\"0\",\"response\":{\"initCards\":[[1,3,0],[3,2,1],[5,4,2],[0,1,4],[2,3,1]],\n" +
        //     "                \"arrRetVal\":[{\"retType\":0,\"win\":125,\"linePosIdx\":2,\"cardCount\":3}],\"betAmount\":9,\"winAmount\":1250,\"balance\":11250}}";
        // var response = "{\"error\":\"0\",\"response\":{\"initCards\":[[7,5,7,3,7],[7,2,7,5,7],[7,4,7,6,7]],\"arrRetVal\":[{\"retType\":1}],\"betAmount\":9,\"winAmount\":0,\"balance\":11250}}";
        /*
        //big money
                var response = "{\"error\":\"0\",\"response\":{\"initCards\":[[7,2,7,4,7],[7,0,7,4,7],[7,0,7,4,7]],\"arrRetVal\":[{\"retType\":0,\"win\":10,\"linePosIdx\":1,\"cardCount\":3},{\"retType\":0,\"win\":100,\"linePosIdx\":2,\"cardCount\":3},{\"retType\":6}],\"betAmount\":9,\"winAmount\":110,\"balance\":10110}}";


                //normal
                var response = "{\"error\":\"0\",\"response\":{\"initCards\":[[7,1,7,2,7],[7,2,7,5,7],[7,6,7,6,7]],\"arrRetVal\":[],\"betAmount\":9,\"winAmount\":0,\"balance\":10000}}";

        */
        var response = {
            error: '0',
            response: {
                initCards: [
                    [0, 2, 7],
                    [4, 6, 3],
                    [5, 0, 1],
                    [3, 1, 8],
                    [4, 0, 9]
                ],
                arrRetVal: [
                    // { retType: 0, win: 3, linePosIdx: 0, cardCount: 5 },
                    { retType: 0, win: 5, linePosIdx: 1, cardCount: 5 },
                    // { retType: 0, win: 5, linePosIdx: 2, cardCount: 5 },
                    // { retType: 0, win: 5, linePosIdx: 3, cardCount: 5 },
                    { retType: 0, win: 5, linePosIdx: 4, cardCount: 5 },
                    // { retType: 0, win: 5, linePosIdx: 5, cardCount: 5 },
                    { retType: 0, win: 5, linePosIdx: 6, cardCount: 5 },
                    // { retType: 0, win: 5, linePosIdx: 1, cardCount: 5 },
                    // { retType: 0, win: 5, linePosIdx: 8, cardCount: 5 },
                    // { retType: 0, win: 5, linePosIdx: 9, cardCount: 5 },
                ],
                betAmount: 50,
                winAmount: 10,
                balance: 50000
            }
        };
        var serverData = response;
        return serverData;
    }
    ,

    getTestServerData: function () {
        var options = {
            endpoint: 'zt_test'
        };
        return this.apiRequest(options);
    }
    ,

    getServerCardsInfo: function (bet, isfreespin) {
        this.coin_value_list.forEach((value, index) => {
            if(value == this.coins.value){
                this.coins.step = index;
            }
        })
        this.totalbet_value_list.forEach((value, index) => {
            if(value == this.levels.value){
                this.levels.step = index;
            }
        })
        var options = {
            endpoint: 'zt_play_game',
            params: [
                {
                    key: 'lines',
                    value: this.lines.value - 1
                },
                {
                    key: 'bet',
                    value: this.levels.step
                },
                {
                    key: 'denom',
                    value: this.coins.step
                },
                {
                    key: 'gamespec',
                    value: this.gamespec
                },
                {
                    key: 'isfreespin',
                    value: isfreespin
                },
                {
                    key: 'gamesession_id',
                    value: this.gamesession_id
                },
                {
                    key: 'initbalance',
                    value: this.credits.value
                },
                {
                    key: 'play_for_fun',
                    value: 0
                }
            ]
        };
        return this.apiRequest(options);
    }
    ,

    sendSignalToSite: function () {
        var options = {
            endpoint: 'zt_send_signal',
            params: []
        };
        return this.apiRequest(options);
    }
    ,

    closeGame: function () {
        var options = {
            endpoint: 'zt_exit_game',
            params: []
        };
        return this.apiRequest(options);
    }
    ,

})
;
