import os
import pandas as pd
import sklearn.model_selection as model_selection

# main function
if __name__ == "__main__":
    # read data from path
    input_path = "F:/FYP/siim-isic-melanoma-classification"
    df = pd.read_csv(os.path.join(input_path, "train.csv"))
    df["kfold"] = -1
    # shuffling the csv file
    df = df.sample(frac = 1).reset_index(drop = True)
    y = df.target.values
    kf = model_selection.StratifiedKFold(n_splits = 10) # 10 fold
    for fold_, (_ , _) in enumerate(kf.split(X = df, y = y)):
        df.loc[:, "kfold"] = fold_
    df.to_csv(os.path.join(input_path, "train_folds.cvs"), index= False)