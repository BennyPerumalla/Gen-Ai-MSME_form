from mongoengine import Document, StringField, FloatField, DateTimeField

class MSME(Document):
    name = StringField(required=True)
    revenue = FloatField(required=True)
    credit_score = FloatField()
    created_at = DateTimeField()