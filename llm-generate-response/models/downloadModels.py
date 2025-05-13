from transformers import AutoTokenizer, AutoModelForCausalLM

model_name = 'gpt2-xl'
save_path = r'C:\Users\InesDrebenstedt\Documents\intern\interne Projekte\Profilemaker\profilemaker\models'

AutoTokenizer.from_pretrained(model_name, cache_dir=save_path)
AutoModelForCausalLM.from_pretrained(model_name, cache_dir=save_path)