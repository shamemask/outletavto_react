import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser'; // Библиотека для работы с RSS-лентами
import Slider from 'react-slick'; // Библиотека для создания слайдера

const RssSlider = () => {
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const parser = new Parser();
                const feed = await parser.parseURL('https://dvizhok.su/dvizhok-rss.rss'); // Замените на URL своей RSS-ленты
                setNewsItems(feed.items);
            } catch (error) {
                console.error('Failed to fetch news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div>
            <h2>Latest News</h2>
            <Slider dots={true}>
                {newsItems.map((item) => (
                    <div key={item.link}>
                        <h3>{item.title}</h3>
                        <p>{item.summary}</p>
                        <a href={item.link}>Read more</a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default RssSlider;
