from selenium import webdriver
driver = webdriver.Firefox(executable_path=r'your\path\geckodriver.exe')
driver.get('http://inventwithpython.com')