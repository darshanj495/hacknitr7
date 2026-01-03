import pathway as pw

# Schema matching your UI screens (Food, Transport, etc.)
class TransactionSchema(pw.Schema):
    transaction_id: str
    user_id: str
    amount: float
    location: str
    merchant: str
    category: str
    date: str

def run_finwise():
    # Read transactions as a live stream
    transactions = pw.io.csv.read("data/", schema=TransactionSchema, mode="streaming")

    # Real-time logic: Identify expenses and flag alerts
    processed = transactions.select(
        *pw.this,
        is_expense = pw.this.amount < 0,
        high_spend_alert = (pw.this.category == "Food") & (pw.apply(abs, pw.this.amount) > 50)
    )

    print("🛡️ FinWise Engine: Streaming and Categorizing...")
    pw.debug.compute_and_print(processed)

if __name__ == "__main__":
    run_finwise()