
import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Play, Pause, Volume2, VolumeX, Clock, Calendar, User, Rss, Download, Headphones } from 'lucide-react';

const PodcastPage: React.FC = () => {
  const [currentEpisode, setCurrentEpisode] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isPlayerVisible, setIsPlayerVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const isSeekingRef = useRef(false);

  const categories = ['All', 'Clinical Intelligence', 'Care Delivery', 'Technology', 'Policy', 'Innovation'];

  const episodes = [
    {
      id: 1,
      title: "The Future of Hybrid Care Delivery",
      description: "Join us as we explore how hybrid clinics are revolutionizing patient access to care. Our guest shares real-world insights on combining in-person and virtual care models to improve outcomes.",
      guest: "Dr. Sarah Chen",
      guestTitle: "Clinical Director",
      duration: "45:32",
      date: "March 15, 2024",
      category: "Care Delivery",
      imageUrl: "https://media.istockphoto.com/id/1365555907/photo/yes-do-you-want-to-say-something.webp?a=1&b=1&s=612x612&w=0&k=20&c=EqTaWmS3RqLcXUFIr9no-4PxyDLYqtKM2iowGc4wCGw=",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      featured: true
    },
    {
      id: 2,
      title: "AION Clinical Intelligence: Catching Issues Before They Escalate",
      description: "Discover how AI-powered clinical intelligence is transforming healthcare by predicting and preventing adverse events. Learn about real-world applications and success stories.",
      guest: "Dr. Michael Rodriguez",
      guestTitle: "AI Research Lead",
      duration: "38:15",
      date: "March 8, 2024",
      category: "Clinical Intelligence",
      imageUrl: "https://media.istockphoto.com/id/1550388115/photo/happy-experienced-clinician-in-lab-coat-standing-in-front-of-audience.webp?a=1&b=1&s=612x612&w=0&k=20&c=0FUZCeLOYkbdBQCPBG6mV6u2uUf6W9V_GI73fAfXYq4=",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      featured: true
    },
    {
      id: 3,
      title: "Outcomes-Based Payment Models: The RegFi Revolution",
      description: "Explore how RegFi is revolutionizing healthcare reimbursement by aligning payments with patient outcomes. Our experts discuss the future of value-based care.",
      guest: "Jennifer Martinez",
      guestTitle: "Healthcare Finance Strategist",
      duration: "42:08",
      date: "March 1, 2024",
      category: "Technology",
      imageUrl: "https://media.istockphoto.com/id/1457587332/photo/medical-professional-giving-lecture-or-presentation-standing-at-seminar.webp?a=1&b=1&s=612x612&w=0&k=20&c=vmITNJIyal2kzjUq02RBjhv96VMctKCOd-bwlRsO3XI=",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      featured: true
    },
    {
      id: 4,
      title: "Mobile Clinics: Bringing Care to Underserved Communities",
      description: "Learn how mobile clinics are breaking down barriers to healthcare access. We discuss the logistics, impact, and future of mobile healthcare delivery.",
      guest: "Dr. James Wilson",
      guestTitle: "Mobile Health Program Director",
      duration: "35:22",
      date: "February 23, 2024",
      category: "Care Delivery",
      imageUrl: "https://media.istockphoto.com/id/2156660256/photo/doctor-making-online-live-streaming-broadcast.webp?a=1&b=1&s=612x612&w=0&k=20&c=E62UHFsnqXO3V1fGA0wSbdk7pZA5m-zxfbosZfpSFzE=",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      featured: false
    },
    {
      id: 5,
      title: "Precision Medicine: Personalizing Care Pathways",
      description: "Dive into the world of precision medicine and how personalized care pathways are improving patient outcomes. Our guest shares cutting-edge research and clinical applications.",
      guest: "Dr. Emily Thompson",
      guestTitle: "Precision Medicine Researcher",
      duration: "40:45",
      date: "February 16, 2024",
      category: "Innovation",
      imageUrl: "https://media.istockphoto.com/id/2206651452/photo/doctor-on-air-providing-expert-health-advice-and-answers-health-related-questions-through.webp?a=1&b=1&s=612x612&w=0&k=20&c=xNaD9WO0zCk32l7J4JTFm7LPXn570mveNE3sXf_n3uo=",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      featured: false
    },
    {
      id: 6,
      title: "Healthcare Policy: Navigating the Future of Care",
      description: "Policy experts discuss the evolving landscape of healthcare regulation and how it impacts care delivery, reimbursement, and innovation.",
      guest: "Robert Kim",
      guestTitle: "Healthcare Policy Analyst",
      duration: "48:30",
      date: "February 9, 2024",
      category: "Policy",
      imageUrl: "https://media.istockphoto.com/id/2151451917/photo/two-women-recording-a-podcast-together-in-a-studio.webp?a=1&b=1&s=612x612&w=0&k=20&c=18dLxBz7m2MUuRPeovpvMWRtCw8NOx0hFhdpPccVuX8=",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      featured: false
    }
  ];

  const filteredEpisodes = selectedCategory === 'All' 
    ? episodes 
    : episodes.filter(ep => ep.category === selectedCategory);

  const featuredEpisodes = episodes.filter(ep => ep.featured);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      if (!isSeekingRef.current && !isNaN(audio.currentTime)) {
        setCurrentTime(audio.currentTime);
      }
    };
    
    const updateDuration = () => {
      if (!isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentEpisode(null);
      setCurrentTime(0);
      setDuration(0);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('loadeddata', updateDuration);
    audio.addEventListener('canplay', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('loadeddata', updateDuration);
      audio.removeEventListener('canplay', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentEpisode]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((error) => {
        console.error('Error playing audio:', error);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || currentEpisode === null) return;

    const episode = episodes.find(e => e.id === currentEpisode);
    if (episode && audio.src !== episode.audioUrl) {
      setCurrentTime(0);
      setDuration(0);
      audio.src = episode.audioUrl;
      audio.load();
      if (isPlaying) {
        audio.play().catch((error) => {
          console.error('Error playing audio:', error);
        });
      }
    }
  }, [currentEpisode, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  // Auto-hide audio player on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only hide/show if there's an active episode
      if (currentEpisode !== null) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down - hide player
          setIsPlayerVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show player
          setIsPlayerVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, currentEpisode]);

  const handlePlayClick = (episodeId: number) => {
    if (currentEpisode === episodeId) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentEpisode(episodeId);
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = parseFloat(e.target.value);
    if (!isNaN(newTime) && isFinite(newTime) && newTime >= 0) {
      isSeekingRef.current = true;
      audio.currentTime = newTime;
      setCurrentTime(newTime);
      setTimeout(() => {
        isSeekingRef.current = false;
      }, 100);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentEpisodeData = episodes.find(e => e.id === currentEpisode);

  return (
    <div className="flex flex-col min-h-screen">
      <style>{`
        .range-input {
          height: 8px;
        }
        .range-input::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #9333ea);
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.4);
          margin-top: -4px;
        }
        .range-input::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #9333ea);
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.4);
        }
        .range-input::-webkit-slider-runnable-track {
          height: 8px;
          border-radius: 4px;
        }
        .range-input::-moz-range-track {
          height: 8px;
          border-radius: 4px;
          background: transparent;
        }
      `}</style>
      <Header />
      <main className={`flex-grow ${currentEpisode !== null ? 'pb-24 md:pb-0' : ''}`}>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden group">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/BLnvq-Yoalskioiha/videoblocks-024_oryna_stryi_rjtkuztael__e030bb6bdb1ceb6adb902e8cb22429cc__P360.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient-x" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl mb-8 border border-white/20 shadow-2xl">
                <Headphones className="text-white" size={36} />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
                The Absolute Health Podcast
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light max-w-2xl mx-auto">
                Where clinical innovators, frontline leaders, and policy architects talk about building the future of care.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Episodes */}
        {featuredEpisodes.length > 0 && (
          <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                  Featured Episodes
                </h2>
                <p className="text-lg text-slate-600">
                  Start with these popular conversations
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredEpisodes.map((episode) => (
                  <Card 
                    key={episode.id} 
                    className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group cursor-pointer"
                    onClick={() => handlePlayClick(episode.id)}
                  >
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                      <img
                        src={episode.imageUrl}
                        alt={episode.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white">
                          <span className="text-sm font-medium bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
                            {episode.category}
                          </span>
                          <span className="text-sm font-medium bg-black/40 px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1">
                            <Clock size={14} />
                            {episode.duration}
                          </span>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-xl ${
                          currentEpisode === episode.id && isPlaying
                            ? 'bg-gradient-to-br from-red-500 to-red-600'
                            : 'bg-gradient-to-br from-blue-500 to-purple-600'
                        }`}>
                          {currentEpisode === episode.id && isPlaying ? (
                            <Pause className="text-white" size={28} fill="currentColor" />
                          ) : (
                            <Play className="text-white ml-1" size={28} fill="currentColor" />
                          )}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {episode.title}
                      </h3>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-2">
                        {episode.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <User size={14} />
                        <span>{episode.guest}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Episodes */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                All Episodes
              </h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Episode List */}
            <div className="space-y-4">
              {filteredEpisodes.map((episode) => (
                <Card 
                  key={episode.id}
                  className={`border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    currentEpisode === episode.id ? 'ring-2 ring-blue-500 bg-blue-50/50' : 'bg-white'
                  }`}
                  onClick={() => handlePlayClick(episode.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Episode Image */}
                      <div className="w-full md:w-48 h-32 md:h-32 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-50 to-purple-50">
                        <img
                          src={episode.imageUrl}
                          alt={episode.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Episode Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                {episode.category}
                              </span>
                              <span className="text-xs text-slate-500 flex items-center gap-1">
                                <Calendar size={12} />
                                {episode.date}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
                              {episode.title}
                            </h3>
                            <p className="text-slate-600 mb-3 text-sm leading-relaxed line-clamp-2">
                              {episode.description}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                              <div className="flex items-center gap-1">
                                <User size={14} />
                                <span>{episode.guest}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock size={14} />
                                <span>{episode.duration}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Play Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePlayClick(episode.id);
                            }}
                            className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 shadow-lg hover:scale-110 ${
                              currentEpisode === episode.id && isPlaying
                                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                            }`}
                          >
                            {currentEpisode === episode.id && isPlaying ? (
                              <Pause size={20} fill="currentColor" />
                            ) : (
                              <Play size={20} fill="currentColor" className="ml-0.5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What Listeners Can Expect */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 text-center">
                What Listeners Can Expect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Conversations</h3>
                    <p className="text-slate-600">Medical directors, NPs/PAs, digital health founders, health-system executives, and policy thinkers.</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Case Studies & Real Outcomes</h3>
                    <p className="text-slate-600">What actually works in navigation, chronic-care programs, and home-based care models.</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Technology Deep Dives</h3>
                    <p className="text-slate-600">AI-driven workflows, interoperability, automation, and data-driven transformation.</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Future of Healthcare</h3>
                    <p className="text-slate-600">Payment models, care redesign, workforce evolution, and the shifting post-acute landscape.</p>
                  </CardContent>
                </Card>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Why We Created This</h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Healthcare is undergoing its biggest redesign in decades.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  This podcast is where leaders come to unpack it—honestly, clearly, and with a focus on what actually moves outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Audio Player */}
      {currentEpisode !== null && currentEpisodeData && (
        <div className={`fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-2xl z-50 transition-transform duration-300 ease-in-out ${
          isPlayerVisible ? 'translate-y-0' : 'translate-y-full'
        }`}>
          <audio ref={audioRef} />
          <div className="container py-3 md:py-4">
            {/* Mobile Layout */}
            <div className="md:hidden space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={currentEpisodeData.imageUrl}
                    alt={currentEpisodeData.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm text-slate-900 truncate">{currentEpisodeData.title}</h4>
                  <p className="text-xs text-slate-600 truncate">{currentEpisodeData.guest}</p>
                </div>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex-shrink-0 shadow-lg"
                >
                  {isPlaying ? (
                    <Pause size={18} fill="currentColor" />
                  ) : (
                    <Play size={18} fill="currentColor" className="ml-0.5" />
                  )}
                </button>
              </div>
              <div className="w-full">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 w-10 text-right flex-shrink-0">{formatTime(currentTime)}</span>
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-input"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 ${duration ? (currentTime / duration) * 100 : 0}%, #e5e7eb ${duration ? (currentTime / duration) * 100 : 0}%)`
                    }}
                  />
                  <span className="text-xs text-slate-500 w-10 flex-shrink-0">{formatTime(duration)}</span>
                </div>
              </div>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={currentEpisodeData.imageUrl}
                  alt={currentEpisodeData.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-slate-900 truncate">{currentEpisodeData.title}</h4>
                <p className="text-sm text-slate-600 truncate">{currentEpisodeData.guest}</p>
              </div>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex-shrink-0 shadow-lg hover:shadow-xl"
              >
                {isPlaying ? (
                  <Pause size={20} fill="currentColor" />
                ) : (
                  <Play size={20} fill="currentColor" className="ml-0.5" />
                )}
              </button>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 w-12 text-right flex-shrink-0">{formatTime(currentTime)}</span>
                  <input
                    type="range"
                    min="0"
                    max={duration && isFinite(duration) ? duration : 0}
                    value={currentTime && isFinite(currentTime) ? currentTime : 0}
                    onChange={handleSeek}
                    className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-input"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 ${duration && duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0}%, #e5e7eb ${duration && duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0}%)`
                    }}
                  />
                  <span className="text-xs text-slate-500 w-12 flex-shrink-0">{formatTime(duration)}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-slate-600 hover:text-blue-600 transition-colors hover:scale-110"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-20 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-input"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 ${volume * 100}%, #e5e7eb ${volume * 100}%)`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default PodcastPage;
