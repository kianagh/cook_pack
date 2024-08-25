from django.db import models

class Food(models.Model):
    name = models.CharField(max_length=150)
    time = models.CharField(max_length=150, default="زمان پخت: ۶۰ دقیقه")
    description = models.CharField(max_length=650, null=True, blank=True)
    src = models.CharField(max_length=150)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        self.description = self.name + " غذایی ساده، سالم و سرشار از پروتئین، فیبر و کربوهیدرات‌های پیچیده است که میتواند یکی از مناسب‌ترین گزینه‌ها برای مهمانی یا جمع‌های خانوادگی باشد. ما در کوک‌پک مواد تازه و سالم را با ضمانت برای شما فراهم میکنیم تا بهترین تجربه را از آشپزی و سرو غذای خوشمزه و خوش‌عطر خود داشته باشید. تمامی مواد اولیه در پک‌های بهداشتی و مخصوص کوک‌پک ارائه میشود تا شما بدون نگرانی، تمام توجه خود را معطوف به آشپزی خود کنید."
        super().save(*args, **kwargs)