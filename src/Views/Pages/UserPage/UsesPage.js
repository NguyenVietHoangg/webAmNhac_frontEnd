import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';

function UsesPage() {

    const navigate = useNavigate();

    //Khai báo token
    const [token, setToken] = useState('')
    const [name, setName] = useState('')


    useEffect(() => {
        const token = Cookies.get('accessToken');
        const name = Cookies.get('name');
        const id = Cookies.get('id');
        const cleanedJwtString = token?.replace(/^"|"$/g, '');
        const cleanId = id?.replace(/^"|"$/g, '');
        const cleanName = name?.replace(/^"|"$/g, '');


        setToken(cleanedJwtString)
        setName(cleanName)
    }, [])

    const handelYeuThich = () => {
        navigate('/NhacCuaTui')
    }

    return (
        <div style={{
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                width: '80%'
            }}>
                <div>
                    {name}
                </div>

                <div>
                    <div style={{
                        color: "#2daaed"
                    }}>
                        Nhạc Tải lên
                    </div>
                    <div>

                    </div>
                </div>

                <div style={{
                    color: "#2daaed"
                }}>
                    PlayList|ALBUM
                </div>

                <div style={{
                    fontSize: '16px',
                }}
                    onClick={() => handelYeuThich()}
                >
                    <div>
                        <img src='https://avatar-ex-swe.nixcdn.com/playlist/2016/09/09/4/c/6/e/1473409265946.jpg' />
                    </div>
                    <div>
                        Bài hát yêu thích
                    </div>
                    <div>
                        Đang cập nhật
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsesPage