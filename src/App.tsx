import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { 
  Building2, 
  Users, 
  Calendar, 
  Target, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
  Clock,
  Euro,
  FileText,
  Camera,
  Video,
  Megaphone,
  ArrowRight,
  Star
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', title: 'Wprowadzenie', icon: Building2 },
    { id: 'analysis', title: 'Analiza wymagań', icon: Target },
    { id: 'pricing', title: 'Wycena usług', icon: Euro },
    { id: 'cooperation', title: 'Model współpracy', icon: Users },
    { id: 'timeline', title: 'Harmonogram', icon: Calendar },
    { id: 'contact', title: 'Kontakt', icon: Mail }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="gradient-bg text-white py-8 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Pollyart</h1>
                <p className="text-blue-100">Agencja Social Media i Marketingowa</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Oferta dla ZEOP
            </Badge>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-[120px] z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    activeSection === section.id
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{section.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        
        {/* Wprowadzenie */}
        <section id="intro" className="section-fade">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Oferta prowadzenia social media
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              dla Stowarzyszenia „Z energią o prawie"
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>Przygotowano: {new Date().toLocaleDateString('pl-PL')}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="pricing-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span>O Pollyart</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Jesteśmy profesjonalną agencją specjalizującą się w social media i marketingu cyfrowym. 
                  Oferujemy kompleksowe usługi prowadzenia profili społecznościowych, tworzenia treści 
                  i kampanii promocyjnych.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Doświadczenie w branży energetycznej</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Zespół specjalistów social media</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Kompleksowa obsługa projektów</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="pricing-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Zakres oferty</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-4 h-4 text-accent" />
                    <span className="text-sm">Tworzenie planów publikacji</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Camera className="w-4 h-4 text-accent" />
                    <span className="text-sm">Materiały graficzne i video</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Megaphone className="w-4 h-4 text-accent" />
                    <span className="text-sm">Kampanie promocyjne</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="text-sm">Dedykowany Project Manager</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Analiza wymagań */}
        <section id="analysis" className="section-fade">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Analiza wymagań klienta
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="pricing-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Profile społecznościowe ZEOP</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">LinkedIn (główna platforma)</p>
                      <p className="text-sm text-gray-600">2 profile: główny + KEP</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Facebook className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Facebook</p>
                      <p className="text-sm text-gray-600">2 profile: ZEOP + KEP</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Twitter className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">X (Twitter)</p>
                      <p className="text-sm text-gray-600">1 profil główny</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Youtube className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-medium">YouTube</p>
                      <p className="text-sm text-gray-600">Kanał główny</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="pricing-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Częstotliwość publikacji</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">LinkedIn (priorytet)</h4>
                    <p className="text-green-700">2 posty tygodniowo na każdym profilu</p>
                    <p className="text-sm text-green-600 mt-1">Łącznie: 4 posty/tydzień</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Pozostałe platformy</h4>
                    <p className="text-blue-700">Regularne publikacje zgodnie z harmonogramem</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Kampanie specjalne</h4>
                    <p className="text-orange-700">Kongres Energetyki Przyszłości</p>
                    <p className="text-sm text-orange-600 mt-1">+ inne inicjatywy w ciągu roku</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Wycena usług */}
        <section id="pricing" className="section-fade">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Szczegółowa wycena usług
          </h2>

          <div className="grid gap-8">
            {/* Plan publikacji */}
            <Card className="pricing-card border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <span>Tworzenie planu/harmonogramu publikacji</span>
                  </div>
                  <Badge variant="outline">Miesięcznie</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Zakres usługi:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Analiza trendów i tematów branżowych</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Kalendarz publikacji na wszystkie platformy</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Strategia treści dopasowana do grupy docelowej</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Harmonogram uwzględniający wydarzenia branżowe</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">1,200 zł</p>
                      <p className="text-gray-600">netto miesięcznie</p>
                      <Separator className="my-4" />
                      <p className="text-sm text-gray-500">
                        Obejmuje wszystkie platformy<br />
                        LinkedIn, Facebook, X, YouTube
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tworzenie treści */}
            <Card className="pricing-card border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Camera className="w-5 h-5 text-accent" />
                    <span>Tworzenie treści i materiałów</span>
                  </div>
                  <Badge variant="outline">Za post</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span>Posty tekstowe</span>
                    </h4>
                    <p className="text-2xl font-bold text-primary mb-2">120 zł</p>
                    <p className="text-sm text-gray-600">netto za post</p>
                    <ul className="text-xs mt-3 space-y-1">
                      <li>• Copywriting</li>
                      <li>• Hashtagi</li>
                      <li>• Optymalizacja SEO</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center space-x-2">
                      <Camera className="w-4 h-4" />
                      <span>Grafiki/zdjęcia</span>
                    </h4>
                    <p className="text-2xl font-bold text-primary mb-2">220 zł</p>
                    <p className="text-sm text-gray-600">netto za post</p>
                    <ul className="text-xs mt-3 space-y-1">
                      <li>• Projekt graficzny</li>
                      <li>• Branding ZEOP</li>
                      <li>• Adaptacja na platformy</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center space-x-2">
                      <Video className="w-4 h-4" />
                      <span>Video/Reels</span>
                    </h4>
                    <p className="text-2xl font-bold text-primary mb-2">380 zł</p>
                    <p className="text-sm text-gray-600">netto za post</p>
                    <ul className="text-xs mt-3 space-y-1">
                      <li>• Montaż video</li>
                      <li>• Animacje</li>
                      <li>• Muzyka/efekty</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Pakiet miesięczny (4 posty LinkedIn):</h4>
                  <div className="flex items-center justify-between">
                    <span>2 posty graficzne + 2 posty tekstowe</span>
                    <span className="text-xl font-bold text-primary">680 zł netto/miesiąc</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Oszczędność 15% w porównaniu do cen jednostkowych</p>
                </div>
              </CardContent>
            </Card>

            {/* Kampanie promocyjne */}
            <Card className="pricing-card border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Megaphone className="w-5 h-5 text-orange-500" />
                    <span>Kampanie promocyjne inicjatyw</span>
                  </div>
                  <Badge variant="outline">Za kampanię</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Kongres Energetyki Przyszłości:</h4>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>Strategia promocyjna 360°</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>Materiały na wszystkie platformy</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>Kampania przed, w trakcie i po wydarzeniu</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>Relacje live, podsumowania</span>
                      </li>
                    </ul>
                    <div className="bg-orange-100 p-3 rounded">
                      <p className="text-lg font-bold text-orange-800">7,500 zł netto</p>
                      <p className="text-sm text-orange-600">Kompleksowa kampania KEP</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Inne inicjatywy (mniejsze):</h4>
                    <ul className="space-y-2 text-sm mb-4">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Plan promocyjny</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Materiały graficzne</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Posty promocyjne</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Monitoring i raportowanie</span>
                      </li>
                    </ul>
                    <div className="bg-blue-100 p-3 rounded">
                      <p className="text-lg font-bold text-blue-800">2,200-3,800 zł netto</p>
                      <p className="text-sm text-blue-600">W zależności od zakresu</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Podsumowanie miesięczne */}
            <Card className="pricing-card border-l-4 border-l-green-500 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Euro className="w-5 h-5 text-green-600" />
                    <span>Szacunkowe koszty miesięczne</span>
                  </div>
                  <Badge variant="default" className="bg-green-600">Przykład</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-800">Pakiet podstawowy:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Plan publikacji</span>
                        <span className="font-medium">1,200 zł</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Pakiet 4 postów LinkedIn</span>
                        <span className="font-medium">680 zł</span>
                      </li>
                      <li className="flex justify-between border-t pt-2">
                        <span className="font-semibold">Razem miesięcznie:</span>
                        <span className="font-bold text-green-700">1,880 zł netto</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-800">Korzyści cenowe:</h4>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Ceny konkurencyjne na rynku</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>15% rabat w pakiecie miesięcznym</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Brak ukrytych kosztów</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Możliwość negocjacji przy długoterminowej współpracy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Model współpracy */}
        <section id="cooperation" className="section-fade">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Model współpracy
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="pricing-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <span>Formalne aspekty</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Forma współpracy</h4>
                  <p className="text-blue-700">Umowa o świadczenie usług</p>
                  <p className="text-sm text-blue-600">Długoterminowa współpraca z możliwością rozwiązania z 30-dniowym wypowiedzeniem</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Fakturowanie</h4>
                  <p className="text-green-700">Faktury miesięczne, płatność 14 dni</p>
                  <p className="text-sm text-green-600">Usługi stałe: do 5. dnia miesiąca<br />Kampanie: po realizacji</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Dodatkowe usługi</h4>
                  <p className="text-purple-700">Wycena indywidualna</p>
                  <p className="text-sm text-purple-600">Zlecenia wykraczające poza stały zakres</p>
                </div>
              </CardContent>
            </Card>

            <Card className="pricing-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Zespół i komunikacja</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Dedykowany Project Manager</h4>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">GF</span>
                    </div>
                    <div>
                      <p className="font-medium">Grzegorz Fijałkowski</p>
                      <p className="text-sm text-gray-600">Główny punkt kontaktu</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Odpowiedzialny za komunikację, koordynację zespołu i terminowość realizacji
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Zespół specjalistów</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Copywriter (treści)</li>
                    <li>• Grafik (materiały wizualne)</li>
                    <li>• Video editor (materiały video)</li>
                    <li>• Social media specialist</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="pricing-card mt-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Proces przekazywania materiałów</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Briefing</h4>
                  <p className="text-sm text-gray-600">Ustalenie szczegółów i wymagań</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Tworzenie</h4>
                  <p className="text-sm text-gray-600">Przygotowanie materiałów przez zespół</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-yellow-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Akceptacja</h4>
                  <p className="text-sm text-gray-600">Przesłanie do akceptacji (3 dni robocze)</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">Publikacja</h4>
                  <p className="text-sm text-gray-600">Wdrożenie zgodnie z harmonogramem</p>
                </div>
              </div>
              <Separator className="my-6" />
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Terminy przekazywania:</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• <strong>Posty regularne:</strong> 3 dni robocze przed publikacją</li>
                  <li>• <strong>Kampanie:</strong> 7 dni roboczych przed startem</li>
                  <li>• <strong>Materiały pilne:</strong> do uzgodnienia indywidualnie</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Harmonogram */}
        <section id="timeline" className="section-fade">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Harmonogram realizacji
          </h2>

          <Card className="pricing-card">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Sierpień 2025</h4>
                    <p className="text-gray-600">Finalizacja oferty i podpisanie umowy</p>
                  </div>
                  <Badge variant="outline">Do 15.08.2025</Badge>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-accent rounded-full"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Wrzesień 2025</h4>
                    <p className="text-gray-600">Przygotowania do startu, analiza profili, pierwszy harmonogram</p>
                  </div>
                  <Badge variant="outline">Wrzesień 2025</Badge>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold">1 października 2025</h4>
                    <p className="text-gray-600">Start regularnej współpracy - pierwsze publikacje</p>
                  </div>
                  <Badge variant="default">Start</Badge>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Październik 2025 - ciągłe</h4>
                    <p className="text-gray-600">Regularne publikacje, monitoring, optymalizacja strategii</p>
                  </div>
                  <Badge variant="secondary">Ongoing</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Kontakt */}
        <section id="contact" className="section-fade">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Kontakt i następne kroki
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="pricing-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Dane kontaktowe</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">GF</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Grzegorz Fijałkowski</h4>
                    <p className="text-gray-600">Project Manager</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span>+48 579 653 780</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span>grzegorzfijalkowski@pollyart.pl</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>ul. Marii Konopnickiej 11/1, 87-100 Toruń</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="pricing-card border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ArrowRight className="w-5 h-5 text-green-500" />
                  <span>Następne kroki</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Gotowi do współpracy!</h4>
                  <p className="text-green-700 text-sm">
                    Jesteśmy gotowi rozpocząć współpracę od razu po akceptacji oferty i podpisaniu umowy.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Odpowiedź na pytania do 15.08.2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Możliwość modyfikacji oferty</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Bezpłatna konsultacja strategiczna</span>
                  </div>
                </div>

                <Button className="w-full gradient-bg text-white hover:opacity-90">
                  <Mail className="w-4 h-4 mr-2" />
                  Skontaktuj się z nami
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold">Pollyart</span>
          </div>
          <p className="text-gray-400 mb-4">
            Agencja Social Media i Marketingowa
          </p>
          <p className="text-sm text-gray-500">
            Oferta przygotowana dla Stowarzyszenia „Z energią o prawie" • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;