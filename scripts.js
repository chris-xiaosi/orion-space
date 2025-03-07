// 电影数据 - 模拟从API获取的数据
// 实际使用中，这部分数据应该从服务器API获取
const moviesData = [
    {
        id: 1,
        title: "肖申克的救赎",
        originalTitle: "The Shawshank Redemption",
        year: 1994,
        director: "弗兰克·德拉邦特",
        genres: ["剧情", "犯罪"],
        duration: 142,
        posterUrl: "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",
        doubanRating: 9.7,
        imdbRating: 9.3,
        description: "两个被囚禁的男人多年来建立了一种非凡的友谊，通过共同的体面和一些小小的胜利找到了救赎。",
        videoUrl: "movie.html?id=1"
    },
    {
        id: 2,
        title: "霸王别姬",
        originalTitle: "霸王别姬",
        year: 1993,
        director: "陈凯歌",
        genres: ["剧情", "爱情", "同性"],
        duration: 171,
        posterUrl: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2561716440.jpg",
        doubanRating: 9.6,
        imdbRating: 8.1,
        description: "两个男孩在戏剧学校接受严格训练，成为了中国京剧的明星。",
        videoUrl: "movie.html?id=2"
    },
    {
        id: 3,
        title: "阿甘正传",
        originalTitle: "Forrest Gump",
        year: 1994,
        director: "罗伯特·泽米吉斯",
        genres: ["剧情", "爱情"],
        duration: 142,
        posterUrl: "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2372307693.jpg",
        doubanRating: 9.5,
        imdbRating: 8.8,
        description: "阿甘是一个智商只有75的低能儿，但他的一生如同充满传奇色彩的美国梦，他先后成为大学橄榄球明星、越战英雄、乒乓球外交使者、亿万富翁。",
        videoUrl: "movie.html?id=3"
    },
    {
        id: 4,
        title: "泰坦尼克号",
        originalTitle: "Titanic",
        year: 1997,
        director: "詹姆斯·卡梅隆",
        genres: ["剧情", "爱情", "灾难"],
        duration: 194,
        posterUrl: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p457760035.jpg",
        doubanRating: 9.4,
        imdbRating: 7.9,
        description: "穷画家杰克和贵族女露丝在船上相遇并相爱，然而泰坦尼克号很快就要撞上冰山。",
        videoUrl: "movie.html?id=4"
    },
    {
        id: 5,
        title: "这个杀手不太冷",
        originalTitle: "Léon",
        year: 1994,
        director: "吕克·贝松",
        genres: ["剧情", "动作", "犯罪"],
        duration: 110,
        posterUrl: "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg",
        doubanRating: 9.4,
        imdbRating: 8.5,
        description: "一个职业杀手在一次行动后，意外地保护了一个被警察杀害全家的小女孩。",
        videoUrl: "movie.html?id=5"
    },
    {
        id: 6,
        title: "千与千寻",
        originalTitle: "千と千尋の神隠し",
        year: 2001,
        director: "宫崎骏",
        genres: ["动画", "奇幻", "冒险"],
        duration: 125,
        posterUrl: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2557573348.jpg",
        doubanRating: 9.4,
        imdbRating: 8.6,
        description: "10岁的少女千寻与父母一起搬家，无意中进入了神灵的世界。",
        videoUrl: "movie.html?id=6"
    },
    {
        id: 7,
        title: "盗梦空间",
        originalTitle: "Inception",
        year: 2010,
        director: "克里斯托弗·诺兰",
        genres: ["科幻", "悬疑", "冒险"],
        duration: 148,
        posterUrl: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p513344864.jpg",
        doubanRating: 9.3,
        imdbRating: 8.8,
        description: "一位窃取企业机密的高手，以植入思想为诱饵进行一场史上最惊人的犯罪。",
        videoUrl: "movie.html?id=7"
    },
    {
        id: 8,
        title: "星际穿越",
        originalTitle: "Interstellar",
        year: 2014,
        director: "克里斯托弗·诺兰",
        genres: ["科幻", "冒险", "剧情"],
        duration: 169,
        posterUrl: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.jpg",
        doubanRating: 9.3,
        imdbRating: 8.6,
        description: "一组宇航员通过一个新发现的虫洞进行星际旅行，试图拯救面临灭绝的人类。",
        videoUrl: "movie.html?id=8"
    }
];

