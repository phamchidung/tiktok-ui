import MainVideo from '~/layouts/components/MainVideo';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useState } from 'react';
import { useStore } from '~/hooks';

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
                'https://v16-webapp.tiktok.com/cf170c1f4d31e6e68a3a8852e6f5e079/63e00e87/video/tos/useast2a/tos-useast2a-ve-0068c003/oYJhQN2LzgDxfSWCZAh3GVIZ4AkUlRtoIFIq4A/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=4294&bt=2147&cs=0&ds=3&ft=H3bLjvyBQ9wUxtM342HC~piRgGa-W.RUXlZqQQ4k-x4kS&mime_type=video_mp4&qs=0&rc=ZGc4PDYzZzw6PDYzMzY1ZEBpanB0bDs6ZmZnaTMzNzczM0AwMDUxNTNjXzIxMjUxMjFhYSM1b25mcjRnbC1gLS1kMTZzcw%3D%3D&l=20230205141529B8D794AD0C7587D4E985&btag=80000',
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
                'https://v16-webapp.tiktok.com/cf170c1f4d31e6e68a3a8852e6f5e079/63e00e87/video/tos/useast2a/tos-useast2a-ve-0068c003/oYJhQN2LzgDxfSWCZAh3GVIZ4AkUlRtoIFIq4A/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=4294&bt=2147&cs=0&ds=3&ft=H3bLjvyBQ9wUxtM342HC~piRgGa-W.RUXlZqQQ4k-x4kS&mime_type=video_mp4&qs=0&rc=ZGc4PDYzZzw6PDYzMzY1ZEBpanB0bDs6ZmZnaTMzNzczM0AwMDUxNTNjXzIxMjUxMjFhYSM1b25mcjRnbC1gLS1kMTZzcw%3D%3D&l=20230205141529B8D794AD0C7587D4E985&btag=80000',
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
                'https://v16-webapp.tiktok.com/cf170c1f4d31e6e68a3a8852e6f5e079/63e00e87/video/tos/useast2a/tos-useast2a-ve-0068c003/oYJhQN2LzgDxfSWCZAh3GVIZ4AkUlRtoIFIq4A/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=4294&bt=2147&cs=0&ds=3&ft=H3bLjvyBQ9wUxtM342HC~piRgGa-W.RUXlZqQQ4k-x4kS&mime_type=video_mp4&qs=0&rc=ZGc4PDYzZzw6PDYzMzY1ZEBpanB0bDs6ZmZnaTMzNzczM0AwMDUxNTNjXzIxMjUxMjFhYSM1b25mcjRnbC1gLS1kMTZzcw%3D%3D&l=20230205141529B8D794AD0C7587D4E985&btag=80000',
            like_count: '529.4K',
            comment_count: '3619',
            share_count: '24.1K',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            {isReloadingHome ? (
                <div className={cx('skeleton-container')}>
                    <div className={cx('skeleton-avatar')}></div>
                    <div className={cx('skeleton-wrapper')}>
                        <div className={cx('skeleton-content-container')}>
                            <div className={cx('skeleton-content', 'w-200')}></div>
                            <div className={cx('skeleton-content', 'w-160')}></div>
                        </div>

                        <div className={cx('skeleton-content', 'w-478')}></div>
                        <div className={cx('skeleton-content', 'w-478')}></div>
                    </div>
                </div>
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
