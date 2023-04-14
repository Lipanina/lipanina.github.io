
const sp = supabase.createClient('https://ukjibpvslwvdztjcpecm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVramlicHZzbHd2ZHp0amNwZWNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxNDE1NjYsImV4cCI6MTk5MzcxNzU2Nn0.IuoKxLQYdwgBV9qJYUrabkDlGTP-dismpNA-mdH7Ajw')

const feedback = document.querySelector('.feedback')

feedback.addEventListener('submit', (event) =>
{
  event.preventDefault()
  const name = feedback.querySelector('input[name="username"]')
  const phone = feedback.querySelector('input[name="phone"]')
  const comment = feedback.querySelector('input[name="comment"]')
  sendFeedback({
    name: name.value,
    phone: phone.value,
    comment: comment.value,
  })
  name.value = ''
  phone.value = ''
  comment.value = ''
})

async function sendFeedback ({
  name,
  phone,
  comment
})
{

  const { data, error } = await sp
    .from('orders')
    .insert([
      {
        name,
        phone,
        comment
      },
    ])

  console.debug({ data, error })
}