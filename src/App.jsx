import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Coffee, CreditCard, Trophy, BarChart, Menu, X, ChevronRight, CheckCircle, Star, ArrowRight, Facebook, Twitter, Instagram, Github } from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isTelegram, setIsTelegram] = useState(false)

  const howItWorksRef = useRef(null)
  const howItWorksInView = useInView(howItWorksRef, { once: true })

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      setIsTelegram(true)
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Radial gradient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-orange-400/20 via-amber-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-yellow-600/20 via-orange-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* HEADER */}
      <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-2xl z-50 border-b border-white/10">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-600 p-2 rounded-xl">
              <Coffee className="w-6 h-6 text-slate-950" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">CoffeeEco</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-slate-400 hover:text-white transition-colors tracking-tight">Features</button>
            <button onClick={() => scrollToSection('pricing')} className="text-slate-400 hover:text-white transition-colors tracking-tight">Pricing</button>
            <button className="text-slate-400 hover:text-white transition-colors tracking-tight">Docs</button>
            <button className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 text-slate-950 px-6 py-2 rounded-lg font-bold tracking-tight hover:opacity-90 transition-opacity">
              Login
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              <button onClick={() => scrollToSection('features')} className="text-slate-400 hover:text-white transition-colors text-left">Features</button>
              <button onClick={() => scrollToSection('pricing')} className="text-slate-400 hover:text-white transition-colors text-left">Pricing</button>
              <button className="text-slate-400 hover:text-white transition-colors text-left">Docs</button>
              <button className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 text-slate-950 px-6 py-2 rounded-lg font-bold tracking-tight">
                Login
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6"
            >
              Кофе. Код. Крипто.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto"
            >
              Система лояльности нового поколения. Заказывайте кофе, платите криптой, получайте NFT-бонусы.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <button className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 text-slate-950 px-8 py-4 rounded-xl text-lg font-bold tracking-tight hover:opacity-90 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/50 flex items-center justify-center gap-2">
                Начать работу
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold tracking-tight transition-all backdrop-blur-sm border border-white/20">
                Документация
              </button>
            </motion.div>

            {isTelegram && (
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold tracking-tight transition-colors"
              >
                Открыть профиль ТГ
              </motion.button>
            )}

            {/* Floating Order Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 max-w-md mx-auto"
            >
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-2xl border border-white/10 backdrop-blur-2xl shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center">
                      <Coffee className="w-6 h-6 text-slate-950" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold tracking-tight">Ваш заказ</h3>
                      <p className="text-slate-400 text-sm">#12345</p>
                    </div>
                  </div>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">Готов</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-slate-400">
                    <span>Капучино x2</span>
                    <span>0.05 TON</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Круассан</span>
                    <span>0.02 TON</span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                  <span className="text-white font-bold">Итого:</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">0.07 TON</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENTO GRID - FEATURES */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold tracking-tighter text-white text-center mb-16"
          >
            Возможности <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">экосистемы</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Smart Order */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-8 rounded-2xl border border-white/10 backdrop-blur-2xl hover:border-orange-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20"
            >
              <div className="bg-gradient-to-br from-orange-400/20 to-amber-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Coffee className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-4">Smart Order</h3>
              <p className="text-slate-400 leading-relaxed">
                Предзаказ с ИИ-рекомендациями. Ваш кофе готов к моменту прихода в кофейню.
              </p>
            </motion.div>

            {/* Crypto Payments - Wide */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-8 rounded-2xl border border-white/10 backdrop-blur-2xl hover:border-amber-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20"
            >
              <div className="bg-gradient-to-br from-amber-400/20 to-yellow-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-4">Crypto Payments</h3>
              <p className="text-slate-400 leading-relaxed">
                Оплата в TON и Stars. Мгновенные транзакции без комиссий банков. Web3-кошелек интегрирован в приложение.
              </p>
            </motion.div>

            {/* NFT Loyalty */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-8 rounded-2xl border border-white/10 backdrop-blur-2xl hover:border-yellow-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20"
            >
              <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-4">NFT Loyalty</h3>
              <p className="text-slate-400 leading-relaxed">
                Уникальные бонусы в виде NFT. Коллекционируйте достижения и обменивайте на эксклюзивы.
              </p>
            </motion.div>

            {/* Live Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-8 rounded-2xl border border-white/10 backdrop-blur-2xl hover:border-orange-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20"
            >
              <div className="bg-gradient-to-br from-orange-400/20 to-red-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <BarChart className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-4">Live Analytics</h3>
              <p className="text-slate-400 leading-relaxed">
                Дашборд для владельцев кофеен. Данные о продажах и популярных позициях в реальном времени.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section ref={howItWorksRef} className="py-20 px-6">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: howItWorksInView ? 1 : 0, y: howItWorksInView ? 0 : 30 }}
            className="text-5xl md:text-6xl font-bold tracking-tighter text-white text-center mb-16"
          >
            Как это <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">работает</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-orange-400 via-amber-500 to-yellow-600" />

              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: howItWorksInView ? 1 : 0, x: howItWorksInView ? 0 : -30 }}
                transition={{ delay: 0.2 }}
                className="relative flex items-start gap-6 mb-12"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-slate-950 font-bold text-2xl z-10">
                  1
                </div>
                <div className="flex-1 bg-slate-900/50 p-6 rounded-2xl border border-white/10 backdrop-blur-2xl">
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-3">Выберите напиток</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Откройте приложение и выберите любимый кофе из меню. ИИ подскажет новинки на основе ваших предпочтений.
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: howItWorksInView ? 1 : 0, x: howItWorksInView ? 0 : -30 }}
                transition={{ delay: 0.4 }}
                className="relative flex items-start gap-6 mb-12"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center text-slate-950 font-bold text-2xl z-10">
                  2
                </div>
                <div className="flex-1 bg-slate-900/50 p-6 rounded-2xl border border-white/10 backdrop-blur-2xl">
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-3">Оплатите криптой</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Мгновенная оплата в TON или Stars. Никаких очередей, комиссий и задержек. Ваши средства — в безопасности.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: howItWorksInView ? 1 : 0, x: howItWorksInView ? 0 : -30 }}
                transition={{ delay: 0.6 }}
                className="relative flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-400 rounded-full flex items-center justify-center text-slate-950 font-bold text-2xl z-10">
                  3
                </div>
                <div className="flex-1 bg-slate-900/50 p-6 rounded-2xl border border-white/10 backdrop-blur-2xl">
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-3">Получите бонусы</h3>
                  <p className="text-slate-400 leading-relaxed">
                    За каждый заказ — NFT-бонусы и достижения. Коллекционируйте уникальные карточки и обменивайте на привилегии.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold tracking-tighter text-white text-center mb-16"
          >
            Тарифы для <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">кофеен</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Lite */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-2xl hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2">Lite</h3>
              <p className="text-slate-400 mb-6">Для стартапов</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$49</span>
                <span className="text-slate-400">/мес</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">До 100 заказов/месяц</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">Базовая аналитика</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">Email поддержка</span>
                </li>
              </ul>
              <button className="w-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold tracking-tight transition-all border border-white/20">
                Начать
              </button>
            </motion.div>

            {/* Pro - Most Popular */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 rounded-2xl border-2 border-orange-500 backdrop-blur-2xl shadow-2xl shadow-orange-500/50 transform scale-105"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 text-slate-950 px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2">Pro</h3>
              <p className="text-slate-400 mb-6">Для растущих сетей</p>
              <div className="mb-6">
                <span className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">$149</span>
                <span className="text-slate-400">/мес</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">До 1000 заказов/месяц</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Продвинутая аналитика</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">NFT программа лояльности</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Приоритетная поддержка</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 text-slate-950 px-6 py-3 rounded-xl font-bold tracking-tight hover:opacity-90 transition-all transform hover:scale-105">
                Начать
              </button>
            </motion.div>

            {/* Enterprise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-2xl hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2">Enterprise</h3>
              <p className="text-slate-400 mb-6">Для корпораций</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">Безлимитные заказы</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">Кастомная интеграция</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">Персональный менеджер</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">SLA 99.9%</span>
                </li>
              </ul>
              <button className="w-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold tracking-tight transition-all border border-white/20">
                Связаться
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/50 border-t border-white/10 py-16 px-6 backdrop-blur-2xl">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-600 p-2 rounded-xl">
                  <Coffee className="w-6 h-6 text-slate-950" />
                </div>
                <span className="text-xl font-bold tracking-tighter text-white">CoffeeEco</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Высокотехнологичная кофейная экосистема будущего.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white font-bold tracking-tight mb-4">Продукт</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-slate-400 hover:text-white transition-colors text-sm">Features</a></li>
                <li><a href="#pricing" className="text-slate-400 hover:text-white transition-colors text-sm">Pricing</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Roadmap</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Updates</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold tracking-tight mb-4">Компания</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">О нас</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Контакты</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold tracking-tight mb-4">Правовая информация</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Security</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2024 CoffeeEco. Все права защищены.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App