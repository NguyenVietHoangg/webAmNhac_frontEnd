import { Link, useNavigate } from "react-router-dom"
import { useState, useMemo, useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping, faBars, faChevronDown, faEnvelope, faPhone, faUser, faHomeAlt } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

import classNames from "classnames/bind"
import styles from "./header.module.scss"
// import Cookies from 'js-cookie';
// import { auth } from '../../Views/Pages/config/index'

import { SideSheet, Paragraph, Button } from 'evergreen-ui';

import { faHome, faCloud } from '@fortawesome/free-solid-svg-icons';
import { Divider, Popover, Segmented } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';

import Cookies from 'js-cookie';


const cx = classNames.bind(styles)
const Header = () => {

    const text = <span>Title</span>;
    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );

    const buttonWidth = 70;

    const [showArrow, setShowArrow] = useState(true);
    const [arrowAtCenter, setArrowAtCenter] = useState(false);

    const mergedArrow = useMemo(() => {
        if (arrowAtCenter) return { pointAtCenter: true };
        return showArrow;
    }, [showArrow, arrowAtCenter]);


    //Khai báo token
    const [token, setToken] = useState('')
    const [name, setName] = useState('')


    useEffect(() => {
        const token = Cookies.get('accessToken');
        const name = Cookies.get('name');
        const id = Cookies.get('id');
        const cleanedJwtString = token.replace(/^"|"$/g, '');
        const cleanId = id.replace(/^"|"$/g, '');
        const cleanName = name.replace(/^"|"$/g, '');


        setToken(cleanedJwtString)
        setName(cleanName)
    }, [])

    return (
        <div className={cx('container')}>
            <div className={cx("header")}>

                <div className={cx("header_left")}>
                    <div>
                        <Link to="/" >
                            <img src="https://stc-id.nixcdn.com/v11/images/header_new/logo_new.png"
                                style={{
                                    width: '70px'
                                }}
                            />
                        </Link>
                    </div>
                    <Popover placement="topLeft" title={text} content={content} arrow={mergedArrow}>
                        <div style={{
                            marginTop: '5px',
                            color: '#2daaed'
                        }}>
                            Bài hát
                        </div>
                    </Popover>
                    <Popover placement="topLeft" title={text} content={content} arrow={mergedArrow}>

                        <div style={{
                            marginTop: '5px'
                        }}>
                            Playlist
                        </div>
                    </Popover>

                    <div style={{
                        marginTop: '5px'
                    }}>
                        Tuyển Tập
                    </div>
                    <div style={{
                        marginTop: '5px'
                    }}>
                        Video
                    </div>
                    <div style={{
                        marginTop: '5px'
                    }}>
                        BXH
                    </div>
                    <div style={{
                        marginTop: '5px'
                    }}>
                        Top 100
                    </div>
                </div>

                {/* search  */}
                <div className={cx("header_rigth")}>
                    <div>
                        <input
                            placeholder="Tìm kiếm"
                            style={{
                                paddingLeft: "10px",
                                fontSize: '14px',
                                // borderRadius: '2px'
                            }}
                        />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHome}
                            style={{
                                fontSize: "20px",
                                color: 'lightblue'
                            }}
                        />

                    </div>
                    <div>
                        <Link to="/LoadMusic" >
                            <FontAwesomeIcon icon={faCloud}
                                style={{
                                    fontSize: "20px"
                                }}
                            />
                        </Link>
                    </div>
                    <div>
                        {
                            token == "" ?
                                <>
                                    <Button >
                                        <Link to="/Login">
                                            Đăng nhập
                                        </Link>
                                    </Button>
                                    <Button color="private">
                                        Đăng ký
                                    </Button>
                                </>
                                : <Avatar shape="square" icon={<UserOutlined />} />
                        }
                        {name}
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Header