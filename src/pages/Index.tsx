import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const services = [
    {
      title: "Корпоративное право",
      description: "Регистрация компаний, договоры, корпоративные споры",
      icon: "Building2"
    },
    {
      title: "Недвижимость", 
      description: "Сделки с недвижимостью, оформление прав собственности",
      icon: "Home"
    },
    {
      title: "Семейное право",
      description: "Развод, алименты, раздел имущества, опека",
      icon: "Heart"
    },
    {
      title: "Арбитражные споры",
      description: "Представительство в арбитражных судах",
      icon: "Scale"
    },
    {
      title: "Уголовное право",
      description: "Защита по уголовным делам, консультации",
      icon: "Shield"
    },
    {
      title: "Трудовое право",
      description: "Трудовые споры, восстановление на работе",
      icon: "Users"
    }
  ];

  const team = [
    {
      name: "Александр Петров",
      position: "Управляющий партнер",
      experience: "15 лет опыта",
      specialization: "Корпоративное право"
    },
    {
      name: "Мария Сидорова", 
      position: "Ведущий юрист",
      experience: "12 лет опыта",
      specialization: "Недвижимость"
    },
    {
      name: "Дмитрий Козлов",
      position: "Старший юрист",
      experience: "8 лет опыта", 
      specialization: "Арбитраж"
    }
  ];

  const stats = [
    { number: "500+", label: "Выигранных дел" },
    { number: "15", label: "Лет на рынке" },
    { number: "95%", label: "Успешных кейсов" },
    { number: "24/7", label: "Поддержка клиентов" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-display text-2xl font-bold text-secondary">
              Мина <span className="text-primary">и партнеры</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-6">
                <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
                <a href="#team" className="text-gray-700 hover:text-primary transition-colors">Команда</a>
                <a href="#cases" className="text-gray-700 hover:text-primary transition-colors">Кейсы</a>
                <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
              </nav>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-secondary font-semibold">
                  <Icon name="Phone" size={16} className="mr-2 text-primary" />
                  +7 (978) 123-45-67
                </div>
                <Button 
                  onClick={() => setIsConsultationOpen(true)}
                  className="bg-primary hover:bg-gold-dark text-primary-foreground"
                >
                  Консультация
                </Button>
              </div>
            </div>

            <div className="md:hidden">
              <Button variant="outline" size="sm">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
              Работаем по всему Крыму
            </Badge>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-secondary mb-6">
              Надёжная <span className="text-primary">юридическая</span> защита
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Профессиональные юридические услуги в Крыму. Защищаем ваши интересы 
              с 2009 года. Главный офис в центре Симферополя.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsConsultationOpen(true)}
                className="bg-primary hover:bg-gold-dark text-primary-foreground px-8 py-6 text-lg"
              >
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-display font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-secondary mb-6">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр юридических услуг для физических лиц и бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="font-display text-xl text-secondary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-secondary mb-6">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Опытные юристы с глубоким знанием российского законодательства
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-display text-xl text-secondary">{member.name}</CardTitle>
                  <p className="text-primary font-semibold">{member.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{member.experience}</p>
                  <Badge variant="outline" className="border-primary text-primary">
                    {member.specialization}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section id="cases" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-secondary mb-6">
              Успешные кейсы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры нашей эффективной работы
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Icon name="Trophy" size={24} className="text-primary mr-3" />
                  <Badge className="bg-green-100 text-green-800">Победа в суде</Badge>
                </div>
                <CardTitle className="font-display text-xl text-secondary">
                  Корпоративный спор на 15 млн рублей
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Успешно защитили интересы клиента в арбитражном суде, 
                  взыскав с контрагента полную сумму задолженности.
                </p>
                <div className="text-primary font-semibold">Результат: 100% удовлетворение требований</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Icon name="Home" size={24} className="text-primary mr-3" />
                  <Badge className="bg-blue-100 text-blue-800">Недвижимость</Badge>
                </div>
                <CardTitle className="font-display text-xl text-secondary">
                  Сложная сделка с коммерческой недвижимостью
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Провели полную юридическую экспертизу и сопроводили сделку 
                  на 45 млн рублей без рисков для клиента.
                </p>
                <div className="text-primary font-semibold">Результат: Чистая сделка за 14 дней</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-4xl font-bold mb-8">
                Свяжитесь с нами
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Icon name="MapPin" size={24} className="text-primary mr-4 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Главный офис</div>
                    <div className="text-gray-300">
                      г. Симферополь, ул. Долгоруковская, 5<br />
                      (центр города)
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={24} className="text-primary mr-4" />
                  <div>
                    <div className="font-semibold">+7 (978) 123-45-67</div>
                    <div className="text-gray-300">Круглосуточно</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={24} className="text-primary mr-4" />
                  <div>
                    <div className="font-semibold">info@jurispro-crimea.ru</div>
                    <div className="text-gray-300">Ответим в течение часа</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-display text-2xl font-bold mb-6">
                Работаем по всему Крыму
              </h3>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div>• Симферополь</div>
                <div>• Севастополь</div>
                <div>• Ялта</div>
                <div>• Евпатория</div>
                <div>• Керчь</div>
                <div>• Феодосия</div>
                <div>• Алушта</div>
                <div>• Джанкой</div>
              </div>
              <Button 
                onClick={() => setIsConsultationOpen(true)}
                className="mt-8 bg-primary hover:bg-gold-dark text-primary-foreground"
              >
                Записаться на консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Мина и партнеры. Все права защищены.</p>
        </div>
      </footer>

      {/* Consultation Modal */}
      <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-secondary">
              Бесплатная консультация
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="text-center py-8">
              <Icon name="Bot" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-secondary mb-4">
                Юридический помощник
              </h3>
              <p className="text-gray-600 mb-6">
                Наш AI-помощник поможет записаться на консультацию и ответит на базовые вопросы
              </p>
              <Button className="w-full bg-primary hover:bg-gold-dark text-primary-foreground">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Начать чат с ботом
              </Button>
            </div>
            <div className="text-center text-sm text-gray-500">
              Или позвоните нам: <span className="text-primary font-semibold">+7 (978) 123-45-67</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsConsultationOpen(true)}
          className="h-14 w-14 rounded-full bg-primary hover:bg-gold-dark text-primary-foreground shadow-lg hover:shadow-xl transition-all"
        >
          <Icon name="MessageCircle" size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Index;