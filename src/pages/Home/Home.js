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

    return (
        <div className={cx('wrapper')}>
            <MainVideo
                data={{
                    video_id: 1,
                    full_name: 'Chí Dũng',
                    nickname: 'chidung',
                    title_video:
                        'Pháo hoa lên các vì sao Mọi điều ước đều thành hiện thực #fyp #foryou #fypシ #happynewyear',
                    music_name: 'Tùng Seven 1999',
                    video_url:
                        'https://v16-webapp.tiktok.com/0db399adb7fad11c8227632f1b066225/63dbcd2a/video/tos/maliva/tos-maliva-ve-0068c799-us/295fbca78e0d42ae94a4f698fc8f3140/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1628&bt=814&cs=0&ds=3&ft=hatGN2BHjVQ9w5OemDhd.cEUkX4gTsU9p5eMTjF_EeC&mime_type=video_mp4&qs=0&rc=ZjRlODpkaTM5NjtmMzZpNEBpajprZDY6ZnhuaTMzZzczNEBeX2I2NDIuXi0xXl80NDQ2YSMyZjA2cjRvMl9gLS1kMS9zcw%3D%3D&l=2023020208473782FF57D5C0DA4C0080DC&btag=80000',
                    like_count: '910.4K',
                    comment_count: '6619',
                    share_count: '19.1K',
                }}
                handleChangePlayingVideo={handleChangePlayingVideo}
                currentPlayingVideoId={currentPlayingVideoId}
            />
            <MainVideo
                data={{
                    video_id: 2,
                    full_name: 'Chí Dũng',
                    nickname: 'chidung',
                    title_video: 'Ly hôn…',
                    music_name: 'Chun Pop',
                    video_url:
                        'https://v16-webapp.tiktok.com/0db399adb7fad11c8227632f1b066225/63dbcd2a/video/tos/maliva/tos-maliva-ve-0068c799-us/295fbca78e0d42ae94a4f698fc8f3140/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1628&bt=814&cs=0&ds=3&ft=hatGN2BHjVQ9w5OemDhd.cEUkX4gTsU9p5eMTjF_EeC&mime_type=video_mp4&qs=0&rc=ZjRlODpkaTM5NjtmMzZpNEBpajprZDY6ZnhuaTMzZzczNEBeX2I2NDIuXi0xXl80NDQ2YSMyZjA2cjRvMl9gLS1kMS9zcw%3D%3D&l=2023020208473782FF57D5C0DA4C0080DC&btag=80000',
                    like_count: '129.4K',
                    comment_count: '619',
                    share_count: '14.1K',
                }}
                handleChangePlayingVideo={handleChangePlayingVideo}
                currentPlayingVideoId={currentPlayingVideoId}
            />
            <MainVideo
                data={{
                    video_id: 3,
                    full_name: 'pets_2210',
                    nickname: 'cutepet',
                    title_video: 'Hun d. ữ quá đi hà ☺#catsoftiktok #cat #kitty #xuhuong',
                    music_name: 'Người viết tình ca',
                    video_url:
                        'https://v16-webapp.tiktok.com/0db399adb7fad11c8227632f1b066225/63dbcd2a/video/tos/maliva/tos-maliva-ve-0068c799-us/295fbca78e0d42ae94a4f698fc8f3140/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1628&bt=814&cs=0&ds=3&ft=hatGN2BHjVQ9w5OemDhd.cEUkX4gTsU9p5eMTjF_EeC&mime_type=video_mp4&qs=0&rc=ZjRlODpkaTM5NjtmMzZpNEBpajprZDY6ZnhuaTMzZzczNEBeX2I2NDIuXi0xXl80NDQ2YSMyZjA2cjRvMl9gLS1kMS9zcw%3D%3D&l=2023020208473782FF57D5C0DA4C0080DC&btag=80000',
                    like_count: '529.4K',
                    comment_count: '3619',
                    share_count: '24.1K',
                }}
                handleChangePlayingVideo={handleChangePlayingVideo}
                currentPlayingVideoId={currentPlayingVideoId}
            />
        </div>
    );
}

export default Home;
