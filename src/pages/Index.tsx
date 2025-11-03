import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const { toast } = useToast();

  const features = [
    {
      icon: 'Sparkles',
      title: 'AI-Генерация Сайтов',
      description: 'Искусственный интеллект создаст полноценный сайт за минуты на основе вашего описания',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Layout',
      title: 'Шаблоны Индустрий',
      description: 'Готовые шаблоны для e-commerce, блогов, портфолио, бизнеса и стартапов',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Zap',
      title: 'Интеграции',
      description: 'Подключайте платежи, аналитику, CRM, email-рассылки одним кликом',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: 'Search',
      title: 'SEO-Оптимизация',
      description: 'Автоматическая настройка метатегов, sitemap, скорости загрузки для топа поиска',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Code',
      title: 'Экспорт Кода',
      description: 'Скачайте чистый код React, HTML/CSS или развертывайте на любом хостинге',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: 'Smartphone',
      title: 'Адаптивность',
      description: 'Все сайты автоматически адаптируются под мобильные, планшеты и десктопы',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  const plans = [
    {
      name: 'Старт',
      price: '990',
      period: 'месяц',
      description: 'Для личных проектов',
      features: ['1 сайт', '5 страниц', 'Базовые шаблоны', 'Техподдержка'],
      popular: false
    },
    {
      name: 'Профи',
      price: '2990',
      period: 'месяц',
      description: 'Для бизнеса',
      features: ['5 сайтов', 'Безлимит страниц', 'Все шаблоны', 'Интеграции', 'SEO-оптимизация', 'Приоритетная поддержка'],
      popular: true
    },
    {
      name: 'Агентство',
      price: '9990',
      period: 'месяц',
      description: 'Для агентств',
      features: ['Безлимит сайтов', 'Белый лейбл', 'API доступ', 'Кастомные интеграции', 'Персональный менеджер'],
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Как AI создаёт сайты?',
      answer: 'Наш AI анализирует ваше описание, изучает лучшие практики дизайна и UX, затем генерирует полноценный сайт с современным дизайном, адаптивной версткой и оптимизированным кодом.'
    },
    {
      question: 'Нужны ли навыки программирования?',
      answer: 'Абсолютно нет! Вы описываете что хотите простым языком, AI делает всю техническую работу. Но если умеете кодить — можете редактировать код вручную.'
    },
    {
      question: 'Можно ли изменить сгенерированный сайт?',
      answer: 'Да! Вы можете попросить AI внести изменения, отредактировать элементы визуально или работать с кодом напрямую.'
    },
    {
      question: 'Какие интеграции доступны?',
      answer: 'Stripe/PayPal для оплаты, Google Analytics/Yandex.Metrika, Mailchimp/SendPulse для рассылок, AmoCRM/Bitrix24, чаты и многое другое.'
    },
    {
      question: 'Как работает SEO-оптимизация?',
      answer: 'AI автоматически настраивает метатеги, создаёт sitemap.xml, оптимизирует изображения, скорость загрузки и структуру для поисковиков.'
    },
    {
      question: 'Могу ли я перенести сайт на свой хостинг?',
      answer: 'Да! Вы можете экспортировать код и развернуть на любом хостинге. Также доступна публикация в один клик на нашей инфраструктуре.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено!',
      description: 'Мы свяжемся с вами в течение 24 часов',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Builder
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition">Возможности</a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition">Цены</a>
            <a href="#faq" className="text-foreground/80 hover:text-foreground transition">FAQ</a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Начать бесплатно
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              🚀 Новая эра веб-разработки
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
              Создавайте сайты силой мысли
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              AI-конструктор превращает ваши идеи в профессиональные сайты за минуты. Без кода. Без дизайнеров. Без ограничений.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Создать сайт бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl animate-pulse-glow" />
            <Card className="relative overflow-hidden border-2 border-primary/20 animate-float">
              <div className="aspect-video bg-gradient-to-br from-card via-muted to-card p-8 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border/50 hover:border-primary/50 transition-all duration-300"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="h-3 bg-primary/30 rounded mb-2 w-3/4" />
                      <div className="h-3 bg-muted rounded mb-2" />
                      <div className="h-3 bg-muted rounded w-1/2" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Возможности платформы
            </h2>
            <p className="text-xl text-muted-foreground">
              Всё, что нужно для создания идеального сайта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/30"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={feature.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Выберите свой план
            </h2>
            <p className="text-xl text-muted-foreground">
              Начните бесплатно, обновляйтесь по мере роста
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? 'border-2 border-primary shadow-2xl shadow-primary/20 scale-105'
                    : 'border-border hover:border-primary/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-5xl font-bold">{plan.price}₽</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-primary hover:bg-primary/90'
                        : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                    }`}
                    onClick={() => setSelectedPlan(plan.name)}
                  >
                    {selectedPlan === plan.name ? 'Выбрано' : 'Выбрать план'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Частые вопросы
            </h2>
            <p className="text-xl text-muted-foreground">
              Ответы на самые популярные вопросы
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Остались вопросы?
            </h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами, и мы поможем
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Имя
                  </label>
                  <Input placeholder="Ваше имя" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте или вопросе..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">AI Builder</span>
            </div>
            <div className="flex gap-6">
              <Button variant="ghost" size="icon">
                <Icon name="Github" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
          <div className="text-center mt-8 text-muted-foreground">
            © 2024 AI Builder. Создавайте будущее уже сегодня.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
