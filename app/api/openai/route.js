import axios from 'axios';

export async function POST(req) {
  try {
    const body = await req.json();
    const input = body.input;
    const token = process.env.GPT_KEY;
    const model = process.env.GPT_MODEL;
    const org = process.env.GPT_ORG;
    const roleContent = process.env.GPT_ROLE_CONTENT;
    const temp = process.env.GPT_TEMPERATURE;

    const response = await axios.post(
      `${process.env.GPT_ROOT}/v1/chat/completions`,
      {
        model,
        messages: [
          { role: 'system', content: roleContent },
          { role: 'user', content: input },
        ],
        temperature: parseInt(temp),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'OpenAI-Organization': org,
          'Content-Type': 'application/json',
        },
      }
    );

    return new Response(
      JSON.stringify({
        statusCode: response.status,
        data: response.data.choices[0].message.content,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        statusCode: err.response?.status || 500,
        data: err.message,
      }),
      {
        status: err.response?.status || 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}