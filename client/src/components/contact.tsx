import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, MessageCircle, Navigation } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    content: "Jl. Pendidikan Raya No. 123\nKelurahan Sejahtera, Kecamatan Maju\nJakarta Selatan 12345"
  },
  {
    icon: Phone,
    title: "Telepon",
    content: "(021) 1234-5678\n(021) 8765-4321"
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@almanshuriyah.sch.id\nakademik@almanshuriyah.sch.id"
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Jumat: 07:00 - 17:00\nSabtu: 07:00 - 12:00"
  }
];

const socialMedia = [
  { icon: Facebook, color: "primary", href: "#" },
  { icon: Instagram, color: "accent", href: "#" },
  { icon: Youtube, color: "primary", href: "#" },
  { icon: MessageCircle, color: "accent", href: "#" }
];

const transportationInfo = [
  {
    icon: "fas fa-bus",
    title: "Bus TransJakarta",
    description: "Halte Pendidikan Raya (300m)"
  },
  {
    icon: "fas fa-train",
    title: "KRL Commuter Line",
    description: "Stasiun Sejahtera (1.2km)"
  },
  {
    icon: "fas fa-car",
    title: "Parkir Kendaraan",
    description: "Area parkir luas tersedia"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Mohon lengkapi semua field yang diperlukan.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Format email tidak valid. Mohon masukkan email yang benar.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Pesan Berhasil Dikirim!",
          description: "Tim kami akan segera menghubungi Anda. Terima kasih atas minat Anda!",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        toast({
          title: "Gagal Mengirim Pesan",
          description: result.message || "Terjadi kesalahan. Silakan coba lagi.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Koneksi Bermasalah",
        description: "Tidak dapat mengirim pesan. Periksa koneksi internet Anda dan coba lagi.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontak" className="py-24 lg:py-32 bg-card/30 relative overflow-hidden">
      {/* Cyberpunk background effects */}
      <div className="cyberpunk-neon-grid opacity-30"></div>
      <div className="neon-moving-circles"></div>
      
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Kontak</span> & Lokasi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hubungi kami untuk informasi lebih lanjut tentang pendaftaran, program akademik, atau kunjungan ke sekolah.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-border" data-testid="contact-info">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Informasi Kontak</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start"
                          data-testid={`contact-${index}`}
                        >
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 ${index % 2 === 0 ? 'bg-primary/20' : 'bg-accent/20'}`}>
                            <IconComponent className={`w-6 h-6 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{info.title}</h4>
                            <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Social Media */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-4">Media Sosial</h4>
                    <div className="flex space-x-4">
                      {socialMedia.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                          <a
                            key={index}
                            href={social.href}
                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                              social.color === 'primary' 
                                ? 'bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground' 
                                : 'bg-accent/20 text-accent hover:bg-accent hover:text-accent-foreground'
                            }`}
                            data-testid={`social-${index}`}
                          >
                            <IconComponent className="w-5 h-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-border" data-testid="contact-form">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Kirim Pesan</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-foreground">Nama Lengkap</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Masukkan nama lengkap"
                          className="mt-2"
                          data-testid="input-name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="nama@email.com"
                          className="mt-2"
                          data-testid="input-email"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-foreground">Subjek</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subjek pesan"
                        className="mt-2"
                        data-testid="input-subject"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-foreground">Pesan</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tulis pesan Anda..."
                        className="mt-2 resize-none"
                        data-testid="textarea-message"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none"
                      data-testid="button-submit-contact"
                    >
                      {isSubmitting ? "Mengirim Pesan..." : "Kirim Pesan"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Map and Location */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-border" data-testid="location-map">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Lokasi Sekolah</h3>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                    <div className="text-center">
                      <MapPin className="text-muted-foreground w-16 h-16 mb-4 mx-auto" />
                      <p className="text-muted-foreground">Peta Interaktif Lokasi Sekolah</p>
                      <p className="text-sm text-muted-foreground mt-2">Klik untuk membuka di Google Maps</p>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all duration-300"
                    data-testid="button-directions"
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    Dapatkan Petunjuk Arah
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Transportation Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-border" data-testid="transportation-info">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Akses Transportasi</h3>
                  <div className="space-y-4">
                    {transportationInfo.map((transport, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                        data-testid={`transport-${index}`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 ${index % 2 === 0 ? 'bg-primary/20' : 'bg-accent/20'}`}>
                          <i className={`${transport.icon} text-sm ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`}></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{transport.title}</h4>
                          <p className="text-muted-foreground text-sm">{transport.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
