import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import NextPost from '../../../components/NextPost/NextPost';
import Card from './../../../components/Cards/Card';
import { Input, Upload, Button, message } from 'antd';
import { EnterOutlined, MehOutlined, HeartOutlined, ArrowDownOutlined, ShareAltOutlined } from '@ant-design/icons'

const cx = classNames.bind(styles);

function Detail() {
    const audioRef = useRef(null);

    // useEffect(() => {
    //     const audioElement = audioRef.current;

    //     // Sử dụng sự kiện "canplaythrough" để đảm bảo rằng audio đã sẵn sàng để phát
    //     audioElement.addEventListener('canplaythrough', () => {
    //         audioElement.play();
    //     });

    //     // Load audio
    //     audioElement.load();

    //     // Làm sạch sự kiện khi unmounting
    //     return () => {
    //         audioElement.removeEventListener('canplaythrough', () => {
    //             audioElement.play();
    //         });
    //     };
    // }, []);

    return (
        <div
            style={{
                marginTop: '90px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '100px'
            }}
        >
            <div
                style={{
                    width: '80%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}
            >
                <div style={{
                    width: '800px'
                }}>
                    <div>À Lôi - Double2T, Masew</div>
                    <div style={{
                        height: '100px'
                    }}>
                        <audio controls ref={audioRef}>
                            <source
                                type="audio/mpeg"
                                src="http://res.cloudinary.com/dvqmndx5j/video/upload/v1695225431/banhang/wslnbjfcorch9borewta.mp3"
                            />
                        </audio>
                    </div>

                    <div style={{
                        marginTop: '60px',
                        fontSize: '16px'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                        }}>
                            <div style={{
                                marginRight: '20px'
                            }}>
                                <HeartOutlined />
                                <span className={cx('hover')}>
                                    Yêu Thích
                                </span>
                            </div>

                            <div style={{
                                marginRight: '20px'
                            }}>
                                <ArrowDownOutlined />
                                <span className={cx('hover')}>

                                    Tải Nhạc
                                </span>
                            </div>

                            <div style={{
                                marginRight: '20px'
                            }}>
                                <ShareAltOutlined />
                                <span className={cx('hover')}>

                                    Chia Sẻ
                                </span>
                            </div>

                            <div style={{
                                marginRight: '20px'
                            }}>
                                <HeartOutlined />
                                <span className={cx('hover')}>

                                    Nhạc Chờ
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Bình luận */}

                    <div style={{
                        marginTop: '10px'
                    }}>
                        <div>
                            Bình Luận :
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                            <div style={{
                                flex: 1
                            }}>
                                <Input />
                            </div>
                            <div style={{
                                // flex: 0.5
                                width: '80px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '30px',
                                marginTop: '10px'
                            }}>
                                <EnterOutlined />
                            </div>
                        </div>
                    </div>

                    {/* conten bình luận */}

                    <div style={{
                        marginTop: '30px'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            borderBottom: '0.5px solid gray',
                            padding: '10px'
                        }}>
                            <MehOutlined />
                            <div style={{
                                marginLeft: '10px'
                            }}>
                                <div style={{
                                    fontSize: '18px'
                                }}>
                                    Ngô Xuân Quy
                                </div>
                                <div style={{
                                    fontSize: '12px'
                                }}>
                                    Nhạc hay quá!!!!
                                </div>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            borderBottom: '0.5px solid gray',
                            padding: '10px'
                        }}>
                            <MehOutlined />
                            <div style={{
                                marginLeft: '10px'
                            }}>
                                <div style={{
                                    fontSize: '18px'
                                }}>
                                    Ngô Xuân Quy
                                </div>
                                <div style={{
                                    fontSize: '12px'
                                }}>
                                    Nhạc hay quá!!!!
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        marginTop: '60px'
                    }}>
                        <div>
                            PLAYLIST | ALBUM
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around'
                        }}>
                            <div>
                                <Card />
                            </div>
                            <div>
                                <Card />
                            </div>
                            <div>
                                <Card />
                            </div>
                            <div>
                                <Card />
                            </div>
                            <div>
                                <Card />
                            </div>
                        </div>
                    </div>


                    <div style={{
                        marginTop: '10px'
                    }}>
                        <div>
                            PLAYLIST | ALBUM
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around'
                        }}>
                            <div>
                                <Card />
                            </div>
                            <div>
                                <Card />
                            </div>
                            <div>
                                <Card />
                            </div>
                            <div>
                                <Card />
                            </div>
                            <div>
                                <Card />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next post */}
                <div>
                    <NextPost />
                </div>
            </div>
        </div>
    );
}

export default Detail;
