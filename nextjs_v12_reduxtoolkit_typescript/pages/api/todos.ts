import type { NextApiRequest, NextApiResponse } from 'next'

let todos: string[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200).json({ todos });
  } else if (req.method === 'POST') {
    const { todo } = req.body;
    if (todo) {
      todos.push(todo);
      res.status(201).json({ message: 'Todo list is added.'});
    } else {
      res.status(400).json({ message: 'Add your Todo list.'})
    }
  }
}
