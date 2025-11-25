import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-navy" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">RepuGuard</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-secondary transition-colors">Услуги</a>
            <a href="#cases" className="text-foreground hover:text-secondary transition-colors">Кейсы</a>
            <a href="#team" className="text-foreground hover:text-secondary transition-colors">Команда</a>
            <a href="#reviews" className="text-foreground hover:text-secondary transition-colors">Отзывы</a>
            <a href="#blog" className="text-foreground hover:text-secondary transition-colors">Блог</a>
            <a href="#contacts" className="text-foreground hover:text-secondary transition-colors">Контакты</a>
          </div>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
            Консультация
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-display font-bold text-5xl md:text-7xl text-foreground mb-6 leading-tight">
              Управление репутацией <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-gold">в поисковых системах</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              SERM-стратегии премиум-класса для защиты и укрепления имиджа вашего бренда в поисковой выдаче
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-lg px-8">
                Получить стратегию
              </Button>
              <Button size="lg" variant="outline" className="border-2 font-semibold text-lg px-8">
                Аудит репутации
              </Button>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-secondary mb-2">200+</div>
                <div className="text-muted-foreground">Успешных кейсов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-secondary mb-2">98%</div>
                <div className="text-muted-foreground">Удовлетворенных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-secondary mb-2">7 лет</div>
                <div className="text-muted-foreground">На рынке SERM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к управлению онлайн-репутацией
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Search",
                title: "SERM-мониторинг",
                description: "Круглосуточный контроль упоминаний в поисковой выдаче и на ключевых площадках"
              },
              {
                icon: "TrendingUp",
                title: "Вытеснение негатива",
                description: "Профессиональное замещение негативных материалов позитивным контентом"
              },
              {
                icon: "Shield",
                title: "Защита репутации",
                description: "Превентивные меры и быстрое реагирование на репутационные угрозы"
              },
              {
                icon: "FileText",
                title: "Контент-стратегия",
                description: "Создание и продвижение экспертного контента для усиления репутации"
              },
              {
                icon: "MessageSquare",
                title: "Работа с отзывами",
                description: "Управление отзывами на всех ключевых платформах и агрегаторах"
              },
              {
                icon: "BarChart3",
                title: "Аналитика и отчеты",
                description: "Детальная аналитика эффективности SERM-стратегии и KPI"
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-gold/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon name={service.icon as any} size={28} className="text-secondary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Кейсы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших клиентов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                industry: "Финтех",
                result: "Вытеснили 15 негативных статей из ТОП-10",
                metric: "+87% позитивных упоминаний",
                time: "за 4 месяца"
              },
              {
                industry: "Ритейл",
                result: "Восстановили репутацию после кризиса",
                metric: "Рост NPS с 35 до 78",
                time: "за 6 месяцев"
              },
              {
                industry: "IT-компания",
                result: "Построили позитивную репутацию с нуля",
                metric: "100+ положительных публикаций",
                time: "за 5 месяцев"
              },
              {
                industry: "Недвижимость",
                result: "Защитили от конкурентной атаки",
                metric: "Блокировали 95% негатива",
                time: "за 2 месяца"
              }
            ].map((caseItem, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-card to-muted/20 border-border hover:shadow-lg transition-all">
                <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
                  {caseItem.industry}
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-4">
                  {caseItem.result}
                </h3>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={18} className="text-secondary" />
                    <span className="text-secondary font-semibold">{caseItem.metric}</span>
                  </div>
                  <div className="text-muted-foreground">{caseItem.time}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Команда экспертов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессионалы с опытом работы в топовых агентствах
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Александр Волков",
                position: "CEO & SERM-стратег",
                experience: "12 лет в управлении репутацией"
              },
              {
                name: "Мария Соколова",
                position: "Руководитель аналитики",
                experience: "8 лет в digital-аналитике"
              },
              {
                name: "Дмитрий Орлов",
                position: "Head of Content",
                experience: "10 лет в контент-маркетинге"
              }
            ].map((member, index) => (
              <Card key={index} className="p-8 text-center bg-card border-border hover:shadow-lg transition-all">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/30 to-gold/30 flex items-center justify-center">
                  <Icon name="User" size={40} className="text-secondary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                  {member.name}
                </h3>
                <div className="text-secondary font-semibold mb-2">{member.position}</div>
                <p className="text-sm text-muted-foreground">{member.experience}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                author: "Игорь Петров",
                company: "CEO финтех-стартапа",
                text: "RepuGuard спасли нашу репутацию после атаки конкурентов. За 3 месяца весь негатив исчез из первой страницы поиска. Профессионализм на высшем уровне."
              },
              {
                author: "Елена Краснова",
                company: "CMO ритейл-сети",
                text: "Работаем с агентством уже 2 года. Постоянный мониторинг, быстрая реакция на инциденты, прозрачная отчетность. Рекомендуем!"
              },
              {
                author: "Андрей Михайлов",
                company: "Владелец сети клиник",
                text: "Впечатлен качеством работы. Команда не только вытеснила негатив, но и выстроила долгосрочную стратегию управления репутацией."
              },
              {
                author: "Ольга Новикова",
                company: "PR-директор IT-компании",
                text: "Лучшее SERM-агентство с которым мы работали. Индивидуальный подход, креативные решения, измеримые результаты."
              }
            ].map((review, index) => (
              <Card key={index} className="p-8 bg-card border-border">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={18} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{review.text}"
                </p>
                <div>
                  <div className="font-display font-semibold text-foreground">{review.author}</div>
                  <div className="text-sm text-muted-foreground">{review.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Блог
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Экспертные материалы об управлении репутацией
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "SERM в 2024: новые тренды и подходы",
                category: "Тренды",
                date: "15 ноября 2024"
              },
              {
                title: "Как защитить бренд от репутационных кризисов",
                category: "Кейсы",
                date: "10 ноября 2024"
              },
              {
                title: "ROI в управлении репутацией: считаем правильно",
                category: "Аналитика",
                date: "5 ноября 2024"
              }
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden bg-card border-border hover:shadow-lg transition-all group cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-secondary/20 to-gold/20 flex items-center justify-center">
                  <Icon name="BookOpen" size={48} className="text-secondary group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold mb-3">
                    {post.category}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={16} />
                    <span>{post.date}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-muted-foreground">
              Получите бесплатную консультацию и аудит репутации
            </p>
          </div>
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-muted/20 border-border">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Сообщение</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-background resize-none"
                  placeholder="Расскажите о вашей задаче"
                />
              </div>
              <Button size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-lg">
                Отправить заявку
              </Button>
            </form>
            <div className="mt-10 pt-10 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="Mail" size={24} className="text-secondary mx-auto mb-2" />
                <div className="text-sm text-muted-foreground mb-1">Email</div>
                <div className="font-semibold text-foreground">info@repuguard.ru</div>
              </div>
              <div>
                <Icon name="Phone" size={24} className="text-secondary mx-auto mb-2" />
                <div className="text-sm text-muted-foreground mb-1">Телефон</div>
                <div className="font-semibold text-foreground">+7 (495) 123-45-67</div>
              </div>
              <div>
                <Icon name="MapPin" size={24} className="text-secondary mx-auto mb-2" />
                <div className="text-sm text-muted-foreground mb-1">Адрес</div>
                <div className="font-semibold text-foreground">Москва, ЦАО</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 bg-navy text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Shield" size={24} className="text-navy" />
              </div>
              <span className="font-display font-bold text-xl">RepuGuard</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-white/80">© 2024 RepuGuard. Все права защищены.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
