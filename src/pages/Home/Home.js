import MainVideo from '~/layouts/components/MainVideo';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    const [currentPlayingVideoId, setCurrentPlayingVideoId] = useState(1);

    const handleChangePlayingVideo = (videoId) => {
        setCurrentPlayingVideoId(videoId);
    };

    const videosData = [
        {
            video_id: 1,
            full_name: 'Chí Dũng',
            nickname: 'chidung',
            title_video: 'Pháo hoa lên các vì sao Mọi điều ước đều thành hiện thực #fyp #foryou #fypシ #happynewyear',
            music_name: 'Tùng Seven 1999',
            video_url:
                'https://v16-webapp.tiktok.com/6f3ba9db28d41c6f654fb5746372d030/63df7c15/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ooDCeb80HIn3OwQA81AQb8DejTUBV5lDPDyzPB/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3546&bt=1773&cs=0&ds=3&ft=4b~OyM3a8Zmo0a~_i64jVe3MEpWrKsdm&mime_type=video_mp4&qs=0&rc=ZjxmNjc6ZDw6MzdnZDZoOEBpajplcWY6ZjZtaTMzZjgzM0AzMTQyX2BiNl8xYmJjLzRhYSNucGY0cjRncjZgLS1kL2Nzcw%3D%3D&l=20230205035102D9D54F3A7B919F9D1540&btag=80000',
            like_count: '910.4K',
            comment_count: '6619',
            share_count: '19.1K',
        },
        {
            video_id: 2,
            full_name: 'Chí Dũng',
            nickname: 'chidung',
            title_video: 'Ly hôn…',
            music_name: 'Chun Pop',
            video_url:
                'https://v16-webapp.tiktok.com/6f3ba9db28d41c6f654fb5746372d030/63df7c15/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ooDCeb80HIn3OwQA81AQb8DejTUBV5lDPDyzPB/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3546&bt=1773&cs=0&ds=3&ft=4b~OyM3a8Zmo0a~_i64jVe3MEpWrKsdm&mime_type=video_mp4&qs=0&rc=ZjxmNjc6ZDw6MzdnZDZoOEBpajplcWY6ZjZtaTMzZjgzM0AzMTQyX2BiNl8xYmJjLzRhYSNucGY0cjRncjZgLS1kL2Nzcw%3D%3D&l=20230205035102D9D54F3A7B919F9D1540&btag=80000',
            like_count: '129.4K',
            comment_count: '619',
            share_count: '14.1K',
        },
        {
            video_id: 3,
            full_name: 'pets_2210',
            nickname: 'cutepet',
            title_video: 'Hun d. ữ quá đi hà ☺#catsoftiktok #cat #kitty #xuhuong',
            music_name: 'Người viết tình ca',
            video_url:
                'https://v16-webapp.tiktok.com/6f3ba9db28d41c6f654fb5746372d030/63df7c15/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ooDCeb80HIn3OwQA81AQb8DejTUBV5lDPDyzPB/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3546&bt=1773&cs=0&ds=3&ft=4b~OyM3a8Zmo0a~_i64jVe3MEpWrKsdm&mime_type=video_mp4&qs=0&rc=ZjxmNjc6ZDw6MzdnZDZoOEBpajplcWY6ZjZtaTMzZjgzM0AzMTQyX2BiNl8xYmJjLzRhYSNucGY0cjRncjZgLS1kL2Nzcw%3D%3D&l=20230205035102D9D54F3A7B919F9D1540&btag=80000',
            like_count: '529.4K',
            comment_count: '3619',
            share_count: '24.1K',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            {videosData.map((data) => (
                <MainVideo
                    data={{ ...data }}
                    handleChangePlayingVideo={handleChangePlayingVideo}
                    currentPlayingVideoId={currentPlayingVideoId}
                />
            ))}
        </div>
    );
}

export default Home;
