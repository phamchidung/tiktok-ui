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
            video_url: 'video/video-1.mp4',
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
            video_url: 'video/video-1.mp4',
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
            video_url: 'video/video-1.mp4',
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