// 电影评论数据 - 模拟从API获取的数据
const movieComments = {
    1: [
        { user: "电影爱好者001", platform: "豆瓣", content: "这部电影改变了我的人生观，绝对的经典之作！", rating: 5, date: "2023-03-15" },
        { user: "FilmFan123", platform: "IMDb", content: "One of the greatest movies ever made. Tim Robbins and Morgan Freeman deliver outstanding performances.", rating: 5, date: "2022-11-20" },
        { user: "光影追逐者", platform: "豆瓣", content: "希望是件美好的事物，也许是最好的，而美好的事物永不消逝。", rating: 5, date: "2022-07-08" }
    ],
    // 其他电影的评论数据...
};

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化网站功能
    initializeWebsite();
    
    // 添加事件监听器
    document.querySelector('.cta-button').addEventListener('click', function() {
        const featuredMoviesSection = document.querySelector('.featured-movies');
        featuredMoviesSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // 搜索功能
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    searchBtn.addEventListener('click', function() {
        performSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
});

// 初始化网站
function initializeWebsite() {
    // 加载精选电影
    loadFeaturedMovies();
    
    // 加载热门电影
    loadTrendingMovies();
    
    // 创建评分可视化
    createRatingVisualization();
}

// 加载精选电影
function loadFeaturedMovies() {
    const featuredMoviesContainer = document.getElementById('featured-movies-container');
    const featuredMovies = moviesData.slice(0, 4); // 取前4部电影作为精选
    
    featuredMoviesContainer.innerHTML = '';
    
    featuredMovies.forEach(movie => {
        featuredMoviesContainer.appendChild(createMovieCard(movie));
    });
}

// 加载热门电影
function loadTrendingMovies() {
    const trendingMoviesContainer = document.getElementById('trending-movies-container');
    const trendingMovies = [...moviesData].sort((a, b) => b.doubanRating - a.doubanRating).slice(0, 4); // 按评分排序取前4部
    
    trendingMoviesContainer.innerHTML = '';
    
    trendingMovies.forEach(movie => {
        trendingMoviesContainer.appendChild(createMovieCard(movie));
    });
}

// 创建电影卡片
function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    movieCard.setAttribute('data-id', movie.id);
    
    movieCard.innerHTML = `
        <div class="movie-poster">
            <img src="${movie.posterUrl}" alt="${movie.title}" loading="lazy">
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span>${movie.year}</span>
                <div class="movie-rating">
                    <div class="rating-source" title="豆瓣评分">
                        <img src="https://img.icons8.com/color/48/000000/douban.png" alt="豆瓣">
                        <span class="rating-score">${movie.doubanRating}</span>
                    </div>
                    <div class="rating-source" title="IMDb评分">
                        <img src="https://img.icons8.com/color/48/000000/imdb.png" alt="IMDb">
                        <span class="rating-score">${movie.imdbRating}</span>
                    </div>
                </div>
            </div>
            <div class="movie-genre">
                ${movie.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('')}
            </div>
        </div>
    `;
    
    movieCard.addEventListener('click', function() {
        window.location.href = movie.videoUrl;
    });
    
    return movieCard;
}

// 创建评分可视化
function createRatingVisualization() {
    const ratingData = moviesData.map(movie => ({
        title: movie.title,
        douban: movie.doubanRating,
        imdb: movie.imdbRating
    }));
    
    // 设置图表参数
    const margin = { top: 20, right: 30, bottom: 80, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    
    // 创建SVG元素
    const svg = d3.select('#rating-visualization')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // X轴比例尺
    const x = d3.scaleBand()
        .domain(ratingData.map(d => d.title))
        .range([0, width])
        .padding(0.3);
    
    // Y轴比例尺
    const y = d3.scaleLinear()
        .domain([0, 10])
        .range([height, 0]);
    
    // 添加X轴
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'translate(-10,0)rotate(-45)')
        .style('text-anchor', 'end')
        .style('font-size', '12px');
    
    // 添加Y轴
    svg.append('g')
        .call(d3.axisLeft(y));
    
    // 添加Y轴网格线
    svg.append('g')
        .attr('class', 'grid')
        .call(d3.axisLeft(y)
            .tickSize(-width)
            .tickFormat('')
        )
        .style('stroke-dasharray', '3,3')
        .style('stroke-opacity', 0.2);
    
    // 添加豆瓣评分柱状图
    svg.selectAll('.bar-douban')
        .data(ratingData)
        .enter()
        .append('rect')
        .attr('class', 'bar-douban')
        .attr('x', d => x(d.title))
        .attr('width', x.bandwidth() / 2)
        .attr('y', d => y(d.douban))
        .attr('height', d => height - y(d.douban))
        .attr('fill', '#2980b9')
        .attr('rx', 3)
        .attr('ry', 3);
    
    // 添加IMDb评分柱状图
    svg.selectAll('.bar-imdb')
        .data(ratingData)
        .enter()
        .append('rect')
        .attr('class', 'bar-imdb')
        .attr('x', d => x(d.title) + x.bandwidth() / 2)
        .attr('width', x.bandwidth() / 2)
        .attr('y', d => y(d.imdb))
        .attr('height', d => height - y(d.imdb))
        .attr('fill', '#e74c3c')
        .attr('rx', 3)
        .attr('ry', 3);
    
    // 添加图例
    const legend = svg.append('g')
        .attr('class', 'legend')
        .attr('transform', `translate(${width - 100}, 0)`);
    
    legend.append('rect')
        .attr('x', 0)
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', '#2980b9');
    
    legend.append('text')
        .attr('x', 25)
        .attr('y', 12.5)
        .text('豆瓣评分')
        .style('font-size', '12px');
    
    legend.append('rect')
        .attr('x', 0)
        .attr('y', 25)
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', '#e74c3c');
    
    legend.append('text')
        .attr('x', 25)
        .attr('y', 37.5)
        .text('IMDb评分')
        .style('font-size', '12px');
}

// 执行搜索
function performSearch(query) {
    if (!query.trim()) return;
    
    // 在实际应用中，这应该是一个导航到搜索结果页面的操作
    alert(`你正在搜索: ${query}\n这个功能将在后续版本中实现。`);
    // window.location.href = `search.html?q=${encodeURIComponent(query)}`;
}

// 响应式处理
window.addEventListener('resize', function() {
    // 重新渲染评分可视化
    document.getElementById('rating-visualization').innerHTML = '';
    createRatingVisualization();
});