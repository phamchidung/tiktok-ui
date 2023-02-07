import MainVideo from '~/layouts/components/MainVideo';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useState } from 'react';
import { useStore } from '~/hooks';
import Skeleton from './Skeleton';

const cx = classNames.bind(styles);

function Home() {
    const [currentPlayingVideoId, setCurrentPlayingVideoId] = useState(1);
    const [state] = useStore();
    const { isReloadingHome } = state;

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
                'https://v16-webapp.tiktok.com/d8c8ff04ee8107b3f9dd8bd1e5258365/63e2bce3/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ogeBrbseHheFE8GctEw5CfLHRDPAOSAAMg2PCQ/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1500&bt=750&cs=0&ds=3&ft=4b~OyM3a8Zmo0XLgl64jV4zHEpWrKsdm&mime_type=video_mp4&qs=0&rc=NzQzZWc4Omk0NmZpZGY7ZUBpajo0dmU6ZnNnaTMzZjgzM0A0Li9fLjUxX2MxYmBgY2ExYSNpZGRkcjRnZmRgLS1kL2Nzcw%3D%3D&l=2023020715041690A0F0F1467D2A139DFB&btag=80000',
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
                'https://v16-webapp.tiktok.com/d8c8ff04ee8107b3f9dd8bd1e5258365/63e2bce3/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ogeBrbseHheFE8GctEw5CfLHRDPAOSAAMg2PCQ/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1500&bt=750&cs=0&ds=3&ft=4b~OyM3a8Zmo0XLgl64jV4zHEpWrKsdm&mime_type=video_mp4&qs=0&rc=NzQzZWc4Omk0NmZpZGY7ZUBpajo0dmU6ZnNnaTMzZjgzM0A0Li9fLjUxX2MxYmBgY2ExYSNpZGRkcjRnZmRgLS1kL2Nzcw%3D%3D&l=2023020715041690A0F0F1467D2A139DFB&btag=80000',
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
                'https://v16-webapp.tiktok.com/d8c8ff04ee8107b3f9dd8bd1e5258365/63e2bce3/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ogeBrbseHheFE8GctEw5CfLHRDPAOSAAMg2PCQ/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1500&bt=750&cs=0&ds=3&ft=4b~OyM3a8Zmo0XLgl64jV4zHEpWrKsdm&mime_type=video_mp4&qs=0&rc=NzQzZWc4Omk0NmZpZGY7ZUBpajo0dmU6ZnNnaTMzZjgzM0A0Li9fLjUxX2MxYmBgY2ExYSNpZGRkcjRnZmRgLS1kL2Nzcw%3D%3D&l=2023020715041690A0F0F1467D2A139DFB&btag=80000',
            like_count: '529.4K',
            comment_count: '3619',
            share_count: '24.1K',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            {isReloadingHome ? (
                <Skeleton />
            ) : (
                videosData.map((data) => (
                    <MainVideo
                        key={data.video_id}
                        data={{ ...data }}
                        handleChangePlayingVideo={handleChangePlayingVideo}
                        currentPlayingVideoId={currentPlayingVideoId}
                    />
                ))
            )}
        </div>
    );
}

export default Home;
