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
            video_img:
                'https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oMyeH4DQICgHbunbF88SPWbl6mJilIApnCfjBe~tplv-f5insbecw7-1:720:720.jpeg?x-expires=1676120400&x-signature=O%2FaUdrGy2BZoyOez0bf%2B349Ha0w%3D',
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
            video_img:
                'https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oMyeH4DQICgHbunbF88SPWbl6mJilIApnCfjBe~tplv-f5insbecw7-1:720:720.jpeg?x-expires=1676120400&x-signature=O%2FaUdrGy2BZoyOez0bf%2B349Ha0w%3D',
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
            video_img:
                'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/o0enxIAHDFNBIB8gGQnAYMlbeffrEaE5zEGx90~tplv-f5insbecw7-1:720:720.jpeg?x-expires=1676120400&x-signature=wua%2BJhmzhEH6WpF0Iohv56pmSaY%3D',
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
